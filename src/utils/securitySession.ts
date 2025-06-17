
import { securityValidator } from './securityValidator';

interface SecuritySession {
  id: string;
  csrfToken: string;
  createdAt: number;
  lastActivity: number;
  ipHash?: string;
  userAgent?: string;
}

export class SecuritySessionManager {
  private static instance: SecuritySessionManager;
  private currentSession: SecuritySession | null = null;
  private readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private readonly STORAGE_KEY = 'mylli_security_session';

  static getInstance(): SecuritySessionManager {
    if (!SecuritySessionManager.instance) {
      SecuritySessionManager.instance = new SecuritySessionManager();
    }
    return SecuritySessionManager.instance;
  }

  // Initialize secure session
  initializeSession(): SecuritySession {
    const session: SecuritySession = {
      id: this.generateSessionId(),
      csrfToken: securityValidator.generateCSRFToken(),
      createdAt: Date.now(),
      lastActivity: Date.now(),
      ipHash: this.hashIP(this.getClientIP()),
      userAgent: this.hashUserAgent(navigator.userAgent)
    };

    this.currentSession = session;
    this.storeSession(session);
    this.scheduleSessionCleanup();
    
    return session;
  }

  // Get current session or create new one
  getSession(): SecuritySession {
    if (!this.currentSession) {
      const stored = this.retrieveStoredSession();
      if (stored && this.isSessionValid(stored)) {
        this.currentSession = stored;
        this.updateLastActivity();
      } else {
        this.currentSession = this.initializeSession();
      }
    }
    return this.currentSession;
  }

  // Update session activity
  updateLastActivity(): void {
    if (this.currentSession) {
      this.currentSession.lastActivity = Date.now();
      this.storeSession(this.currentSession);
    }
  }

  // Validate CSRF token
  validateCSRFToken(token: string): boolean {
    const session = this.getSession();
    return securityValidator.validateCSRFToken(token, session.csrfToken);
  }

  // Rotate CSRF token
  rotateCSRFToken(): string {
    const session = this.getSession();
    session.csrfToken = securityValidator.generateCSRFToken();
    this.storeSession(session);
    return session.csrfToken;
  }

  // Destroy session
  destroySession(): void {
    this.currentSession = null;
    localStorage.removeItem(this.STORAGE_KEY);
    sessionStorage.removeItem(this.STORAGE_KEY);
  }

  // Check if session is valid
  private isSessionValid(session: SecuritySession): boolean {
    const now = Date.now();
    const isExpired = (now - session.lastActivity) > this.SESSION_TIMEOUT;
    const isRecentlyCreated = (now - session.createdAt) < (24 * 60 * 60 * 1000); // 24 hours
    
    // Validate session integrity
    const currentIPHash = this.hashIP(this.getClientIP());
    const currentUAHash = this.hashUserAgent(navigator.userAgent);
    
    const ipMatch = !session.ipHash || session.ipHash === currentIPHash;
    const uaMatch = !session.userAgent || session.userAgent === currentUAHash;
    
    return !isExpired && isRecentlyCreated && ipMatch && uaMatch;
  }

  // Generate secure session ID
  private generateSessionId(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Hash IP address for privacy
  private hashIP(ip: string): string {
    return this.simpleHash(ip + 'mylli_salt_ip');
  }

  // Hash user agent for fingerprinting
  private hashUserAgent(ua: string): string {
    return this.simpleHash(ua + 'mylli_salt_ua');
  }

  // Simple hash function (for client-side use)
  private simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  // Get client IP (best effort in browser)
  private getClientIP(): string {
    // This is a placeholder - in a real scenario, you'd get this from server
    return 'client_ip_placeholder';
  }

  // Store session securely
  private storeSession(session: SecuritySession): void {
    try {
      const sessionData = JSON.stringify(session);
      // Use sessionStorage for security (cleared when tab closes)
      sessionStorage.setItem(this.STORAGE_KEY, sessionData);
    } catch (error) {
      console.error('Failed to store security session:', error);
    }
  }

  // Retrieve stored session
  private retrieveStoredSession(): SecuritySession | null {
    try {
      const stored = sessionStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to retrieve security session:', error);
      return null;
    }
  }

  // Schedule periodic session cleanup
  private scheduleSessionCleanup(): void {
    setInterval(() => {
      if (this.currentSession && !this.isSessionValid(this.currentSession)) {
        this.destroySession();
      }
    }, 5 * 60 * 1000); // Check every 5 minutes
  }
}

export const securitySession = SecuritySessionManager.getInstance();
