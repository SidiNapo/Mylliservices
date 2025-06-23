
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, Shield, Heart, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/common/ServiceCard';
import ServiceIcon from '../components/common/ServiceIcon';
import TestimonialCard from '../components/common/TestimonialCard';
import SectionHeading from '../components/common/SectionHeading';
import OptimizedImage from '../components/common/OptimizedImage';
import ParallaxSection from '../components/common/ParallaxSection';

const Home = () => {
  const stats = [
    { number: '+6100', label: 'Interventions', icon: Users },
    { number: '15+', label: 'Années d\'expérience', icon: Award },
    { number: '24/7', label: 'Disponibilité', icon: Clock },
    { number: '100%', label: 'Satisfaction client', icon: Shield }
  ];

  const services = [
    {
      title: 'Aide-soignant',
      description: 'Accompagnement personnalisé et soins de qualité à domicile pour votre bien-être quotidien.',
      image: '/lovable-uploads/28fc14d9-2931-4380-992a-383ad48a35da.png',
      link: '/services/aide-soignant',
      detailedDescription: 'Nos aides-soignants qualifiés vous accompagnent dans vos gestes quotidiens avec bienveillance et professionnalisme. Toilette, habillage, aide aux repas, nous sommes là pour préserver votre autonomie et votre dignité.',
    },
    {
      title: 'Infirmier',
      description: 'Soins infirmiers professionnels dispensés dans le confort de votre domicile.',
      image: '/lovable-uploads/ecba78a4-287a-4b46-a387-ecadd15449bd.png',
      link: '/services/infirmier',
      detailedDescription: 'Nos infirmiers diplômés d\'État assurent tous vos soins techniques : injections, pansements, surveillance médicale, administration de traitements. Une prise en charge médicale complète à domicile.',
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      location: 'Paris 15ème',
      rating: 5,
      quote: 'Un service exceptionnel ! L\'équipe est très professionnelle et bienveillante.',
      avatar: '/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png'
    },
    {
      name: 'Jean Martin',
      location: 'Paris 16ème',
      rating: 5,
      quote: 'Je recommande vivement MylliServices. Ma mère est entre de bonnes mains.',
      avatar: '/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png'
    },
    {
      name: 'Sophie Laurent',
      location: 'Paris 17ème',
      rating: 5,
      quote: 'Service irréprochable, personnel qualifié et à l\'écoute.',
      avatar: '/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Approche humaine',
      description: 'Nous mettons l\'humain au cœur de nos préoccupations avec une approche bienveillante et respectueuse.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Personnel qualifié',
      description: 'Tous nos professionnels sont diplômés et régulièrement formés aux dernières pratiques de soins.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Disponibilité 24/7',
      description: 'Une équipe disponible à tout moment pour répondre à vos besoins urgents.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Qualité garantie',
      description: 'Un suivi rigoureux et une évaluation continue pour assurer la meilleure qualité de service.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-quaternary">
        <div className="absolute inset-0 bg-black/20"></div>
        <OptimizedImage
          src="/lovable-uploads/5531d2d4-87fe-4d47-88ad-6db5fc66be70.png"
          alt="MylliServices - Soins à domicile"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          priority
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-mylli-light bg-clip-text text-transparent">
              MylliServices
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-mylli-light font-medium">
              Votre partenaire de confiance pour des soins à domicile de qualité
            </p>
            <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nous offrons des services de soins personnalisés dans le confort de votre domicile, 
              avec une équipe de professionnels qualifiés et bienveillants.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="btn-primary bg-white text-mylli-primary hover:bg-mylli-light hover:text-mylli-dark transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/mot-du-president" 
                className="btn-outline border-white text-white hover:bg-white hover:text-mylli-primary transform hover:scale-105 transition-all duration-300"
              >
                Mot du Fondateur
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="w-8 h-8 mx-auto mb-3 text-mylli-light" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-mylli-light text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-mylli-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos Services"
            subtitle="Des soins professionnels adaptés à vos besoins spécifiques"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                style="modern"
                detailedDescription={service.detailedDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pourquoi choisir MylliServices"
            subtitle="Notre engagement envers l'excellence et votre bien-être"
            align="center"
            className="text-white"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105">
                  <div className="text-mylli-light mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Témoignages"
            subtitle="Ce que disent nos clients satisfaits"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 text-mylli-light max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
            comment nous pouvons vous accompagner.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary bg-white text-mylli-primary hover:bg-mylli-light hover:text-mylli-dark transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Nous contacter
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
