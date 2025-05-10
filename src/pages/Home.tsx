import { Link } from 'react-router-dom';
import { ArrowRight, Heart, User, Home as HomeIcon, Clock, Shield, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
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

  // Sample data for services
  const services = [{
    title: "Aide-soignant(e) à domicile",
    description: "Préservation de l'autonomie tout en accomplissant des actes de la vie quotidienne.",
    icon: <User size={40} strokeWidth={1.5} />,
    link: "/services/aide-soignant"
  }, {
    title: "Infirmier(ère) à domicile",
    description: "Soins médicaux à domicile comme alternative à l'hospitalisation.",
    icon: <Heart size={40} strokeWidth={1.5} />,
    link: "/services/infirmier"
  }, {
    title: "Services de garde-malade",
    description: "Présence continue et surveillance pour les personnes fragiles, jour, nuit ou 24h/24.",
    icon: <Clock size={40} strokeWidth={1.5} />,
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
  return <div>
      {/* Hero Section - Completely Redesigned */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-90 z-0"></div>
        
        {/* Animated patterns and shapes */}
        
        
        {/* Main content */}
        <div className="container-custom relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative mb-6">
                <span className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glass">
                  <span className="animate-pulse text-mylli-accent">★</span> Depuis 2014
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="block relative overflow-hidden">
                  <span className="block transform transition-transform animate-fade-in">NOUS SOMMES LÀ</span>
                </span>
                <span className="block mt-2 relative overflow-hidden">
                  <span className="block transform transition-transform animate-fade-in delay-[300ms]">POUR VOUS <span className="relative inline-block animate-wave origin-[70%_70%]">🤝</span></span>
                </span>
                <span className="block mt-2 bg-gradient-to-r from-mylli-accent via-mylli-primary to-mylli-secondary bg-clip-text text-transparent animate-text-gradient bg-[length:200%]">
                  AIDER!
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-xl animate-fade-in delay-[600ms] leading-relaxed">
                Depuis <span className="text-mylli-accent font-bold">{count}</span> ans, aide à domicile des personnes en perte d'autonomie
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:justify-start animate-fade-in delay-[900ms]">
                <Button asChild className="relative group overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-mylli-accent to-mylli-primary hover:shadow-neon transition-all duration-300">
                  <Link to="/services" className="relative z-10 flex items-center text-white font-medium">
                    Découvrir nos services
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-mylli-primary to-mylli-accent blur-sm group-hover:opacity-80 opacity-0 transition-opacity -z-10"></span>
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
                <div className="text-center p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-mylli-accent">{isVisible ? '10+' : '0'}</p>
                  <p className="text-xs">années d'expérience</p>
                </div>
                <div className="text-center p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-mylli-primary">{isVisible ? '500+' : '0'}</p>
                  <p className="text-xs">clients satisfaits</p>
                </div>
                <div className="text-center p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-mylli-secondary">{isVisible ? '24/7' : '0'}</p>
                  <p className="text-xs">disponibilité</p>
                </div>
              </div>
            </div>
            
            {/* Right column: Image/Visual */}
            <div className="relative flex justify-center items-center">
              {/* Main image container with animated border */}
              <div className="relative w-full aspect-square max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary via-mylli-accent to-mylli-secondary rounded-full animate-rotate-slow opacity-30 blur-md"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-mylli-primary via-mylli-accent to-mylli-secondary rounded-full animate-rotate-slow opacity-50" style={{
                animationDirection: 'reverse',
                animationDuration: '15s'
              }}></div>
                <div className="absolute inset-3 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-dark to-mylli-primary opacity-90"></div>
                  <div className="w-full h-full relative flex items-center justify-center animate-float">
                    {/* 3D layered illustration */}
                    <div className="absolute w-3/4 h-3/4 bg-mylli-accent/30 rounded-full blur-lg animate-pulse-soft"></div>
                    <div className="relative z-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md animate-float" style={{
                    animationDelay: '1s'
                  }}></div>
                    <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-md animate-float" style={{
                    animationDelay: '2s'
                  }}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-10 -left-10 md:left-0 bg-white rounded-xl shadow-glass backdrop-blur-md p-4 max-w-[200px] animate-float" style={{
              animationDelay: '0.5s',
              animationDuration: '4s'
            }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center text-mylli-primary mr-3">
                    <Heart size={18} />
                  </div>
                  <p className="text-sm font-medium text-mylli-dark">Soins attentionnés</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 md:right-0 bg-white rounded-xl shadow-glass backdrop-blur-md p-4 max-w-[200px] animate-float" style={{
              animationDelay: '1.5s',
              animationDuration: '5s'
            }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-accent/10 flex items-center justify-center text-mylli-accent mr-3">
                    <Shield size={18} />
                  </div>
                  <p className="text-sm font-medium text-mylli-dark">Protection 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C69,91.27,141.43,76.12,213.33,66.11Z" fill="currentColor"></path>
          </svg>
        </div>
        
        {/* Mouse scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-fade-in delay-[1500ms]">
          <p className="text-sm opacity-60 mb-2">Découvrir</p>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 animate-[float_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Depuis 10 ans à vos côtés" subtitle="Mylli Services vous accompagne depuis 2014 avec un engagement constant pour préserver l'autonomie et la dignité des personnes fragilisées à leur domicile." align="center" />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-mylli-gray mb-8 animate-fade-in">
              Notre équipe de professionnels qualifiés offre une approche humaine et personnalisée adaptée aux besoins spécifiques de chaque patient. Grâce à notre expérience et notre dévouement, nous permettons aux personnes en perte d'autonomie de rester chez elles dans les meilleures conditions possibles.
            </p>
            <div className="flex justify-center animate-fade-in">
              <Button asChild variant="outline" className="border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white">
                <Link to="/apropos">
                  En savoir plus sur nous <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Nos Services" subtitle="Des soins professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} style="featured" className="animate-fade-in" />)}
          </div>
          
          <div className="text-center animate-fade-in">
            <Button asChild className="btn-primary">
              <Link to="/services">
                Voir tous nos services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading title="Notre Fonctionnement" subtitle="Une approche simple et efficace pour mettre en place un accompagnement parfaitement adapté à vos besoins." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => <div key={index} className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 transition-all duration-300 hover:shadow-card animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-mylli-primary/10 flex items-center justify-center mb-4 text-mylli-primary font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-mylli-dark">{item.title}</h3>
                <p className="text-mylli-gray">{item.description}</p>
              </div>)}
          </div>
          
          <div className="mt-10 text-center animate-fade-in">
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
            <path fill="#3B82F6" d="M40.8,-70.3C52.6,-61.8,61.4,-49.5,67.8,-36.1C74.1,-22.7,77.9,-8.3,76.8,6.1C75.7,20.5,69.8,34.9,60.3,45.2C50.9,55.5,37.9,61.8,24.4,64.8C10.9,67.8,-3,67.5,-17.5,65.3C-32,63.1,-47.1,58.9,-54.4,48.5C-61.8,38.2,-61.3,21.6,-64.3,5.5C-67.4,-10.6,-74.1,-26.3,-71,-39.9C-67.9,-53.5,-55.1,-65,-40.9,-72.9C-26.7,-80.9,-11.1,-85.2,2.5,-89.4C16,-93.7,29,-78.8,40.8,-70.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute bottom-10 left-0 opacity-5">
          <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#34D399" d="M44.3,-76C57.9,-69.1,69.7,-57.9,76.7,-44.5C83.8,-31.1,86.2,-15.5,84.6,-1C83.1,13.5,77.7,27,69.3,38.6C60.9,50.3,49.5,60.2,36.7,65C23.9,69.8,9.7,69.5,-3.6,75.7C-17,81.8,-34,94.5,-46.3,92.7C-58.6,90.9,-66.3,74.7,-70.8,58.9C-75.2,43.1,-76.4,27.9,-78.1,13C-79.7,-1.9,-81.7,-16.5,-77.6,-29.4C-73.4,-42.4,-63.1,-53.7,-50.3,-60.7C-37.6,-67.7,-22.5,-70.4,-7.4,-68.5C7.7,-66.6,30.7,-82.9,44.3,-76Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding bg-mylli-primary/5">
        <div className="container-custom">
          <SectionHeading title="Ce que disent nos clients" subtitle="La confiance et la satisfaction de nos clients sont notre plus grande fierté." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} style="modern" className="animate-fade-in" />)}
          </div>
        </div>
      </section>
      
      {/* CTA Contact Section */}
      <section className="section-padding bg-gradient-to-r from-mylli-dark to-mylli-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un service d'accompagnement à domicile?</h2>
              <p className="text-lg opacity-90 mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques. Notre équipe est à votre écoute pour vous proposer une solution adaptée à votre situation.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle size={24} className="mr-2 text-mylli-accent" />
                  Pourquoi nous choisir?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-accent" />
                    <span>Plus de 10 ans d'expérience spécifique</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-accent" />
                    <span>Intervenants sélectionnés pour leurs qualités humaines</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-accent" />
                    <span>Suivi personnalisé de chaque patient</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={20} className="mr-3 mt-1 text-mylli-accent" />
                    <span>Disponibilité et réactivité à toute demande</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <HomeIcon size={20} className="mr-2 text-mylli-accent" />
                <span>19, rue Masmouda hay Al Hana - Casablanca</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-8 animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6 text-mylli-dark text-center">Demander un devis</h3>
              <ContactForm simple />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;