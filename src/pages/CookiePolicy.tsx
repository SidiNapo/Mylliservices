
import React from 'react';
import { Shield, Info, Mail, Phone, MapPin } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SEOHead from '@/components/seo/SEOHead';
import { Card } from '@/components/ui/card';
import { cookieCategories, CookieCategory } from '@/utils/cookieConsent';
import { useLanguage } from '@/context/LanguageContext';

const CookiePolicy: React.FC = () => {
  const { isRTL } = useLanguage();

  const categoryTitles: Record<CookieCategory, string> = {
    essential: "Cookies essentiels",
    analytics: "Cookies d'analyse",
    marketing: "Cookies marketing",
    preferences: "Cookies de préférences"
  };

  return (
    <div>
      <SEOHead 
        title="Politique de Cookies - Mylli Services"
        description="Découvrez comment Mylli Services utilise les cookies et comment gérer vos préférences selon la réglementation CNDP."
        keywords="cookies, CNDP, politique cookies, confidentialité, données personnelles"
        canonicalUrl="/politique-cookies"
      />
      
      <PageBanner 
        title="Politique de Cookies"
        subtitle="Transparence et contrôle de vos données selon la CNDP"
        variant="modern"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          
          {/* Introduction */}
          <Card className="mb-8 p-8 border border-mylli-primary/20">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-mylli-dark mb-4">
                  Notre engagement envers votre vie privée
                </h2>
                <p className="text-mylli-gray leading-relaxed">
                  Chez Mylli Services, nous respectons votre vie privée et nous conformons strictement 
                  aux exigences de la Commission Nationale de contrôle de la protection des Données 
                  à caractère Personnel (CNDP) du Maroc. Cette politique explique comment nous utilisons 
                  les cookies et comment vous pouvez contrôler leur utilisation.
                </p>
              </div>
            </div>
          </Card>

          {/* What are cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mylli-dark mb-6">
              Qu'est-ce que les cookies ?
            </h2>
            <div className="prose max-w-none text-mylli-gray">
              <p className="mb-4">
                Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, 
                tablette, smartphone) lorsque vous visitez un site web. Ils permettent au site de 
                reconnaître votre appareil et de mémoriser certaines informations sur vos préférences 
                ou actions passées.
              </p>
              <p className="mb-4">
                Les cookies peuvent être "de session" (supprimés à la fermeture du navigateur) ou 
                "persistants" (restent sur votre appareil pendant une durée déterminée).
              </p>
            </div>
          </div>

          {/* Types of cookies we use */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mylli-dark mb-6">
              Types de cookies que nous utilisons
            </h2>
            
            <div className="space-y-6">
              {(Object.keys(cookieCategories) as CookieCategory[]).map((category) => (
                <Card key={category} className="p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-mylli-dark mb-4">
                    {categoryTitles[category]}
                  </h3>
                  
                  <div className="space-y-4">
                    {cookieCategories[category].map((cookie, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
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
                            <span className="font-medium text-mylli-dark">Durée:</span>
                            <span className="ml-2 text-mylli-gray">{cookie.expiry}</span>
                          </div>
                          <div>
                            <span className="font-medium text-mylli-dark">Type:</span>
                            <span className="ml-2 text-mylli-gray">{cookie.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Your rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mylli-dark mb-6">
              Vos droits selon la CNDP
            </h2>
            
            <Card className="p-6 bg-mylli-primary/5 border-mylli-primary/20">
              <div className="space-y-4">
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Info size={20} className="text-mylli-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-mylli-dark mb-2">Consentement libre et éclairé</h4>
                    <p className="text-mylli-gray text-sm">
                      Vous avez le droit de donner ou de refuser votre consentement pour l'utilisation 
                      de cookies non essentiels. Ce consentement doit être libre, spécifique, éclairé et univoque.
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Info size={20} className="text-mylli-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-mylli-dark mb-2">Retrait du consentement</h4>
                    <p className="text-mylli-gray text-sm">
                      Vous pouvez retirer votre consentement à tout moment, aussi facilement que vous 
                      l'avez donné, en utilisant le bouton "Gérer les cookies" en bas de page.
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Info size={20} className="text-mylli-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-mylli-dark mb-2">Contrôle via votre navigateur</h4>
                    <p className="text-mylli-gray text-sm">
                      Vous pouvez également gérer les cookies directement via les paramètres de votre navigateur. 
                      Cependant, la désactivation de certains cookies peut affecter le fonctionnement du site.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* How to manage cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mylli-dark mb-6">
              Comment gérer vos cookies
            </h2>
            
            <div className="space-y-4 text-mylli-gray">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-mylli-dark mb-3">Sur notre site web</h4>
                <p className="mb-4">
                  Utilisez le bouton "Gérer les cookies" disponible en permanence en bas de notre site 
                  pour accéder à vos préférences et les modifier à tout moment.
                </p>
                <button
                  onClick={() => (window as any).showCookieSettings?.()}
                  className="btn-primary"
                >
                  Gérer mes préférences cookies
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-mylli-dark mb-3">Via votre navigateur</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Chrome:</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li>• <strong>Firefox:</strong> Paramètres → Vie privée et sécurité → Cookies</li>
                  <li>• <strong>Safari:</strong> Préférences → Confidentialité → Cookies</li>
                  <li>• <strong>Edge:</strong> Paramètres → Cookies et autorisations de site</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Updates to this policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mylli-dark mb-6">
              Mises à jour de cette politique
            </h2>
            <p className="text-mylli-gray leading-relaxed">
              Nous pouvons mettre à jour cette politique de cookies de temps en temps pour refléter 
              les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales 
              ou réglementaires. Nous vous encourageons à consulter régulièrement cette page pour 
              rester informé de nos pratiques en matière de cookies.
            </p>
            <p className="text-mylli-gray leading-relaxed mt-4">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          {/* Contact information */}
          <Card className="p-8 bg-gradient-to-r from-mylli-primary/5 to-mylli-secondary/5 border border-mylli-primary/20">
            <h2 className="text-2xl font-bold text-mylli-dark mb-6">
              Contactez notre Délégué à la Protection des Données (DPO)
            </h2>
            
            <p className="text-mylli-gray mb-6">
              Pour toute question concernant cette politique de cookies ou pour exercer vos droits 
              selon la réglementation CNDP, vous pouvez nous contacter :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <div className="w-10 h-10 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-mylli-primary" />
                </div>
                <div>
                  <p className="font-medium text-mylli-dark">Email</p>
                  <p className="text-sm text-mylli-gray">dpo@mylliservices.com</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <div className="w-10 h-10 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-mylli-primary" />
                </div>
                <div>
                  <p className="font-medium text-mylli-dark">Téléphone</p>
                  <p className="text-sm text-mylli-gray">+212 661 37 74 38</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <div className="w-10 h-10 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-mylli-primary" />
                </div>
                <div>
                  <p className="font-medium text-mylli-dark">Adresse</p>
                  <p className="text-sm text-mylli-gray">19, rue Masmouda hay Al Hana<br />Casablanca - 20210</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
