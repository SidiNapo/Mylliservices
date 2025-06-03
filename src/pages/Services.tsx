import { Link } from 'react-router-dom';
import { Home as HomeIcon, Heart, User, Clock, Shield, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { generateServicePageStructuredData } from '@/utils/structuredData';
const ServicesPage = () => {
  const {
    t,
    isRTL
  } = useLanguage();

  // Generate structured data for services
  const structuredData = generateServicePageStructuredData();

  // Main services
  const mainServices = [{
    title: t('services.caregiver.title'),
    description: t('services.caregiver.desc'),
    icon: <User size={36} className="text-mylli-primary" />,
    image: "/lovable-uploads/e748290e-2458-434c-a64d-54bbe3bf52f0.png",
    link: "/services/aide-soignant"
  }, {
    title: t('services.nurse.title'),
    description: t('services.nurse.desc'),
    icon: <Heart size={36} className="text-mylli-primary" />,
    image: "/lovable-uploads/9bf34643-8906-46d2-8de6-63cbd35a7929.png",
    link: "/services/infirmier"
  }];

  // Garde-malade services
  const gardeMaladeServices = [{
    title: t('footer.service.day'),
    description: "Présence attentive et aide aux activités quotidiennes pendant la journée.",
    icon: <Clock size={24} className="text-mylli-primary" />,
    link: "/services/garde-malade-jour"
  }, {
    title: t('footer.service.night'),
    description: "Surveillance nocturne et assistance pour un sommeil serein et sécurisé.",
    icon: <Clock size={24} className="text-mylli-primary" />,
    link: "/services/garde-malade-nuit"
  }, {
    title: t('footer.service.24h'),
    description: "Présence continue avec relève d'équipe pour une assistance permanente.",
    icon: <Clock size={24} className="text-mylli-primary" />,
    link: "/services/garde-malade-24h"
  }];
  return <div>
      <SEOHead title="Nos Services - Aide à domicile professionnelle | Mylli Services" description="Découvrez nos services d'aide à domicile : aide-soignant, infirmier, garde-malade jour/nuit. Soins professionnels à Casablanca et environs." keywords="services aide domicile, aide-soignant, infirmier, garde-malade, soins à domicile, Casablanca" canonicalUrl="/services" structuredData={structuredData} />
      
      <PageBanner title={t('services.title')} subtitle={t('services.subtitle')} variant="modern" />
      
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
          <SectionHeading title={t('services.main.title')} subtitle={t('services.main.subtitle')} align={isRTL ? "right" : "left"} className="max-w-2xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => <div key={index} className="card-service flex flex-col h-full relative overflow-hidden group animate-fade-in">
                {service.image && <div className="h-48 mb-6 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-scale-down" />
                  </div>}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  {!service.image && service.icon && <div className="text-mylli-primary mb-4">{service.icon}</div>}
                  <h3 className="text-xl font-bold mb-3 text-mylli-dark">{service.title}</h3>
                  <p className="text-mylli-gray mb-4 flex-grow">{service.description}</p>
                  <Button asChild className="btn-primary mt-auto">
                    <Link to={service.link}>
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Garde-Malade Services */}
      
      
      {/* Exécution d'ordonnance médicale */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className={`animate-fade-in-right order-2 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100">
                <div className="bg-mylli-primary/10 h-72 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-md">
                    <Heart size={64} className="text-mylli-primary" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className={`animate-fade-in-left order-1 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">Exécution d'ordonnance médicale</h2>
              <p className="text-mylli-gray mb-6">
                Nos professionnels de santé assurent le suivi rigoureux des prescriptions médicales. Ce service comprend l'administration correcte des médicaments, le suivi des traitements, les injections, pansements et autres soins prescrits par le médecin.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={20} className={`text-mylli-secondary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                  <span>Administration de médicaments selon les prescriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className={`text-mylli-secondary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                  <span>Surveillance des effets secondaires et interactions médicamenteuses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className={`text-mylli-secondary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                  <span>Communication régulière avec le médecin traitant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className={`text-mylli-secondary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                  <span>Tenue d'un dossier médical précis et à jour</span>
                </li>
              </ul>
              <Button asChild className="btn-primary">
                <Link to="/services/infirmier">
                  En savoir plus sur nos services infirmiers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">{t('services.cta.title')}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in">
            {t('services.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 ${isRTL ? 'sm:space-x-reverse' : ''} sm:space-x-4 animate-fade-in`}>
            <Button asChild className="btn-accent">
              <Link to="/contact">
                {t('services.cta.contact')}
              </Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-white hover:bg-white/10">
              <Link to="/fonctionnement">
                {t('services.cta.functioning')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default ServicesPage;