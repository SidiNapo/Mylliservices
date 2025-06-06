
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/50 to-transparent animate-fade-in">
      <Card className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-mylli-primary/20 shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className={`flex items-start justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
              <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mylli-dark">
                  Gestion des cookies
                </h3>
                <p className="text-sm text-mylli-gray">
                  Conformément aux règles de la CNDP
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-mylli-primary/10"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-mylli-gray mb-4 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site web, 
              analyser le trafic et personnaliser le contenu. Vous pouvez choisir d'accepter 
              tous les cookies, de les refuser ou de personnaliser vos préférences.
            </p>
            
            <div className="bg-mylli-primary/5 border border-mylli-primary/20 rounded-lg p-4 mb-4">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <Shield size={20} className="text-mylli-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-mylli-dark mb-1">
                    Vos droits selon la CNDP
                  </h4>
                  <p className="text-sm text-mylli-gray">
                    Vous avez le droit de refuser le consentement aussi facilement que de l'accorder. 
                    Vous pouvez modifier vos préférences à tout moment.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-mylli-gray">
              Pour plus d'informations, consultez notre{' '}
              <Link 
                to="/politique-cookies" 
                className="text-mylli-primary hover:underline font-medium"
              >
                politique de cookies
              </Link>
              {' '}et notre{' '}
              <Link 
                to="/politique-confidentialite" 
                className="text-mylli-primary hover:underline font-medium"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>

          {/* Actions */}
          <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              onClick={onAcceptAll}
              className="btn-primary flex-1 sm:flex-none"
            >
              Accepter tous les cookies
            </Button>
            
            <Button
              onClick={onRejectAll}
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300 hover:bg-gray-50"
            >
              Refuser tous les cookies
            </Button>
            
            <Button
              onClick={onCustomize}
              variant="outline"
              className={`flex-1 sm:flex-none border-mylli-primary text-mylli-primary hover:bg-mylli-primary/5 ${isRTL ? 'space-x-reverse' : ''} space-x-2`}
            >
              <Settings size={16} />
              <span>Personnaliser</span>
            </Button>
          </div>

          {/* Footer note */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-mylli-gray text-center">
              En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies essentiels. 
              Les autres cookies nécessitent votre consentement explicite.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsentBanner;
