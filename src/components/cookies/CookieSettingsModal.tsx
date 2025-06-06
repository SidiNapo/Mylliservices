
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { 
  Shield, 
  BarChart3, 
  Target, 
  Settings, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CookieCategory, 
  CookiePreferences, 
  cookieCategories,
  CookieInfo 
} from '@/utils/cookieConsent';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
  initialPreferences: CookiePreferences;
}

const categoryIcons: Record<CookieCategory, React.ReactNode> = {
  essential: <Shield size={24} className="text-green-600" />,
  analytics: <BarChart3 size={24} className="text-blue-600" />,
  marketing: <Target size={24} className="text-purple-600" />,
  preferences: <Settings size={24} className="text-orange-600" />
};

const categoryDescriptions: Record<CookieCategory, string> = {
  essential: "Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez.",
  analytics: "Ces cookies nous permettent de mesurer et d'améliorer les performances de notre site web en collectant des informations anonymes sur votre utilisation.",
  marketing: "Ces cookies sont utilisés pour vous proposer des publicités pertinentes et mesurer l'efficacité de nos campagnes marketing.",
  preferences: "Ces cookies mémorisent vos préférences (langue, région, etc.) pour améliorer votre expérience de navigation."
};

const categoryTitles: Record<CookieCategory, string> = {
  essential: "Cookies essentiels",
  analytics: "Cookies d'analyse",
  marketing: "Cookies marketing",
  preferences: "Cookies de préférences"
};

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialPreferences
}) => {
  const { isRTL } = useLanguage();
  const [preferences, setPreferences] = useState<CookiePreferences>(initialPreferences);
  const [expandedCategories, setExpandedCategories] = useState<Set<CookieCategory>>(new Set());

  const handlePreferenceChange = (category: CookieCategory, enabled: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const handleSave = () => {
    const updatedPreferences: CookiePreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
      consentGiven: true
    };
    onSave(updatedPreferences);
    onClose();
  };

  const toggleCategoryExpansion = (category: CookieCategory) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const CookieDetailCard: React.FC<{ cookie: CookieInfo }> = ({ cookie }) => (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-medium text-mylli-dark">Nom:</span>
          <span className="ml-2 text-mylli-gray">{cookie.name}</span>
        </div>
        <div>
          <span className="font-medium text-mylli-dark">Fournisseur:</span>
          <span className="ml-2 text-mylli-gray">{cookie.provider}</span>
        </div>
        <div className="md:col-span-2">
          <span className="font-medium text-mylli-dark">Objectif:</span>
          <span className="ml-2 text-mylli-gray">{cookie.purpose}</span>
        </div>
        <div>
          <span className="font-medium text-mylli-dark">Expiration:</span>
          <span className="ml-2 text-mylli-gray">{cookie.expiry}</span>
        </div>
        <div>
          <span className="font-medium text-mylli-dark">Type:</span>
          <span className="ml-2 text-mylli-gray">{cookie.type}</span>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-2xl font-bold text-mylli-dark ${isRTL ? 'text-right' : 'text-left'}`}>
            Paramètres des cookies
          </DialogTitle>
          <p className="text-mylli-gray mt-2">
            Gérez vos préférences de cookies selon vos besoins. Vous pouvez modifier ces paramètres à tout moment.
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {(Object.keys(cookieCategories) as CookieCategory[]).map((category) => (
            <Card key={category} className="border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className={`flex items-start justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 flex-1`}>
                    <div className="flex-shrink-0">
                      {categoryIcons[category]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-mylli-dark mb-2">
                        {categoryTitles[category]}
                      </h3>
                      <p className="text-mylli-gray text-sm leading-relaxed mb-4">
                        {categoryDescriptions[category]}
                      </p>
                      
                      {/* Cookie count */}
                      <div className="flex items-center text-sm text-mylli-gray mb-4">
                        <Info size={16} className={isRTL ? 'ml-2' : 'mr-2'} />
                        <span>{cookieCategories[category].length} cookie(s) dans cette catégorie</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4 flex-shrink-0`}>
                    <Switch
                      checked={preferences[category]}
                      onCheckedChange={(checked) => handlePreferenceChange(category, checked)}
                      disabled={category === 'essential'}
                    />
                    {category === 'essential' && (
                      <span className="text-xs text-green-600 font-medium">Requis</span>
                    )}
                  </div>
                </div>

                {/* Collapsible cookie details */}
                <Collapsible 
                  open={expandedCategories.has(category)}
                  onOpenChange={() => toggleCategoryExpansion(category)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`mt-4 text-mylli-primary hover:bg-mylli-primary/5 ${isRTL ? 'space-x-reverse' : ''} space-x-2`}
                    >
                      {expandedCategories.has(category) ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                      <span>
                        {expandedCategories.has(category) ? 'Masquer' : 'Voir'} les détails des cookies
                      </span>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="space-y-3">
                      {cookieCategories[category].map((cookie, index) => (
                        <CookieDetailCard key={index} cookie={cookie} />
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </Card>
          ))}

          {/* Compliance notice */}
          <Card className="bg-mylli-primary/5 border-mylli-primary/20">
            <div className="p-6">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <Shield size={24} className="text-mylli-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-mylli-dark mb-2">
                    Conformité CNDP - Vos droits
                  </h4>
                  <ul className="text-sm text-mylli-gray space-y-2">
                    <li>• Vous pouvez retirer votre consentement à tout moment</li>
                    <li>• Vos données sont traitées conformément à la réglementation marocaine</li>
                    <li>• Vous disposez d'un droit d'accès, de rectification et de suppression</li>
                    <li>• Pour exercer vos droits, contactez notre DPO via la page contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <DialogFooter className={`flex ${isRTL ? 'flex-row-reverse' : ''} gap-3`}>
          <Button onClick={onClose} variant="outline">
            Annuler
          </Button>
          <Button onClick={handleSave} className="btn-primary">
            Sauvegarder les préférences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal;
