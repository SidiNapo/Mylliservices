
import React, { useEffect, useRef, useState } from 'react';
import { securityValidator } from '@/utils/securityValidator';
import { securitySession } from '@/utils/securitySession';
import { securityMonitor } from '@/utils/securityMonitor';
import { useToast } from '@/hooks/use-toast';
import { SECURITY_MESSAGES } from '@/utils/securityConfig';

interface SecureFormWrapperProps {
  children: React.ReactNode;
  formType: string;
  rateLimitAction?: 'FORM_SUBMISSION' | 'API_CALLS';
  onSecurityViolation?: (violation: string) => void;
  className?: string;
}

const SecureFormWrapper: React.FC<SecureFormWrapperProps> = ({
  children,
  formType,
  rateLimitAction = 'FORM_SUBMISSION',
  onSecurityViolation,
  className = ''
}) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [isSecurityBlocked, setIsSecurityBlocked] = useState(false);

  useEffect(() => {
    // Initialize session and get CSRF token
    const session = securitySession.getSession();
    setCsrfToken(session.csrfToken);

    // Add security event listeners
    const handleSubmit = (event: Event) => {
      const formElement = event.target as HTMLFormElement;
      if (!formElement || formElement.tagName !== 'FORM') return;

      // Check rate limiting
      const sessionId = securitySession.getSession().id;
      if (!securityValidator.checkRateLimit(sessionId, rateLimitAction)) {
        event.preventDefault();
        securityMonitor.logRateLimitHit(rateLimitAction, sessionId);
        handleSecurityViolation('RATE_LIMIT_EXCEEDED');
        return;
      }

      // Validate CSRF token
      const formData = new FormData(formElement);
      const submittedToken = formData.get('csrf_token') as string;
      if (!securitySession.validateCSRFToken(submittedToken)) {
        event.preventDefault();
        securityMonitor.logSuspiciousActivity('INVALID_CSRF_TOKEN', { formType });
        handleSecurityViolation('CSRF_TOKEN_INVALID');
        return;
      }

      // Validate all form inputs
      const formObject: Record<string, any> = {};
      formData.forEach((value, key) => {
        if (key !== 'csrf_token') {
          formObject[key] = value;
        }
      });

      const validation = securityValidator.validateFormData(formObject);
      if (!validation.isValid) {
        event.preventDefault();
        securityMonitor.logValidationFailure(formType, JSON.stringify(formObject), validation.errors.join(', '));
        handleSecurityViolation('INVALID_INPUT');
        return;
      }

      // Log successful validation
      securityMonitor.logFormSubmission(formType, true);
      securitySession.updateLastActivity();
    };

    const formElement = formRef.current?.querySelector('form');
    if (formElement) {
      formElement.addEventListener('submit', handleSubmit);
      
      // Add CSRF token as hidden input
      const existingToken = formElement.querySelector('input[name="csrf_token"]');
      if (!existingToken) {
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'csrf_token';
        tokenInput.value = csrfToken;
        formElement.appendChild(tokenInput);
      }

      return () => {
        formElement.removeEventListener('submit', handleSubmit);
      };
    }
  }, [csrfToken, formType, rateLimitAction]);

  const handleSecurityViolation = (violation: string) => {
    setIsSecurityBlocked(true);
    
    const message = SECURITY_MESSAGES[violation as keyof typeof SECURITY_MESSAGES] || 
                   'Violation de sécurité détectée.';
    
    toast({
      title: "Sécurité",
      description: message,
      variant: "destructive",
    });

    if (onSecurityViolation) {
      onSecurityViolation(violation);
    }

    // Unblock after a delay
    setTimeout(() => {
      setIsSecurityBlocked(false);
      // Rotate CSRF token for security
      const newToken = securitySession.rotateCSRFToken();
      setCsrfToken(newToken);
    }, 5000);
  };

  if (isSecurityBlocked) {
    return (
      <div className={`p-6 border border-red-200 rounded-lg bg-red-50 ${className}`}>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-600 text-lg font-semibold mb-2">
              Sécurité activée
            </div>
            <p className="text-red-600 text-sm">
              Veuillez patienter quelques instants avant de réessayer.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef} className={className}>
      {children}
    </div>
  );
};

export default SecureFormWrapper;
