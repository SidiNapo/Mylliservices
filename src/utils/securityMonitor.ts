
import { securityValidator } from './securityValidator';
import { securitySession } from './securitySession';

interface SecurityEvent {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  details: Record<string, any>;
  userAgent?: string;
  sessionId?: string;
}

export class SecurityMonitor {
  private static instance: SecurityMonitor;
  private events: SecurityEvent[] = [];
  private readonly MAX_EVENTS = 1000;
  private alertThresholds = {
    FAILED_SUBMISSIONS: 5,
    THREAT_DETECTIONS: 3,
    RATE_LIMIT_HITS: 10,
  };

  static getInstance(): SecurityMonitor {
    if (!SecurityMonitor.instance) {
      SecurityMonitor.instance = new SecurityMonitor();
    }
    return SecurityMonitor.instance;
  }

  // Log security event
  logEvent(type: string, severity: SecurityEvent['severity'], details: Record<string, any>): void {
    const event: SecurityEvent = {
      id: this.generateEventId(),
      type,
      severity,
      timestamp: Date.now(),
      details,
      userAgent: navigator.userAgent,
      sessionId: securitySession.getSession().id,
    };

    this.events.push(event);
    
    // Maintain event limit
    if (this.events.length > this.MAX_EVENTS) {
      this.events = this.events.slice(-this.MAX_EVENTS);
    }

    // Check for alert conditions
    this.checkAlertConditions(event);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', event);
    }
  }

  // Log form submission attempt
  logFormSubmission(formType: string, success: boolean, errors?: string[]): void {
    this.logEvent('FORM_SUBMISSION', success ? 'low' : 'medium', {
      formType,
      success,
      errors: errors || [],
      timestamp: Date.now(),
    });
  }

  // Log threat detection
  logThreatDetection(threats: string[], input: string): void {
    this.logEvent('THREAT_DETECTION', 'high', {
      threats,
      inputLength: input.length,
      timestamp: Date.now(),
    });
  }

  // Log rate limit hit
  logRateLimitHit(action: string, identifier: string): void {
    this.logEvent('RATE_LIMIT_HIT', 'medium', {
      action,
      identifier: this.hashIdentifier(identifier),
      timestamp: Date.now(),
    });
  }

  // Log validation failure
  logValidationFailure(field: string, value: string, reason: string): void {
    this.logEvent('VALIDATION_FAILURE', 'medium', {
      field,
      valueLength: value.length,
      reason,
      timestamp: Date.now(),
    });
  }

  // Log suspicious activity
  logSuspiciousActivity(activity: string, details: Record<string, any>): void {
    this.logEvent('SUSPICIOUS_ACTIVITY', 'high', {
      activity,
      ...details,
      timestamp: Date.now(),
    });
  }

  // Get security statistics
  getSecurityStats(): Record<string, any> {
    const now = Date.now();
    const last24Hours = now - (24 * 60 * 60 * 1000);
    const recentEvents = this.events.filter(e => e.timestamp > last24Hours);

    return {
      totalEvents: this.events.length,
      recentEvents: recentEvents.length,
      eventsByType: this.groupEventsByType(recentEvents),
      eventsBySeverity: this.groupEventsBySeverity(recentEvents),
      threatDetections: recentEvents.filter(e => e.type === 'THREAT_DETECTION').length,
      rateLimitHits: recentEvents.filter(e => e.type === 'RATE_LIMIT_HIT').length,
      failedSubmissions: recentEvents.filter(e => e.type === 'FORM_SUBMISSION' && !e.details.success).length,
    };
  }

  // Check for alert conditions
  private checkAlertConditions(event: SecurityEvent): void {
    const now = Date.now();
    const lastHour = now - (60 * 60 * 1000);
    const recentEvents = this.events.filter(e => e.timestamp > lastHour);

    // Check for multiple threat detections
    const threatDetections = recentEvents.filter(e => e.type === 'THREAT_DETECTION').length;
    if (threatDetections >= this.alertThresholds.THREAT_DETECTIONS) {
      this.triggerSecurityAlert('MULTIPLE_THREATS', { count: threatDetections });
    }

    // Check for excessive rate limit hits
    const rateLimitHits = recentEvents.filter(e => e.type === 'RATE_LIMIT_HIT').length;
    if (rateLimitHits >= this.alertThresholds.RATE_LIMIT_HITS) {
      this.triggerSecurityAlert('EXCESSIVE_RATE_LIMITS', { count: rateLimitHits });
    }

    // Check for failed submissions
    const failedSubmissions = recentEvents.filter(e => 
      e.type === 'FORM_SUBMISSION' && !e.details.success
    ).length;
    if (failedSubmissions >= this.alertThresholds.FAILED_SUBMISSIONS) {
      this.triggerSecurityAlert('EXCESSIVE_FAILURES', { count: failedSubmissions });
    }
  }

  // Trigger security alert
  private triggerSecurityAlert(alertType: string, data: Record<string, any>): void {
    this.logEvent('SECURITY_ALERT', 'critical', {
      alertType,
      ...data,
      timestamp: Date.now(),
    });

    // In a real application, you might send this to a security monitoring service
    console.error('SECURITY ALERT:', alertType, data);
  }

  // Generate unique event ID
  private generateEventId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Hash identifier for privacy
  private hashIdentifier(identifier: string): string {
    let hash = 0;
    for (let i = 0; i < identifier.length; i++) {
      const char = identifier.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }

  // Group events by type
  private groupEventsByType(events: SecurityEvent[]): Record<string, number> {
    return events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  // Group events by severity
  private groupEventsBySeverity(events: SecurityEvent[]): Record<string, number> {
    return events.reduce((acc, event) => {
      acc[event.severity] = (acc[event.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
}

export const securityMonitor = SecurityMonitor.getInstance();
