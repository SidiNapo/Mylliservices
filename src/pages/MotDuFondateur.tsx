
import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import PageBanner from '@/components/common/PageBanner';
import OptimizedImage from '@/components/seo/OptimizedImage';

const MotDuFondateur = () => {
  return (
    <>
      <SEOHead 
        title="Le Mot du Fondateur - Mylli Assistance"
        description="Découvrez le message personnel de notre fondateur sur notre mission d'accompagnement à domicile avec compassion et professionnalisme."
        canonicalUrl="/mot-du-fondateur"
      />
      
      <PageBanner
        title="Le Mot du Fondateur"
        subtitle="Notre vision et nos valeurs"
        bgImage="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Founder's Message Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 p-8 rounded-2xl border border-mylli-primary/10">
                <h2 className="text-2xl font-bold text-mylli-dark mb-6 flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-mylli-primary to-mylli-secondary rounded-full mr-4"></div>
                  Le Mot du Fondateur
                </h2>
                
                <div className="space-y-4 text-mylli-gray leading-relaxed">
                  <p>
                    <strong className="text-mylli-primary">Chers amis, chères familles,</strong>
                  </p>
                  
                  <p>
                    Fondée en 2013, <strong className="text-mylli-primary">Mylli Assistance</strong> est née d'une conviction profonde : 
                    chaque personne mérite de vivre dans la dignité et le confort de son domicile, 
                    entourée de soins attentionnés et personnalisés.
                  </p>
                  
                  <p>
                    Notre mission va au-delà des soins médicaux. Nous créons des liens humains authentiques, 
                    nous apportons réconfort et sécurité, et nous accompagnons nos patients et leurs familles 
                    avec compassion et professionnalisme.
                  </p>
                  
                  <p>
                    Chaque jour, notre équipe dévouée s'engage à offrir des services d'excellence, 
                    adaptés aux besoins uniques de chaque personne. Car pour nous, 
                    <em className="text-mylli-secondary font-medium">prendre soin, c'est bien plus qu'un métier : c'est une vocation</em>.
                  </p>
                  
                  <div className="pt-4 border-t border-mylli-primary/20">
                    <p className="font-medium text-mylli-primary">
                      Avec toute notre gratitude,<br/>
                      <span className="text-mylli-dark">L'équipe fondatrice de Mylli Assistance</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/f34b6412-2bd2-410e-98f3-40493670590f.png"
                  alt="Équipe Mylli Assistance - Soins à domicile professionnels"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-mylli-light">
                <h3 className="font-bold text-mylli-dark mb-3">Nos Valeurs Fondatrices</h3>
                <ul className="space-y-2 text-sm text-mylli-gray">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-primary mr-3"></div>
                    Respect et dignité de la personne
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-3"></div>
                    Excellence professionnelle
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-3"></div>
                    Accompagnement personnalisé
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-tertiary mr-3"></div>
                    Compassion et bienveillance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotDuFondateur;
