
import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ParallaxSection from '@/components/common/ParallaxSection';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import OptimizedImage from '@/components/seo/OptimizedImage';
import BrandName from '@/components/common/BrandName';

const HomePage = () => {
  const services = [
    {
      title: "Aide-soignant à domicile",
      description: "Soins d'hygiène, aide aux gestes quotidiens, surveillance médicale personnalisée.",
      icon: Heart,
      features: ["Toilette et hygiène", "Aide aux repas", "Surveillance médicale", "Accompagnement personnalisé"],
      price: "À partir de 150 DH/heure",
      imageUrl: "/lovable-uploads/5531d2d4-87fe-4d47-88ad-6db5fc66be70.png",
      link: "/services/aide-soignant"
    },
    {
      title: "Infirmier à domicile",
      description: "Soins infirmiers spécialisés, injections, pansements, suivi médical à domicile.",
      icon: Shield,
      features: ["Injections et perfusions", "Pansements complexes", "Surveillance post-opératoire", "Éducation thérapeutique"],
      price: "À partir de 200 DH/heure",
      imageUrl: "/lovable-uploads/609a7402-4f73-4888-bedd-2256c3fbd997.png",
      link: "/services/infirmier"
    }
  ];

  const testimonials = [
    {
      name: "Fatima Bennani",
      location: "Casablanca",
      quote: "Service exceptionnel ! L'équipe est très professionnelle et bienveillante. Ma mère se sent en sécurité.",
      rating: 5,
      image: "/lovable-uploads/94cdeb85-c1e7-48bd-9d6f-66312af0fb9c.png"
    },
    {
      name: "Ahmed Alami",
      location: "Rabat",
      quote: "Mylli Service a transformé notre quotidien. Des soins de qualité dans le confort de notre foyer.",
      rating: 5,
      image: "/lovable-uploads/c787f2aa-80fe-4009-8468-b57881b297a9.png"
    },
    {
      name: "Aicha Benjelloun",
      location: "Marrakech",
      quote: "Une équipe formidable, toujours à l'écoute. Je recommande vivement leurs services.",
      rating: 5,
      image: "/lovable-uploads/da550c48-1c62-4eb0-b6cc-df8d0db5cdd8.png"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Mylli Service - Soins à Domicile au Maroc | Aide-soignant & Infirmier"
        description="Services de soins à domicile au Maroc. Aide-soignant et infirmier qualifiés pour un accompagnement personnalisé chez vous. Disponible 24h/7j."
        canonicalUrl="/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png"
            alt="Soins à domicile Mylli Service"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/90 via-mylli-primary/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Soins à Domicile <br />
                <span className="text-mylli-quaternary">Professionnels</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-mylli-light/90 max-w-3xl mx-auto">
                <BrandName /> vous accompagne avec compassion et expertise 
                dans le confort de votre foyer
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-mylli-quaternary hover:bg-mylli-quaternary/90 text-mylli-dark font-semibold px-8 py-3 text-lg">
                <Link to="/contact" className="flex items-center">
                  Demander un Devis Gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-mylli-primary px-8 py-3 text-lg"
              >
                <Link to="/mot-du-fondateur">
                  Le Mot du Fondateur
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-mylli-quaternary">+10</div>
                <div className="text-mylli-light">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mylli-quaternary">24/7</div>
                <div className="text-mylli-light">Disponibilité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mylli-quaternary">100%</div>
                <div className="text-mylli-light">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-mylli-light/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mylli-dark mb-6">
                Plus de <span className="text-mylli-primary">10 ans</span> au service de 
                <span className="text-mylli-secondary"> l'accompagnement</span> à domicile
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-mylli-gray text-justify">
                    Depuis 2014, Mylli Service est le pionnier de l'accompagnement à domicile au Maroc. 
                    Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, 
                    nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, 
                    et une parfaite connaissance des besoins du terrain.
                  </p>
                  
                  <p className="text-mylli-gray text-justify">
                    Cette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, 
                    réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des 
                    soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, 
                    soutien moral et relationnel.
                  </p>
                  
                  <p className="text-mylli-gray text-justify">
                    Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service 
                    de haute qualité, toujours empreint de respect et de bienveillance.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md border border-mylli-light">
                    <Users className="h-12 w-12 text-mylli-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-mylli-dark">500+</div>
                    <div className="text-mylli-gray">Familles accompagnées</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-md border border-mylli-light">
                    <Clock className="h-12 w-12 text-mylli-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-mylli-dark">24h/7j</div>
                    <div className="text-mylli-gray">Service d'urgence</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/f34b6412-2bd2-410e-98f3-40493670590f.png"
                  alt="Équipe professionnelle Mylli Service"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mylli-dark mb-6">
              Nos <span className="text-mylli-primary">Services</span> à Domicile
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Des soins professionnels personnalisés dans le confort de votre foyer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/5d0ce080-c5a4-42a8-8249-c2a0a65b787a.png"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Pourquoi Choisir <span className="text-mylli-quaternary"><BrandName /></span> ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Heart className="h-12 w-12 text-mylli-quaternary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Approche Humaine</h3>
              <p className="text-mylli-light">
                Chaque patient est unique. Nous adaptons nos soins à vos besoins spécifiques 
                avec empathie et respect.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Shield className="h-12 w-12 text-mylli-quaternary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Expertise Professionnelle</h3>
              <p className="text-mylli-light">
                Nos professionnels sont qualifiés, formés et régulièrement évalués 
                pour garantir des soins de qualité.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Clock className="h-12 w-12 text-mylli-quaternary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Disponibilité 24h/7j</h3>
              <p className="text-mylli-light">
                Une équipe disponible en permanence pour répondre à vos urgences 
                et questions, jour et nuit.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-mylli-light/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mylli-dark mb-6">
              Ce que disent nos <span className="text-mylli-primary">Clients</span>
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              La satisfaction de nos patients et de leurs familles est notre plus belle récompense
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mylli-primary to-mylli-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Prêt à Commencer Votre Parcours de Soins ?
            </h2>
            <p className="text-xl text-mylli-light/90 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
              comment nous pouvons vous accompagner
            </p>
            <Button 
              size="lg" 
              className="bg-mylli-quaternary hover:bg-mylli-quaternary/90 text-mylli-dark font-semibold px-8 py-3 text-lg"
            >
              <Link to="/contact" className="flex items-center">
                Obtenir une Consultation Gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
