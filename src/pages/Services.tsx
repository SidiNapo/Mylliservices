
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Heart, User, Clock, Shield, CheckCircle, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { generateServicePageStructuredData } from '@/utils/structuredData';

const ServicesPage = () => {
  // Generate structured data for services
  const structuredData = generateServicePageStructuredData();

  // Main services
  const mainServices = [
    {
      title: 'AIDE-SOIGNANT(E) À DOMICILE',
      description: 'Assistance personnalisée pour les activités de la vie quotidienne, avec un accompagnement bienveillant et professionnel.',
      icon: <User size={36} className="text-mylli-primary" />,
      image: "/lovable-uploads/e748290e-2458-434c-a64d-54bbe3bf52f0.png",
      link: "/services/aide-soignant"
    },
    {
      title: 'INFIRMIER(ÈRE) À DOMICILE',
      description: 'Soins médicaux professionnels à domicile, incluant les injections, pansements et suivi médical.',
      icon: <Heart size={36} className="text-mylli-primary" />,
      image: "/lovable-uploads/9bf34643-8906-46d2-8de6-63cbd35a7929.png",
      link: "/services/infirmier"
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Nos Services - Aide à domicile professionnelle | Mylli Services" 
        description="Découvrez nos services d'aide à domicile : aide-soignant, infirmier, garde-malade jour/nuit. Soins professionnels à Casablanca et environs." 
        keywords="services aide domicile, aide-soignant, infirmier, garde-malade, soins à domicile, Casablanca" 
        canonicalUrl="/services" 
        structuredData={structuredData} 
      />
      
      <PageBanner 
        title="Nos Services" 
        subtitle="Des solutions personnalisées pour tous vos besoins de santé à domicile" 
        variant="modern" 
      />
      
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <p className="text-mylli-gray text-xl">
              Des gardes-malades professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Services Principaux" 
            subtitle="Une gamme complète de services pour répondre à vos besoins" 
            align="left"
            className="max-w-2xl" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="card-service flex flex-col h-full relative overflow-hidden group animate-fade-in">
                {service.image && (
                  <div className="h-48 mb-6 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-scale-down" 
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  {!service.image && service.icon && (
                    <div className="text-mylli-primary mb-4">{service.icon}</div>
                  )}
                  <h3 className="text-xl font-bold mb-3 text-mylli-dark">{service.title}</h3>
                  <p className="text-mylli-gray mb-4 flex-grow">{service.description}</p>
                  <Button asChild className="btn-primary mt-auto">
                    <Link to={service.link}>
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Besoin de nos services ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            <Button asChild className="btn-accent">
              <Link to="/contact">
                Contactez-nous
              </Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-white hover:bg-white/10">
              <Link to="/fonctionnement">
                Notre fonctionnement
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
