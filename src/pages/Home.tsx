import { Link } from 'react-router-dom';
import { ArrowRight, Heart, User, Home as HomeIcon, Clock, Shield, CheckCircle, Star, ArrowUpRight, Phone, Share, X, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import BreadcrumbNav from '@/components/seo/BreadcrumbNav';
import SEOHead from '@/components/seo/SEOHead';
import BrandName from '@/components/common/BrandName';
import OptimizedImage from '@/components/common/OptimizedImage';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import ContactForm from '@/components/common/ContactForm';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceIcon from '@/components/common/ServiceIcon';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ServiceDetailDialog from '@/components/common/ServiceDetailDialog';

const Home = () => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 'aide-soignant',
      title: 'Aide-soignant à domicile',
      description: 'Accompagnement professionnel pour les soins d\'hygiène et de confort au quotidien.',
      icon: 'Heart' as const,
      link: '/services/aide-soignant',
      color: 'primary',
      features: ['Soins d\'hygiène', 'Aide à la mobilité', 'Confort quotidien', 'Suivi personnalisé'],
      details: {
        description: 'Nos aide-soignants qualifiés vous accompagnent dans tous vos besoins de soins d\'hygiène et de confort à domicile.',
        benefits: ['Maintien à domicile', 'Soins personnalisés', 'Équipe qualifiée', 'Disponibilité 7j/7'],
        process: ['Évaluation des besoins', 'Plan de soins personnalisé', 'Mise en place de l\'accompagnement', 'Suivi régulier']
      }
    },
    {
      id: 'infirmier',
      title: 'Infirmier à domicile',
      description: 'Soins infirmiers spécialisés et surveillance médicale dans le confort de votre domicile.',
      icon: 'User' as const,
      link: '/services/infirmier',
      color: 'secondary',
      features: ['Soins médicaux', 'Injections', 'Surveillance', 'Coordination médicale'],
      details: {
        description: 'Nos infirmiers diplômés assurent tous types de soins médicaux et la surveillance de votre état de santé à domicile.',
        benefits: ['Soins professionnels', 'Suivi médical', 'Coordination avec médecins', 'Urgences 24h/24'],
        process: ['Consultation initiale', 'Planification des soins', 'Intervention à domicile', 'Rapport médical']
      }
    }
  ];

  const testimonials = [
    {
      name: "Fatima Benali",
      text: "L'équipe de Mylli Services a pris soin de ma mère avec une attention remarquable. Leur professionnalisme et leur bienveillance nous ont rassurés.",
      rating: 5,
      service: "Aide-soignant à domicile",
      image: "/lovable-uploads/1c035456-39b2-452e-8fb0-71bcc202e7d1.png"
    },
    {
      name: "Ahmed Rachidi",
      text: "Les infirmiers sont très compétents et ponctuels. Ma femme se sent en sécurité avec leurs soins réguliers.",
      rating: 5,
      service: "Infirmier à domicile",
      image: "/lovable-uploads/2d768651-e0d0-42ed-925c-e0c72eba8ee1.png"
    },
    {
      name: "Khadija El Mansouri",
      text: "Un service exceptionnel ! L'aide-soignante est devenue comme un membre de la famille. Merci pour votre dévouement.",
      rating: 5,
      service: "Accompagnement quotidien",
      image: "/lovable-uploads/2f756573-a96c-4061-998c-b25adfae324e.png"
    }
  ];

  const whyChooseUs = [
    {
      title: "Équipe Qualifiée",
      description: "Professionnels diplômés et expérimentés",
      icon: Shield,
      color: "primary"
    },
    {
      title: "Disponibilité 7j/7",
      description: "Service continu pour votre tranquillité",
      icon: Clock,
      color: "secondary"
    },
    {
      title: "Soins Personnalisés",
      description: "Accompagnement adapté à vos besoins",
      icon: Heart,
      color: "quaternary"
    },
    {
      title: "Confiance & Sécurité",
      description: "Agrément officiel et assurance complète",
      icon: CheckCircle,
      color: "primary"
    }
  ];

  const stats = [
    { number: "2014", label: "Année de création", suffix: "" },
    { number: "1000", label: "Familles accompagnées", suffix: "+" },
    { number: "50", label: "Professionnels qualifiés", suffix: "+" },
    { number: "99", label: "Taux de satisfaction", suffix: "%" }
  ];

  const locations = [
    { city: "Casablanca", districts: ["Maarif", "Gauthier", "Bourgogne", "Racine"] },
    { city: "Rabat", districts: ["Agdal", "Hay Riad", "Souissi", "Centre-ville"] },
    { city: "Mohammedia", districts: ["Centre", "Mimosas", "Alia"] }
  ];

  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    const title = "Mylli Services - Soins à domicile au Maroc";
    const text = "Découvrez nos services de soins à domicile professionnels";
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${text} ${shareUrl}`)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        break;
    }
    setShareDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Mylli Services - Soins à domicile professionnels au Maroc"
        description="Services de soins à domicile de qualité au Maroc. Aide-soignants et infirmiers qualifiés pour un accompagnement personnalisé à Casablanca, Rabat et Mohammedia."
        keywords="soins à domicile, aide-soignant, infirmier, Casablanca, Rabat, Mohammedia, Maroc"
      />

      <BreadcrumbNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-primary via-mylli-accent to-mylli-quaternary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse-soft"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                NOUS SOMMES LÀ POUR VOUS 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-mylli-light to-white animate-text-gradient">
                  AIDER!
                </span>
              </h1>
            </div>

            {/* New Service Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/services/aide-soignant">
                <Button 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-md px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  AIDE-SOIGNANT(E) À DOMICILE
                </Button>
              </Link>
              <Link to="/services/infirmier">
                <Button 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-md px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  INFIRMIER(ÈRE) À DOMICILE
                </Button>
              </Link>
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/90 max-w-3xl mx-auto">
                Depuis 2014, première société au Maroc spécialisée dans l'accompagnement à domicile. 
                Nous offrons des services de qualité avec une équipe professionnelle qualifiée.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link to="/services">
                  <Button 
                    size="lg" 
                    className="bg-white text-mylli-primary hover:bg-white/90 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-mylli-primary font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-mylli-light transition-colors">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-mylli-light/30">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Services"
            subtitle="Découvrez notre gamme complète de services de soins à domicile"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon === 'Heart' ? Heart : User;
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={IconComponent}
                  features={service.features}
                  link={service.link}
                  color={service.color}
                  delay={index * 0.2}
                  onLearnMore={() => setSelectedService(service)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Mylli Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Pourquoi choisir Mylli Services"
            subtitle="Notre engagement pour votre bien-être et votre tranquillité d'esprit"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 hover:border-mylli-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 rounded-2xl ${
                      feature.color === 'primary' 
                        ? 'bg-mylli-primary/10 text-mylli-primary' 
                        : feature.color === 'secondary' 
                        ? 'bg-mylli-secondary/10 text-mylli-secondary' 
                        : 'bg-mylli-quaternary/10 text-mylli-quaternary'
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mylli-dark mb-2 group-hover:text-mylli-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-mylli-gray leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                      
                    <div className={`absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 ${feature.color === 'primary' ? 'bg-mylli-primary/10' : feature.color === 'secondary' ? 'bg-mylli-secondary/10' : 'bg-mylli-quaternary/10'} rounded-bl-2xl md:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 md:mt-16 text-center px-4">
            <Link to="/a-propos">
              <Button 
                size="lg"
                className="btn-primary group"
              >
                En savoir plus sur nous
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-mylli-light/30 to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Ce que disent nos clients"
            subtitle="Découvrez les témoignages de satisfaction de nos familles accompagnées"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="h-full flex flex-col bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 hover:border-mylli-primary/20 animate-fade-in min-h-[400px]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-mylli-primary" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="flex-1 text-mylli-gray text-center leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center space-y-3 mt-auto">
                    {/* Profile Image */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-mylli-primary/20 shadow-md">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Name and Service */}
                    <div className="text-center">
                      <div className="font-bold text-mylli-dark text-lg">{testimonial.name}</div>
                      <div className="text-sm text-mylli-primary font-medium">{testimonial.service}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Nos zones d'intervention"
            subtitle="Nous intervenons dans les principales villes du Maroc"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 border-0 shadow-soft hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-mylli-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-mylli-primary/20 transition-colors">
                      <HomeIcon className="h-8 w-8 text-mylli-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-mylli-dark mb-4 group-hover:text-mylli-primary transition-colors">
                    {location.city}
                  </h3>
                  <div className="space-y-2">
                    {location.districts.map((district, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="mr-2 mb-2 bg-mylli-light/50 text-mylli-dark hover:bg-mylli-primary hover:text-white transition-colors"
                      >
                        {district}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-mylli-gray mb-6">
              Votre ville ne figure pas dans la liste ? Contactez-nous pour connaître nos possibilités d'intervention.
            </p>
            <Link to="/contact">
              <Button className="btn-primary group">
                Vérifier la disponibilité
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-mylli-primary to-mylli-accent text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Contactez-nous dès maintenant"
              subtitle="Notre équipe est à votre disposition pour répondre à toutes vos questions"
              align="center"
            />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-mylli-light mr-3 mt-0.5 flex-shrink-0" />
                      <span>Équipe de professionnels diplômés et expérimentés</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-mylli-light mr-3 mt-0.5 flex-shrink-0" />
                      <span>Services disponibles 7 jours sur 7</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-mylli-light mr-3 mt-0.5 flex-shrink-0" />
                      <span>Accompagnement personnalisé selon vos besoins</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-mylli-light mr-3 mt-0.5 flex-shrink-0" />
                      <span>Tarifs transparents et compétitifs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+212522000000" className="group">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-mylli-primary w-full group-hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Appeler maintenant
                    </Button>
                  </a>
                  <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-mylli-primary hover:scale-105 transition-all duration-300"
                      >
                        <Share className="mr-2 h-5 w-5" />
                        Partager
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Partager Mylli Services</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4">
                        <Button onClick={() => handleShare('whatsapp')} className="bg-green-600 hover:bg-green-700">
                          WhatsApp
                        </Button>
                        <Button onClick={() => handleShare('facebook')} className="bg-blue-600 hover:bg-blue-700">
                          Facebook
                        </Button>
                        <Button onClick={() => handleShare('linkedin')} className="bg-blue-800 hover:bg-blue-900">
                          LinkedIn
                        </Button>
                        <Button onClick={() => handleShare('copy')} variant="outline">
                          Copier le lien
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      {selectedService && (
        <ServiceDetailDialog
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          description={selectedService.details.description}
          icon={selectedService.icon === 'Heart' ? <Heart className="h-6 w-6" /> : <User className="h-6 w-6" />}
          color={selectedService.color}
          link={selectedService.link}
        />
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
