
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Shield, CheckCircle, Star, Syringe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import BrandName from '@/components/common/BrandName';
import ParallaxSection from '@/components/common/ParallaxSection';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import SEOHead from '@/components/seo/SEOHead';
import { generateHomePageStructuredData } from '@/utils/structuredData';

const HomePage = () => {
  const structuredData = generateHomePageStructuredData();

  const stats = [
    { number: '500+', label: 'Patients satisfaits', icon: Users },
    { number: '24/7', label: 'Disponibilité', icon: Clock },
    { number: '10+', label: 'Années d\'expérience', icon: Shield },
    { number: '98%', label: 'Taux de satisfaction', icon: CheckCircle }
  ];

  const services = [
    {
      title: 'Aide-soignant(e) à domicile',
      description: 'Assistance personnalisée pour les activités de la vie quotidienne avec un accompagnement bienveillant.',
      image: "/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png",
      link: '/services/aide-soignant'
    },
    {
      title: 'Infirmier(ère) à domicile',
      description: 'Soins médicaux professionnels incluant injections, pansements et suivi médical à domicile.',
      image: "/lovable-uploads/6dec9a42-92c0-4aa4-8c65-89a7b3a95c5b.png",
      link: '/services/infirmier'
    }
  ];

  const testimonials = [
    {
      name: "Fatima El Amrani",
      role: "Fille de patiente",
      content: "Le service de Mylli Services a été exceptionnel. L'aide-soignante était très professionnelle et bienveillante avec ma mère.",
      rating: 5,
      image: "/lovable-uploads/37fedd5b-3a3c-476d-89c3-c57957c696c5.png"
    },
    {
      name: "Ahmed Benali",
      role: "Patient",
      content: "Grâce à l'infirmière à domicile, j'ai pu recevoir mes soins quotidiens dans le confort de ma maison. Service impeccable !",
      rating: 5,
      image: "/lovable-uploads/37e30e5f-e19b-476f-9b63-7be9bbaa5a3e.png"
    },
    {
      name: "Khadija Tazi",
      role: "Épouse de patient",
      content: "L'équipe de Mylli Services nous a accompagnés pendant une période difficile. Leur professionnalisme et leur humanité nous ont beaucoup aidés.",
      rating: 5,
      image: "/lovable-uploads/1154475c-65aa-44df-bcaf-ab3092ac9960.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Mylli Services - Aide à domicile et soins médicaux professionnels"
        description="Services d'aide à domicile, aide-soignant et infirmier à Casablanca. Soins professionnels, accompagnement personnalisé 24h/24 et 7j/7."
        keywords="aide domicile, infirmier, aide-soignant, soins à domicile, Casablanca, garde-malade"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-dark">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mylli-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mylli-quaternary/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png" 
            alt="Professional healthcare at home" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/90 via-mylli-secondary/80 to-mylli-dark/90"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Soins professionnels
              <span className="block text-mylli-accent mt-2">à domicile</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              <BrandName /> vous offre des services d'aide à domicile avec des professionnels qualifiés, 
              pour un accompagnement personnalisé et bienveillant.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12 animate-fade-in">
              <Button asChild size="lg" className="btn-accent text-lg px-8 py-4 shadow-2xl hover:shadow-mylli-accent/25 transition-all duration-300">
                <Link to="/services">
                  <Syringe className="mr-2 h-5 w-5" />
                  Nos Services
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-4 shadow-2xl transition-all duration-300">
                <Link to="/contact">
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-mylli-accent transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-white/30 rounded-full relative overflow-hidden">
            <div className="w-full h-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-mylli-accent/5 to-mylli-quaternary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Nos Services Principaux" 
            subtitle="Des soins professionnels adaptés à vos besoins, dispensés par des experts qualifiés dans le confort de votre domicile."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                  variant="modern"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">
                Voir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/6dec9a42-92c0-4aa4-8c65-89a7b3a95c5b.png"
        title="Votre bien-être, notre priorité"
        subtitle="Découvrez comment nous révolutionnons les soins à domicile avec notre approche personnalisée et nos technologies de pointe."
        ctaText="Découvrir notre approche"
        ctaLink="/fonctionnement"
      />

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Ce que disent nos patients" 
            subtitle="La satisfaction de nos patients et de leurs familles est au cœur de notre mission. Découvrez leurs témoignages."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mylli-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Prêt à bénéficier de nos services ?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons améliorer votre qualité de vie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <Button asChild size="lg" className="btn-accent text-lg px-8 py-4 shadow-2xl hover:shadow-mylli-accent/25 transition-all duration-300">
              <Link to="/contact">
                Contactez-nous maintenant
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-4 transition-all duration-300">
              <Link to="/services">
                Découvrir nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
