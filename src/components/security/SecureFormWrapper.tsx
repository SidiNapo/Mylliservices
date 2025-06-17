
import React, { useState, useEffect } from 'react';
import { useSecurity } from './SecurityProvider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle } from 'lucide-react';

interface SecureFormWrapperProps {
  children: React.ReactNode;
  onSecurityBlock?: () => void;
}

const SecureFormWrapper: React.FC<SecureFormWrapperProps> = ({ 
  children, 
  onSecurityBlock 
}) => {
  const { isSecureConnection, isRateLimited, securityLevel } = useSecurity();
  const [showSecurityWarning, setShowSecurityWarning] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Show warning for insecure connections in production
    if (!isSecureConnection && securityLevel === 'high') {
      setShowSecurityWarning(true);
    }
    
    // Block form if rate limited
    if (isRateLimited) {
      setIsBlocked(true);
      onSecurityBlock?.();
    }
  }, [isSecureConnection, isRateLimited, securityLevel, onSecurityBlock]);

  if (isBlocked) {
    return (
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          Trop de requêtes détectées. Veuillez attendre avant de soumettre à nouveau.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="relative">
      {showSecurityWarning && (
        <Alert className="mb-4 border-yellow-200 bg-yellow-50">
          <Shield className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            Connexion non sécurisée détectée. Vos données peuvent être vulnérables.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="relative">
        {securityLevel === 'high' && (
          <div className="absolute top-0 right-0 -mt-2 -mr-2 z-10">
            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              <Shield className="h-3 w-3" />
              <span>Sécurisé</span>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default SecureFormWrapper;
