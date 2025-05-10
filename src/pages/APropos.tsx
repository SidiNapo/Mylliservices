
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';

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
      
      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Histoire"
            subtitle="Une décennie d'engagement et de dévouement"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-mylli-primary/20 md:left-1/2 md:-ml-0.5"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-12 animate-fade-in">
                  <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Year bubble */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-4 md:-translate-x-1/2 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-white shadow-card border-2 border-mylli-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-mylli-primary"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 pt-1 ${index % 2 === 0 ? 'md:pl-12 md:pr-12' : 'md:pr-12 md:pl-12'}`}>
                      <div className="bg-white rounded-lg shadow-soft p-5 border border-gray-100">
                        <div className="text-mylli-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2 text-mylli-dark">{milestone.title}</h3>
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
      
      {/* Mission Section */}
      <section className="section-padding bg-mylli-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-mylli-dark animate-fade-in">Notre Mission</h2>
            
            <div className="bg-white rounded-2xl shadow-card p-8 mb-8 animate-fade-in">
              <p className="text-xl italic text-mylli-gray mb-6">
                "Permettre aux personnes en perte d'autonomie de rester chez elles dans les meilleures conditions possibles, avec dignité et confort."
              </p>
              
              <div className="flex justify-center">
                <div className="w-16 h-0.5 bg-mylli-primary"></div>
              </div>
            </div>
            
            <p className="text-lg text-mylli-gray mb-6 animate-fade-in">
              Chez Mylli Services, nous croyons fermement que chaque personne a droit au meilleur accompagnement possible, dans l'environnement qui lui est familier. Notre mission est de préserver l'autonomie et la qualité de vie des personnes fragilisées tout en offrant tranquillité d'esprit et soutien à leurs proches.
            </p>
            <p className="text-lg text-mylli-gray animate-fade-in">
              Nous mettons un point d'honneur à fournir des services personnalisés, respectueux et professionnels qui s'adaptent aux besoins évolutifs de chaque patient. Notre engagement va au-delà des soins techniques : nous créons une relation humaine basée sur la confiance, l'empathie et le respect.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Pourquoi Choisir Mylli Services"
            subtitle="Des raisons solides de nous confier votre bien-être ou celui de vos proches"
          />
          
          <div className="max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className={`flex p-6 mb-6 rounded-xl ${
                  index % 2 === 0 ? 'bg-mylli-primary/5 animate-fade-in-right' : 'bg-white shadow-soft border border-gray-100 animate-fade-in-left'
                }`}
              >
                <div className="mr-4 flex-shrink-0">
                  <CheckCircle size={24} className={index % 2 === 0 ? 'text-mylli-primary' : 'text-mylli-secondary'} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mylli-dark">{reason.title}</h3>
                  <p className="text-mylli-gray">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coverage Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Zone d'Intervention"
            subtitle="Nous intervenons dans toute la région de Casablanca et ses environs"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden animate-fade-in">
              <div className="h-80 bg-mylli-primary/10 flex items-center justify-center">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="text-center p-6">
                  <MapPin size={64} className="text-mylli-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-mylli-dark mb-2">Casablanca et environs</h3>
                  <p className="text-mylli-gray">
                    Carte interactive à intégrer ici pour montrer notre zone de couverture
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-4 text-mylli-dark">Secteurs couverts</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Ain Diab</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Anfa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Maarif</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Bourgogne</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Hay Hassani</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Sidi Maarouf</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">California</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Centre-ville</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-mylli-secondary mr-2 flex-shrink-0" />
                    <span className="text-mylli-gray text-sm">Et plus...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Responsibility */}
      <section className="section-padding bg-gradient-to-r from-mylli-dark to-mylli-primary text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Responsabilité Sociale"
            subtitle="Au-delà des soins, un engagement pour une société plus inclusive"
            className="text-white"
          />
          
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <p className="text-lg mb-6 text-white/90">
              Mylli Services s'engage à promouvoir l'accessibilité aux soins de qualité pour tous. Nous participons activement à des initiatives communautaires et soutenons des associations locales qui œuvrent pour améliorer la vie des personnes âgées ou en situation de handicap.
            </p>
            <p className="text-lg mb-8 text-white/90">
              Chaque année, nous consacrons une partie de nos ressources à des actions de sensibilisation aux problématiques du vieillissement et de la dépendance, ainsi qu'à la formation de jeunes professionnels de santé.
            </p>
            <Button asChild className="bg-white text-mylli-primary hover:bg-white/90">
              <Link to="/contact">
                Contactez-nous pour en savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;
