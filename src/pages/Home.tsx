import { Link } from 'react-router-dom';
import { ArrowRight, Heart, User, Home as HomeIcon, Clock, Shield, CheckCircle, Star, ArrowUpRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import ContactForm from '@/components/common/ContactForm';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  // For the animated counter effect
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [hoverCard, setHoverCard] = useState(-1);

  // For mouse parallax effect
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      clientX,
      clientY
    } = e;
    const {
      left,
      top,
      width,
      height
    } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({
      x,
      y
    });
  };

  // For animated counter
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Animate count when section is visible
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

  // Image rotation effect for hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Images for the hero background
  const careImages = [
    '/lovable-uploads/814f2ab3-ccf7-489c-a719-2651c104e2b6.png',
    '/lovable-uploads/cfbe77b8-0c6a-4e5c-b8f4-b2fb19e403a5.png',
    '/lovable-uploads/5d0ce080-c5a4-42a8-8249-c2a0a65b787a.png'
  ];

  // Sample data for services
  const services = [{
    title: "Aide-soignant(e) à domicile",
    description: "Préservation de l'autonomie tout en accomplissant des actes de la vie quotidienne.",
    icon: <User size={40} strokeWidth={1.5} className="text-mylli-primary" />,
    link: "/services/aide-soignant"
  }, {
    title: "Infirmier(ère) à domicile",
    description: "Soins médicaux à domicile comme alternative à l'hospitalisation.",
    icon: <Heart size={40} strokeWidth={1.5} className="text-mylli-primary" />,
    link: "/services/infirmier"
  }, {
    title: "Services de garde-malade",
    description: "Présence continue et surveillance pour les personnes fragiles, jour, nuit ou 24h/24.",
    icon: <Clock size={40} strokeWidth={1.5} className="text-mylli-primary" />,
    link: "/services/garde-malade"
  }];

  // Sample data for how it works
  const howItWorks = [{
    step: 1,
    title: "Rencontre à domicile",
    description: "Nous prenons le temps de vous rencontrer chez vous pour comprendre vos besoins."
  }, {
    step: 2,
    title: "Proposition personnalisée",
    description: "Nous élaborons un devis sur mesure adapté à vos besoins spécifiques."
  }, {
    step: 3,
    title: "Présentation de l'intervenant",
    description: "Nous vous présentons le soignant qui vous accompagnera."
  }, {
    step: 4,
    title: "Suivi de satisfaction",
    description: "Nous effectuons un suivi régulier pour garantir votre satisfaction."
  }];

  // Sample data for testimonials
  const testimonials = [{
    quote: "Grâce à Mylli Services, ma mère peut rester à son domicile en toute sécurité. Un personnel attentionné et très professionnel.",
    name: "Nadia M.",
    title: "58 ans"
  }, {
    quote: "La garde de nuit a changé notre quotidien. Notre père est bien entouré et nous pouvons enfin dormir tranquilles.",
    name: "Karim L.",
    title: "45 ans"
  }, {
    quote: "L'infirmière qui s'occupe de ma tante est d'une gentillesse et d'un professionnalisme remarquables.",
    name: "Sophia B.",
    title: "52 ans"
  }];

  // Features section data
  const features = [
    {
      icon: <Shield className="text-mylli-primary h-12 w-12" />,
      title: "Sécurité & Confiance",
      description: "Personnel qualifié et vérifié pour une prise en charge en toute sécurité"
    },
    {
      icon: <Star className="text-mylli-secondary h-12 w-12" />,
      title: "Qualité de service",
      description: "Accompagnement personnalisé et suivi régulier de votre satisfaction"
    },
    {
      icon: <Clock className="text-mylli-quaternary h-12 w-12" />,
      title: "Disponibilité 24/7",
      description: "Une équipe disponible jour et nuit pour répondre à vos besoins"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - With Updated Color Scheme based on logo */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Modern layered background with images */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay - updated to logo colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-mylli-dark/80 via-mylli-primary/60 to-mylli-dark/70 z-10"></div>
          
          {/* Modern image gallery */}
          <div className="absolute inset-0 overflow-hidden">
            {careImages.map((img, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={img} 
                  alt="Professional care services" 
                  className="absolute w-full h-full object-cover object-center filter brightness-[0.75]"
                />
              </div>
            ))}
          </div>
          
          {/* Geometric patterns for modern look - logo colors */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-mylli-primary opacity-30 blur-3xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-mylli-secondary opacity-20 blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-mylli-quaternary opacity-20 blur-2xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Elegant grid overlay for modern touch */}
          <div className="absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDc3QzAxMCIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0zNiAxOGgtMTJWNmgxMnYxMnptMCAxMmgtMTJWMThoMTJ2MTJ6bTAgMTJoLTEyVjMwaDEydjEyem0xMi0yNGgtMTJWNmgxMnYxMnptMCAxMmgtMTJWMThoMTJ2MTJ6bTAgMTJoLTEyVjMwaDEydjEyIiBmaWxsPSIjMDA5OUU4MTAiLz48L2c+PC9zdmc+')]"></div>
        </div>
        
        {/* Main content */}
        <div className="container-custom relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative mb-6">
                <span className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glass">
                  <span className="animate-pulse text-mylli-secondary">★</span> Depuis 2014
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="block relative overflow-hidden">
                  <span className="block transform transition-transform animate-fade-in text-white">NOUS SOMMES LÀ</span>
                </span>
                <span className="block mt-2 relative overflow-hidden">
                  <span className="block transform transition-transform animate-fade-in delay-[300ms] text-white">POUR VOUS <span className="relative inline-block animate-wave origin-[70%_70%]">🤝</span></span>
                </span>
                <span className="block mt-2 text-gradient animate-text-gradient bg-[length:200%]">
                  AIDER!
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-xl animate-fade-in delay-[600ms] leading-relaxed text-white">
                Depuis <span className="text-mylli-secondary font-bold">{count}</span> ans, aide à domicile des personnes en perte d'autonomie
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:justify-start animate-fade-in delay-[900ms]">
                <Button asChild className="relative group overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:shadow-neon transition-all duration-300">
                  <Link to="/services" className="relative z-10 flex items-center text-white font-medium">
                    Découvrir nos services
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-mylli-quaternary to-mylli-primary blur-sm group-hover:opacity-80 opacity-0 transition-opacity -z-10"></span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="backdrop-blur-sm bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 px-8 py-6 rounded-full shadow-glass">
                  <Link to="/contact">
                    Contactez-nous
                  </Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 animate-fade-in delay-[1200ms]">
                <div className="text-center p-3 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-mylli-secondary/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-mylli-secondary">{isVisible ? '10+' : '0'}</p>
                  <p className="text-xs text-white">années d'expérience</p>
                </div>
                <div className="text-center p-3 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-mylli-primary/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-mylli-primary">{isVisible ? '500+' : '0'}</p>
                  <p className="text-xs text-white">clients satisfaits</p>
                </div>
                <div className="text-center p-3 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-mylli-quaternary/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-mylli-quaternary">{isVisible ? '24/7' : '0'}</p>
                  <p className="text-xs text-white">disponibilité</p>
                </div>
              </div>
            </div>
            
            {/* Right column: Visual Element - Care highlight card with logo colors */}
            <div className="relative flex justify-center items-center">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-mylli-quaternary/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mylli-secondary/30 rounded-full filter blur-3xl"></div>
              
              {/* Modern content card with image thumbnails */}
              <div className="relative max-w-md w-full backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-glass overflow-hidden">
                {/* Logo display */}
                <div className="absolute top-4 right-4 z-30 bg-white/90 p-2 rounded-full shadow-md">
                  <div className="w-12 h-12 relative">
                    <img 
                      src="/lovable-uploads/1c035456-39b2-452e-8fb0-71bcc202e7d1.png" 
                      alt="Mylli Services Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Top photo highlight */}
                <div className="relative h-48 overflow-hidden group">
                  <img 
                    src={careImages[activeImage]} 
                    alt="Service de soins" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">Soins professionnels</h3>
                    <p className="text-white/90 text-sm">Accompagnement personnalisé à domicile</p>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-6 text-white">
                  <p className="mb-4 text-sm">
                    Nos professionnels qualifiés vous accompagnent avec respect et dignité dans votre quotidien, offrant des soins adaptés à vos besoins spécifiques.
                  </p>
                  
                  {/* Image selector - modern touch with logo colors */}
                  <div className="flex space-x-2 mb-4">
                    {careImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeImage === index ? 'bg-mylli-secondary w-6' : 'bg-white/30'}`}
                        aria-label={`Image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full border-white/30 text-black hover:bg-white/20">
                    <Link to="/services">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave - updated color to match logo */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C69,91.27,141.43,76.12,213.33,66.11Z" fill="currentColor"></path>
          </svg>
        </div>
        
        {/* Mouse scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-fade-in delay-[1500ms]">
          <p className="text-sm text-white/80 mb-2">Découvrir</p>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 animate-[float_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>
      
      {/* Feature Section - redesigned with logo colors */}
      <section className="py-16 bg-gradient-to-b from-white to-mylli-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-mylli-primary/10 text-mylli-primary mb-3">
              Pourquoi nous choisir
            </span>
            <SectionHeading 
              title="Des services d'exception pour votre bien-être" 
              variant="split"
              highlightText="exception"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`feature-card border-none shadow-soft hover:shadow-md hover:border hover:border-mylli-primary/30 ${index === 1 ? "md:mt-8" : ""}`}>
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-mylli-primary/20 to-mylli-secondary/20 blur-sm"></div>
                    <div className="relative bg-white rounded-full p-3 inline-block shadow-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-mylli-dark">{feature.title}</h3>
                  <p className="text-mylli-gray">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center bg-white rounded-lg p-4 shadow-soft border-l-4 border-mylli-primary">
              <div className="bg-mylli-primary/10 rounded-full p-3">
                <Shield className="h-6 w-6 text-mylli-primary" />
              </div>
              <p className="ml-3 text-sm font-medium">Personnel qualifié</p>
            </div>
            <div className="flex items-center bg-white rounded-lg p-4 shadow-soft border-l-4 border-mylli-secondary">
              <div className="bg-mylli-secondary/10 rounded-full p-3">
                <Heart className="h-6 w-6 text-mylli-secondary" />
              </div>
              <p className="ml-3 text-sm font-medium">Approche humaine</p>
            </div>
            <div className="flex items-center bg-white rounded-lg p-4 shadow-soft border-l-4 border-mylli-quaternary">
              <div className="bg-mylli-quaternary/10 rounded-full p-3">
                <Star className="h-6 w-6 text-mylli-quaternary" />
              </div>
              <p className="ml-3 text-sm font-medium">Services personnalisés</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section - Updated with gradient and logo image */}
      <section className="section-padding bg-gradient-to-br from-mylli-light to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-soft overflow-hidden">
                  <img 
                    src="/lovable-uploads/1c035456-39b2-452e-8fb0-71bcc202e7d1.png" 
                    alt="Mylli Services Logo" 
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
            </div>
            
            <div>
              <SectionHeading 
                title="Depuis 10 ans à vos côtés" 
                subtitle="Mylli Services vous accompagne depuis 2014 avec un engagement constant pour préserver l'autonomie et la dignité des personnes fragilisées à leur domicile." 
                align="left" 
                variant="modern"
                highlightColor="mylli-primary"
              />
              
              <div className="text-lg text-mylli-gray mb-8 animate-fade-in leading-relaxed">
                <p className="mb-4">
                  Notre équipe de professionnels qualifiés offre une approche humaine et personnalisée adaptée aux besoins spécifiques de chaque patient.
                </p>
                <p>
                  Grâce à notre expérience et notre dévouement, nous permettons aux personnes en perte d'autonomie de rester chez elles dans les meilleures conditions possibles.
                </p>
              </div>
              
              <div className="animate-fade-in flex">
                <Button asChild className="relative group overflow-hidden rounded-full px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:shadow-neon transition-all duration-300">
                  <Link to="/apropos" className="relative z-10 flex items-center text-white font-medium">
                    En savoir plus sur nous <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-mylli-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-mylli-secondary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Services Section - Updated with color scheme and better card design */}
      <section className="section-padding bg-mylli-light/50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Nos Services" 
            subtitle="Des soins professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile."
            variant="gradient" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => (
              <div key={index} 
                className={`bg-white rounded-xl p-6 shadow-soft border border-transparent transition-all duration-300 hover:shadow-md hover:border-mylli-primary/20 hover:-translate-y-1 relative overflow-hidden ${
                  hoverCard === index ? 'shadow-md border-mylli-primary/20 -translate-y-1' : ''
                }`}
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(-1)}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-mylli-primary to-mylli-quaternary"></div>
                <div className="pl-4">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-mylli-dark">{service.title}</h3>
                  <p className="text-mylli-gray mb-4">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="flex items-center text-mylli-primary font-medium group"
                  >
                    Découvrir 
                    <ArrowUpRight size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Button asChild className="btn-primary bg-mylli-primary hover:bg-mylli-primary-dark">
              <Link to="/services">
                Voir tous nos services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-mylli-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-mylli-quaternary/5 blur-3xl"></div>
      </section>
      
      {/* How It Works Section - Updated with better visual connection */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Notre Fonctionnement" 
            subtitle="Une approche simple et efficace pour mettre en place un accompagnement parfaitement adapté à vos besoins." 
            variant="split"
            highlightText="Fonctionnement"
          />
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-mylli-primary via-mylli-secondary to-mylli-quaternary hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {howItWorks.map((item, index) => (
                <div key={index} className={`relative ${index % 2 === 1 ? "md:translate-y-16" : ""}`}>
                  {/* Connection point */}
                  <div className="absolute left-1/2 top-8 w-6 h-6 -ml-3 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-secondary hidden md:block"></div>
                  
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 transition-all duration-300 hover:shadow-card hover:border-mylli-primary/20 animate-fade-in ml-0 md:ml-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-mylli-light rounded-bl-3xl flex items-start justify-end p-2">
                      <span className="text-mylli-primary font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-mylli-dark">{item.title}</h3>
                    <p className="text-mylli-gray max-w-[80%]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center animate-fade-in">
            <Button asChild variant="outline" className="border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white">
              <Link to="/fonctionnement">
                En savoir plus sur notre fonctionnement <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-20 right-0 opacity-5">
          <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0077C0" d="M40.8,-70.3C52.6,-61.8,61.4,-49.5,67.8,-36.1C74.1,-22.7,77.9,-8.3,76.8,6.1C75.7,20.5,69.8,34.9,60.3,45.2C50.9,55.5,37.9,61.8,24.4,64.8C10.9,67.8,-3,67.5,-17.5,65.3C-32,63.1,-47.1,58.9,-54.4,48.5C-61.8,38.2,-61.3,21.6,-64.3,5.5C-67.4,-10.6,-74.1,-26.3,-71,-39.9C-67.9,-53.5,-55.1,-65,-40.9,-72.9C-26.7,-80.9,-11.1,-85.2,2.5,-89.4C16,-93.7,29,-78.8,40.8,-70.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute bottom-10 left-0 opacity-5">
          <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E02E31" d="M44.3,-76C57.9,-69.1,69.7,-57.9,76.7,-44.5C83.8,-31.1,86.2,-15.5,84.6,-1C83.1,13.5,77.7,27,69.3,38.6C60.9,50.3,49.5,60.2,36.7,65C23.9,69.8,9.7,69.5,-3.6,75.7C-17,81.8,-34,94.5,-46.3,92.7C-58.6,90.9,-66.3,74.7,-70.8,58.9C-75.2,43.1,-76.4,27.9,-78.1,13C-79.7,-1.9,-81.7,-16.5,-77.6,-29.4C-73.4,-42.4,-63.1,-53.7,-50.3,-60.7C-37.6,-67.7,-22.5,-70.4,-7.4,-68.5C7.7,-66.6,30.7,-82.9,44.3,-76Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>
      
      {/* Testimonial Section - Updated with new card style */}
      <section className="section-padding bg-gradient-to-br from-mylli-primary/5 to-mylli-light">
        <div className="container-custom">
          <SectionHeading 
            title="Ce que disent nos clients" 
            subtitle="La confiance et la satisfaction de nos clients sont notre plus grande fierté."
            variant="gradient" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-soft relative overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                {/* Banner top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary"></div>
                
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 text-8xl text-mylli-primary/5 group-hover:text-mylli-primary/10 transition-colors duration-300">
                  "
                </div>
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-mylli-secondary" fill="#E02E31" />
                      ))}
                    </div>
                  </div>
                  <p className="italic text-mylli-gray mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-quaternary text-white flex items-center justify-center font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-mylli-dark">{testimonial.name}</p>
                      <p className="text-sm text-mylli-gray">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-mylli-primary/20 to-transparent"></div>
              </div>
            ))}
          </div>
          
          {/* Trust banner */}
          <div className="mt-16 bg-white rounded-xl p-6 shadow-soft border border-mylli-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-mylli-dark mb-2">Rejoignez nos clients satisfaits</h3>
                <p className="text-mylli-gray">Une équipe dévouée à votre service pour un accompagnement de qualité</p>
              </div>
              <Button asChild className="mt-4 md:mt-0 bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:from-mylli-primary-dark hover:to-mylli-quaternary rounded-full">
                <Link to="/contact" className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Contact Section - Updated with logo colors */}
      <section className="section-padding bg-gradient-to-r from-mylli-dark via-mylli-primary to-mylli-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-right">
              <div className="inline-block px-3 py-1 bg-white/10 text-white/90 rounded-full mb-6">
                Besoin d'aide?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Un service d'<span className="text-mylli-secondary">accompagnement</span> adapté à vos besoins</h2>
              <p className="text-lg opacity-90 mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques. Notre équipe est à votre écoute pour vous proposer une solution adaptée à votre situation.
              </p>
              <div className="glass-card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle size={24} className="mr-2 text-mylli-secondary" />
                  Pourquoi nous choisir?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-secondary" />
                    <span>Plus de 10 ans d'expérience spécifique</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-secondary" />
                    <span>Intervenants sélectionnés pour leurs qualités humaines</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-secondary" />
                    <span>Suivi personnalisé de chaque patient</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-secondary" />
                    <span>Disponibilité et réactivité à toute demande</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <HomeIcon size={20} className="mr-2 text-mylli-secondary" />
                <span>19, rue Masmouda hay Al Hana - Casablanca</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-8 animate-fade-in-left relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-mylli-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mylli-secondary/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-mylli-dark text-center">Demander un devis</h3>
                <ContactForm simple />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
