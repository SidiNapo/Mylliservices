import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, User, Clock, Shield, CheckCircle, Phone, MapPin, Star, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { generateHomepageStructuredData } from '@/utils/structuredData';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Generate structured data for home page
  const structuredData = generateHomepageStructuredData();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const services = [
    {
      title: "Aide aux personnes âgées",
      description: "Nos auxiliaires de vie offrent un accompagnement personnalisé pour les seniors, favorisant leur autonomie et leur bien-être à domicile.",
      image: "/lovable-uploads/0894d92c-7953-44e9-8a3f-4494999a1519.png",
      link: "/services/aide-personnes-agees"
    },
    {
      title: "Garde malade",
      description: "Nos gardes malades assurent une présence rassurante et une surveillance attentive, de jour comme de nuit, pour les personnes nécessitant une assistance continue.",
      image: "/lovable-uploads/9591495f-787a-4ae7-b914-58599686c995.png",
      link: "/services/garde-malade"
    },
    {
      title: "Aide à la mobilité",
      description: "Nos professionnels qualifiés offrent une assistance douce et sécurisée pour les personnes à mobilité réduite, facilitant leurs déplacements et leur participation aux activités quotidiennes.",
      image: "/lovable-uploads/4285039b-e554-499a-894f-16b382449e1f.png",
      link: "/services/aide-mobilite"
    },
    {
      title: "Aide aux personnes handicapées",
      description: "Nous offrons un soutien adapté aux personnes handicapées, en les aidant à réaliser leurs activités quotidiennes et à s'épanouir pleinement dans leur environnement.",
      image: "/lovable-uploads/69991307-59a9-418d-8c91-7547c9ff0f4f.png",
      link: "/services/aide-personnes-handicapees"
    },
    {
      title: "Aide ménagère",
      description: "Nos aides ménagères qualifiées prennent en charge les tâches ménagères courantes, vous offrant un intérieur propre et agréable pour vous détendre et profiter de votre temps libre.",
      image: "/lovable-uploads/9899899b-60a2-40c1-8959-db2593a79493.png",
      link: "/services/aide-menagere"
    },
    {
      title: "Soins infirmiers à domicile",
      description: "Nos infirmiers qualifiés prodiguent des soins médicaux personnalisés à domicile, assurant votre confort et votre bien-être dans un environnement familier.",
      image: "/lovable-uploads/35c6e359-a4ff-4989-84a9-5a39999c5835.png",
      link: "/services/soins-infirmiers"
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Contactez-nous",
      description: "Prenez contact avec notre équipe pour discuter de vos besoins et de vos attentes.",
      icon: User
    },
    {
      number: "02",
      title: "Évaluation personnalisée",
      description: "Nous réalisons une évaluation approfondie de votre situation afin de vous proposer un plan d'aide sur mesure.",
      icon: Clock
    },
    {
      number: "03",
      title: "Mise en place de l'aide",
      description: "Nous sélectionnons l'intervenant(e) idéal(e) et mettons en place les services d'aide à domicile adaptés à vos besoins.",
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: "Nadia B.",
      text: "Grâce à Mylli Services, ma mère est bien entourée et peut rester chez elle en toute sécurité. Je suis très reconnaissante pour leur professionnalisme et leur gentillesse.",
      image: "/testimonials/nadia.jpg",
      stars: 5
    },
    {
      name: "Ahmed S.",
      text: "J'ai été très satisfait des services de garde malade de Mylli Services. L'intervenant était compétent, attentionné et toujours à l'écoute de mes besoins.",
      image: "/testimonials/ahmed.jpg",
      stars: 4
    },
    {
      name: "Fatima Z.",
      text: "Mylli Services m'a permis de retrouver une vie sociale et de me sentir moins isolée. Leur aide ménagère est efficace et discrète, et leur équipe est toujours disponible pour répondre à mes questions.",
      image: "/testimonials/fatima.jpg",
      stars: 5
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Mylli Services - Aide à domicile professionnelle à Casablanca" 
        description="Mylli Services: Votre partenaire de confiance pour l'aide à domicile à Casablanca. Services d'aide-soignant, infirmier, garde-malade et plus." 
        keywords="aide domicile Casablanca, aide-soignant, infirmier, garde-malade, soins à domicile, assistance personnes âgées" 
        canonicalUrl="/" 
        structuredData={structuredData} 
      />

      {/* Hero Section */}
      <section className="hero-section bg-mylli-primary/5 py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="hero-content animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mylli-dark mb-6 leading-tight">
                Votre partenaire de confiance pour l'aide à domicile à Casablanca
              </h1>
              <p className="text-lg text-mylli-gray mb-8">
                Des services d'aide à domicile personnalisés pour vous accompagner au quotidien et vous permettre de vivre sereinement chez vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-primary">
                  <Link to="/services">Découvrez nos services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image animate-fade-in-right">
              <img
                src="/lovable-uploads/4966958a-63c3-4c1c-98a3-4b633a089b4d.png"
                alt="Aide à domicile à Casablanca"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-mylli-dark mb-12">Nos services d'aide à domicile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-mylli-dark mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="step-card bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="step-number text-5xl font-bold text-mylli-primary mb-4">{step.number}</div>
                <div className="step-icon text-mylli-secondary mb-4">
                  <step.icon size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-mylli-dark mb-2">{step.title}</h3>
                <p className="text-mylli-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Exécution d'ordonnance médicale */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with uploaded healthcare image */}
            <div className="animate-fade-in-right order-2 lg:order-1">
              <div className="relative group">
                {/* Enhanced background with gradient */}
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-6 transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/f34b6412-2bd2-410e-98f3-40493670590f.png" 
                      alt="Professionnel de santé exécutant une ordonnance médicale" 
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/20 via-transparent to-transparent rounded-xl"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-mylli-dark">Service Actif</span>
                      </div>
                    </div>
                    
                    {/* Bottom info card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-mylli-dark">Soins Professionnels</h4>
                          <p className="text-sm text-mylli-gray">Selon prescription médicale</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center">
                          <Heart size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-mylli-secondary to-mylli-accent rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Heart size={24} className="text-white" />
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-mylli-quaternary to-mylli-primary rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Content - enhanced with better styling */}
            <div className="animate-fade-in-left order-1 lg:order-2">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6 leading-tight">
                    Exécution d'ordonnance médicale
                  </h2>
                  
                  <p className="text-mylli-gray mb-6 text-lg leading-relaxed">
                    Nos professionnels de santé assurent le suivi rigoureux des prescriptions médicales. Ce service comprend l'administration correcte des médicaments, le suivi des traitements, les injections, pansements et autres soins prescrits par le médecin.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Administration de médicaments selon les prescriptions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Surveillance des effets secondaires et interactions médicamenteuses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Communication régulière avec le médecin traitant</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Tenue d'un dossier médical précis et à jour</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="btn-primary group">
                    <Link to="/services/infirmier" className="flex items-center">
                      En savoir plus sur nos services infirmiers
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Experience Content */}
            <div className="experience-content animate-fade-in-left">
              <h2 className="text-3xl font-bold text-mylli-dark mb-6">
                Plus de 10 ans d'expérience à votre service
              </h2>
              <p className="text-lg text-mylli-gray mb-8">
                Forte de plus de 10 ans d'expérience dans le domaine de l'aide à domicile, Mylli Services vous garantit un accompagnement de qualité, adapté à vos besoins et réalisé par des professionnels qualifiés.
              </p>
              <ul className="list-disc list-inside text-mylli-gray">
                <li>Professionnels qualifiés et expérimentés</li>
                <li>Services personnalisés et adaptés à vos besoins</li>
                <li>Suivi régulier et accompagnement de qualité</li>
              </ul>
            </div>

            {/* Experience Image */}
            <div className="experience-image animate-fade-in-right">
              <img
                src="/lovable-uploads/9899899b-60a2-40c1-8959-db2593a79493.png"
                alt="Professionnels qualifiés et expérimentés"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Zones */}
      <section className="service-zones section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-mylli-dark mb-12">
            Nos zones d'intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-zone-card bg-white rounded-2xl shadow-md p-6 text-center">
              <MapPin size={48} className="mx-auto text-mylli-primary mb-4" />
              <h3 className="text-xl font-semibold text-mylli-dark mb-2">Casablanca</h3>
              <p className="text-mylli-gray">Nous intervenons dans tous les quartiers de Casablanca.</p>
            </div>
            <div className="service-zone-card bg-white rounded-2xl shadow-md p-6 text-center">
              <MapPin size={48} className="mx-auto text-mylli-primary mb-4" />
              <h3 className="text-xl font-semibold text-mylli-dark mb-2">Mohammedia</h3>
              <p className="text-mylli-gray">Nous intervenons également à Mohammedia et ses environs.</p>
            </div>
            <div className="service-zone-card bg-white rounded-2xl shadow-md p-6 text-center">
              <MapPin size={48} className="mx-auto text-mylli-primary mb-4" />
              <h3 className="text-xl font-semibold text-mylli-dark mb-2">Dar Bouazza</h3>
              <p className="text-mylli-gray">Nous intervenons aussi à Dar Bouazza et sa région.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-mylli-dark mb-12">Ce que nos clients disent de nous</h2>
          <div className="max-w-2xl mx-auto">
            <TestimonialCard {...testimonials[currentTestimonial]} />
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentTestimonial ? 'bg-mylli-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-padding bg-mylli-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* CTA Content */}
            <div className="cta-content animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6">Besoin d'aide à domicile ?</h2>
              <p className="text-lg mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>
              <Button asChild className="btn-secondary">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </div>

            {/* CTA Image */}
            <div className="cta-image animate-fade-in-right">
              <img
                src="/images/cta-image.jpg"
                alt="Contactez-nous pour un devis personnalisé"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
