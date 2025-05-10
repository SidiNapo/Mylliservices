
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Heart, Award, Clock, Globe, Shield, Users, Calendar } from 'lucide-react';
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
      
      {/* Mission Section with Parallax - Updated with modern design */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
        height="auto"
        className="py-24"
        overlayGradient="linear-gradient(135deg, rgba(0,70,122,0.85) 0%, rgba(0,119,192,0.75) 100%)"
        pattern="grid"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white animate-fade-in">Notre Mission</h2>
            
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 transform transition-all duration-500 hover:shadow-2xl animate-fade-in border border-mylli-primary/10">
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
      
      {/* Coverage Area with Parallax - Updated with modern design */}
      <ParallaxSection
        backgroundGradient="linear-gradient(135deg, rgba(0,119,192,0.9) 0%, rgba(0,153,232,0.8) 100%)"
        height="auto"
        className="py-24"
        glassEffect={true}
        pattern="dots"
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
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-white/30">
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
      
      {/* Completely Redesigned Social Responsibility Section with modern interactive design */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mylli-dark via-mylli-primary to-mylli-quaternary opacity-95 z-0"></div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMSAxIDFzMSAwIDEtMS0xLTEtMS0xLTEgMC0xIDEiLz48cGF0aCBkPSJNMzAgMzRjMCAxIDEgMSAxIDFzMSAwIDEtMS0xLTEtMS0xLTEgMC0xIDEiLz48cGF0aCBkPSJNMjQgMzRjMCAxIDEgMSAxIDFzMSAwIDEtMS0xLTEtMS0xLTEgMC0xIDEiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/50 to-transparent"></div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border border-white/10 animate-spin-slow" style={{animationDuration: '30s'}}></div>
          <div className="absolute top-[40%] right-[10%] w-40 h-40 rounded-full border-2 border-white/5 animate-spin-slow" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full border border-white/10 animate-pulse-soft" style={{animationDuration: '6s'}}></div>
          <div className="absolute w-64 h-64 rounded-full bg-mylli-quaternary/20 blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-64 h-64 rounded-full bg-mylli-secondary/20 blur-3xl -bottom-10 -left-10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="inline-block text-4xl md:text-5xl font-bold text-white mb-4 relative">
              Notre Responsabilité <span className="relative">
                <span className="relative z-10">Sociale</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-mylli-secondary/30 transform -rotate-1"></span>
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Au-delà des soins, notre engagement pour une société plus inclusive et bienveillante
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Main card with 3D effect */}
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl transform hover:translate-y-[-5px] transition-all duration-500">
              
              {/* Featured initiatives with visual elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/30 shadow-lg h-full">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-mylli-primary to-mylli-quaternary flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Heart size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Actions solidaires</h3>
                    <p className="text-white/70">Nous soutenons des associations locales qui œuvrent pour améliorer la vie des personnes âgées et handicapées.</p>
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-white/20 transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/30 shadow-lg h-full">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-mylli-secondary to-mylli-primary/70 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Sensibilisation</h3>
                    <p className="text-white/70">Nous menons des actions de sensibilisation aux problématiques du vieillissement et de la dépendance.</p>
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-white/20 transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/30 shadow-lg h-full">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-mylli-quaternary to-mylli-secondary flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Award size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Formation</h3>
                    <p className="text-white/70">Nous contribuons à la formation de jeunes professionnels de santé pour assurer la relève dans ce secteur essentiel.</p>
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-white/20 transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/30 shadow-lg h-full">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-mylli-primary/70 to-mylli-quaternary flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Globe size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Développement durable</h3>
                    <p className="text-white/70">Nos pratiques professionnelles intègrent des préoccupations environnementales pour un impact positif global.</p>
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-white/20 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Commitment showcase with interactive elements */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-10">
                    <h3 className="text-2xl font-bold text-white mb-4">Notre engagement communautaire</h3>
                    <p className="text-white/70 mb-4">
                      Chaque année, Mylli Services s'engage à consacrer une partie de ses ressources à des projets sociaux qui renforcent le tissu communautaire et améliorent les conditions de vie des personnes vulnérables.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                        <Clock size={16} className="text-mylli-secondary mr-2" />
                        <span className="text-white/80 text-sm">+500 heures de bénévolat</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                        <CheckCircle size={16} className="text-mylli-quaternary mr-2" />
                        <span className="text-white/80 text-sm">3 partenariats associatifs</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                        <Users size={16} className="text-mylli-primary mr-2" />
                        <span className="text-white/80 text-sm">Impact sur +200 familles</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3 flex justify-center relative">
                    {/* Animated percentage indicator */}
                    <div className="group relative cursor-pointer">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary animate-spin-slow opacity-30" style={{animationDuration: '10s'}}></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-mylli-dark/40 to-mylli-dark/60 backdrop-blur-md rounded-full"></div>
                      <div className="relative flex flex-col items-center justify-center w-48 h-48 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="text-5xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">10%</span>
                        <span className="text-white/70 text-sm mt-1">de nos revenus</span>
                        <span className="text-white/80 text-xs mt-1 font-medium">dédiés aux initiatives sociales</span>
                        
                        <div className="absolute inset-0 rounded-full border-4 border-white/20 opacity-0 group-hover:opacity-100 transform scale-110 group-hover:scale-100 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Impact calendar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-mylli-secondary/20 flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-white ml-3">Printemps</h4>
                  </div>
                  <div className="pl-5 border-l border-white/10">
                    <p className="text-white/70 mb-3">Organisation de la journée "Bien Vieillir Chez Soi" avec ateliers et consultations gratuites.</p>
                    <div className="text-mylli-secondary/70 text-sm font-medium">Mars - Mai</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-mylli-primary/20 flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-white ml-3">Été</h4>
                  </div>
                  <div className="pl-5 border-l border-white/10">
                    <p className="text-white/70 mb-3">Plan canicule pour les personnes isolées et participation au forum des associations.</p>
                    <div className="text-mylli-primary/70 text-sm font-medium">Juin - Août</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-mylli-quaternary/20 flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-white ml-3">Automne</h4>
                  </div>
                  <div className="pl-5 border-l border-white/10">
                    <p className="text-white/70 mb-3">Semaine de la santé des aidants et campagne de sensibilisation sur l'autonomie.</p>
                    <div className="text-mylli-quaternary/70 text-sm font-medium">Septembre - Novembre</div>
                  </div>
                </div>
              </div>
              
              {/* Call to action */}
              <div className="text-center">
                <Button asChild className="bg-white hover:bg-white/90 text-mylli-primary font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-3px] group">
                  <Link to="/contact">
                    <span className="flex items-center">
                      <span>Participer à nos initiatives</span>
                      <Shield className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </Link>
                </Button>
                <p className="text-white/60 mt-4 text-sm">Ensemble, nous pouvons faire une différence significative.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;
