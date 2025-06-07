
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/cookie-banner.css';

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
    <div className="fixed bottom-6 left-6 right-6 z-50 pointer-events-none">
      <div className="max-w-sm mx-auto md:mx-0 md:ml-auto md:mr-0 pointer-events-auto cookie-banner-enter cookie-banner-mobile">
        <Card className="relative cookie-banner-glass rounded-2xl overflow-hidden shadow-2xl">
          {/* Animated gradient border */}
          <div className="absolute inset-0 cookie-banner-gradient-border rounded-2xl p-[1px] pointer-events-none">
            <div className="w-full h-full bg-white/95 rounded-2xl" />
          </div>
          
          <div className="relative p-4">
            {/* Ultra Compact Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <div className="w-7 h-7 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield size={14} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-mylli-dark leading-tight truncate">
                    Gestion des cookies
                  </h3>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="hover:bg-gray-100/80 text-gray-400 hover:text-gray-600 h-6 w-6 p-0 rounded-md ml-2 flex-shrink-0 transition-all duration-200"
              >
                <X size={12} />
              </Button>
            </div>

            {/* Ultra Compact Content */}
            <div className="mb-3">
              <p className="text-mylli-gray text-xs leading-relaxed mb-2">
                Nous utilisons des cookies pour améliorer votre expérience.{' '}
                <Link 
                  to="/politique-cookies" 
                  className="text-mylli-primary hover:text-mylli-primary/80 hover:underline font-medium transition-colors"
                >
                  En savoir plus
                </Link>
              </p>
            </div>

            {/* Ultra Compact Actions */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={onAcceptAll}
                  className="cookie-btn-primary text-white py-1.5 px-2 rounded-md font-medium text-xs h-auto"
                >
                  Accepter
                </Button>
                
                <Button
                  onClick={onRejectAll}
                  variant="outline"
                  className="cookie-btn-secondary text-gray-700 py-1.5 px-2 rounded-md font-medium text-xs h-auto"
                >
                  Refuser
                </Button>
              </div>
              
              <Button
                onClick={onCustomize}
                variant="ghost"
                className="cookie-btn-ghost w-full text-mylli-primary py-1.5 px-2 rounded-md font-medium text-xs flex items-center justify-center space-x-1 h-auto"
              >
                <Settings size={10} />
                <span>Personnaliser</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
