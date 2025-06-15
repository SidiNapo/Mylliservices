
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, User, Home as HomeIcon, Clock, Shield, CheckCircle, Star, ArrowUpRight, Phone, X, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import ServiceLocations from '@/components/common/ServiceLocations';
import SEOHead from '@/components/seo/SEOHead';
import OptimizedImage from '@/components/seo/OptimizedImage';
import { generateHomepageStructuredData } from '@/utils/structuredData';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < 10) {
            return prevCount + 1;
          }
          clearInterval(interval);
          return prevCount;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Image rotation for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const careImages = [
    '/lovable-uploads/bc5d5201-c6c6-41c0-8594-5bef9171aea8.png',
    '/lovable-uploads/94cdeb85-c1e7-48bd-9d6f-66312af0fb9c.png',
    '/lovable-uploads/b078eb91-537d-4b59-bb66-5983988c4fab.png'
  ];

  const services = [
    {
      title: "Aide-soignant(e) à domicile",
      description: "Préservation de l'autonomie tout en accomplissant des actes de la vie quotidienne.",
      icon: <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
        <OptimizedImage 
          src="/lovable-uploads/2d768651-e0d0-42ed-925c-e0c72eba8ee1.png" 
          alt="Aide-soignant à domicile" 
          width={64} 
          height={64} 
          className="w-full h-full object-cover" 
        />
      </div>,
      link: "/services/aide-soignant"
    },
    {
      title: "Infirmier(ère) à domicile",
      description: "Soins médicaux à domicile comme alternative à l'hospitalisation.",
      icon: <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
        <OptimizedImage 
          src="/lovable-uploads/638e9202-dcc8-4b57-aeda-4e66c2ccc619.png" 
          alt="Infirmier à domicile" 
          width={64} 
          height={64} 
          className="w-full h-full object-cover" 
        />
      </div>,
      link: "/services/infirmier"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Rencontre à domicile",
      description: "Nous prenons le temps de vous rencontrer chez vous pour comprendre vos besoins spécifiques.",
      icon: <HomeIcon size={32} className="text-mylli-primary" />
    },
    {
      step: 2,
      title: "Proposition personnalisée",
      description: "Nous élaborons un devis sur mesure adapté à vos besoins spécifiques.",
      icon: <User size={32} className="text-mylli-secondary" />
    },
    {
      step: 3,
      title: "Présentation de l'intervenant",
      description: "Nous vous présentons le soignant qualifié qui vous accompagnera.",
      icon: <Heart size={32} className="text-mylli-quaternary" />
    },
    {
      step: 4,
      title: "Suivi de satisfaction",
      description: "Nous effectuons un suivi régulier pour garantir votre satisfaction.",
      icon: <CheckCircle size={32} className="text-mylli-accent" />
    }
  ];

  const testimonials = [
    {
      quote: "Grâce à Mylli Services, j'ai pu continuer à vivre chez moi, malgré ma perte partielle d'autonomie suite à un grave AVC...",
      name: "M. Mohamed B.",
      title: "68 ans",
      role: "bénéficiaire de l'aide à domicile",
      avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
      rating: 5,
      location: "Casablanca"
    },
    {
      quote: "J'ai trouvé en Mylli Services un appui considérable, ils me permettent d'apporter un maximum d'aide à ma mère...",
      name: "Mme Leïla T.",
      title: "52 ans",
      role: "fille du bénéficiaire",
      avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
      rating: 5,
      location: "Mohammedia"
    },
    {
      quote: "Avant Mylli Services j'étais complètement désarmé face à la maladie de ma mère, atteinte d'Alzheimer...",
      name: "M. Hicham S.",
      title: "43 ans",
      role: "fils du bénéficiaire",
      avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
      rating: 5,
      location: "Casablanca"
    }
  ];

  const features = [
    {
      icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
        <OptimizedImage 
          src="/lovable-uploads/bcfb5543-c570-4b98-99bf-0f68131cd2b4.png" 
          alt="Expérience professionnelle" 
          width={80} 
          height={80} 
          className="w-full h-full object-cover" 
        />
      </div>,
      title: "Une expérience de plus de 10 ans",
      description: "Personnel qualifié et vérifié pour une prise en charge en toute sécurité.",
      detailedDescription: "Plus de 10 ans d'expérience au service de la dignité humaine..."
    },
    {
      icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
        <OptimizedImage 
          src="/lovable-uploads/609a7402-4f73-4888-bedd-2256c3fbd997.png" 
          alt="Équipe compétente" 
          width={80} 
          height={80} 
          className="w-full h-full object-cover" 
        />
      </div>,
      title: "Une équipe compétente pour un service de qualité",
      description: "Accompagnement personnalisé et suivi régulier pour garantir votre satisfaction.",
      detailedDescription: "Des équipes engagées, compétentes et à l'écoute..."
    },
    {
      icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
        <OptimizedImage 
          src="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png" 
          alt="Disponibilité 24/7" 
          width={80} 
          height={80} 
          className="w-full h-full object-cover" 
        />
      </div>,
      title: "Disponibilité 24/7 avec un service personnalisé",
      description: "Notre équipe est disponible jour et nuit pour répondre à vos besoins.",
      detailedDescription: "Un accompagnement disponible 24h/24 et 7j/7..."
    }
  ];

  const serviceLocations = [
    { city: "Casablanca", areas: [], highlight: false },
    { city: "Mohammedia", areas: [] },
    { city: "Bouskoura", areas: [] },
    { city: "Dar Bouazza", areas: [] },
    { city: "Marrakech", areas: [] },
    { city: "Rabat", areas: [] },
    { city: "Salé", areas: [] }
  ];

  const structuredData = generateHomepageStructuredData();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead 
        title="Mylli Services - Aide à Domicile Professionnelle à Casablanca | Depuis 2014" 
        description="Depuis 2014, première société au Maroc spécialisée dans les soins et l'accompagnement à domicile des personnes en perte d'autonomie." 
        keywords="aide à domicile Casablanca, soins à domicile, infirmier à domicile, aide-soignant, garde-malade, services médicaux domicile, Mohammedia, Marrakech" 
        canonicalUrl="/" 
        structuredData={structuredData} 
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-mylli-dark/80 via-mylli-primary/60 to-mylli-dark/70 z-10"></div>
            <div className="absolute inset-0 overflow-hidden">
              {careImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                    activeImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={img} 
                    alt="Professional care services" 
                    className="absolute w-full h-full object-cover object-center filter brightness-75" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="container-custom relative z-20 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                  <span className="block text-white mb-2">NOUS SOMMES LÀ POUR VOUS</span>
                  <span className="block text-white">AIDER!</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-10 max-w-2xl leading-relaxed text-white px-2 sm:px-0">
                  Depuis <span className="text-white font-bold">2014</span>, première société au Maroc spécialisée dans les soins et l'accompagnement à domicile des personnes en perte d'autonomie.
                </p>
                
                <div className="mt-8 mb-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto lg:mx-0">
                  <Link to="/apropos" className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/15 rounded-xl border border-white/30 hover:border-mylli-secondary/50 transition-all duration-300 hover:scale-105">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-mylli-secondary">{isVisible ? '+10' : '0'}</p>
                    <p className="text-xs sm:text-sm text-white leading-tight">années d'expérience</p>
                  </Link>
                  <button onClick={() => scrollToSection('testimonials-heading')} className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/15 rounded-xl border border-white/30 hover:border-mylli-primary/50 transition-all duration-300 hover:scale-105">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-mylli-quaternary">{isVisible ? '+4500' : '0'}</p>
                    <p className="text-xs sm:text-sm text-white leading-tight">Interventions</p>
                  </button>
                  <div className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/15 rounded-xl border border-white/30">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-mylli-quaternary">{isVisible ? '24/7' : '0'}</p>
                    <p className="text-xs sm:text-sm text-white leading-tight">disponibilité</p>
                  </div>
                </div>
              </div>
              
              <aside className="relative flex justify-center items-center mt-8 lg:mt-0">
                <article className="relative max-w-sm sm:max-w-md w-full mx-4 sm:mx-0">
                  <div className="relative backdrop-blur-lg bg-white/15 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center" 
                        style={{
                          backgroundImage: `url(${careImages[activeImage]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/90 via-mylli-dark/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Soins professionnels</h3>
                        <p className="text-white/95 text-sm font-medium">Accompagnement personnalisé à domicile</p>
                      </div>
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
                        {careImages.map((_, index) => (
                          <button 
                            key={index} 
                            onClick={() => setActiveImage(index)} 
                            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 border border-white/50 ${
                              activeImage === index ? 'bg-mylli-secondary scale-110' : 'bg-white/30 hover:bg-white/50'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm">
                      <p className="leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 text-white/90">
                        Nous sommes spécialement formés pour garantir des services de qualité aux personnes atteintes de maladies chroniques handicapantes.
                      </p>
                      <Button asChild variant="outline" className="w-full border-white/30 text-black bg-white hover:bg-white/90">
                        <Link to="/apropos#mot-du-fondateur" className="flex items-center justify-center">
                          Mot du Président
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-mylli-light/30">
          <div className="container-custom">
            <SectionHeading 
              title="Des services Sur mesure pour vous accompagner a domicile" 
              variant="animated" 
              highlightText="Sur mesure" 
              className="text-center mb-16" 
              id="features-heading" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-2xl p-8 hover:-translate-y-3 hover:shadow-3xl transition-all duration-500">
                  <div className="flex justify-center mb-8">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-mylli-primary">
                    {feature.title}
                  </h3>
                  <p className="text-mylli-gray text-center mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <button 
                    onClick={() => setSelectedFeature(index)} 
                    className="w-full text-center font-semibold flex items-center justify-center py-3 px-6 rounded-xl border text-mylli-primary border-mylli-primary/20 hover:bg-mylli-primary hover:text-white transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white font-medium hover:scale-105 transition-all duration-300">
                <span className="mr-2">Découvrir nos services</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="section-padding bg-gradient-to-br from-mylli-light to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-soft">
                  <OptimizedImage 
                    src="/lovable-uploads/f93fedca-b6df-4264-9427-93f0e22541cd.png" 
                    alt="Logo Mylli Services" 
                    width={400} 
                    height={256} 
                    className="w-full h-auto max-h-64 object-contain mx-auto mb-6" 
                  />
                  <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                    <div className="flex items-center bg-mylli-light p-3 rounded-lg">
                      <span className="text-mylli-primary text-4xl font-bold">10</span>
                      <span className="ml-2 text-mylli-dark">années<br />d'expérience</span>
                    </div>
                    <div className="flex items-center bg-mylli-light p-3 rounded-lg">
                      <span className="text-mylli-secondary text-4xl font-bold">24/7</span>
                      <span className="ml-2 text-mylli-dark">service<br />disponible</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <SectionHeading 
                  title="Plus de 10 ans au service de laccompagnment a domicile" 
                  subtitle="Depuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc." 
                  align="left" 
                  variant="gradient" 
                  id="about-heading" 
                />
                <div className="text-lg text-mylli-gray mb-8 leading-relaxed">
                  <p className="mb-4">
                    Cette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif et humain, en toutes circonstances.
                  </p>
                  <p>
                    Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de haute qualité.
                  </p>
                </div>
                <Button asChild className="bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white">
                  <Link to="/apropos">
                    En savoir plus sur nous 
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="section-padding bg-mylli-light/50">
          <div className="container-custom">
            <SectionHeading 
              title="Nos Services" 
              subtitle="Des soins professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile." 
              variant="gradient" 
              id="services-heading" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-mylli-dark text-center">
                    {service.title}
                  </h3>
                  <p className="text-mylli-gray mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      Découvrir 
                      <ArrowUpRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white">
                <Link to="/services">
                  Voir tous nos services 
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="section-padding bg-gradient-to-br from-mylli-light/30 via-white to-mylli-primary/5">
          <div className="container-custom">
            <SectionHeading 
              title="Un accompagnement personnalisé en 4 étapes" 
              subtitle="Découvrez notre processus simple et efficace pour vous offrir les meilleurs soins à domicile." 
              variant="gradient" 
              id="how-it-works-heading" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="relative">
                <div className="bg-white p-3 rounded-3xl shadow-2xl">
                  <OptimizedImage 
                    src="/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png"
                    alt="Professional healthcare services"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                {howItWorks.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-mylli-primary/5 border border-mylli-primary/20 flex items-center justify-center mb-3">
                          <span className="text-xl sm:text-2xl font-bold text-mylli-primary">
                            {item.step}
                          </span>
                        </div>
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-mylli-primary/5 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-mylli-primary">
                          {item.title}
                        </h3>
                        <p className="text-mylli-gray leading-relaxed text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button asChild className="bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white">
                <Link to="/fonctionnement">
                  <Clock size={20} className="mr-3" />
                  Découvrir notre processus complet
                  <ArrowRight size={20} className="ml-3" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Service Locations */}
        <ServiceLocations 
          locations={serviceLocations} 
          title="Nos Zones d'Intervention" 
          subtitle="Mylli Services propose des soins à domicile professionnels dans toute la région de Casablanca." 
        />
        
        {/* Testimonials Section */}
        <section className="section-padding bg-gradient-to-br from-mylli-primary/5 to-mylli-light">
          <div className="container-custom">
            <SectionHeading 
              title="Ce que disent nos clients" 
              subtitle="Découvrez les témoignages authentiques de nos bénéficiaires et de leurs familles." 
              variant="gradient" 
              id="testimonials-heading" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-mylli-dark mb-4">
                  Faites partie de nos témoignages
                </h3>
                <p className="text-mylli-gray text-lg mb-6 max-w-2xl mx-auto">
                  Rejoignez des centaines de familles qui nous font confiance pour accompagner leurs proches.
                </p>
                <Button asChild className="bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white">
                  <Link to="/contact">
                    <Phone size={18} className="mr-3" />
                    Rejoignez-nous
                    <ArrowRight size={18} className="ml-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Details Modal */}
      {selectedFeature !== null && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-mylli-primary to-mylli-primary-dark">
              <button 
                onClick={() => setSelectedFeature(null)} 
                className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                  {features[selectedFeature].icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {features[selectedFeature].title}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {features[selectedFeature].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <p className="text-mylli-gray leading-relaxed mb-6">
                {features[selectedFeature].detailedDescription}
              </p>
              <div className="flex gap-4 justify-end">
                <Button variant="outline" onClick={() => setSelectedFeature(null)}>
                  Fermer
                </Button>
                <Button asChild className="bg-mylli-primary hover:bg-mylli-primary-dark">
                  <Link to="/contact">
                    Contactez-nous
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
