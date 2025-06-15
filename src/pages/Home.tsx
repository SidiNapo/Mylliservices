import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, CheckCircle, Heart, Shield, Clock, Users, Award, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TestimonialCard from '@/components/common/TestimonialCard';
import ServiceCard from '@/components/common/ServiceCard';
import FeatureCollapsible from '@/components/common/FeatureCollapsible';
import ParallaxSection from '@/components/common/ParallaxSection';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { generateHomePageStructuredData } from '@/utils/structuredData';

const HomePage = () => {
  // Generate structured data for home page
  const structuredData = generateHomePageStructuredData();

  const testimonials = [
    {
      name: "Fatima El Amrani",
      rating: 5,
      text: "Service exceptionnel ! L'aide-soignante qui s'occupe de ma mère est très professionnelle et bienveillante. Je recommande vivement Mylli Services.",
      location: "Casablanca"
    },
    {
      name: "Mohammed Bennani",
      rating: 5,
      text: "Équipe très compétente et à l'écoute. Les soins infirmiers à domicile ont grandement facilité le rétablissement de mon père.",
      location: "Rabat"
    },
    {
      name: "Aicha Tazi",
      rating: 5,
      text: "Professionnalisme et humanité au rendez-vous. Merci à toute l'équipe pour votre dévouement.",
      location: "Mohammedia"
    }
  ];

  const features = [
    {
      title: "Une expérience de plus de 10 ans",
      description: "Notre expertise dans le domaine de l'aide à domicile nous permet de vous offrir des services de qualité supérieure.",
      image: "/lovable-uploads/6a55db69-574e-44c9-ab47-ec26a5d0d15d.png",
      items: [
        "Plus de 500 familles accompagnées",
        "Équipe certifiée et expérimentée",
        "Suivi personnalisé de chaque patient"
      ]
    },
    {
      title: "Une équipe compétente pour un service de qualité",
      description: "Nos professionnels de santé sont rigoureusement sélectionnés et formés pour répondre à vos besoins spécifiques.",
      image: "/lovable-uploads/49877d87-c346-42b9-a934-5154d13054ac.png",
      items: [
        "Personnel diplômé et certifié",
        "Formation continue de nos équipes",
        "Approche humaine et bienveillante"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Mylli Services - Aide à domicile professionnelle au Maroc" 
        description="Services d'aide à domicile de qualité : aide-soignant, infirmier, garde-malade. Équipe professionnelle à Casablanca, Rabat et environs." 
        keywords="aide domicile Maroc, aide-soignant, infirmier domicile, garde-malade, soins domicile Casablanca" 
        canonicalUrl="/" 
        structuredData={structuredData} 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-accent">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/90 via-mylli-secondary/80 to-mylli-accent/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Brand introduction */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <Sparkles className="w-5 h-5 mr-2 text-mylli-quaternary" />
                <span className="text-sm font-medium">Services de santé à domicile</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              <BrandName className="text-white mb-4 block" />
              <span className="bg-gradient-to-r from-white via-mylli-quaternary to-white bg-clip-text text-transparent">
                Votre bien-être à domicile
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in max-w-3xl mx-auto">
              Des professionnels de santé qualifiés pour vous accompagner dans le confort de votre foyer. 
              <span className="block mt-2 text-mylli-quaternary font-medium">Disponibles 24h/24 et 7j/7</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
              <Button asChild size="lg" className="btn-accent group relative overflow-hidden">
                <Link to="/services">
                  <span className="relative z-10 flex items-center">
                    Découvrir nos services
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm group">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  Nous contacter
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80 animate-fade-in">
              <div className="flex items-center">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-mylli-quaternary text-mylli-quaternary" />
                  ))}
                </div>
                <span className="text-sm">+500 familles satisfaites</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-mylli-quaternary" />
                <span className="text-sm">Agréé et certifié</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-mylli-quaternary" />
                <span className="text-sm">Disponible 24h/7j</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Une gamme complète de services de santé à domicile pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="Aide-Soignant(e) à Domicile"
              description="Assistance personnalisée pour les activités quotidiennes, soins d'hygiène et accompagnement bienveillant."
              image="/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png"
              features={["Soins d'hygiène corporelle", "Aide à la mobilité", "Accompagnement moral", "Surveillance générale"]}
              link="/services/aide-soignant"
              className="animate-fade-in-up"
            />
            
            <ServiceCard
              title="Infirmier(ère) à Domicile"
              description="Soins médicaux professionnels incluant injections, pansements et suivi médical rigoureux."
              image="/lovable-uploads/6dec9a42-92c0-4aa4-8c65-89a7b3a95c5b.png"
              features={["Injections et perfusions", "Pansements complexes", "Suivi post-opératoire", "Éducation thérapeutique"]}
              link="/services/infirmier"
              className="animate-fade-in-up delay-200"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
              Pourquoi Choisir <BrandName />?
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Notre engagement envers l'excellence et votre satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/20 via-transparent to-transparent"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-mylli-dark">Certifié</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-mylli-dark mb-4 group-hover:text-mylli-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-mylli-gray mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-mylli-gray">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Un processus simple et efficace pour accéder à nos services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Prise de Contact",
                description: "Contactez-nous par téléphone ou via notre formulaire pour discuter de vos besoins spécifiques.",
                icon: Phone,
                color: "from-mylli-primary to-mylli-secondary"
              },
              {
                step: "02", 
                title: "Évaluation Gratuite",
                description: "Un professionnel se déplace gratuitement pour évaluer la situation et établir un plan de soins personnalisé.",
                icon: Users,
                color: "from-mylli-secondary to-mylli-accent"
              },
              {
                step: "03",
                title: "Mise en Place",
                description: "Nous organisons rapidement l'intervention de nos professionnels selon vos besoins et disponibilités.",
                icon: CheckCircle,
                color: "from-mylli-accent to-mylli-quaternary"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative mb-8">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-mylli-quaternary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-mylli-dark mb-4 group-hover:text-mylli-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-mylli-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Leur satisfaction est notre plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 200}ms`}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/f34b6412-2bd2-410e-98f3-40493670590f.png"
        className="section-padding"
      >
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
              Prêt à Commencer ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <Button asChild size="lg" className="btn-accent group">
                <Link to="/contact">
                  <Phone className="mr-2 w-5 h-5" />
                  Appelez-nous maintenant
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
