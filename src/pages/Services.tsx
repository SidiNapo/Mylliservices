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

  // Main services with updated images
  const mainServices = [{
    title: 'AIDE-SOIGNANT(E) À DOMICILE',
    description: 'Assistance personnalisée pour les activités de la vie quotidienne, avec un accompagnement bienveillant et professionnel.',
    image: "/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png",
    link: "/services/aide-soignant"
  }, {
    title: 'INFIRMIER(ÈRE) À DOMICILE',
    description: 'Soins médicaux professionnels à domicile, incluant les injections, pansements et suivi médical.',
    image: "/lovable-uploads/6dec9a42-92c0-4aa4-8c65-89a7b3a95c5b.png",
    link: "/services/infirmier"
  }];

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
      
      {/* Main Services - Enhanced larger cards with bigger images */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Services Principaux" 
            subtitle="Une gamme complète de services pour répondre à vos besoins" 
            align="center" 
            className="mb-16" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <div key={index} className="group relative">
                {/* Modern Glass Card Design - Much Larger */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-white/50">
                  
                  {/* Gradient Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/5 via-mylli-secondary/5 to-mylli-accent/5 opacity-60"></div>
                  
                  {/* Top Decorative Element */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent"></div>
                  
                  {/* Much Larger Image Container - Increased height significantly */}
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Status Badge - Availability */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                      Disponible 24h/7j
                    </div>
                  </div>
                  
                  {/* Content Section - Enhanced spacing */}
                  <div className="relative p-10 bg-white/90 backdrop-blur-sm">
                    {/* Title with Modern Typography */}
                    <h3 className="text-3xl font-bold mb-6 text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-mylli-gray mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Quality Stars */}
                    <div className="flex items-center justify-center mb-8">
                      
                    </div>
                    
                    {/* Modern CTA Button with Link */}
                    <Button asChild className="w-full bg-gradient-to-r from-mylli-primary to-mylli-secondary hover:from-mylli-secondary hover:to-mylli-primary text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group/btn border-0">
                      <Link to={service.link} className="flex items-center justify-center">
                        En savoir plus
                        <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-mylli-accent/20 to-mylli-quaternary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-mylli-primary/10 via-mylli-secondary/10 to-mylli-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* External Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 transform scale-0 group-hover:scale-105 transition-transform duration-700 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Exécution d'ordonnance médicale */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with uploaded healthcare image */}
            <div className="animate-fade-in-right order-2 lg:order-1">
              <div className="relative group">
                {/* Enhanced background with gradient */}
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-6 transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/f34b6412-2bd2-410e-98f3-40493670590f.png" 
                      alt="Professionnel de santé exécutant une ordonnance médicale" 
                      className="w-full h-80 object-cover rounded-xl" 
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/20 via-transparent to-transparent rounded-xl"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-mylli-dark">Service Actif</span>
                      </div>
                    </div>
                    
                    {/* Bottom info card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-mylli-dark">Soins Professionnels</h4>
                          <p className="text-sm text-mylli-gray">Selon prescription médicale</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center">
                          <Heart size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-mylli-secondary to-mylli-accent rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Heart size={24} className="text-white" />
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-mylli-quaternary to-mylli-primary rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Content - enhanced with better styling */}
            <div className="animate-fade-in-left order-1 lg:order-2">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6 leading-tight">
                    Exécution d'ordonnance médicale
                  </h2>
                  
                  <p className="text-mylli-gray mb-6 text-lg leading-relaxed">
                    Nos professionnels de santé assurent le suivi rigoureux des prescriptions médicales. Ce service comprend l'administration correcte des médicaments, le suivi des traitements, les injections, pansements et autres soins prescrits par le médecin.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Administration de médicaments selon les prescriptions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Surveillance des effets secondaires et interactions médicamenteuses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Communication régulière avec le médecin traitant</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3" />
                      </div>
                      <span className="text-mylli-gray">Tenue d'un dossier médical précis et à jour</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="btn-primary group">
                    <Link to="/services/infirmier" className="flex items-center">
                      En savoir plus sur nos services infirmiers
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
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
