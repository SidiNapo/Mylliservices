
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Settings, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
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
  const { t, isRTL } = useLanguage();

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-lg border border-mylli-primary/20 shadow-2xl rounded-xl overflow-hidden">
        <div className="p-4">
          {/* Compact Header */}
          <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
              <div className="w-8 h-8 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-mylli-dark">
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
              className="hover:bg-mylli-primary/10 text-mylli-gray hover:text-mylli-dark h-8 w-8 p-0"
            >
              <X size={14} />
            </Button>
          </div>

          {/* Compact Content */}
          <div className="mb-4">
            <p className="text-mylli-gray text-sm mb-3 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez choisir d'accepter, 
              refuser ou personnaliser vos préférences.
            </p>
            
            <div className="bg-gradient-to-r from-mylli-primary/5 to-mylli-accent/5 border border-mylli-primary/15 rounded-lg p-3 mb-3">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                <Shield size={14} className="text-mylli-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-mylli-dark text-sm mb-1">
                    Vos droits selon la CNDP
                  </h4>
                  <p className="text-xs text-mylli-gray">
                    Vous pouvez modifier vos préférences à tout moment.
                  </p>
                </div>
              </div>
            </div>

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
          <div className={`flex flex-col sm:flex-row gap-2 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              onClick={onAcceptAll}
              className="bg-mylli-primary hover:bg-mylli-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm flex-1 sm:flex-none"
            >
              Accepter tous les cookies
            </Button>
            
            <Button
              onClick={onRejectAll}
              variant="outline"
              className="flex-1 sm:flex-none border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm bg-white"
            >
              Refuser tous les cookies
            </Button>
            
            <Button
              onClick={onCustomize}
              variant="outline"
              className={`flex-1 sm:flex-none border-2 border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white hover:border-mylli-primary py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm bg-white ${isRTL ? 'space-x-reverse' : ''} space-x-1.5`}
            >
              <Settings size={14} />
              <span>Personnaliser</span>
            </Button>
          </div>

          {/* Compact Footer note */}
          <div className="mt-3 pt-2 border-t border-gray-100">
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
