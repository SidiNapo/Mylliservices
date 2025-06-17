interface SecurityEvent {
  type: 'form_submission' | 'invalid_input' | 'rate_limit' | 'xss_attempt';
  timestamp: number;
  details: Record<string, any>;
  userAgent: string;
  ip?: string;
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private readonly maxEvents = 100;

  logEvent(type: SecurityEvent['type'], details: Record<string, any>) {
    const event: SecurityEvent = {
      type,
      timestamp: Date.now(),
      details,
      userAgent: navigator.userAgent
    };

    this.events.push(event);
    
    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Store in localStorage for persistence
    localStorage.setItem('security_events', JSON.stringify(this.events));

    // Log critical events to console
    if (type === 'xss_attempt' || type === 'rate_limit') {
      console.warn('Security Event:', event);
    }
  }

  getEvents(type?: SecurityEvent['type']): SecurityEvent[] {
    if (type) {
      return this.events.filter(event => event.type === type);
    }
    return [...this.events];
  }

  getSecuritySummary() {
    const now = Date.now();
    const lastHour = now - 3600000;
    const recentEvents = this.events.filter(event => event.timestamp > lastHour);

    return {
      totalEvents: this.events.length,
      recentEvents: recentEvents.length,
      xssAttempts: recentEvents.filter(e => e.type === 'xss_attempt').length,
      rateLimitHits: recentEvents.filter(e => e.type === 'rate_limit').length,
      formSubmissions: recentEvents.filter(e => e.type === 'form_submission').length
    };
  }

  clearEvents() {
    this.events = [];
    localStorage.removeItem('security_events');
  }
}

export const securityMonitor = new SecurityMonitor();

// Initialize from localStorage
const storedEvents = localStorage.getItem('security_events');
if (storedEvents) {
  try {
    const events = JSON.parse(storedEvents);
    events.forEach((event: SecurityEvent) => {
      securityMonitor.logEvent(event.type, event.details);
    });
  } catch (error) {
    console.warn('Failed to load security events from localStorage');
  }
}

// Enhanced XSS detection
export const detectXSSAttempt = (input: string): boolean => {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /eval\s*\(/gi,
    /document\.write/gi,
    /innerHTML/gi
  ];

  return xssPatterns.some(pattern => pattern.test(input));
};

// SQL injection detection (for future backend integration)
export const detectSQLInjection = (input: string): boolean => {
  const sqlPatterns = [
    /('|(\\'))|(;)|(\|\|)|(\*)|(%)|(<)|(>)|(\{)|(\})|(\[)|(\])/gi,
    /(union|select|insert|delete|update|drop|create|alter|exec|execute)/gi,
    /(\s|^)(or|and)(\s|$)/gi
  ];

  return sqlPatterns.some(pattern => pattern.test(input.toLowerCase()));
};
