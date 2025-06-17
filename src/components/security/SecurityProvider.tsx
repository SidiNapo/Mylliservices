
import React, { createContext, useContext, useEffect, useState } from 'react';

interface SecurityContextType {
  isSecureConnection: boolean;
  requestCount: number;
  isRateLimited: boolean;
  securityLevel: 'low' | 'medium' | 'high';
}

const SecurityContext = createContext<SecurityContextType>({
  isSecureConnection: false,
  requestCount: 0,
  isRateLimited: false,
  securityLevel: 'medium'
});

interface SecurityProviderProps {
  children: React.ReactNode;
}

const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isSecureConnection, setIsSecureConnection] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [securityLevel, setSecurityLevel] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    // Check if connection is secure
    setIsSecureConnection(window.location.protocol === 'https:');
    
    // Set security level based on environment
    const isDev = import.meta.env.DEV;
    setSecurityLevel(isDev ? 'medium' : 'high');
    
    // Initialize security headers check
    checkSecurityHeaders();
    
    // Set up rate limiting tracking
    const stored = localStorage.getItem('security_requests');
    if (stored) {
      const { count, timestamp } = JSON.parse(stored);
      const now = Date.now();
      
      // Reset counter every hour
      if (now - timestamp > 3600000) {
        localStorage.setItem('security_requests', JSON.stringify({ count: 0, timestamp: now }));
        setRequestCount(0);
      } else {
        setRequestCount(count);
        setIsRateLimited(count > 50); // Limit to 50 requests per hour
      }
    }
  }, []);

  const checkSecurityHeaders = () => {
    // Log security headers status for monitoring
    if (typeof window !== 'undefined') {
      console.log('Security Check:', {
        https: window.location.protocol === 'https:',
        csp: document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null,
        xframe: true, // Set via .htaccess
        timestamp: new Date().toISOString()
      });
    }
  };

  const incrementRequestCount = () => {
    const newCount = requestCount + 1;
    setRequestCount(newCount);
    
    localStorage.setItem('security_requests', JSON.stringify({
      count: newCount,
      timestamp: Date.now()
    }));
    
    if (newCount > 50) {
      setIsRateLimited(true);
    }
  };

  // Intercept form submissions for rate limiting
  useEffect(() => {
    const handleFormSubmit = () => {
      incrementRequestCount();
    };

    document.addEventListener('submit', handleFormSubmit);
    return () => document.removeEventListener('submit', handleFormSubmit);
  }, [requestCount]);

  return (
    <SecurityContext.Provider value={{
      isSecureConnection,
      requestCount,
      isRateLimited,
      securityLevel
    }}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

export default SecurityProvider;
