
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Heart, Award, Clock, Globe, Shield, Users, Calendar, Building, Landmark, Phone, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';
import ServiceLocations from '@/components/common/ServiceLocations';

const AProposPage = () => {
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
  
  // Location data
  const locations = [
    {
      city: "Casablanca",
      areas: ["Ain Diab", "Anfa", "Maarif", "Bourgogne", "Hay Hassani", "Sidi Maarouf", "California", "Centre-ville"],
      highlight: true
    },
    {
      city: "Mohammedia",
      areas: ["Centre-ville", "El Alia", "Les Crêtes"],
      highlight: false
    },
    {
      city: "Rabat",
      areas: ["Agdal", "Hassan", "Hay Riad"],
      highlight: false
    }
  ];
  
  return (
    <div>
      <PageBanner 
        title="À Propos de Mylli Services" 
        subtitle="PLUS DE 10 ANS D'EXPÉRIENCE AU SERVICE DES PERSONNES FRAGILISÉES À LEUR DOMICILE"
      />
      
      {/* President's Message Section - Ultra Modern Design */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border-2 border-mylli-primary animate-spin-slow" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full border border-mylli-secondary animate-spin-slow" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border border-mylli-accent animate-pulse-soft" style={{animationDuration: '4s'}}></div>
          
          {/* Floating gradient orbs */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-mylli-primary/20 to-mylli-secondary/20 blur-3xl -top-48 -left-48 animate-float" style={{animationDuration: '6s'}}></div>
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-l from-mylli-accent/20 to-mylli-quaternary/20 blur-3xl -bottom-40 -right-40 animate-float" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIG0gLTQwIDAgbCA0MCAwIiBzdHJva2U9IiMwMDc3QzAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Le Mot du Fondateur"
            variant="modern"
            className="mb-20"
          />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* President's Image - Enhanced with 3D effects */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative group perspective-1000">
                  {/* Multiple layered backgrounds for depth */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse-soft"></div>
                  <div className="absolute -inset-6 bg-gradient-to-l from-mylli-accent/40 to-mylli-primary/40 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                  
                  {/* Main image container with 3D transform */}
                  <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform group-hover:scale-105 group-hover:rotate-y-6 transition-all duration-700 border border-gray-100">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src="/lovable-uploads/6614d6c0-17b6-4417-b39c-a959be53d239.png" 
                        alt="M. HARAKAT, Fondateur de Mylli Services" 
                        className="w-80 h-96 object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Sophisticated overlay gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/30 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-mylli-primary/10"></div>
                    </div>
                    
                    {/* Enhanced name plate with glass morphism */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-4 border border-white/20">
                      <p className="text-mylli-dark font-bold text-lg text-center">M. HARAKAT</p>
                      <p className="text-mylli-gray text-sm text-center">Fondateur & Directeur Général</p>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-2xl flex items-center justify-center shadow-xl animate-float">
                    <Quote size={32} className="text-white" />
                  </div>
                  
                  {/* Achievement badges */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-mylli-secondary to-mylli-accent rounded-full p-3 shadow-lg animate-bounce-subtle">
                    <Award size={20} className="text-white" />
                  </div>
                  
                  {/* Years of experience indicator */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-mylli-quaternary to-mylli-primary rounded-2xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">10+</div>
                      <div className="text-xs text-white/80">Années</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Speech Content - Enhanced with modern cards */}
              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {/* Vision Section - Glass morphism card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-8">
                          <div className="w-2 h-24 bg-gradient-to-b from-mylli-primary via-mylli-secondary to-mylli-accent rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                              <Building size={24} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-mylli-dark to-mylli-primary bg-clip-text text-transparent">La Vision Fondatrice</h3>
                          </div>
                          
                          <div className="space-y-6 text-mylli-gray leading-relaxed">
                            <p className="text-lg">
                              La création de Mylli Services en 2014 a été d'abord animée par une conviction profonde : <span className="font-semibold text-mylli-primary">révolutionner l'accompagnement à domicile</span> des personnes en perte d'autonomie au Maroc et offrir un accompagnement digne, humain et professionnel.
                            </p>
                            <p className="text-lg">
                              Notre engagement est né d'un constat simple mais crucial : la société marocaine a évolué vers un modèle moderne où hommes et femmes travaillent, rendant difficile la prise en charge traditionnelle d'un proche malade au domicile familial.
                            </p>
                            <p className="text-lg">
                              Cette transformation sociétale appelait à une réponse professionnelle adaptée. Beaucoup pensaient que notre concept n'avait aucune chance d'aboutir. Pourtant, nous avons persévéré et créé un système de fonctionnement parfaitement adapté au marché marocain.
                            </p>
                            <div className="bg-gradient-to-r from-mylli-primary/10 to-mylli-secondary/10 rounded-2xl p-6 border-l-4 border-mylli-primary">
                              <p className="text-lg font-medium text-mylli-dark">
                                Aujourd'hui, notre modèle est devenu la référence pour la majorité des entreprises qui ont vu le jour après nous dans ce secteur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Section - Interactive card with hover effects */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-mylli-secondary via-mylli-accent to-mylli-quaternary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-mylli-primary/5 via-white to-mylli-secondary/5 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-mylli-primary/10 hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-8">
                          <div className="w-2 h-24 bg-gradient-to-b from-mylli-secondary via-mylli-accent to-mylli-quaternary rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-mylli-secondary to-mylli-accent rounded-xl flex items-center justify-center mr-4 shadow-lg animate-pulse-soft">
                              <Heart size={24} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-mylli-secondary to-mylli-accent bg-clip-text text-transparent">Notre Mission au Cœur de l'Humain</h3>
                          </div>
                          
                          <div className="space-y-6 text-mylli-gray leading-relaxed">
                            <p className="text-lg">
                              Chez Mylli Services, nous proposons des <span className="font-semibold text-mylli-secondary">aides-soignants et des infirmiers</span> qui s'occupent des personnes en perte d'autonomie 24h/24 et 7j/7 à leur domicile. C'est un métier noble et passionnant où les plus belles valeurs humaines s'expriment avec intensité.
                            </p>
                            <p className="text-lg">
                              Notre mission va au-delà du simple soin : nous aidons non seulement les malades, mais aussi leurs familles à affronter les difficultés liées aux pathologies handicapantes.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                              <div className="bg-white/60 rounded-xl p-4 border border-mylli-secondary/20">
                                <div className="flex items-center mb-2">
                                  <Clock size={16} className="text-mylli-secondary mr-2" />
                                  <span className="font-medium text-mylli-dark">24h/24 - 7j/7</span>
                                </div>
                                <p className="text-sm text-mylli-gray">Accompagnement continu</p>
                              </div>
                              <div className="bg-white/60 rounded-xl p-4 border border-mylli-accent/20">
                                <div className="flex items-center mb-2">
                                  <Users size={16} className="text-mylli-accent mr-2" />
                                  <span className="font-medium text-mylli-dark">Équipe qualifiée</span>
                                </div>
                                <p className="text-sm text-mylli-gray">Professionnels certifiés</p>
                              </div>
                            </div>
                            <p className="text-lg">
                              Au fil des années, nous avons acquis un savoir-faire indéniable, une expérience plus que probante et une excellente réputation sur le marché. Notre force réside dans notre approche minutieuse du recrutement : nous sélectionnons nos intervenants tant sur le plan humain que sur celui des compétences techniques.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Commitment Section - Final statement with signature */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-mylli-quaternary via-mylli-primary to-mylli-dark rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-8">
                          <div className="w-2 h-20 bg-gradient-to-b from-mylli-quaternary via-mylli-primary to-mylli-dark rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-mylli-quaternary to-mylli-dark rounded-xl flex items-center justify-center mr-4 shadow-lg">
                              <Award size={24} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-mylli-quaternary to-mylli-dark bg-clip-text text-transparent">Un Engagement qui Perdure</h3>
                          </div>
                          
                          <div className="space-y-6 text-mylli-gray leading-relaxed">
                            <p className="text-lg">
                              Dix ans après sa création, Mylli Services continue d'innover et de s'adapter aux besoins évolutifs de nos concitoyens.
                            </p>
                            <p className="text-lg mb-8">
                              Notre succès témoigne de la justesse de notre vision initiale et de notre engagement indéfectible envers ceux qui nous font confiance.
                            </p>
                            
                            {/* Enhanced Signature Section */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/10 via-mylli-secondary/10 to-mylli-quaternary/10 rounded-2xl"></div>
                              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-mylli-primary/20">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-2xl font-bold text-mylli-dark mb-1">M. HARAKAT</p>
                                    <p className="text-mylli-gray font-medium">Fondateur de Mylli Services</p>
                                    <p className="text-sm text-mylli-gray/70 mt-1">Depuis 2014</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="w-20 h-20 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center shadow-lg">
                                      <Landmark size={32} className="text-white" />
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute -bottom-2 left-8 w-16 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                                <div className="absolute -top-2 right-8 w-12 h-1 bg-gradient-to-r from-mylli-secondary to-mylli-accent rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Mission Section with Parallax - Updated with modern design */}
      <ParallaxSection 
        backgroundGradient="linear-gradient(135deg, rgba(0,70,122,0.85) 0%, rgba(0,119,192,0.75) 100%)"
        height="auto"
        className="py-24"
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
      
      {/* REDESIGNED: Coverage Area with ServiceLocations component */}
      <ServiceLocations 
        title="Notre Zone d'Intervention"
        subtitle="Nous intervenons principalement dans la région de Casablanca et ses environs, ainsi que dans d'autres villes du Maroc"
        locations={locations}
        className="py-20"
      />
      
      {/* Social Responsibility Section with modern interactive design */}
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
