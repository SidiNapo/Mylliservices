
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';

const AProposPage = () => {
  // Timeline data
  const milestones = [
    {
      year: 2014,
      title: "Fondation de Mylli Services",
      description: "Création de l'entreprise par Ahmed Bennani avec une équipe initiale de 5 professionnels de santé."
    },
    {
      year: 2016,
      title: "Premier partenariat hospitalier",
      description: "Signature d'un accord avec la Clinique Spécialisée de Casablanca pour la prise en charge post-hospitalisation."
    },
    {
      year: 2018,
      title: "Extension des services",
      description: "Ajout des services de garde-malade 24h/24 et développement de l'offre pour les personnes atteintes de maladies neurodégénératives."
    },
    {
      year: 2020,
      title: "Adaptation aux défis sanitaires",
      description: "Mise en place de protocoles spécifiques pour assurer la continuité des soins pendant la pandémie de COVID-19."
    },
    {
      year: 2024,
      title: "10 ans d'excellence",
      description: "Célébration d'une décennie au service des personnes fragilisées avec une équipe de plus de 50 professionnels."
    }
  ];
  
  // Why choose us data
  const reasons = [
    {
      title: "Plus de 10 ans d'expérience spécifique",
      description: "Notre expertise s'est construite au fil du temps, nous permettant d'anticiper les besoins et d'offrir des solutions éprouvées."
    },
    {
      title: "Une relation contractuelle claire et transparente",
      description: "Nous vous garantissons une transparence totale sur nos services, nos tarifs et nos engagements."
    },
    {
      title: "Des exigences déontologiques très élevées",
      description: "Nos intervenants respectent une charte éthique stricte garantissant le respect et la dignité de chaque patient."
    },
    {
      title: "Une personnalisation des prestations",
      description: "Nous adaptons nos services à votre situation unique, en tenant compte de vos habitudes et préférences."
    },
    {
      title: "Un suivi individualisé",
      description: "Votre conseiller personnel assure un suivi régulier pour garantir votre satisfaction et ajuster nos services si nécessaire."
    }
  ];
  
  return (
    <div>
      <PageBanner 
        title="À Propos de Mylli Services" 
        subtitle="PLUS DE 10 ANS D'EXPÉRIENCE AU SERVICE DES PERSONNES FRAGILISÉES À LEUR DOMICILE"
      />
      
      {/* History Section - Redesigned with modern timeline */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Histoire"
            subtitle="Une décennie d'engagement et de dévouement"
            variant="modern"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mylli-primary via-mylli-secondary to-mylli-accent -ml-0.5 hidden md:block"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-16 last:mb-0">
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Year bubble */}
                    <div className="md:hidden absolute left-0 top-0 flex flex-col items-center">
                      <div className="bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white font-bold py-1 px-4 rounded-full">
                        {milestone.year}
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 flex-col items-center hidden md:flex">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {milestone.year.toString().substring(2)}
                      </div>
                      <div className="w-1 h-8 bg-gradient-to-b from-mylli-primary to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 pt-10 md:pt-0 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className="bg-white rounded-xl shadow-xl p-6 transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-mylli-primary">
                        <div className="hidden md:block text-mylli-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-3 text-mylli-dark">{milestone.title}</h3>
                        <p className="text-mylli-gray">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section with Parallax */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
        height="auto"
        className="py-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white animate-fade-in">Notre Mission</h2>
            
            <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 transform transition-all duration-500 hover:shadow-2xl animate-fade-in">
              <p className="text-2xl italic text-mylli-dark mb-8">
                "Permettre aux personnes en perte d'autonomie de rester chez elles dans les meilleures conditions possibles, avec dignité et confort."
              </p>
              
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-6 animate-fade-in">
              Chez Mylli Services, nous croyons fermement que chaque personne a droit au meilleur accompagnement possible, dans l'environnement qui lui est familier. Notre mission est de préserver l'autonomie et la qualité de vie des personnes fragilisées tout en offrant tranquillité d'esprit et soutien à leurs proches.
            </p>
            <p className="text-xl text-white/90 animate-fade-in">
              Nous mettons un point d'honneur à fournir des services personnalisés, respectueux et professionnels qui s'adaptent aux besoins évolutifs de chaque patient. Notre engagement va au-delà des soins techniques : nous créons une relation humaine basée sur la confiance, l'empathie et le respect.
            </p>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Why Choose Us Section - Modern design */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Pourquoi Choisir Mylli Services"
            subtitle="Des raisons solides de nous confier votre bien-être ou celui de vos proches"
            variant="gradient"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl rounded-xl overflow-hidden`}
                >
                  <div className={`h-full flex flex-col ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-mylli-primary/10 to-white border border-mylli-primary/20' 
                      : 'bg-white shadow-lg'
                  }`}>
                    <div className={`h-2 ${index % 2 === 0 ? 'bg-gradient-to-r from-mylli-primary to-mylli-secondary' : 'bg-gradient-to-r from-mylli-secondary to-mylli-accent'}`}></div>
                    <div className="p-8 flex-grow">
                      <h3 className="text-xl font-bold mb-4 text-mylli-dark">{reason.title}</h3>
                      <p className="text-mylli-gray">{reason.description}</p>
                    </div>
                    <div className="p-4 flex justify-end">
                      <CheckCircle size={24} className={index % 2 === 0 ? 'text-mylli-primary' : 'text-mylli-secondary'} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Coverage Area with Parallax */}
      <ParallaxSection
        backgroundGradient="linear-gradient(135deg, rgba(52, 211, 153, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)"
        height="auto"
        className="py-24"
      >
        <div className="container-custom">
          <SectionHeading 
            title="Notre Zone d'Intervention"
            subtitle="Nous intervenons dans toute la région de Casablanca et ses environs"
            variant="underline"
            className="text-white"
            highlightColor="white"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
              <div className="h-80 bg-mylli-primary/10 flex items-center justify-center">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="text-center p-8">
                  <MapPin size={80} className="text-mylli-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-mylli-dark mb-3">Casablanca et environs</h3>
                  <p className="text-lg text-mylli-gray">
                    Carte interactive à intégrer ici pour montrer notre zone de couverture
                  </p>
                </div>
              </div>
              
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-6 text-mylli-dark">Secteurs couverts</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Ain Diab</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Anfa</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Maarif</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Bourgogne</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Hay Hassani</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Sidi Maarouf</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">California</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Centre-ville</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-mylli-gray group-hover:text-mylli-dark transition-colors duration-300">Et plus...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Social Responsibility - Modern design */}
      <section className="py-24 bg-gradient-to-r from-mylli-dark to-mylli-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <SectionHeading 
                title="Notre Responsabilité Sociale"
                subtitle="Au-delà des soins, un engagement pour une société plus inclusive"
                variant="underline"
                className="text-white"
                highlightColor="white"
              />
              
              <div className="text-center animate-fade-in">
                <p className="text-xl mb-8 text-white/90">
                  Mylli Services s'engage à promouvoir l'accessibilité aux soins de qualité pour tous. Nous participons activement à des initiatives communautaires et soutenons des associations locales qui œuvrent pour améliorer la vie des personnes âgées ou en situation de handicap.
                </p>
                <p className="text-xl mb-10 text-white/90">
                  Chaque année, nous consacrons une partie de nos ressources à des actions de sensibilisation aux problématiques du vieillissement et de la dépendance, ainsi qu'à la formation de jeunes professionnels de santé.
                </p>
                <Button asChild className="bg-white hover:bg-white/90 text-mylli-primary font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px]">
                  <Link to="/contact">
                    Contactez-nous pour en savoir plus
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;
