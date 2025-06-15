
import { ArrowLeft, Quote, Heart, Shield, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SectionHeading from '@/components/common/SectionHeading';
import OptimizedImage from '@/components/seo/OptimizedImage';
import SEOHead from '@/components/seo/SEOHead';

const MotDuPresident = () => {
  return (
    <>
      <SEOHead 
        title="Mot du Président - Mylli Services | Vision et Engagement" 
        description="Découvrez le message personnel du Président de Mylli Services sur notre mission d'accompagnement à domicile et notre engagement envers la dignité humaine." 
        keywords="mot du président, Mylli Services, fondateur, vision, mission, accompagnement domicile" 
        canonicalUrl="/mot-du-president" 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-mylli-light/30 via-white to-mylli-primary/5">
        {/* Header Navigation */}
        <div className="container-custom pt-24 pb-8">
          <Button asChild variant="outline" className="mb-8 hover:bg-mylli-primary/10 border-mylli-primary/20">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Retour à l'accueil
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="container-custom px-4 md:px-6 pb-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading 
              title="Le Mot du Président" 
              subtitle="Un message personnel sur notre mission et notre engagement envers l'accompagnement à domicile"
              variant="gradient"
              highlightText="Président"
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="container-custom px-4 md:px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Image Section */}
              <div className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white p-6 rounded-3xl shadow-2xl overflow-hidden">
                    <OptimizedImage 
                      src="/lovable-uploads/f93fedca-b6df-4264-9427-93f0e22541cd.png"
                      alt="Président de Mylli Services - Leader en accompagnement à domicile"
                      width={500}
                      height={400}
                      className="w-full h-80 object-contain mx-auto rounded-2xl"
                    />
                    
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold text-mylli-dark mb-2">
                        Président & Fondateur
                      </h3>
                      <p className="text-mylli-gray">
                        Mylli Services - Depuis 2014
                      </p>
                    </div>
                  </div>
                </div>

                {/* Statistics Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-mylli-primary/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-mylli-primary mb-1">+10</div>
                      <div className="text-sm text-mylli-gray">années d'expérience</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-mylli-secondary/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-mylli-secondary mb-1">4500+</div>
                      <div className="text-sm text-mylli-gray">interventions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                {/* Quote Section */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 text-mylli-primary/20">
                    <Quote size={60} />
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-mylli-primary/10 relative">
                    <blockquote className="text-lg text-mylli-gray leading-relaxed italic mb-6">
                      "Depuis la création de Mylli Services en 2014, notre mission a toujours été claire : redonner dignité et autonomie aux personnes en perte d'autonomie tout en apportant sérénité et soutien à leurs familles."
                    </blockquote>
                    
                    <div className="border-t border-mylli-light pt-4">
                      <p className="font-semibold text-mylli-dark">Message du Président</p>
                    </div>
                  </div>
                </div>

                {/* Main Message */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-mylli-secondary/10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-mylli-gray leading-relaxed mb-6">
                      Chers clients, chers partenaires, chères familles,
                    </p>
                    
                    <p className="text-mylli-gray leading-relaxed mb-6">
                      Il y a plus de dix ans, j'ai fondé Mylli Services avec une conviction profonde : chaque personne mérite de vieillir dans la dignité, entourée de soins professionnels et de bienveillance humaine. Cette vision, née de mon expérience personnelle et professionnelle, continue de guider chacune de nos actions aujourd'hui.
                    </p>
                    
                    <p className="text-mylli-gray leading-relaxed mb-6">
                      Au Maroc, nous avons été pionniers dans l'accompagnement à domicile, développant une approche unique qui combine excellence médicale et chaleur humaine. Nos équipes, formées avec rigueur, partagent cette même passion : celle de préserver l'autonomie de nos bénéficiaires tout en rassurant leurs proches.
                    </p>
                    
                    <p className="text-mylli-gray leading-relaxed mb-6">
                      Chaque jour, nous accompagnons des familles dans des moments parfois difficiles, mais toujours avec l'espoir de leur apporter un mieux-être durable. C'est cette responsabilité qui nous pousse à innover constamment, à former nos équipes et à maintenir les plus hauts standards de qualité.
                    </p>
                    
                    <p className="text-mylli-gray leading-relaxed">
                      Merci de nous faire confiance. Ensemble, nous continuerons à construire un avenir où l'accompagnement à domicile rime avec excellence, respect et humanité.
                    </p>
                  </div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-mylli-primary/5 to-mylli-primary/10 p-6 rounded-xl border border-mylli-primary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="text-mylli-primary" size={24} />
                      <h4 className="font-semibold text-mylli-dark">Bienveillance</h4>
                    </div>
                    <p className="text-mylli-gray text-sm">
                      Au cœur de chaque intervention, la bienveillance guide nos actions
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-mylli-secondary/5 to-mylli-secondary/10 p-6 rounded-xl border border-mylli-secondary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="text-mylli-secondary" size={24} />
                      <h4 className="font-semibold text-mylli-dark">Excellence</h4>
                    </div>
                    <p className="text-mylli-gray text-sm">
                      Des standards de qualité élevés pour un service irréprochable
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-mylli-quaternary/5 to-mylli-quaternary/10 p-6 rounded-xl border border-mylli-quaternary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="text-mylli-quaternary" size={24} />
                      <h4 className="font-semibold text-mylli-dark">Proximité</h4>
                    </div>
                    <p className="text-mylli-gray text-sm">
                      Une relation de confiance avec chaque famille accompagnée
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-mylli-accent/5 to-mylli-accent/10 p-6 rounded-xl border border-mylli-accent/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="text-mylli-accent" size={24} />
                      <h4 className="font-semibold text-mylli-dark">Innovation</h4>
                    </div>
                    <p className="text-mylli-gray text-sm">
                      Toujours à la pointe pour améliorer nos services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-mylli-primary/10 to-mylli-secondary/10 py-16">
          <div className="container-custom px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-mylli-dark mb-6">
                Prêt à découvrir nos services ?
              </h3>
              <p className="text-mylli-gray text-lg mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour un accompagnement personnalisé et professionnel à domicile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:from-mylli-primary hover:to-mylli-primary-dark">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-mylli-primary/20 hover:bg-mylli-primary/10">
                  <Link to="/services">
                    Découvrir nos services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MotDuPresident;
