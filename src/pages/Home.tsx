
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield, Heart, MapPin, Phone, Mail } from 'lucide-react';
import BrandName from '@/components/common/BrandName';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import ServiceLocations from '@/components/common/ServiceLocations';
import ContactForm from '@/components/common/ContactForm';
import ParallaxSection from '@/components/common/ParallaxSection';
import LazySection from '@/components/seo/LazySection';
import OptimizedImage from '@/components/seo/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import { trackEvent } from '@/utils/seoUtils';

const HomePage = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // Track page view
  useEffect(() => {
    trackEvent('page_view', 'navigation', 'home');
  }, []);

  // Service locations data
  const serviceLocations = [
    {
      name: "Casablanca",
      address: "Tous quartiers de Casablanca",
      phone: "+212 5XX-XXX-XXX",
      email: "casablanca@mylliservices.ma",
      coordinates: { lat: 33.5731, lng: -7.5898 }
    },
    {
      name: "Rabat",
      address: "Tous quartiers de Rabat",
      phone: "+212 5XX-XXX-XXX", 
      email: "rabat@mylliservices.ma",
      coordinates: { lat: 34.0209, lng: -6.8416 }
    },
    {
      name: "Salé",
      address: "Tous quartiers de Salé",
      phone: "+212 5XX-XXX-XXX",
      email: "sale@mylliservices.ma", 
      coordinates: { lat: 34.0531, lng: -6.7985 }
    },
    {
      name: "Témara",
      address: "Tous quartiers de Témara",
      phone: "+212 5XX-XXX-XXX",
      email: "temara@mylliservices.ma",
      coordinates: { lat: 33.9286, lng: -6.9063 }
    }
  ];

  // Main services data
  const mainServices = [
    {
      id: 'aide-soignant',
      title: "Aide-soignant(e) à domicile",
      description: "Préservation de l'autonomie tout en accomplissant des actes de la vie quotidienne.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: ["Aide à la toilette", "Habillage/déshabillage", "Aide aux repas", "Mobilisation"],
      link: "/services/aide-soignant"
    },
    {
      id: 'infirmier', 
      title: "Infirmier(ère) à domicile",
      description: "Soins médicaux à domicile comme alternative à l'hospitalisation.",
      icon: Heart,
      color: "from-red-500 to-pink-500", 
      features: ["Soins techniques", "Surveillance médicale", "Administration médicaments", "Suivi post-opératoire"],
      link: "/services/infirmier"
    },
    {
      id: 'garde-malade',
      title: "Services de garde-malade",
      description: "Présence continue et surveillance pour les personnes fragiles, jour, nuit ou 24h/24.",
      icon: Clock,
      color: "from-green-500 to-emerald-500",
      features: ["Surveillance 24h/24", "Assistance nuit", "Compagnie de jour", "Sécurité permanente"],
      link: "/services"
    }
  ];

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Évaluation des besoins",
      description: "Nous rencontrons la famille pour comprendre les besoins spécifiques et établir un plan de soins personnalisé.",
      icon: Users
    },
    {
      number: "02", 
      title: "Sélection du personnel",
      description: "Nos équipes qualifiées sont choisies selon les besoins identifiés et la personnalité du patient.",
      icon: Shield
    },
    {
      number: "03",
      title: "Mise en place du service", 
      description: "Démarrage rapide avec un suivi continu pour garantir la qualité et l'adaptation du service.",
      icon: Heart
    }
  ];

  // Key features data
  const keyFeatures = [
    {
      title: "Professionnels qualifiés",
      description: "Équipe formée et certifiée avec une expertise reconnue dans les soins à domicile.",
      icon: Shield,
      stats: "100% certifiés"
    },
    {
      title: "Disponibilité 24h/24",
      description: "Service d'urgence et assistance continue pour répondre à tous vos besoins.",
      icon: Clock,
      stats: "24h/24, 7j/7"
    },
    {
      title: "Suivi personnalisé", 
      description: "Accompagnement adapté à chaque situation avec un coordinateur dédié.",
      icon: Heart,
      stats: "Suivi individualisé"
    },
    {
      title: "Couverture étendue",
      description: "Intervention dans toute la région de Casablanca-Rabat-Salé-Témara.",
      icon: MapPin,
      stats: "4 villes couvertes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mylli Services - Soins à domicile au Maroc | Aide-soignant & Infirmier</title>
        <meta 
          name="description" 
          content="Mylli Services, leader des soins à domicile au Maroc depuis 2014. Services d'aide-soignant, infirmier et garde-malade à Casablanca, Rabat, Salé et Témara. Disponible 24h/24." 
        />
        <meta name="keywords" content="soins domicile Maroc, aide soignant Casablanca, infirmier domicile Rabat, garde malade, Mylli Services" />
        <link rel="canonical" href="https://mylliservices.ma/" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Mylli Services - Soins à domicile au Maroc" />
        <meta property="og:description" content="Leader des soins à domicile au Maroc depuis 2014. Services professionnels 24h/24." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylliservices.ma/" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mylli Services - Soins à domicile au Maroc" />
        <meta name="twitter:description" content="Leader des soins à domicile au Maroc depuis 2014." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mylli Services", 
            "description": "Services de soins à domicile au Maroc",
            "url": "https://mylliservices.ma",
            "logo": "https://mylliservices.ma/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+212-XXX-XXX-XXX",
              "contactType": "customer service",
              "areaServed": "MA",
              "availableLanguage": ["fr", "ar", "en"]
            },
            "address": {
              "@type": "PostalAddress", 
              "addressCountry": "MA",
              "addressRegion": "Casablanca-Settat"
            },
            "sameAs": [
              "https://www.facebook.com/mylliservices",
              "https://www.linkedin.com/company/mylliservices"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        {/* Hero Section with enhanced visual appeal */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-primary/10 via-white to-mylli-secondary/10">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mylli-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mylli-secondary/15 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-mylli-accent/5 to-mylli-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-mylli-primary/20 rounded-full px-6 py-3 mb-8 shadow-soft"
              >
                <div className="w-2 h-2 bg-mylli-primary rounded-full animate-pulse"></div>
                <span className="text-mylli-primary font-medium">Leader des soins à domicile au Maroc</span>
              </motion.div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-mylli-dark">Des soins </span>
                <span className="text-gradient bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent animate-text-gradient">
                  professionnels
                </span>
                <br />
                <span className="text-mylli-dark">à domicile</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-mylli-gray mb-12 max-w-3xl mx-auto leading-relaxed">
                Plus de 10 ans d'expérience au service de votre bien-être. 
                Aide-soignants et infirmiers qualifiés disponibles 24h/24 dans tout le Maroc.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="btn-primary group px-8 py-4 text-lg"
                  onClick={() => {
                    navigate('/contact');
                    trackEvent('cta_click', 'engagement', 'hero_contact');
                  }}
                >
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white px-8 py-4 text-lg transition-all duration-300"
                  onClick={() => {
                    navigate('/services');
                    trackEvent('cta_click', 'engagement', 'hero_services');
                  }}
                >
                  Découvrir nos services
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap justify-center items-center gap-8 mt-16 text-mylli-gray"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-mylli-primary" />
                  </div>
                  <span className="font-medium">Personnel certifié</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-mylli-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-mylli-secondary" />
                  </div>
                  <span className="font-medium">Service 24h/24</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-mylli-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-mylli-accent" />
                  </div>
                  <span className="font-medium">Depuis 2014</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-mylli-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-mylli-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </section>
        
        {/* Feature Section - Lazy load with improved spacing */}
        <LazySection onVisible={() => trackEvent('section_view', 'engagement', 'features')}>
          <div className="section-padding bg-gray-50 relative py-32 md:py-40">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-mylli-primary/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-mylli-secondary/5 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
              <header>
                <SectionHeading 
                  title="Pourquoi choisir Mylli Services ?"
                  subtitle="Excellence, professionnalisme et bienveillance au cœur de nos services"
                  centered={true}
                />
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full feature-card hover-glow group cursor-pointer border-0 shadow-soft hover:shadow-hover transition-all duration-500">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-mylli-dark mb-4 group-hover:text-mylli-primary transition-colors">
                          {feature.title}
                        </h3>
                        
                        <p className="text-mylli-gray mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        <Badge variant="secondary" className="bg-mylli-primary/10 text-mylli-primary border-0">
                          {feature.stats}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Statistics Section */}
              <div className="mt-20 bg-white rounded-3xl p-12 shadow-soft border border-gray-100/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-mylli-primary">10+</div>
                    <div className="text-mylli-gray font-medium">Années d'expérience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-mylli-secondary">24/7</div>
                    <div className="text-mylli-gray font-medium">Service disponible</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-mylli-accent">4</div>
                    <div className="text-mylli-gray font-medium">Villes couvertes</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-mylli-primary">100%</div>
                    <div className="text-mylli-gray font-medium">Personnel certifié</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazySection>
        
        {/* About Section - Lazy load with improved spacing and updated content */}
        <LazySection onVisible={() => trackEvent('section_view', 'engagement', 'about')}>
          <div className="section-padding bg-white relative py-32 md:py-40">
            <div className="container-custom relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <aside>
                  <div className="relative">
                    <OptimizedImage
                      src="/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png"
                      alt="Équipe Mylli Services - Professionnels des soins à domicile"
                      className="rounded-3xl shadow-hover w-full h-[500px] object-cover"
                      loading="lazy"
                    />
                    
                    {/* Floating stats card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-hover border border-gray-100/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-mylli-primary/10 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-mylli-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-mylli-primary">10+</div>
                          <div className="text-sm text-mylli-gray">années d'expérience</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </aside>

                <main>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="mb-6 bg-mylli-primary/10 text-mylli-primary border-0 px-4 py-2">
                      À propos de nous
                    </Badge>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mylli-dark mb-6 leading-tight">
                      Plus de 10 ans d'expérience au service de la dignité humaine
                    </h2>
                    
                    <div className="space-y-6 text-lg text-mylli-gray leading-relaxed">
                      <p>
                        Depuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc. 
                        Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, 
                        nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une 
                        parfaite connaissance des besoins du terrain.
                      </p>
                      
                      <p>
                        Cette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, 
                        réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des 
                        soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, 
                        soutien moral et relationnel.
                      </p>
                      
                      <p>
                        Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service 
                        de haute qualité, toujours empreint de respect et de bienveillance.
                      </p>
                    </div>

                    <div className="mt-8">
                      <Button 
                        className="btn-primary group"
                        onClick={() => {
                          navigate('/apropos');
                          trackEvent('cta_click', 'engagement', 'about_learn_more');
                        }}
                      >
                        En savoir plus sur nous
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                </main>
              </div>
            </div>
          </div>
        </LazySection>
        
        {/* Services Section - Lazy load with improved spacing */}
        <LazySection onVisible={() => trackEvent('section_view', 'engagement', 'services')}>
          <div className="section-padding bg-gray-50 relative py-32 md:py-40">
            <div className="container-custom relative z-10">
              <header>
                <SectionHeading 
                  title="Nos Services"
                  subtitle="Des soins professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile."
                  centered={true}
                />
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => {
                    navigate('/services');
                    trackEvent('cta_click', 'engagement', 'services_view_all');
                  }}
                >
                  Voir tous nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </LazySection>
        
        {/* How It Works Section - Lazy load with improved spacing */}
        <LazySection onVisible={() => trackEvent('section_view', 'engagement', 'how_it_works')}>
          <div className="section-padding bg-white relative py-32 md:py-40">
            <div className="container-custom relative z-10">
              <header>
                <SectionHeading 
                  title="Notre Fonctionnement"
                  subtitle="Un processus simple et efficace pour vous accompagner à chaque étape"
                  centered={true}
                />
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connection lines for desktop */}
                <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-mylli-primary to-mylli-secondary -translate-y-1/2 z-0"></div>
                
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                    <Card className="h-full text-center p-8 card-3d hover-glow border-0 shadow-soft hover:shadow-hover">
                      <CardContent className="p-0">
                        {/* Step number */}
                        <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-soft">
                          {step.number}
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 bg-mylli-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                          <step.icon className="w-6 h-6 text-mylli-primary" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-mylli-dark mb-4">
                          {step.title}
                        </h3>
                        
                        <p className="text-mylli-gray leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="btn-secondary"
                  onClick={() => {
                    navigate('/fonctionnement');
                    trackEvent('cta_click', 'engagement', 'how_it_works_learn_more');
                  }}
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </LazySection>
        
        {/* Service Locations Section - Lazy load with improved spacing */}
        <LazySection>
          <div className="section-padding bg-gray-50 relative py-32 md:py-40">
            <ServiceLocations 
              locations={serviceLocations} 
              title="Nos Zones d'Intervention" 
              subtitle="Nous intervenons dans les principales villes du Maroc pour vous offrir nos services de proximité"
            />
          </div>
        </LazySection>

        {/* Testimonials Section - Lazy load with improved spacing */}
        <LazySection onVisible={() => trackEvent('section_view', 'engagement', 'testimonials')}>
          <div className="section-padding bg-white relative py-32 md:py-40">
            <div className="container-custom">
              <header>
                <SectionHeading 
                  title="Témoignages Clients"
                  subtitle="La confiance de nos clients est notre plus belle récompense"
                  centered={true}
                />
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard
                  name="Fatima Bennani"
                  role="Fille de patiente"
                  content="Mylli Services a pris soin de ma mère avec une attention remarquable. L'équipe est professionnelle et bienveillante."
                  rating={5}
                  location="Casablanca"
                />
                <TestimonialCard
                  name="Ahmed Tazi"
                  role="Patient"
                  content="Excellent service, personnel qualifié et très à l'écoute. Je recommande vivement leurs services."
                  rating={5}
                  location="Rabat"
                />
                <TestimonialCard
                  name="Khadija Alami"
                  role="Famille de patient"
                  content="Grâce à Mylli Services, mon père a pu rester chez lui dans les meilleures conditions. Merci pour votre dévouement."
                  rating={5}
                  location="Salé"
                />
              </div>
            </div>
          </div>
        </LazySection>

        {/* Contact Section - Lazy load with improved spacing */}
        <LazySection onVisible={() => trackEvent('section_view', 'engagement', 'contact')}>
          <div className="section-padding bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 relative py-32 md:py-40">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <aside>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="mb-6 bg-mylli-primary/10 text-mylli-primary border-0 px-4 py-2">
                      Contactez-nous
                    </Badge>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
                      Prêt à commencer ?
                    </h2>
                    
                    <p className="text-lg text-mylli-gray mb-8 leading-relaxed">
                      Contactez-nous dès aujourd'hui pour discuter de vos besoins et recevoir un devis personnalisé. 
                      Notre équipe est à votre disposition pour répondre à toutes vos questions.
                    </p>

                    {/* Contact information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-mylli-primary/10 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-mylli-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-mylli-dark">Téléphone</div>
                          <div className="text-mylli-gray">+212 5XX-XXX-XXX</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-mylli-secondary/10 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-mylli-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-mylli-dark">Email</div>
                          <div className="text-mylli-gray">contact@mylliservices.ma</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-mylli-accent/10 rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-mylli-accent" />
                        </div>
                        <div>
                          <div className="font-semibold text-mylli-dark">Disponibilité</div>
                          <div className="text-mylli-gray">24h/24, 7j/7</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </aside>

                <main>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 shadow-hover border-0">
                      <CardContent className="p-0">
                        <ContactForm />
                      </CardContent>
                    </Card>
                  </motion.div>
                </main>
              </div>
            </div>
          </div>
        </LazySection>
      </div>
    </>
  );
};

export default HomePage;
