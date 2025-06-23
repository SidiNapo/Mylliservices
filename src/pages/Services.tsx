
import React from 'react';
import { Link } from 'react-router-dom';
import { Syringe, Users, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SEOHead from '@/components/seo/SEOHead';

const ServicesPage = () => {
  const mainServices = [{
    title: 'AIDE-SOIGNANT(E) À DOMICILE',
    description: 'Assistance personnalisée pour les activités de la vie quotidienne, avec un accompagnement bienveillant et professionnel.',
    image: "/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png",
    link: "/services/aide-soignant",
    icon: Users,
    gradient: "from-mylli-primary via-mylli-quaternary to-mylli-accent",
    features: ["Soins personnalisés", "Accompagnement quotidien", "Suivi médical"]
  }, {
    title: 'INFIRMIER(ÈRE) À DOMICILE',
    description: 'Soins médicaux professionnels à domicile, incluant les injections, pansements et suivi médical.',
    image: "/lovable-uploads/6dec9a42-92c0-4aa4-8c65-89a7b3a95c5b.png",
    link: "/services/infirmier",
    icon: Syringe,
    gradient: "from-mylli-secondary via-mylli-tertiary to-mylli-quaternary",
    features: ["Injections médicales", "Pansements", "Suivi thérapeutique"]
  }];

  return (
    <div>
      <SEOHead 
        title="Nos Services - Aide à domicile professionnelle | Mylli Services"
        description="Découvrez nos services d'aide à domicile : aide-soignant, infirmier, garde-malade jour/nuit. Soins professionnels à Casablanca et environs."
        keywords="services aide domicile, aide-soignant, infirmier, garde-malade, soins à domicile, Casablanca"
      />
      
      <PageBanner 
        title="Nos Services" 
        subtitle="Des gardes-malades professionnels et attentifs pour répondre à tous vos besoins d'accompagnement à domicile." 
        variant="modern" 
      />
      
      {/* Main Services */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                  
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-40 transition-all duration-500`}></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <service.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-mylli-gray text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                          <span className="text-mylli-dark font-medium text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={service.link}>
                      <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-4`}>
                        <span>Découvrir ce service</span>
                        <ArrowRight size={24} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin de nos services ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
