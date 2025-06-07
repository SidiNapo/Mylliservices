
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieConsentBannerProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomize: () => void;
  onClose: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onAcceptAll,
  onRejectAll,
  onCustomize,
  onClose
}) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <Card className="max-w-lg mx-auto bg-white/98 backdrop-blur-lg border border-mylli-primary/20 shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-6">
          {/* Compact Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-mylli-dark">
                  Gestion des cookies
                </h3>
                <p className="text-xs text-mylli-gray">
                  Conformément aux règles de la CNDP
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-gray-100 text-gray-500 hover:text-gray-700 h-8 w-8 p-0 rounded-lg"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Compact Content */}
          <div className="mb-6">
            <p className="text-mylli-gray text-sm mb-4 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez choisir d'accepter, 
              refuser ou personnaliser vos préférences.
            </p>

            <p className="text-xs text-mylli-gray">
              Consultez notre{' '}
              <Link 
                to="/politique-cookies" 
                className="text-mylli-primary hover:text-mylli-primary/80 hover:underline font-medium transition-colors"
              >
                politique de cookies
              </Link>
              {' '}pour plus d'informations.
            </p>
          </div>

          {/* Compact Actions */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Button
                onClick={onAcceptAll}
                className="bg-mylli-primary hover:bg-mylli-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm flex-1"
              >
                Accepter tous
              </Button>
              
              <Button
                onClick={onRejectAll}
                variant="outline"
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm bg-white"
              >
                Refuser tous
              </Button>
            </div>
            
            <Button
              onClick={onCustomize}
              variant="outline"
              className="w-full border-2 border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white hover:border-mylli-primary py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm bg-white flex items-center justify-center space-x-2"
            >
              <Settings size={14} />
              <span>Personnaliser</span>
            </Button>
          </div>

          {/* Compact Footer note */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-mylli-gray text-center">
              En continuant, vous acceptez notre utilisation des cookies essentiels.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsentBanner;
