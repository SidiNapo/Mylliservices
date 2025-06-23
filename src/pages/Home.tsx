
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Heart, Phone, Users, Award, Stethoscope, CheckCircle, Star, MapPin, Calendar, Syringe, Home as HomeIcon, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import ContactForm from '@/components/common/ContactForm';
import ParallaxSection from '@/components/common/ParallaxSection';
import OptimizedImage from '@/components/seo/OptimizedImage';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { generateOrganizationStructuredData, generateBreadcrumbStructuredData } from '@/utils/structuredData';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [hoverCard, setHoverCard] = useState(-1);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const careImages = ['/lovable-uploads/bc5d5201-c6c6-41c0-8594-5bef9171aea8.png', '/lovable-uploads/94cdeb85-c1e7-48bd-9d6f-66312af0fb9c.png', '/lovable-uploads/b078eb91-537d-4b59-bb66-5983988c4fab.png'];

  const services = [
    {
      title: "Aide-soignant(e) à domicile",
      description: "Assistance personnalisée pour les activités de la vie quotidienne avec un accompagnement bienveillant et professionnel.",
      icon: <Heart className="text-mylli-primary" size={48} />,
      link: "/services/aide-soignant",
      detailedDescription: "Nos aides-soignants qualifiés vous accompagnent dans votre quotidien : aide à la toilette, à l'habillage, aux repas, à la mobilité. Un soutien complet pour préserver votre autonomie et votre dignité à domicile."
    },
    {
      title: "Infirmier(ère) à domicile", 
      description: "Soins médicaux professionnels incluant injections, pansements, surveillance et suivi thérapeutique.",
      icon: <Stethoscope className="text-mylli-primary" size={48} />,
      link: "/services/infirmier",
      detailedDescription: "Nos infirmiers diplômés d'État assurent tous vos soins médicaux à domicile : administration de traitements, surveillance post-opératoire, éducation thérapeutique, coordination avec votre médecin traitant."
    },
    {
      title: "Garde-malade jour/nuit",
      description: "Surveillance médicale continue 24h/24 pour patients nécessitant une attention constante.",
      icon: <Clock className="text-mylli-primary" size={48} />,
      link: "/services/garde-malade",
      detailedDescription: "Service de garde-malade professionnel disponible 24h/24. Surveillance médicale continue, accompagnement des patients en situation de dépendance, soutien aux familles dans les moments difficiles."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Rencontre à domicile",
      description: "Nous prenons le temps de vous rencontrer chez vous pour comprendre vos besoins spécifiques et évaluer la situation.",
      icon: <HomeIcon size={32} className="text-mylli-primary" />,
      color: "primary"
    },
    {
      step: 2,
      title: "Proposition personnalisée",
      description: "Nous élaborons un devis sur mesure adapté à vos besoins spécifiques et votre budget.",
      icon: <User size={32} className="text-mylli-secondary" />,
      color: "secondary"
    },
    {
      step: 3,
      title: "Présentation de l'intervenant",
      description: "Nous vous présentons le soignant qualifié qui vous accompagnera dans votre quotidien.",
      icon: <Heart size={32} className="text-mylli-quaternary" />,
      color: "quaternary"
    },
    {
      step: 4,
      title: "Suivi de satisfaction",
      description: "Nous effectuons un suivi régulier pour garantir votre satisfaction et ajuster si nécessaire.",
      icon: <CheckCircle size={32} className="text-mylli-accent" />,
      color: "accent"
    }
  ];

  const testimonials = [
    {
      quote: "Mylli Services a transformé notre quotidien. L'aide-soignante qui s'occupe de ma mère est exceptionnelle - professionnelle, attentionnée et toujours à l'écoute. Ma mère se sent en sécurité et nous avons enfin l'esprit tranquille.",
      name: "Sarah M.",
      title: "Fille d'une patiente",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      quote: "Après mon hospitalisation, j'appréhendais le retour à domicile. L'équipe de Mylli Services m'a accompagné avec une expertise remarquable. Leurs soins infirmiers à domicile m'ont permis une récupération sereine dans le confort de ma maison.",
      name: "Ahmed B.",
      title: "Patient en convalescence",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      quote: "La garde de nuit proposée par Mylli Services nous a sauvés. Papa souffre d'Alzheimer et les nuits étaient devenues très difficiles. Maintenant, nous pouvons tous nous reposer en sachant qu'il est entre de bonnes mains.",
      name: "Fatima L.",
      title: "Famille d'un patient Alzheimer",
      image: "/placeholder.svg",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
        <OptimizedImage src="/lovable-uploads/fcb791a8-469a-4d8f-a3a4-a0298acb30a8.png" alt="Expérience professionnelle" width={80} height={80} className="w-full h-full object-cover" />
      </div>,
      title: "Une expérience de plus de 10 ans",
      description: "Personnel qualifié et vérifié pour une prise en charge en toute sécurité et sérénité.",
      color: "primary" as const,
      detailedDescription: "Plus de 10 ans d'expérience au service de la dignité humaine\n\nDepuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc. Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une parfaite connaissance des besoins du terrain.\n\nCette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, soutien moral et relationnel. Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de haute qualité, toujours empreint de respect et de bienveillance."
    },
    {
      icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
        <OptimizedImage src="/lovable-uploads/f44d65a2-d31c-4815-a088-b4b4465908e2.png" alt="Équipe compétente" width={80} height={80} className="w-full h-full object-cover" />
      </div>,
      title: "Une équipe compétente pour un service de qualité",
      description: "Accompagnement personnalisé et suivi régulier pour garantir votre entière satisfaction.",
      color: "secondary" as const,
      detailedDescription: "Des équipes engagées, compétentes et à l'écoute\n\nChez Mylli Services, la qualité de nos prestations repose avant tout sur la valeur humaine et professionnelle de nos équipes. Chaque intervenant — aide-soignant, infirmier ou coordinateur — est sélectionné avec soin pour ses compétences, mais aussi pour son sens de l'écoute, de l'empathie et de la responsabilité.\n\nFormés aux spécificités de l'accompagnement à domicile, nos professionnels savent s'adapter aux situations les plus délicates, tout en maintenant un climat de confiance avec les patients et leurs familles. Présents, attentifs et bienveillants, ils ne se contentent pas d'exécuter une mission : ils créent un lien humain, essentiel pour surmonter les épreuves de la maladie.\n\nCette approche humaine et professionnelle est au cœur de notre réussite et fait de chaque intervention une expérience respectueuse, sécurisante et profondément humaine."
    },
    {
      icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
        <OptimizedImage src="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png" alt="Disponibilité 24/7" width={80} height={80} className="w-full h-full object-cover" />
      </div>,
      title: "Disponibilité 24/7 avec un service personnalisé",
      description: "Notre équipe est disponible jour et nuit pour répondre à tous vos besoins d'urgence.",
      color: "accent" as const,
      detailedDescription: "Un accompagnement disponible 24h/24 et 7j/7\n\nParce que les besoins en soins et en assistance ne connaissent ni pause ni horaires, Mylli Services assure une présence continue, jour et nuit, toute l'année.\n\nNos équipes sont organisées pour intervenir à tout moment, 24h/24 et 7j/7, afin d'apporter un soutien immédiat, que ce soit pour une urgence, un besoin ponctuel ou un accompagnement de longue durée. Cette disponibilité permanente garantit une tranquillité d'esprit totale aux familles, qui savent qu'elles peuvent compter sur nous à chaque instant.\n\nCette réactivité est l'une des clés de notre efficacité et un pilier fondamental de notre engagement envers les patients et leurs proches."
    }
  ];

  const serviceLocations = [
    {
      city: "Casablanca",
      areas: [],
      highlight: false
    },
    {
      city: "Mohammedia",
      areas: []
    },
    {
      city: "Bouskoura",
      areas: []
    },
    {
      city: "Dar Bouazza",
      areas: []
    },
    {
      city: "Marrakech",
      areas: []
    },
    {
      city: "Rabat",
      areas: []
    },
    {
      city: "Salé",
      areas: []
    }
  ];

  // Generate structured data
  const organizationStructuredData = generateOrganizationStructuredData();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: '/' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const triggerAvailabilityFeature = () => {
    const featuresSection = document.getElementById('features-heading');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        const availabilityCard = document.querySelector('[data-feature="availability"]');
        if (availabilityCard) {
          const collapsibleTrigger = availabilityCard.querySelector('[data-state]');
          if (collapsibleTrigger) {
            const isOpen = collapsibleTrigger.getAttribute('data-state') === 'open';
            if (!isOpen) {
              (collapsibleTrigger as HTMLElement).click();
            }
          }
        }
      }, 800);
    }
  };

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
    <div>
      <SEOHead 
        title="Mylli Services - Soins à domicile professionnels à Casablanca"
        description="Services de soins à domicile à Casablanca : aide-soignant, infirmier, garde-malade 24h/24. Équipe professionnelle, soins personnalisés, disponibilité continue."
        keywords="soins domicile Casablanca, aide-soignant, infirmier domicile, garde-malade, services médicaux domicile"
        canonicalUrl="/"
        structuredData={[organizationStructuredData, breadcrumbStructuredData]}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              Soins à domicile
              <span className="block bg-gradient-to-r from-mylli-accent to-mylli-quaternary bg-clip-text text-transparent">
                professionnels
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-95 leading-relaxed animate-fade-in max-w-4xl mx-auto">
              <BrandName /> vous accompagne avec des services de santé à domicile personnalisés, 
              disponibles 24h/24 à Casablanca et ses environs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in">
              <Button asChild className="btn-accent text-lg px-8 py-4 min-w-[200px]">
                <Link to="/services" className="flex items-center">
                  Nos Services <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-mylli-primary text-lg px-8 py-4 min-w-[200px]">
                <Link to="/contact" className="flex items-center">
                  <Phone size={20} className="mr-2" /> Contactez-nous
                </Link>
              </Button>
            </div>

            {/* Stats Cards with white text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {[
                {
                  number: "+6100",
                  label: "Interventions",
                  icon: <Users className="text-white" size={32} />,
                  description: "réalisées avec succès"
                },
                {
                  number: "24/7", 
                  label: "Disponibilité",
                  icon: <Clock className="text-white" size={32} />,
                  description: "pour vos urgences"
                },
                {
                  number: "100%",
                  label: "Satisfaction",
                  icon: <Heart className="text-white" size={32} />,
                  description: "de nos patients"
                },
                {
                  number: "5+",
                  label: "Années d'expérience",
                  icon: <Award className="text-white" size={32} />,
                  description: "à votre service"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                    <div className="text-lg font-semibold mb-1 text-white">{stat.label}</div>
                    <div className="text-sm opacity-90 text-white">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-white to-mylli-light/30" aria-labelledby="features-heading">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-mylli-primary/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-mylli-secondary/5 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="absolute left-10 top-1/4 w-16 h-16 border border-mylli-primary/20 rounded-full"></div>
          <div className="absolute right-20 bottom-1/4 w-24 h-24 border-2 border-mylli-secondary/10 rounded-lg rotate-12"></div>
          <div className="absolute left-1/2 top-1/2 w-32 h-32 border border-mylli-quaternary/10 rounded-xl -rotate-12 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="absolute top-20 left-1/3 w-4 h-4 bg-mylli-primary/20 animate-pulse-soft"></div>
          <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-mylli-secondary/20 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-20 w-3 h-3 bg-mylli-quaternary/30 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 px-4 md:px-6">
          <header className="max-w-2xl mx-auto mb-12 md:mb-16">
            <SectionHeading title="Des services sur mesure pour vous accompagner a domicile" variant="animated" highlightText="sur mesure" className="text-center" id="features-heading" />
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="h-full" data-feature={index === 2 ? 'availability' : undefined}>
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-50 p-6 md:p-8 h-full flex flex-col transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:border-mylli-primary/20 group relative overflow-hidden min-h-[400px] md:min-h-[450px]">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${feature.color === 'primary' ? 'bg-gradient-to-br from-mylli-primary to-mylli-quaternary' : feature.color === 'secondary' ? 'bg-gradient-to-br from-mylli-secondary to-mylli-tertiary' : 'bg-gradient-to-br from-mylli-quaternary to-mylli-accent'} rounded-2xl md:rounded-3xl`}></div>
                  
                  <div className="flex justify-center mb-6 md:mb-8 relative z-10">
                    <div className={`relative group-hover:scale-110 transition-transform duration-500 ${feature.color === 'primary' ? 'drop-shadow-lg' : feature.color === 'secondary' ? 'drop-shadow-lg' : 'drop-shadow-lg'}`}>
                      {feature.icon}
                      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${feature.color === 'primary' ? 'bg-mylli-primary' : feature.color === 'secondary' ? 'bg-mylli-secondary' : 'bg-mylli-quaternary'}`}></div>
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col relative z-10">
                    <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 text-center ${feature.color === 'primary' ? 'text-mylli-primary' : feature.color === 'secondary' ? 'text-mylli-secondary' : 'text-mylli-quaternary'} group-hover:text-mylli-dark transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-mylli-gray text-center mb-6 flex-grow leading-relaxed group-hover:text-mylli-dark transition-colors duration-300 text-sm md:text-base">
                      {feature.description}
                    </p>
                    
                    <div className="mt-auto pb-2">
                      <button onClick={() => setSelectedFeature(index)} className={`w-full text-center font-semibold flex items-center justify-center py-3 px-4 md:px-6 rounded-xl border transition-all duration-300 text-sm md:text-base ${feature.color === 'primary' ? 'text-mylli-primary border-mylli-primary/20 hover:bg-mylli-primary hover:text-white hover:border-mylli-primary' : feature.color === 'secondary' ? 'text-mylli-secondary border-mylli-secondary/20 hover:bg-mylli-secondary hover:text-white hover:border-mylli-secondary' : 'text-mylli-quaternary border-mylli-quaternary/20 hover:bg-mylli-quaternary hover:text-white hover:border-mylli-quaternary'} hover:shadow-lg hover:scale-105`}>
                        En savoir plus
                        <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 w-full h-2 ${feature.color === 'primary' ? 'bg-gradient-to-r from-mylli-primary to-mylli-quaternary' : feature.color === 'secondary' ? 'bg-gradient-to-r from-mylli-secondary to-mylli-tertiary' : 'bg-gradient-to-r from-mylli-quaternary to-mylli-accent'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl md:rounded-b-3xl`}></div>
                  
                  <div className={`absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 ${feature.color === 'primary' ? 'bg-mylli-primary/10' : feature.color === 'secondary' ? 'bg-mylli-secondary/10' : 'bg-mylli-quaternary/10'} rounded-bl-2xl md:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 text-center px-4">
            <Link to="/services" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-neon group mx-0 text-sm md:text-base">
              <span className="mr-2">Découvrir nos services</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 text-white">
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
                <div className="relative bg-white p-8 rounded-3xl shadow-soft overflow-hidden">
                  <div className="mb-8">
                    <OptimizedImage src="/lovable-uploads/f93fedca-b6df-4264-9427-93f0e22541cd.png" alt="Logo Mylli Services - Aide à domicile professionnelle depuis 2014" width={500} height={320} className="w-full h-auto max-h-80 object-contain mx-auto transform hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                    <div className="flex items-center bg-gradient-to-r from-mylli-primary/10 to-mylli-quaternary/10 p-4 rounded-2xl border border-mylli-primary/20 shadow-lg">
                      <div className="text-center">
                        <span className="text-mylli-primary text-4xl font-bold block">10</span>
                        <span className="text-mylli-dark text-sm font-medium">années<br />d'expérience</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-mylli-secondary/10 to-mylli-tertiary/10 p-4 rounded-2xl border border-mylli-secondary/20 shadow-lg">
                      <div className="text-center">
                        <span className="text-mylli-secondary text-4xl font-bold block">24/7</span>
                        <span className="text-mylli-dark text-sm font-medium">service<br />disponible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            
            <article>
              <header>
                <SectionHeading
                  title="Pourquoi choisir Mylli Services"
                  align="left"
                  variant="gradient"
                />
              </header>
              
              <div className="text-lg text-mylli-gray mb-8 animate-fade-in leading-relaxed">
                <p className="mb-4">
                  Depuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc.
                  Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie,
                  nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une
                  parfaite connaissance des besoins du terrain.
                </p>
                <p className="mb-4">
                  Cette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif
                  et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des soins à
                  domicile : assistance quotidienne, surveillance médicale, soins infirmiers, soutien moral
                  et relationnel.
                </p>
                <p>
                  Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de
                  haute qualité, toujours empreint de respect et de bienveillance.
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
          
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-mylli-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-mylli-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-b from-white to-mylli-light/30">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Services Spécialisés" 
            subtitle="Une gamme complète de soins à domicile adaptés à vos besoins spécifiques"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                style="glass"
                detailedDescription={service.detailedDescription}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link to="/services">
                Découvrir tous nos services <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-br from-mylli-light/30 via-white to-mylli-primary/5 relative overflow-hidden" aria-labelledby="how-it-works-heading">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/5 blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tl from-mylli-quaternary/10 to-mylli-accent/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
            
          <div className="absolute top-20 left-1/4 w-24 h-24 border border-mylli-primary/10 rounded-2xl rotate-12 animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-mylli-secondary/5 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 border-2 border-mylli-quaternary/10 rounded-xl -rotate-12 animate-pulse-soft" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <header className="text-center mb-16">
            <SectionHeading title="Un accompagnement personnalisé en 4 étapes" subtitle="Découvrez notre processus simple et efficace pour vous offrir les meilleurs soins à domicile, adapté à vos besoins spécifiques." variant="gradient" highlightText="personnalisé" id="how-it-works-heading" />
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            <div className="order-2 lg:order-1 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-quaternary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <OptimizedImage src="/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png" alt="Professional healthcare services at home - Nurse providing personalized care" width={600} height={400} className="w-full h-64 sm:h-80 md:h-96 object-cover object-center filter brightness-105 contrast-105" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/20 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 bg-mylli-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-white font-bold text-lg">+10 ans d'expérience</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-mylli-secondary rounded-br-2xl"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-mylli-primary/10 hidden md:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mylli-primary">24/7</div>
                    <div className="text-xs text-mylli-gray">Disponibilité</div>
                  </div>
                </div>
              </div>
            </div>
            
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
                  <div key={index} className="group relative transform transition-all duration-500 hover:-translate-x-2 hover:scale-[1.02]" style={{ animationDelay: `${index * 200}ms` }}>
                    {index < howItWorks.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-current to-transparent opacity-20 hidden sm:block"></div>}
                    
                    <div className={`relative bg-white rounded-2xl shadow-lg border ${colors.border} p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:border-opacity-40 overflow-hidden`}>
                      
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                        
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                            <span className={`text-xl sm:text-2xl font-bold ${colors.text}`}>
                              {item.step}
                            </span>
                          </div>
                          
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                        </div>
                        
                        <div className="flex-grow min-w-0">
                          <h3 className={`text-lg sm:text-xl font-bold mb-3 ${colors.text} group-hover:text-mylli-dark transition-colors duration-300`}>
                            {item.title}
                          </h3>
                          <p className="text-mylli-gray leading-relaxed text-sm sm:text-base group-hover:text-mylli-dark transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}></div>
                      
                      <div className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="relative inline-block group">
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
      
      {/* Service Locations Section */}
      <ServiceLocations locations={serviceLocations} title="Nos Zones d'Intervention" subtitle="Mylli Services propose des soins à domicile professionnels dans toute la région de Casablanca. Découvrez si votre quartier est couvert." />
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white relative overflow-hidden" aria-labelledby="testimonials-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <header className="max-w-3xl mx-auto text-center mb-20">
            <SectionHeading 
              title="Témoignages de nos patients" 
              subtitle="La satisfaction de nos patients est notre plus belle récompense"
              align="center"
              className="text-white"
            />
          </header>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative min-h-[300px] flex items-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentTestimonial
                      ? 'opacity-100 transform translate-x-0'
                      : index < currentTestimonial
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                    rating={testimonial.rating}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                  />
                </div>
              ))}
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'accompagnement à domicile ?
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Contactez-nous dès maintenant pour une consultation gratuite et découvrez comment nous pouvons vous aider.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild className="btn-accent">
                  <Link to="/contact">
                    <Phone size={20} className="mr-2" />
                    Contactez-nous
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-mylli-primary">
                  <Link to="/fonctionnement">
                    Découvrir notre fonctionnement
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

export default HomePage;
