
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/20 to-transparent animate-fade-in">
      <Card className="max-w-4xl mx-auto bg-white/98 backdrop-blur-sm border border-mylli-primary/15 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6">
          {/* Compact Header */}
          <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
              <div className="w-10 h-10 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-white" />
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
              className="hover:bg-mylli-primary/10 text-mylli-gray hover:text-mylli-dark"
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
            
            <div className="bg-mylli-primary/5 border border-mylli-primary/15 rounded-lg p-3 mb-4">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                <Shield size={16} className="text-mylli-primary mt-0.5 flex-shrink-0" />
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
                className="text-mylli-primary hover:underline font-medium"
              >
                politique de cookies
              </Link>
              {' '}pour plus d'informations.
            </p>
          </div>

          {/* Compact Actions with Fixed Hover States */}
          <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              onClick={onAcceptAll}
              className="bg-mylli-primary hover:bg-mylli-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm flex-1 sm:flex-none"
            >
              Accepter tous les cookies
            </Button>
            
            <Button
              onClick={onRejectAll}
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
            >
              Refuser tous les cookies
            </Button>
            
            <Button
              onClick={onCustomize}
              variant="outline"
              className={`flex-1 sm:flex-none border-mylli-primary text-mylli-primary hover:bg-mylli-primary/5 hover:text-mylli-primary hover:border-mylli-primary/80 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${isRTL ? 'space-x-reverse' : ''} space-x-2`}
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
