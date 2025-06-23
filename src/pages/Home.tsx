
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Phone
} from 'lucide-react';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';
import BrandName from '../components/common/BrandName';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import LazyImage from '../components/common/LazyImage';
import SEOHead from '../components/seo/SEOHead';
import { preloadCriticalImages } from '../utils/imageOptimization';

const Home = () => {
  useEffect(() => {
    // Preload critical images for better performance
    preloadCriticalImages();
  }, []);

  const stats = [
    { 
      number: '+6100', 
      label: 'Interventions',
      icon: <Heart className="text-mylli-primary" size={32} />
    },
    { 
      number: '+500', 
      label: 'Familles satisfaites',
      icon: <Users className="text-mylli-secondary" size={32} />
    },
    { 
      number: '24h/24', 
      label: 'Disponibilité',
      icon: <Clock className="text-mylli-quaternary" size={32} />
    },
    { 
      number: '10+', 
      label: 'Années d\'expérience',
      icon: <Award className="text-mylli-accent" size={32} />
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield size={28} className="text-mylli-primary" />,
      title: "Personnel Qualifié et Certifié",
      description: "Nos infirmiers et aides-soignants sont diplômés d'État avec une expérience confirmée en soins à domicile."
    },
    {
      icon: <Heart size={28} className="text-mylli-secondary" />,
      title: "Approche Humaine et Bienveillante",
      description: "Nous privilégions l'écoute, le respect et la dignité de chaque personne accompagnée."
    },
    {
      icon: <Clock size={28} className="text-mylli-quaternary" />,
      title: "Disponibilité 24h/24 et 7j/7",
      description: "Service d'urgence et interventions programmées selon vos besoins spécifiques."
    },
    {
      icon: <CheckCircle size={28} className="text-mylli-accent" />,
      title: "Suivi Personnalisé",
      description: "Plan de soins adapté et suivi régulier par notre équipe médicale coordonnée."
    }
  ];

  const testimonials = [
    {
      name: "Fatima El Ouardi",
      location: "Casablanca",
      rating: 5,
      comment: "Un service exceptionnel ! L'infirmière qui s'occupe de ma mère est très professionnelle et bienveillante. Je recommande vivement MylliServices.",
      avatar: "/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png"
    },
    {
      name: "Ahmed Benali",
      location: "Ain Chock",
      rating: 5,
      comment: "Grâce à MylliServices, mon père peut rester à la maison tout en recevant des soins de qualité. L'équipe est remarquable.",
      avatar: "/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png"
    },
    {
      name: "Khadija Alami",
      location: "Maarif",
      rating: 5,
      comment: "Service impeccable, ponctuel et professionnel. Je me sens en confiance pour les soins de ma famille.",
      avatar: "/lovable-uploads/5e72d59f-037f-46a2-a887-3878ba72f5dd.png"
    }
  ];

  return (
    <>
      <SEOHead 
        title="MylliServices - Soins à Domicile Professionnels Casablanca | Infirmiers & Aides-Soignants"
        description="Services de soins à domicile de qualité à Casablanca. Infirmiers diplômés, aides-soignants certifiés, garde de nuit. Disponible 24h/24. Devis gratuit."
        keywords="soins domicile casablanca, infirmier domicile, aide soignant, garde malade, mylli services"
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MylliServices",
          "url": "https://mylli-home-care-oasis-gilt.vercel.app",
          "logo": "https://mylli-home-care-oasis-gilt.vercel.app/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png",
          "description": "Services de soins à domicile professionnels à Casablanca",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Casablanca",
            "addressCountry": "MA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+212522000000",
            "contactType": "customer service"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-light via-white to-mylli-primary/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-mylli-primary rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-mylli-quaternary rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 border border-mylli-secondary rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-8 h-8 bg-mylli-accent rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mylli-dark mb-6 leading-tight">
                Soins à domicile
                <span className="block text-mylli-primary">professionnels</span>
                <span className="block text-mylli-secondary">à Casablanca</span>
              </h1>
              
              <p className="text-xl text-mylli-gray mb-8 max-w-2xl">
                <BrandName /> accompagne vos proches avec des soins infirmiers de qualité, 
                dans le confort et la sécurité de leur domicile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link 
                  to="/contact" 
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
                >
                  Demander un devis gratuit
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/mot-du-fondateur" 
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Mot du Fondateur
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-mylli-dark">{stat.number}</div>
                    <div className="text-sm text-mylli-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <LazyImage
                  src="/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png"
                  alt="Infirmière prodiguant des soins à domicile avec compassion"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-hero transform hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-mylli-primary text-white p-4 rounded-full shadow-lg animate-float">
                <Heart size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-mylli-quaternary text-white p-4 rounded-full shadow-lg animate-float-delayed">
                <Shield size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-mylli-light/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Nos Services"
            subtitle="Des soins professionnels adaptés à vos besoins spécifiques"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Soins Infirmiers"
              description="Soins techniques, injections, pansements, surveillance médicale par des infirmiers diplômés d'État."
              icon={
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-mylli-primary/20 shadow-md">
                  <LazyImage 
                    src="/lovable-uploads/536a1b65-e35f-444c-b17b-21fb3039512e.png"
                    alt="Soins infirmiers à domicile"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              }
              link="/services/infirmier"
              style="glass"
              color="primary"
              detailedDescription="Nos infirmiers diplômés d'État interviennent à domicile pour tous vos besoins en soins techniques : injections sous-cutanées et intramusculaires, perfusions, pansements complexes, surveillance glycémique, prise de constantes vitales, administration de traitements prescrits par votre médecin. Service disponible 7j/7 avec possibilité d'interventions d'urgence."
            />
            
            <ServiceCard
              title="Aide & Accompagnement"
              description="Assistance quotidienne, aide à la toilette, accompagnement moral par des aides-soignants qualifiés."
              icon={
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-mylli-secondary/20 shadow-md">
                  <LazyImage 
                    src="/lovable-uploads/208859e7-fd17-4e1f-8206-4f4c01374dc6.png"
                    alt="Aide et accompagnement à domicile"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              }
              link="/services/aide-soignant"
              style="glass"
              color="secondary"
              detailedDescription="Nos aides-soignants certifiés vous accompagnent dans les gestes essentiels du quotidien : aide à la toilette et à l'habillage, préparation et aide aux repas, transferts et mobilisation, accompagnement aux rendez-vous médicaux, soutien moral et social. Intervention personnalisée selon le degré d'autonomie et les besoins spécifiques."
            />
            
            <ServiceCard
              title="Garde de Nuit"
              description="Surveillance nocturne, assistance d'urgence, présence rassurante pour vos proches 24h/24."
              icon={<Clock size={48} className="text-mylli-quaternary" />}
              link="/services"
              style="glass"
              color="accent"
              detailedDescription="Service de garde de nuit avec personnel qualifié pour assurer une surveillance continue : veille médicale nocturne, assistance en cas d'urgence, aide aux levers nocturnes, distribution de traitements, présence rassurante. Intervention possible en garde partagée ou individuelle selon vos besoins et votre budget."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Pourquoi choisir MylliServices"
            subtitle="L'excellence au service de votre bien-être et celui de vos proches"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-mylli-light/20 border border-mylli-primary/10 hover:shadow-card transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-mylli-primary/10 to-mylli-quaternary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-mylli-dark mb-3">{feature.title}</h3>
                <p className="text-mylli-gray text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-mylli-light/30 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Témoignages de nos familles"
            subtitle="La confiance de plus de 500 familles casablancaises"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin de soins à domicile dès aujourd'hui ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour une évaluation gratuite et un devis personnalisé. 
              Nos équipes interviennent rapidement sur Casablanca et ses environs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-mylli-primary px-8 py-4 rounded-full font-semibold hover:bg-mylli-light transition-all duration-300 inline-flex items-center justify-center group"
              >
                <Phone size={20} className="mr-2" />
                Appeler maintenant
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-mylli-primary transition-all duration-300"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
};

export default Home;
