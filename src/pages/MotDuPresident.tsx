
import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import PageBanner from '@/components/common/PageBanner';
import OptimizedImage from '@/components/seo/OptimizedImage';

const MotDuPresident = () => {
  return (
    <>
      <SEOHead 
        title="Le Mot du Président - Mylli Service"
        description="Découvrez le message personnel de notre président sur notre mission d'accompagnement à domicile avec compassion et professionnalisme."
        canonicalUrl="/mot-du-president"
      />
      
      <PageBanner
        title="Le Mot du Président"
        subtitle="Notre vision et nos valeurs"
        bgImage="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* President's Message Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 p-8 rounded-2xl border border-mylli-primary/10">
                <h2 className="text-2xl font-bold text-mylli-dark mb-6 flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-mylli-primary to-mylli-secondary rounded-full mr-4"></div>
                  Le Mot du Président
                </h2>
                
                <div className="space-y-4 text-mylli-gray leading-relaxed">
                  <p>
                    <strong className="text-mylli-primary">Chers amis, chères familles,</strong>
                  </p>
                  
                  <p>
                    En tant que président de <strong className="text-mylli-primary">Mylli Service</strong>, je suis fier de diriger 
                    une équipe qui partage une vision commune : offrir des soins à domicile d'exception, 
                    alliant professionnalisme médical et accompagnement humain.
                  </p>
                  
                  <p>
                    Depuis notre création, nous nous sommes engagés à révolutionner l'approche des soins à domicile au Maroc. 
                    Notre objectif est simple mais ambitieux : permettre à chacun de recevoir des soins de qualité 
                    dans le confort et la sécurité de son foyer.
                  </p>
                  
                  <p>
                    Notre réussite repose sur trois piliers fondamentaux : l'excellence de nos professionnels de santé, 
                    l'innovation dans nos méthodes d'accompagnement, et surtout, une écoute attentive de vos besoins. 
                    Car derrière chaque soin, il y a une personne unique qui mérite notre meilleure attention.
                  </p>
                  
                  <p>
                    <em className="text-mylli-secondary font-medium">Ensemble, nous construisons l'avenir des soins à domicile au Maroc</em>, 
                    avec humanité, compétence et dévouement.
                  </p>
                  
                  <div className="pt-4 border-t border-mylli-primary/20">
                    <p className="font-medium text-mylli-primary">
                      Avec mes salutations distinguées,<br/>
                      <span className="text-mylli-dark">Le Président de Mylli Service</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/f34b6412-2bd2-410e-98f3-40493670590f.png"
                  alt="Direction Mylli Service - Leadership en soins à domicile"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-mylli-light">
                <h3 className="font-bold text-mylli-dark mb-3">Notre Vision Présidentielle</h3>
                <ul className="space-y-2 text-sm text-mylli-gray">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-primary mr-3"></div>
                    Leadership dans l'innovation médicale
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-3"></div>
                    Excellence opérationnelle
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-3"></div>
                    Développement durable des services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-mylli-tertiary mr-3"></div>
                    Responsabilité sociale et humaine
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

export default MotDuPresident;
