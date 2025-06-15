
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Users, Clock, Phone, Mail, MapPin } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import ParallaxSection from '@/components/common/ParallaxSection';
import TestimonialCard from '@/components/common/TestimonialCard';
import OptimizedImage from '@/components/seo/OptimizedImage';

const HomePage = () => {
  const services = [
    {
      title: "AIDE-SOIGNANT(E) À DOMICILE",
      description: "Assistance personnalisée pour les actes de la vie quotidienne, dans le respect et la dignité de chaque personne.",
      image: "/lovable-uploads/ded65620-decd-481e-af15-8a646459626b.png",
      link: "/services/aide-soignant"
    },
    {
      title: "INFIRMIER(ÈRE) À DOMICILE",
      description: "Soins médicaux professionnels à domicile, prescrits par votre médecin traitant.",
      image: "/lovable-uploads/cfbe77b8-0c6a-4e5c-b8f4-b2fb19e403a5.png",
      link: "/services/infirmier"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Nous plaçons l'humain au cœur de nos préoccupations avec empathie et respect."
    },
    {
      icon: Shield,
      title: "Professionnalisme",
      description: "Une équipe qualifiée et expérimentée pour des soins de qualité optimale."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Un accompagnement personnalisé et une présence rassurante au quotidien."
    },
    {
      icon: Clock,
      title: "Disponibilité",
      description: "Nous nous adaptons à vos besoins et à votre rythme de vie."
    }
  ];

  const testimonials = [
    {
      name: "Fatima B.",
      text: "Un service exceptionnel ! L'équipe de Mylli Services a pris soin de ma mère avec une grande bienveillance. Je recommande vivement leurs services.",
      rating: 5,
      location: "Casablanca"
    },
    {
      name: "Mohammed A.",
      text: "Professionnalisme et humanité caractérisent cette équipe. Mon père se sent en sécurité et bien accompagné au quotidien.",
      rating: 5,
      location: "Rabat"
    },
    {
      name: "Aicha K.",
      text: "Mylli Services a transformé notre quotidien. Des professionnels compétents et à l'écoute de nos besoins spécifiques.",
      rating: 5,
      location: "Mohammedia"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Mylli Services - Soins de Santé à Domicile au Maroc"
        description="Services de santé professionnels à domicile. Aide-soignants et infirmiers qualifiés pour un accompagnement personnalisé à Casablanca, Rabat et dans tout le Maroc."
        keywords="soins à domicile, aide-soignant, infirmier, Casablanca, Rabat, Maroc, santé, accompagnement"
        ogImage="/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/lovable-uploads/5e72d59f-037f-46a2-a887-3878ba72f5dd.png"
            alt="Services de santé à domicile"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mylli-dark/80 via-mylli-dark/60 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
              Des Soins de Qualité
              <span className="block text-mylli-accent mt-2">à Votre Domicile</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Accompagnement professionnel et bienveillant pour votre santé et votre bien-être
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="btn-accent text-lg px-8 py-4">
                <Link to="/services">
                  Découvrir nos services <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-mylli-dark">
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mylli-dark mb-4">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Des professionnels qualifiés à votre service pour tous vos besoins de santé à domicile
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-mylli-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-mylli-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" className="group-hover:bg-mylli-primary group-hover:text-white group-hover:border-mylli-primary transition-all">
                    <Link to={service.link}>
                      En savoir plus <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/5531d2d4-87fe-4d47-88ad-6db5fc66be70.png"
        className="py-20"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-mylli-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-mylli-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-mylli-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-mylli-light/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mylli-dark mb-4">
              Témoignages de nos Clients
            </h2>
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
              Découvrez l'expérience de familles qui nous font confiance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mylli-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prêt à Bénéficier de Nos Services ?
          </h2>
          <p className="text-xl mb-8 text-mylli-light max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour une consultation gratuite et personnalisée
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-lg">
              <Phone className="w-6 h-6 text-mylli-accent" />
              <a href="tel:+212661377438" className="hover:text-mylli-accent transition-colors">
                +212 661 37 74 38
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-mylli-accent" />
              <a href="mailto:info@mylliservices.com" className="hover:text-mylli-accent transition-colors">
                info@mylliservices.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-mylli-accent" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button asChild size="lg" className="btn-accent text-lg px-8 py-4">
              <Link to="/contact">
                Demander un devis gratuit <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
