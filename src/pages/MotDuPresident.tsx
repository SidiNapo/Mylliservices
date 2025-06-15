
import React from 'react';
import { User, Quote } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

const MotDuPresident = () => {
  return (
    <>
      <SEOHead
        title="Mot du Président - Mylli Services"
        description="Message du Président de Mylli Services sur notre engagement envers l'accompagnement à domicile au Maroc."
        keywords="président, message, direction, Mylli Services, accompagnement domicile"
        canonicalUrl="/mot-du-president"
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-mylli-light/20 to-mylli-accent/10">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-mylli-primary to-mylli-accent py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-6">
                <User className="w-16 h-16 mx-auto mb-4 animate-pulse-soft" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Mot du <span className="text-mylli-light">Président</span>
              </h1>
              <p className="text-xl md:text-2xl text-mylli-light/90 animate-fade-in">
                Notre vision et notre engagement
              </p>
            </div>
          </div>
        </section>

        {/* Message du Président */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-card bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <Quote className="w-8 h-8 text-mylli-primary mr-4" />
                    <h2 className="text-2xl font-bold text-mylli-dark">Message du Président</h2>
                  </div>
                  
                  <div className="prose max-w-none text-mylli-gray space-y-6">
                    <p className="text-lg leading-relaxed">
                      Depuis la création de Mylli Services en 2014, notre mission n'a jamais changé : 
                      offrir un accompagnement à domicile de qualité, empreint d'humanité et de respect 
                      pour chaque personne que nous servons.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Au fil des années, nous avons développé une approche unique qui place la dignité 
                      humaine au cœur de nos préoccupations. Chaque intervention est pensée pour préserver 
                      l'autonomie et le bien-être de nos bénéficiaires, tout en offrant un soutien précieux 
                      à leurs familles.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Notre équipe de professionnels qualifiés partage cette vision commune : faire de 
                      l'accompagnement à domicile un véritable service de proximité, adapté aux besoins 
                      spécifiques de chaque personne. Nous croyons fermement que chacun mérite de vivre 
                      dans le confort et la sécurité de son foyer, entouré de soins attentionnés.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Aujourd'hui, fort de plus de 10 années d'expérience, Mylli Services continue 
                      d'innover et de s'adapter aux évolutions de notre société, tout en gardant 
                      comme boussole nos valeurs fondamentales : l'excellence, la bienveillance 
                      et l'engagement.
                    </p>
                    
                    <p className="text-lg leading-relaxed font-medium text-mylli-primary">
                      Merci de votre confiance. Ensemble, construisons un avenir où l'accompagnement 
                      à domicile rime avec qualité, respect et humanité.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-mylli-light/30">
                    <div className="text-center">
                      <p className="text-mylli-dark font-semibold text-lg">
                        Président de Mylli Services
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MotDuPresident;
