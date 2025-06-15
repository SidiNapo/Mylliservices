import { Link } from 'react-router-dom';
import { ArrowRight, Heart, User, Home as HomeIcon, Clock, Shield, CheckCircle, Star, ArrowUpRight, Phone, Share, X, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import ContactForm from '@/components/common/ContactForm';
import ServiceLocations from '@/components/common/ServiceLocations';
import SEOHead from '@/components/seo/SEOHead';
import OptimizedImage from '@/components/seo/OptimizedImage';
import { generateHomepageStructuredData } from '@/utils/structuredData';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  // For the animated counter effect
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [hoverCard, setHoverCard] = useState(-1);

  // Modal state for feature details
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

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

  // Updated images for the hero background with new healthcare professional images
  const careImages = ['/lovable-uploads/bc5d5201-c6c6-41c0-8594-5bef9171aea8.png', '/lovable-uploads/94cdeb85-c1e7-48bd-9d6f-66312af0fb9c.png', '/lovable-uploads/b078eb91-537d-4b59-bb66-5983988c4fab.png'];

  // Updated services data with new images
  const services = [{
    title: "Aide-soignant(e) à domicile",
    description: "Préservation de l'autonomie tout en accomplissant des actes de la vie quotidienne.",
    icon: <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
      <OptimizedImage src="/lovable-uploads/2d768651-e0d0-42ed-925c-e0c72eba8ee1.png" alt="Aide-soignant à domicile" width={64} height={64} className="w-full h-full object-cover" />
    </div>,
    link: "/services/aide-soignant"
  }, {
    title: "Infirmier(ère) à domicile",
    description: "Soins médicaux à domicile comme alternative à l'hospitalisation.",
    icon: <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
      <OptimizedImage src="/lovable-uploads/638e9202-dcc8-4b57-aeda-4e66c2ccc619.png" alt="Infirmier à domicile" width={64} height={64} className="w-full h-full object-cover" />
    </div>,
    link: "/services/infirmier"
  }];

  // Sample data for how it works - updated with icons for modern design
  const howItWorks = [{
    step: 1,
    title: "Rencontre à domicile",
    description: "Nous prenons le temps de vous rencontrer chez vous pour comprendre vos besoins spécifiques et évaluer la situation.",
    icon: <HomeIcon size={32} className="text-mylli-primary" />,
    color: "primary"
  }, {
    step: 2,
    title: "Proposition personnalisée",
    description: "Nous élaborons un devis sur mesure adapté à vos besoins spécifiques et votre budget.",
    icon: <User size={32} className="text-mylli-secondary" />,
    color: "secondary"
  }, {
    step: 3,
    title: "Présentation de l'intervenant",
    description: "Nous vous présentons le soignant qualifié qui vous accompagnera dans votre quotidien.",
    icon: <Heart size={32} className="text-mylli-quaternary" />,
    color: "quaternary"
  }, {
    step: 4,
    title: "Suivi de satisfaction",
    description: "Nous effectuons un suivi régulier pour garantir votre satisfaction et ajuster si nécessaire.",
    icon: <CheckCircle size={32} className="text-mylli-accent" />,
    color: "accent"
  }];

  // Updated testimonials data with the new reviews
  const testimonials = [{
    quote: "Grâce à Mylli Services, j'ai pu continuer à vivre chez moi, malgré ma perte partielle d'autonomie suite à un grave AVC, tout en rassurant ma famille…",
    name: "M. Mohamed B.",
    title: "68 ans",
    role: "bénéficiaire de l'aide à domicile",
    avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
    rating: 5,
    location: "Casablanca",
    category: "beneficiary"
  }, {
    quote: "… j'ai trouvé en Mylli Services un appui considérable, ils me permettent d'apporter un maximum d'aide à ma mère âgée de 84 ans tout en gardant une vie normale.",
    name: "Mme Leïla T.",
    title: "52 ans",
    role: "fille du bénéficiaire de l'aide à domicile",
    avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
    rating: 5,
    location: "Mohammedia",
    category: "family"
  }, {
    quote: "Avant Mylli Services j'étais complètement désarmé face à la maladie de ma mère, atteinte d'Alzheimer, aujourd'hui je sens que j'ai un soutien permanent et rassurant.",
    name: "M. Hicham S.",
    title: "43 ans",
    role: "fils du bénéficiaire de l'aide à domicile",
    avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
    rating: 5,
    location: "Casablanca",
    category: "family"
  }, {
    quote: "Mylli Services a permis d'amener un service constant et efficace d'aide à la personne en toutes situations, et surtout de palier à l'aspect informel des interventions à domicile de notre métier…",
    name: "Mme. Hasnaâ T.",
    title: "31 ans",
    role: "infirmière à Mylli Services",
    avatar: "/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png",
    rating: 5,
    location: "Casablanca",
    category: "professional"
  }];

  // Features section data with updated images
  const features = [{
    icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
      <OptimizedImage src="/lovable-uploads/f9cacdd3-a25a-4fca-b442-ab317b68783a.png" alt="Expérience professionnelle" width={80} height={80} className="w-full h-full object-cover" />
    </div>,
    title: "Une expérience de plus de 10 ans",
    description: "Personnel qualifié et vérifié pour une prise en charge en toute sécurité et sérénité.",
    color: "primary" as const,
    detailedDescription: "Plus de 10 ans d'expérience au service de la dignité humaine\n\nDepuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc. Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une parfaite connaissance des besoins du terrain.\n\nCette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, soutien moral et relationnel. Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de haute qualité, toujours empreint de respect et de bienveillance."
  }, {
    icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
      <OptimizedImage src="/lovable-uploads/609a7402-4f73-4888-bedd-2256c3fbd997.png" alt="Équipe compétente" width={80} height={80} className="w-full h-full object-cover" />
    </div>,
    title: "Une équipe compétente pour un service de qualité",
    description: "Accompagnement personnalisé et suivi régulier pour garantir votre entière satisfaction.",
    color: "secondary" as const,
    detailedDescription: "Des équipes engagées, compétentes et à l'écoute\n\nChez Mylli Services, la qualité de nos prestations repose avant tout sur la valeur humaine et professionnelle de nos équipes. Chaque intervenant — aide-soignant, infirmier ou coordinateur — est sélectionné avec soin pour ses compétences, mais aussi pour son sens de l'écoute, de l'empathie et de la responsabilité.\n\nFormés aux spécificités de l'accompagnement à domicile, nos professionnels savent s'adapter aux situations les plus délicates, tout en maintenant un climat de confiance avec les patients et leurs familles. Présents, attentifs et bienveillants, ils ne se contentent pas d'exécuter une mission : ils créent un lien humain, essentiel pour surmonter les épreuves de la maladie.\n\nCette approche humaine et professionnelle est au cœur de notre réussite et fait de chaque intervention une expérience respectueuse, sécurisante et profondément humaine."
  }, {
    icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
      <OptimizedImage src="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png" alt="Disponibilité 24/7" width={80} height={80} className="w-full h-full object-cover" />
    </div>,
    title: "Disponibilité 24/7 avec un service personnalisé",
    description: "Notre équipe est disponible jour et nuit pour répondre à tous vos besoins d'urgence.",
    color: "accent" as const,
    detailedDescription: "Un accompagnement disponible 24h/24 et 7j/7\n\nParce que les besoins en soins et en assistance ne connaissent ni pause ni horaires, Mylli Services assure une présence continue, jour et nuit, toute l'année.\n\nNos équipes sont organisées pour intervenir à tout moment, 24h/24 et 7j/7, afin d'apporter un soutien immédiat, que ce soit pour une urgence, un besoin ponctuel ou un accompagnement de longue durée. Cette disponibilité permanente garantit une tranquillité d'esprit totale aux familles, qui savent qu'elles peuvent compter sur nous à chaque instant.\n\nCette réactivité est l'une des clés de notre efficacité et un pilier fondamental de notre engagement envers les patients et leurs proches."
  }];

  // Sample locations data for the new component - updated with Salé
  const serviceLocations = [{
    city: "Casablanca",
    areas: [],
    highlight: false
  }, {
    city: "Mohammedia",
    areas: []
  }, {
    city: "Bouskoura",
    areas: []
  }, {
    city: "Dar Bouazza",
    areas: []
  }, {
    city: "Marrakech",
    areas: []
  }, {
    city: "Rabat",
    areas: []
  }, {
    city: "Salé",
    areas: []
  }];

  // SEO structured data
  const structuredData = generateHomepageStructuredData();

  // Add scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Function to trigger the availability feature expansion
  const triggerAvailabilityFeature = () => {
    // Scroll to features section first
    const featuresSection = document.getElementById('features-heading');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });

      // After scrolling, find and expand the availability card
      setTimeout(() => {
        const availabilityCard = document.querySelector('[data-feature="availability"]');
        if (availabilityCard) {
          const collapsibleTrigger = availabilityCard.querySelector('[data-state]');
          if (collapsibleTrigger) {
            // Check if it's already open
            const isOpen = collapsibleTrigger.getAttribute('data-state') === 'open';
            if (!isOpen) {
              (collapsibleTrigger as HTMLElement).click();
            }
          }
        }
      }, 800); // Wait for scroll to complete
    }
  };

  // Format detailed description for better display
  const formatDetailedDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      if (line.includes('•')) {
        return <li key={index} className="ml-4 text-mylli-gray leading-relaxed">
            {line.replace('•', '').trim()}
          </li>;
      }
      if (line.match(/^[A-Z\s]+$/)) {
        return <h4 key={index} className="font-bold text-mylli-dark text-lg mt-4 mb-2">
            {line}
          </h4>;
      }
      if (line.endsWith(':')) {
        return <h4 key={index} className="font-semibold text-mylli-dark text-base mt-4 mb-2">
            {line}
          </h4>;
      }
      return <p key={index} className="text-mylli-gray leading-relaxed mb-3">
          {line}
        </p>;
    });
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
        {/* Hero Section with improved mobile spacing */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-20" onMouseMove={handleMouseMove} aria-labelledby="hero-heading">
          {/* Modern layered background with images */}
          <div className="absolute inset-0 z-0">
            {/* Gradient overlay - updated to logo colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-mylli-dark/80 via-mylli-primary/60 to-mylli-dark/70 z-10"></div>
            
            {/* Modern image gallery */}
            <div className="absolute inset-0 overflow-hidden">
              {careImages.map((img, index) => <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={img} alt="Professional care services" className="absolute w-full h-full object-cover object-center filter brightness-[0.75]" />
                </div>)}
            </div>
            
            {/* Geometric patterns for modern look - logo colors */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-mylli-primary opacity-30 blur-3xl animate-pulse-soft"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-mylli-secondary opacity-20 blur-3xl animate-pulse-soft" style={{
              animationDelay: '1s'
            }}></div>
              <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-mylli-quaternary opacity-20 blur-2xl animate-pulse-soft" style={{
              animationDelay: '2s'
            }}></div>
            </div>
            
            {/* Elegant grid overlay for modern touch */}
            <div className="absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDc3QzAxMCIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0zNiAxOGgtMTJWNmgxMnYxMnptMCAxMmgtMTJWMThoMTJ2MTJ6bTAgMTJoLTEyVjMwaDEydjEyem0xMi0yNGgtMTJWNmgxMnYxMnptMCAxMmgtMTJWMThoMTJ2MTJ6bTAgMTJoLTEyVjMwaDEydjEyIiBmaWxsPSIjMDA5OUU4MTAiLz48L2c+PC9zdmc+')]"></div>
          </div>
          
          {/* Main content with improved mobile layout */}
          <div className="container-custom relative z-20 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left column: Text content with better mobile spacing */}
              <div className="text-center lg:text-left">
                <header>
                  <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                    <span className="block text-white animate-pulse-glow mb-2">
                      NOUS SOMMES LÀ POUR VOUS
                    </span>
                    <span className="block text-white animate-pulse-glow">
                      AIDER!
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-10 max-w-2xl animate-fade-in delay-[600ms] leading-relaxed text-white px-2 sm:px-0">
                    Depuis <span className="text-white font-bold">2014</span>, première société au Maroc spécialisée dans les soins et l'accompagnement à domicile des personnes en perte d'autonomie.
                  </p>
                </header>
                
                {/* Stats - Updated with better mobile responsive design and improved visibility */}
                <div className="mt-8 mb-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto lg:mx-0 animate-fade-in delay-[1200ms]">
                  <Link to="/apropos" className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/15 rounded-xl border border-white/30 hover:border-mylli-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-mylli-secondary group-hover:text-mylli-secondary">{isVisible ? '+10' : '0'}</p>
                    <p className="text-xs sm:text-sm text-white leading-tight">années d'expérience</p>
                  </Link>
                  <button onClick={() => scrollToSection('testimonials-heading')} className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/15 rounded-xl border border-white/30 hover:border-mylli-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-mylli-quaternary group-hover:text-mylli-primary">{isVisible ? '+4500' : '0'}</p>
                    <p className="text-xs sm:text-sm text-white leading-tight">Interventions</p>
                  </button>
                  <button onClick={triggerAvailabilityFeature} className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/15 rounded-xl border border-white/30 hover:border-mylli-quaternary/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-mylli-quaternary group-hover:text-mylli-quaternary">{isVisible ? '24/7' : '0'}</p>
                    <p className="text-xs sm:text-sm text-white leading-tight">disponibilité</p>
                  </button>
                </div>
              </div>
              
              {/* Right column: Visual Element with better mobile positioning */}
              <aside className="relative flex justify-center items-center mt-8 lg:mt-0">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-mylli-quaternary/30 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mylli-secondary/30 rounded-full filter blur-3xl"></div>
                
                {/* Modern content card with optimized images and better mobile sizing */}
                <article className="relative max-w-sm sm:max-w-md w-full mx-4 sm:mx-0">
                  {/* Card container with perfect rounded corners */}
                  <div className="relative backdrop-blur-lg bg-white/15 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl group">
                    
                    {/* Image Section - Full Coverage with responsive height */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      {/* Background image with full coverage */}
                      <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style={{
                      backgroundImage: `url(${careImages[activeImage]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                      
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/90 via-mylli-dark/30 to-transparent"></div>
                      
                      {/* Text overlay on image with responsive text */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-lg">Soins professionnels</h3>
                        <p className="text-white/95 text-sm font-medium drop-shadow-md">Accompagnement personnalisé à domicile</p>
                      </div>
                      
                      {/* Image selector dots - positioned over image */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
                        {careImages.map((_, index) => <button key={index} onClick={() => setActiveImage(index)} className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 border border-white/50 ${activeImage === index ? 'bg-mylli-secondary scale-110 shadow-lg' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Image ${index + 1}`} />)}
                      </div>
                    </div>
                    
                    {/* Content Section with responsive padding and improved text layout */}
                    <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm">
                      <div className="text-white mb-4 sm:mb-6">
                        <p className="leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 text-white/90">
                          Nous sommes spécialement formés pour garantir des services de qualité aux personnes atteintes de maladies chroniques handicapantes comme la maladie de Parkinson, d'Alzheimer, hémiplégie, paraplégie, SEP, SLA, ainsi que les soins palliatifs.
                        </p>
                      </div>
                      
                      {/* Action button with better mobile sizing and improved visibility */}
                      <Button asChild variant="outline" className="w-full border-white/30 text-black bg-white hover:bg-white/90 hover:text-black backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-sm sm:text-base py-3 sm:py-4 font-medium">
                        <Link to="/apropos#mot-du-fondateur" className="flex items-center justify-center">
                          Mot du Président
                          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </aside>
            </div>
          </div>
          
          {/* Bottom wave - updated color to match logo */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-20 text-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C69,91.27,141.43,76.12,213.33,66.11Z" fill="currentColor"></path>
            </svg>
          </div>
          
          {/* Mouse scroll indicator with better mobile positioning */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-fade-in delay-[1500ms]">
            <p className="text-sm text-white/80 mb-2">Découvrir</p>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 animate-[float_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </section>
        
        {/* Feature Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-mylli-light/30" aria-labelledby="features-heading">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-mylli-primary/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-mylli-secondary/5 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            
            {/* Geometric patterns */}
            <div className="absolute left-10 top-1/4 w-16 h-16 border border-mylli-primary/20 rounded-full"></div>
            <div className="absolute right-20 bottom-1/4 w-24 h-24 border-2 border-mylli-secondary/10 rounded-lg rotate-12"></div>
            <div className="absolute left-1/2 top-1/2 w-32 h-32 border border-mylli-quaternary/10 rounded-xl -rotate-12 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Animated dots */}
            <div className="absolute top-20 left-1/3 w-4 h-4 bg-mylli-primary/20 rounded-full animate-pulse-soft"></div>
            <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-mylli-secondary/20 rounded-full animate-pulse-soft" style={{
            animationDelay: '1s'
          }}></div>
            <div className="absolute top-1/2 left-20 w-3 h-3 bg-mylli-quaternary/30 rounded-full animate-pulse-soft" style={{
            animationDelay: '2s'
          }}></div>
          </div>
        
          <div className="container-custom relative z-10">
            <header className="max-w-2xl mx-auto mb-16">
              {/* Section heading */}
              <SectionHeading title="Des services Sur mesure pour vous accompagner a domicile" variant="animated" highlightText="Sur mesure" className="text-center" id="features-heading" />
            </header>
            
            {/* Enhanced feature cards with modern design and images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => <div key={index} className="h-full" data-feature={index === 2 ? 'availability' : undefined}>
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-50 p-8 h-full flex flex-col transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:border-mylli-primary/20 group relative overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${feature.color === 'primary' ? 'bg-gradient-to-br from-mylli-primary to-mylli-quaternary' : feature.color === 'secondary' ? 'bg-gradient-to-br from-mylli-secondary to-mylli-tertiary' : 'bg-gradient-to-br from-mylli-quaternary to-mylli-accent'} rounded-3xl`}></div>
                    
                    {/* Enhanced icon section with better styling */}
                    <div className="flex justify-center mb-8 relative z-10">
                      <div className={`relative group-hover:scale-110 transition-transform duration-500 ${feature.color === 'primary' ? 'drop-shadow-lg' : feature.color === 'secondary' ? 'drop-shadow-lg' : 'drop-shadow-lg'}`}>
                        {feature.icon}
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${feature.color === 'primary' ? 'bg-mylli-primary' : feature.color === 'secondary' ? 'bg-mylli-secondary' : 'bg-mylli-quaternary'}`}></div>
                      </div>
                    </div>
                    
                    {/* Enhanced content section */}
                    <div className="flex-grow flex flex-col relative z-10">
                      <h3 className={`text-xl font-bold mb-4 text-center ${feature.color === 'primary' ? 'text-mylli-primary' : feature.color === 'secondary' ? 'text-mylli-secondary' : 'text-mylli-quaternary'} group-hover:text-mylli-dark transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-mylli-gray text-center mb-6 flex-grow leading-relaxed group-hover:text-mylli-dark transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Enhanced call to action */}
                      <div className="mt-auto">
                        <button onClick={() => setSelectedFeature(index)} className={`w-full text-center font-semibold flex items-center justify-center py-3 px-6 rounded-xl border transition-all duration-300 ${feature.color === 'primary' ? 'text-mylli-primary border-mylli-primary/20 hover:bg-mylli-primary hover:text-white hover:border-mylli-primary' : feature.color === 'secondary' ? 'text-mylli-secondary border-mylli-secondary/20 hover:bg-mylli-secondary hover:text-white hover:border-mylli-secondary' : 'text-mylli-quaternary border-mylli-quaternary/20 hover:bg-mylli-quaternary hover:text-white hover:border-mylli-quaternary'} hover:shadow-lg hover:scale-105`}>
                          En savoir plus
                          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Enhanced decorative elements */}
                    <div className={`absolute bottom-0 left-0 w-full h-2 ${feature.color === 'primary' ? 'bg-gradient-to-r from-mylli-primary to-mylli-quaternary' : feature.color === 'secondary' ? 'bg-gradient-to-r from-mylli-secondary to-mylli-tertiary' : 'bg-gradient-to-r from-mylli-quaternary to-mylli-accent'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
                    
                    {/* Enhanced corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 ${feature.color === 'primary' ? 'bg-mylli-primary/10' : feature.color === 'secondary' ? 'bg-mylli-secondary/10' : 'bg-mylli-quaternary/10'} rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>)}
            </div>
            
            {/* New interactive trust indicators */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              
              
              
              
            </div>
            
            {/* Interactive call-to-action */}
            <div className="mt-16 text-center">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-neon group mx-0">
                <span className="mr-2">Découvrir nos services</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Modern wave divider at bottom */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C69,91.27,141.43,76.12,213.33,66.11Z" fill="currentColor"></path>
            </svg>
          </div>
        </section>
        
        {/* About Section */}
        <section className="section-padding bg-gradient-to-br from-mylli-light to-white relative overflow-hidden" aria-labelledby="about-heading">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <aside>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-3xl opacity-20 blur-lg"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-soft overflow-hidden">
                    <OptimizedImage src="/lovable-uploads/f93fedca-b6df-4264-9427-93f0e22541cd.png" alt="Logo Mylli Services - Aide à domicile professionnelle depuis 2014" width={400} height={256} className="w-full h-auto max-h-64 object-contain mx-auto mb-6" />
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
              </aside>
              
              <article>
                <header>
                  <SectionHeading title="Plus de 10 ans au service de laccompagnment a domicile" subtitle="Depuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc. Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une parfaite connaissance des besoins du terrain." align="left" variant="gradient" id="about-heading" />
                </header>
                
                <div className="text-lg text-mylli-gray mb-8 animate-fade-in leading-relaxed">
                  <p className="mb-4">
                    Cette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, soutien moral et relationnel.
                  </p>
                  <p>
                    Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de haute qualité, toujours empreint de respect et de bienveillance.
                  </p>
                </div>
                
                <div className="animate-fade-in flex">
                  <Button asChild className="relative group overflow-hidden rounded-full px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:shadow-neon transition-all duration-300">
                    <Link to="/apropos" className="relative z-10 flex items-center text-white font-medium">
                      En savoir plus sur nous <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-mylli-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-mylli-secondary/5 rounded-full blur-3xl"></div>
        </section>
        
        {/* Enhanced Services Section */}
        <section className="section-padding bg-mylli-light/50 relative overflow-hidden" aria-labelledby="services-heading">
          <div className="container-custom relative z-10">
            <header>
              <SectionHeading title="Nos Services" subtitle="Des soins professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile." variant="gradient" id="services-heading" />
            </header>
            
            {/* Enhanced services grid with better spacing for 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              {services.map((service, index) => <div key={index} className={`bg-white rounded-2xl p-8 shadow-xl border border-transparent transition-all duration-500 hover:shadow-2xl hover:border-mylli-primary/20 hover:-translate-y-2 relative overflow-hidden group ${hoverCard === index ? 'shadow-2xl border-mylli-primary/20 -translate-y-2' : ''}`} onMouseEnter={() => setHoverCard(index)} onMouseLeave={() => setHoverCard(-1)}>
                  
                  {/* Enhanced gradient accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary"></div>
                  
                  <div className="relative z-10">
                    {/* Enhanced icon section */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-mylli-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-mylli-dark text-center group-hover:text-mylli-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-mylli-gray mb-6 text-center leading-relaxed group-hover:text-mylli-dark transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Enhanced link button */}
                    <div className="text-center">
                      <Link to={service.link} className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/link">
                        Découvrir 
                        <ArrowUpRight size={18} className="ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Enhanced background decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-mylli-primary/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>)}
            </div>
            
            <div className="text-center animate-fade-in">
              <Button asChild className="bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:from-mylli-primary hover:to-mylli-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full px-8 py-3">
                <Link to="/services" className="flex items-center">
                  Voir tous nos services <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-mylli-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-mylli-quaternary/5 blur-3xl"></div>
        </section>
        
        {/* Revolutionary How It Works Section with Modern Design */}
        <section className="section-padding bg-gradient-to-br from-mylli-light/30 via-white to-mylli-primary/5 relative overflow-hidden" aria-labelledby="how-it-works-heading">
          {/* Enhanced background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient orbs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/5 blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tl from-mylli-quaternary/10 to-mylli-accent/5 blur-3xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
            
            {/* Geometric patterns */}
            <div className="absolute top-20 left-1/4 w-24 h-24 border border-mylli-primary/10 rounded-2xl rotate-12 animate-pulse-soft"></div>
            <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-mylli-secondary/5 rounded-full animate-pulse-soft" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-10 w-20 h-20 border-2 border-mylli-quaternary/10 rounded-xl -rotate-12 animate-pulse-soft" style={{animationDelay: '3s'}}></div>
          </div>

          <div className="container-custom relative z-10">
            <header className="text-center mb-16">
              <SectionHeading 
                title="Un accompagnement personnalisé en 4 étapes" 
                subtitle="Découvrez notre processus simple et efficace pour vous offrir les meilleurs soins à domicile, adapté à vos besoins spécifiques."
                variant="gradient" 
                highlightText="personnalisé" 
                id="how-it-works-heading" 
              />
            </header>
            
            {/* Revolutionary Grid Layout with Image Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Side: Beautiful Image with Modern Frame */}
              <div className="order-2 lg:order-1 relative">
                <div className="relative group">
                  {/* Animated background glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {/* Main image container with modern styling */}
                  <div className="relative bg-white p-3 rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                    {/* Image with responsive handling */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <OptimizedImage 
                        src="/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png"
                        alt="Professional healthcare services at home - Nurse providing personalized care"
                        width={600}
                        height={400}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover object-center filter brightness-105 contrast-105"
                      />
                      
                      {/* Overlay gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/20 via-transparent to-transparent"></div>
                      
                      {/* Quality badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-mylli-dark">Soins professionnels</span>
                        </div>
                      </div>
                      
                      {/* Experience badge */}
                      <div className="absolute bottom-4 left-4 bg-mylli-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-white font-bold text-lg">+10 ans d'expérience</span>
                      </div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-mylli-primary rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-mylli-secondary rounded-br-2xl"></div>
                  </div>
                  
                  {/* Floating stats cards */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-mylli-primary/10 hidden md:block">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-mylli-primary">24/7</div>
                      <div className="text-xs text-mylli-gray">Disponibilité</div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-mylli-secondary/10 hidden md:block">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-mylli-secondary">4500+</div>
                      <div className="text-xs text-mylli-gray">Interventions</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Modern Step Cards */}
              <div className="order-1 lg:order-2 space-y-6">
                {howItWorks.map((item, index) => {
                  const colorClasses = {
                    primary: {
                      bg: 'bg-mylli-primary/5',
                      border: 'border-mylli-primary/20',
                      text: 'text-mylli-primary',
                      gradient: 'from-mylli-primary to-mylli-primary-dark'
                    },
                    secondary: {
                      bg: 'bg-mylli-secondary/5',
                      border: 'border-mylli-secondary/20',
                      text: 'text-mylli-secondary',
                      gradient: 'from-mylli-secondary to-mylli-tertiary'
                    },
                    quaternary: {
                      bg: 'bg-mylli-quaternary/5',
                      border: 'border-mylli-quaternary/20',
                      text: 'text-mylli-quaternary',
                      gradient: 'from-mylli-quaternary to-mylli-accent'
                    },
                    accent: {
                      bg: 'bg-mylli-accent/5',
                      border: 'border-mylli-accent/20',
                      text: 'text-mylli-accent',
                      gradient: 'from-mylli-accent to-mylli-quaternary'
                    }
                  };
                  
                  const colors = colorClasses[item.color as keyof typeof colorClasses];
                  
                  return (
                    <div 
                      key={index} 
                      className="group relative transform transition-all duration-500 hover:-translate-x-2 hover:scale-[1.02]"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      {/* Connection line to next step */}
                      {index < howItWorks.length - 1 && (
                        <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-current to-transparent opacity-20 hidden sm:block"></div>
                      )}
                      
                      {/* Modern step card */}
                      <div className={`relative bg-white rounded-2xl shadow-lg border ${colors.border} p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:border-opacity-40 overflow-hidden`}>
                        
                        {/* Animated background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        {/* Step content */}
                        <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                          
                          {/* Step number and icon */}
                          <div className="flex-shrink-0">
                            {/* Step number badge */}
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                              <span className={`text-xl sm:text-2xl font-bold ${colors.text}`}>
                                {item.step}
                              </span>
                            </div>
                            
                            {/* Icon */}
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              {item.icon}
                            </div>
                          </div>
                          
                          {/* Step details */}
                          <div className="flex-grow min-w-0">
                            <h3 className={`text-lg sm:text-xl font-bold mb-3 ${colors.text} group-hover:text-mylli-dark transition-colors duration-300`}>
                              {item.title}
                            </h3>
                            <p className="text-mylli-gray leading-relaxed text-sm sm:text-base group-hover:text-mylli-dark transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}></div>
                        
                        {/* Corner decoration */}
                        <div className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Enhanced call-to-action */}
            <div className="mt-16 text-center">
              <div className="relative inline-block group">
                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <Button asChild className="relative bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:from-mylli-primary hover:to-mylli-primary-dark shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full px-8 py-4 text-white font-medium">
                  <Link to="/fonctionnement" className="flex items-center gap-3">
                    <Clock size={20} />
                    <span>Découvrir notre processus complet</span>
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              <p className="mt-4 text-mylli-gray text-sm">
                Un processus simple et transparent pour votre tranquillité d'esprit
              </p>
            </div>
          </div>
        </section>
        
        {/* Service Locations Section - Now comes after Services and How It Works */}
        <ServiceLocations locations={serviceLocations} title="Nos Zones d'Intervention" subtitle="Mylli Services propose des soins à domicile professionnels dans toute la région de Casablanca. Découvrez si votre quartier est couvert." />
        
        {/* Enhanced Testimonial Section with New Design */}
        <section className="section-padding bg-gradient-to-br from-mylli-primary/5 to-mylli-light relative overflow-hidden" aria-labelledby="testimonials-heading">
          {/* Enhanced background decoration elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-mylli-secondary/10 to-mylli-primary/5 blur-3xl"></div>
            <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tl from-mylli-quaternary/10 to-mylli-primary/5 blur-3xl"></div>
            
            {/* Modern geometric patterns */}
            <div className="absolute top-20 left-1/4 w-32 h-32 border border-mylli-primary/10 rounded-3xl rotate-12 animate-pulse-soft"></div>
            <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-mylli-secondary/15 rounded-full animate-pulse-soft" style={{
            animationDelay: '1s'
          }}></div>
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-mylli-quaternary/10 rounded-2xl -rotate-12 animate-pulse-soft" style={{
            animationDelay: '2s'
          }}></div>
            
            {/* Floating quote icons */}
            <div className="absolute top-32 left-10 text-mylli-primary/10 animate-pulse-soft">
              <Quote size={40} />
            </div>
            <div className="absolute bottom-40 right-16 text-mylli-secondary/15 animate-pulse-soft" style={{
            animationDelay: '1.5s'
          }}>
              <Quote size={32} />
            </div>
          </div>

          <div className="container-custom relative z-10">
            <header className="max-w-3xl mx-auto text-center mb-16">
              <SectionHeading title="Ce que disent nos clients" subtitle="Découvrez les témoignages authentiques de nos bénéficiaires, de leurs familles et de nos professionnels qui font la différence chaque jour." variant="gradient" id="testimonials-heading" />
            </header>

            {/* Revolutionary testimonial layout with category-based design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => {
              const isEven = index % 2 === 0;
              const categoryColors = {
                beneficiary: {
                  gradient: 'from-mylli-primary to-mylli-quaternary',
                  accent: 'mylli-primary',
                  bg: 'mylli-primary/5'
                },
                family: {
                  gradient: 'from-mylli-secondary to-mylli-tertiary',
                  accent: 'mylli-secondary',
                  bg: 'mylli-secondary/5'
                },
                professional: {
                  gradient: 'from-mylli-quaternary to-mylli-accent',
                  accent: 'mylli-quaternary',
                  bg: 'mylli-quaternary/5'
                }
              };
              const colors = categoryColors[testimonial.category as keyof typeof categoryColors];
              return <div key={index} className={`group relative transform transition-all duration-700 hover:-translate-y-3 ${isEven ? 'lg:translate-y-8' : 'lg:-translate-y-4'}`} style={{
                animationDelay: `${index * 200}ms`
              }}>
                    {/* Revolutionary card design with layered effects */}
                    <div className="relative h-full">
                      {/* Animated background glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500`}></div>
                      
                      {/* Main card */}
                      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-50 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                        {/* Dynamic category header */}
                        <div className={`relative h-20 bg-gradient-to-r ${colors.gradient} overflow-hidden`}>
                          {/* Animated pattern overlay */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-2 left-4 w-8 h-8 border border-white rounded-full"></div>
                            <div className="absolute top-4 right-8 w-6 h-6 border border-white rounded-lg rotate-12"></div>
                            <div className="absolute bottom-3 left-12 w-4 h-4 bg-white rounded-full"></div>
                            <div className="absolute bottom-2 right-16 w-10 h-10 border-2 border-white rounded-full"></div>
                          </div>
                          
                          {/* Category indicator */}
                          <div className="absolute bottom-4 left-6 flex items-center">
                            <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                            <span className="text-white text-sm font-medium opacity-90">
                              {testimonial.category === 'beneficiary' ? 'Bénéficiaire' : testimonial.category === 'family' ? 'Famille' : 'Professionnel'}
                            </span>
                          </div>
                          
                          {/* Floating quote icon */}
                          <div className="absolute top-4 right-6 text-white/20">
                            <Quote size={32} className="transform rotate-12" />
                          </div>
                        </div>
                        
                        {/* Enhanced card content */}
                        <div className="p-8 relative">
                          {/* Quote section with modern typography */}
                          <div className="mb-8">
                            <div className="relative">
                              {/* Large opening quote */}
                              <div className={`absolute -top-4 -left-2 text-6xl font-serif text-${colors.accent}/10 leading-none`}>
                                "
                              </div>
                              
                              <blockquote className="relative z-10">
                                <p className="text-mylli-gray text-lg leading-relaxed italic font-light mb-4 pl-6">
                                  {testimonial.quote}
                                </p>
                              </blockquote>
                              
                              {/* Closing quote */}
                              <div className={`absolute -bottom-6 -right-2 text-6xl font-serif text-${colors.accent}/10 leading-none transform rotate-180`}>
                                "
                              </div>
                            </div>
                          </div>
                          
                          {/* Star rating with enhanced design */}
                          <div className="flex justify-center mb-6">
                            <div className={`p-3 bg-${colors.bg} rounded-2xl`}>
                              <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} className={`text-${colors.accent} transform hover:scale-125 transition-transform duration-200`} fill={`var(--${colors.accent})`} style={{
                              animationDelay: `${i * 100}ms`
                            }} />)}
                              </div>
                            </div>
                          </div>
                          
                          {/* Enhanced author section */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {/* Enhanced avatar with gradient ring */}
                              <div className="relative">
                                <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${colors.gradient} blur-sm opacity-70`}></div>
                                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
                                  {testimonial.name.charAt(0)}
                                </div>
                                {/* Status indicator */}
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                              </div>
                              
                              <div className="ml-4">
                                <h4 className="font-bold text-mylli-dark text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-mylli-gray font-medium">{testimonial.title}</p>
                                <p className="text-xs text-mylli-gray opacity-75 italic">{testimonial.role}</p>
                              </div>
                            </div>
                            
                            {/* Location badge */}
                            <div className={`px-3 py-1 bg-${colors.bg} rounded-full border border-${colors.accent}/20`}>
                              <span className={`text-${colors.accent} text-xs font-medium`}>{testimonial.location}</span>
                            </div>
                          </div>
                          
                          {/* Decorative bottom accent */}
                          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                        </div>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
            
            {/* Enhanced call-to-action section with updated button text */}
            <div className="mt-20 relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/5 via-mylli-secondary/5 to-mylli-quaternary/5 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-mylli-primary/10 transform transition-all hover:shadow-3xl hover:border-mylli-primary/20 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-mylli-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-mylli-secondary/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-mylli-dark mb-4">
                      <span className="bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary bg-clip-text text-transparent">
                        Faites partie de nos témoignages
                      </span>
                    </h3>
                    <p className="text-mylli-gray text-lg leading-relaxed max-w-2xl mx-auto">
                      Rejoignez des centaines de familles qui nous font confiance pour accompagner leurs proches avec professionnalisme et bienveillance.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild className="rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:from-mylli-primary hover:to-mylli-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-4">
                      <Link to="/contact" className="flex items-center gap-3">
                        <Phone size={18} />
                        <span className="font-medium">Rejoignez-nous</span>
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="rounded-full border-mylli-primary/30 text-mylli-primary hover:bg-mylli-primary/5 px-8 py-4">
                      
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
            </svg>
          </div>
        </section>
        
        {/* CTA Contact Section */}
      </div>

      {/* Feature Details Modal */}
      {selectedFeature !== null && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className={`relative p-8 ${features[selectedFeature].color === 'primary' ? 'bg-gradient-to-r from-mylli-primary to-mylli-primary-dark' : features[selectedFeature].color === 'secondary' ? 'bg-gradient-to-r from-mylli-secondary to-mylli-tertiary' : 'bg-gradient-to-r from-mylli-quaternary to-mylli-accent'}`}>
              <button onClick={() => setSelectedFeature(null)} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
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

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-lg max-w-none">
                {formatDetailedDescription(features[selectedFeature].detailedDescription)}
              </div>
              
              {/* Call to Action */}
              <div className="mt-8 flex gap-4 justify-end">
                <Button variant="outline" onClick={() => setSelectedFeature(null)} className="px-6 py-3">
                  Fermer
                </Button>
                <Button asChild className={`px-6 py-3 ${features[selectedFeature].color === 'primary' ? 'bg-mylli-primary hover:bg-mylli-primary-dark' : features[selectedFeature].color === 'secondary' ? 'bg-mylli-secondary hover:bg-mylli-secondary' : 'bg-mylli-quaternary hover:bg-mylli-accent'}`}>
                  <Link to="/contact">
                    Contactez-nous
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

export default HomePage;
