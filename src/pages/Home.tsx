
import React from 'react';
import { Clock, Users, Shield, Star, MapPin, Phone, Mail, Calendar, Award, Heart, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import ServiceLocations from '@/components/common/ServiceLocations';
import ParallaxSection from '@/components/common/ParallaxSection';
import TestimonialCard from '@/components/common/TestimonialCard';
import SEOHead from '@/components/seo/SEOHead';

// Sample location data
const locations = [
  {
    city: "Casablanca",
    areas: ["Ain Diab", "Anfa", "Maarif", "Bourgogne", "Hay Hassani", "Sidi Maarouf", "California", "Centre-ville"],
    highlight: true
  },
  {
    city: "Mohammedia",
    areas: ["Centre-ville", "El Alia", "Les Crêtes"],
    highlight: false
  },
  {
    city: "Rabat",
    areas: ["Agdal", "Hassan", "Hay Riad"],
    highlight: false
  }
];

const testimonials = [
  {
    quote: "Service exceptionnel ! L'équipe de Mylli Services a pris soin de ma mère avec beaucoup de professionnalisme et de bienveillance.",
    name: "Fatima Benali",
    title: "Fille de patiente",
    rating: 5,
    image: "/lovable-uploads/b078eb91-537d-4b59-bb66-5983988c4fab.png"
  },
  {
    quote: "Disponibilité 24h/24, personnel qualifié et tarifs raisonnables. Je recommande vivement !",
    name: "Ahmed Lakhlifi",
    title: "Patient post-opératoire",
    rating: 5,
    image: "/lovable-uploads/b078eb91-537d-4b59-bb66-5983988c4fab.png"
  },
  {
    quote: "Merci à toute l'équipe pour votre dévouement. Mon père se sent en sécurité avec vos soins.",
    name: "Khadija Alami",
    title: "Famille de patient",
    rating: 5,
    image: "/lovable-uploads/b078eb91-537d-4b59-bb66-5983988c4fab.png"
  }
];

const services = [
  {
    icon: <Heart className="h-8 w-8 text-mylli-primary" />,
    title: "Soins infirmiers",
    description: "Injections, pansements, perfusions par des infirmiers diplômés d'État"
  },
  {
    icon: <Users className="h-8 w-8 text-mylli-primary" />,
    title: "Aide à domicile",
    description: "Assistance quotidienne pour l'hygiène, repas et activités"
  },
  {
    icon: <Clock className="h-8 w-8 text-mylli-primary" />,
    title: "Garde 24h/24",
    description: "Surveillance médicale continue jour et nuit"
  }
];

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Soins à Domicile Casablanca | #1 Infirmier Aide-Soignant 24h | Mylli Services"
        description="🏥 MYLLI SERVICES - N°1 des soins à domicile Casablanca depuis 2014! ⭐ Infirmiers diplômés d'État ⭐ Aides-soignants certifiés ⭐ Garde malades 24h/24. URGENCES: +212 661 37 74 38"
        keywords="soins domicile casablanca, infirmier domicile casablanca, aide soignant casablanca, mylli services"
        ogImage="/lovable-uploads/554676d0-4988-4b83-864c-15c32ee349a2.png"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-mylli-light via-white to-mylli-light/50 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/f0c529ef-4f6d-4841-b538-cf39800c85e2.png')] bg-cover bg-center opacity-5"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <Badge variant="secondary" className="bg-mylli-primary/10 text-mylli-primary border-mylli-primary/20">
                      <Award className="h-4 w-4 mr-2" />
                      N°1 depuis 2014
                    </Badge>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mylli-dark leading-tight">
                      Soins à domicile de{' '}
                      <span className="text-mylli-primary">qualité</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-mylli-gray leading-relaxed">
                      Des professionnels qualifiés pour vous accompagner dans le confort de votre foyer
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-mylli-primary hover:bg-mylli-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link to="/contact">
                        <Phone className="h-5 w-5 mr-2" />
                        Urgences 24h: +212 661 37 74 38
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-mylli-secondary text-mylli-secondary hover:bg-mylli-secondary/10">
                      <Link to="/services">
                        Découvrir nos services
                      </Link>
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mylli-primary">10+</div>
                      <div className="text-sm text-mylli-gray">Années d'expérience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mylli-primary">500+</div>
                      <div className="text-sm text-mylli-gray">Patients satisfaits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mylli-primary">24/7</div>
                      <div className="text-sm text-mylli-gray">Disponibilité</div>
                    </div>
                  </div>
                </div>

                <div className="relative lg:pl-8">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/f0c529ef-4f6d-4841-b538-cf39800c85e2.png"
                      alt="Équipe médicale Mylli Services"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      loading="eager"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div>
                          <div className="font-semibold text-mylli-dark">4.9/5</div>
                          <div className="text-sm text-mylli-gray">150+ avis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mylli-primary mb-6">Nos services principaux</h2>
              <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
                Une gamme complète de soins à domicile adaptés à vos besoins spécifiques
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-mylli-primary">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-mylli-light rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-mylli-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-mylli-gray">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-mylli-primary hover:bg-mylli-primary/90">
                <Link to="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Locations */}
        <ServiceLocations 
          title="Nos zones d'intervention"
          subtitle="Nous intervenons dans plusieurs villes du Maroc pour vous offrir nos services de qualité"
          locations={locations}
        />
        
        {/* Features Section */}
        <ParallaxSection 
          backgroundGradient="linear-gradient(135deg, #f5f9ff 0%, #e1f0fc 100%)"
          height="auto"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mylli-primary mb-6">Pourquoi nous choisir ?</h2>
              <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
                Notre engagement : vous offrir des soins de qualité dans le respect et la bienveillance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-mylli-light rounded-full w-fit">
                    <Clock className="h-8 w-8 text-mylli-primary" />
                  </div>
                  <CardTitle className="text-xl text-mylli-dark">Disponibilité 24h/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-mylli-gray">
                    Une équipe disponible à tout moment pour répondre à vos besoins urgents
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-mylli-light rounded-full w-fit">
                    <Users className="h-8 w-8 text-mylli-primary" />
                  </div>
                  <CardTitle className="text-xl text-mylli-dark">Personnel qualifié</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-mylli-gray">
                    Des professionnels diplômés et expérimentés pour des soins de qualité
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-mylli-light rounded-full w-fit">
                    <Shield className="h-8 w-8 text-mylli-primary" />
                  </div>
                  <CardTitle className="text-xl text-mylli-dark">Soins personnalisés</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-mylli-gray">
                    Une approche adaptée aux besoins spécifiques de chaque patient
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </ParallaxSection>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mylli-primary mb-6">Ce que disent nos patients</h2>
              <p className="text-xl text-mylli-gray max-w-3xl mx-auto">
                Découvrez les témoignages de satisfaction de nos patients et leurs familles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin de soins à domicile ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contactez-nous dès maintenant pour une prise en charge rapide et professionnelle
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-mylli-primary hover:bg-gray-100">
                  <Link to="/contact">
                    <Mail className="h-5 w-5 mr-2" />
                    Demander un devis gratuit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="tel:+212661377438">
                    <Phone className="h-5 w-5 mr-2" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Urgences 24h/24</div>
                    <div className="opacity-90">+212 661 37 74 38</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">info@mylliservices.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <div className="opacity-90">Casablanca, Maroc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
