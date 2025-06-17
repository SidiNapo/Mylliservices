
import DOMPurify from 'dompurify';
import { SECURITY_CONFIG, SECURITY_MESSAGES } from './securityConfig';

export class SecurityValidator {
  private static instance: SecurityValidator;
  private rateLimitMap = new Map<string, { count: number; resetTime: number }>();

  static getInstance(): SecurityValidator {
    if (!SecurityValidator.instance) {
      SecurityValidator.instance = new SecurityValidator();
    }
    return SecurityValidator.instance;
  }

  // Advanced input sanitization
  sanitizeInput(input: string, type: 'text' | 'email' | 'phone' | 'message' = 'text'): string {
    if (!input) return '';
    
    // Remove potential XSS vectors
    let sanitized = DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    
    // Remove SQL injection patterns
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
      /(--|\/\*|\*\/|;)/g,
      /(\b(OR|AND)\s+\d+\s*=\s*\d+)/gi
    ];
    
    sqlPatterns.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '');
    });
    
    // Type-specific sanitization
    switch (type) {
      case 'email':
        sanitized = sanitized.toLowerCase().trim();
        break;
      case 'phone':
        sanitized = sanitized.replace(/[^\d+\s()-]/g, '');
        break;
      case 'text':
        sanitized = sanitized.replace(/[<>\"']/g, '');
        break;
      case 'message':
        sanitized = sanitized.replace(/[<>]/g, '');
        break;
    }
    
    return sanitized.trim();
  }

  // Validate input against patterns
  validateInput(input: string, type: keyof typeof SECURITY_CONFIG.VALIDATION_PATTERNS): boolean {
    const pattern = SECURITY_CONFIG.VALIDATION_PATTERNS[type];
    return pattern ? pattern.test(input) : false;
  }

  // Rate limiting implementation
  checkRateLimit(identifier: string, action: keyof typeof SECURITY_CONFIG.RATE_LIMITS): boolean {
    const config = SECURITY_CONFIG.RATE_LIMITS[action];
    const key = `${identifier}-${action}`;
    const now = Date.now();
    
    const existing = this.rateLimitMap.get(key);
    
    if (!existing || now > existing.resetTime) {
      this.rateLimitMap.set(key, { count: 1, resetTime: now + config.window });
      return true;
    }
    
    if (existing.count >= config.requests) {
      return false;
    }
    
    existing.count++;
    this.rateLimitMap.set(key, existing);
    return true;
  }

  // Generate CSRF token
  generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Validate CSRF token
  validateCSRFToken(token: string, storedToken: string): boolean {
    return token === storedToken && token.length === 64;
  }

  // Detect potential security threats
  detectThreats(input: string): string[] {
    const threats: string[] = [];
    
    // XSS detection
    if (/<script|javascript:|on\w+\s*=/i.test(input)) {
      threats.push('XSS_ATTEMPT');
    }
    
    // SQL injection detection
    if (/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION)\b|--|\/\*)/i.test(input)) {
      threats.push('SQL_INJECTION_ATTEMPT');
    }
    
    // Path traversal detection
    if (/(\.\.[\/\\]|\.\.%2f|\.\.%5c)/i.test(input)) {
      threats.push('PATH_TRAVERSAL_ATTEMPT');
    }
    
    // Command injection detection
    if (/[;&|`$(){}[\]]/g.test(input)) {
      threats.push('COMMAND_INJECTION_ATTEMPT');
    }
    
    return threats;
  }

  // Comprehensive form validation
  validateFormData(formData: Record<string, any>): { isValid: boolean; errors: string[]; sanitized: Record<string, any> } {
    const errors: string[] = [];
    const sanitized: Record<string, any> = {};
    
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value !== 'string') {
        sanitized[key] = value;
        continue;
      }
      
      // Detect threats
      const threats = this.detectThreats(value);
      if (threats.length > 0) {
        errors.push(`Contenu suspect détecté dans le champ ${key}`);
        continue;
      }
      
      // Sanitize input
      let sanitizedValue: string;
      switch (key) {
        case 'email':
          sanitizedValue = this.sanitizeInput(value, 'email');
          if (!this.validateInput(sanitizedValue, 'EMAIL')) {
            errors.push('Format d\'email invalide');
          }
          break;
        case 'phone':
          sanitizedValue = this.sanitizeInput(value, 'phone');
          if (sanitizedValue && !this.validateInput(sanitizedValue, 'PHONE')) {
            errors.push('Format de téléphone invalide');
          }
          break;
        case 'name':
          sanitizedValue = this.sanitizeInput(value, 'text');
          if (!this.validateInput(sanitizedValue, 'NAME')) {
            errors.push('Format de nom invalide');
          }
          break;
        case 'message':
          sanitizedValue = this.sanitizeInput(value, 'message');
          if (sanitizedValue && !this.validateInput(sanitizedValue, 'MESSAGE')) {
            errors.push('Format de message invalide');
          }
          break;
        default:
          sanitizedValue = this.sanitizeInput(value, 'text');
      }
      
      sanitized[key] = sanitizedValue;
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitized
    };
  }
}

export const securityValidator = SecurityValidator.getInstance();
