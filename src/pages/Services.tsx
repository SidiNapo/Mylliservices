
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Heart, User, Clock, Shield, CheckCircle, AlertCircle, Phone, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { generateServicePageStructuredData } from '@/utils/structuredData';

const ServicesPage = () => {
  const { t, isRTL } = useLanguage();

  // Generate structured data for services
  const structuredData = generateServicePageStructuredData();

  // Main services
  const mainServices = [
    {
      title: t('services.caregiver.title'),
      description: t('services.caregiver.desc'),
      icon: <User size={36} className="text-mylli-primary" />,
      image: "/lovable-uploads/e748290e-2458-434c-a64d-54bbe3bf52f0.png",
      link: "/services/aide-soignant"
    },
    {
      title: t('services.nurse.title'),
      description: t('services.nurse.desc'),
      icon: <Heart size={36} className="text-mylli-primary" />,
      image: "/lovable-uploads/9bf34643-8906-46d2-8de6-63cbd35a7929.png",
      link: "/services/infirmier"
    }
  ];

  // Garde-malade services
  const gardeMaladeServices = [
    {
      title: t('footer.service.day'),
      description: "Présence attentive et aide aux activités quotidiennes pendant la journée.",
      icon: <Clock size={24} className="text-mylli-primary" />,
      link: "/services/garde-malade-jour"
    },
    {
      title: t('footer.service.night'),
      description: "Surveillance nocturne et assistance pour un sommeil serein et sécurisé.",
      icon: <Clock size={24} className="text-mylli-primary" />,
      link: "/services/garde-malade-nuit"
    },
    {
      title: t('footer.service.24h'),
      description: "Présence continue avec relève d'équipe pour une assistance permanente.",
      icon: <Clock size={24} className="text-mylli-primary" />,
      link: "/services/garde-malade-24h"
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
        title={t('services.title')} 
        subtitle={t('services.subtitle')} 
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
            title={t('services.main.title')} 
            subtitle={t('services.main.subtitle')} 
            align={isRTL ? "right" : "left"} 
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
      
      {/* Mot du Président Section */}
      <section className="section-padding bg-gradient-to-br from-mylli-light via-white to-mylli-primary/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-mylli-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mylli-secondary/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-mylli-primary/20 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 border-2 border-mylli-secondary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-mylli-quaternary/30 rounded-full animate-pulse"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-quaternary rounded-full mb-6">
              <Quote size={32} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mylli-dark mb-4 bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
              Mot du Président
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary mx-auto"></div>
          </div>

          {/* President Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* President Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative group">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-mylli-primary/20 via-mylli-secondary/20 to-mylli-quaternary/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                
                {/* Image container */}
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/63a24310-2663-4181-847d-f67b12166205.png"
                      alt="M. HARAKAT, Fondateur de Mylli Services"
                      className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-xl border-4 border-mylli-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mylli-primary">2014</div>
                    <div className="text-xs text-mylli-gray">Fondation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* President Message */}
            <div className="lg:col-span-3 space-y-8">
              {/* Le Mot du Fondateur */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-mylli-primary/10">
                <h3 className="text-2xl font-bold text-mylli-dark mb-6 flex items-center">
                  <div className="w-8 h-8 bg-mylli-primary rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  Le Mot du Fondateur
                </h3>
                <div className="space-y-4 text-mylli-gray leading-relaxed">
                  <p>
                    La création de Mylli Services en 2014 a été d'abords animée par une conviction profonde : révolutionner l'accompagnement à domicile des personnes en perte d'autonomie au Maroc et offrir un accompagnement digne, humain et professionnel.
                  </p>
                  <p>
                    Notre engagement est né d'un constat simple mais crucial : la société marocaine a évolué vers un modèle moderne où hommes et femmes travaillent, rendant difficile la prise en charge traditionnelle d'un proche malade au domicile familial.
                  </p>
                  <p>
                    Cette transformation sociétale appelait à une réponse professionnelle adaptée. Beaucoup pensaient que notre concept n'avait aucune chance d'aboutir. Pourtant, nous avons persévéré et créé un système de fonctionnement parfaitement adapté au marché marocain.
                  </p>
                  <p className="font-semibold text-mylli-primary">
                    Aujourd'hui, notre modèle est devenu la référence pour la majorité des entreprises qui ont vu le jour après nous dans ce secteur.
                  </p>
                </div>
              </div>

              {/* Notre Mission au Cœur de l'Humain */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-mylli-secondary/10">
                <h3 className="text-2xl font-bold text-mylli-dark mb-6 flex items-center">
                  <div className="w-8 h-8 bg-mylli-secondary rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  Notre Mission au Cœur de l'Humain
                </h3>
                <div className="space-y-4 text-mylli-gray leading-relaxed">
                  <p>
                    Chez Mylli Services, nous proposons des aides-soignants et des infirmiers qui s'occupent des personnes en perte d'autonomie 24h/24 et 7j/7 à leur domicile. C'est un métier noble et passionnant où les plus belles valeurs humaines s'expriment avec intensité.
                  </p>
                  <p>
                    Notre mission va au-delà du simple soin : nous aidons non seulement les malades, mais aussi leurs familles à affronter les difficultés liées aux pathologies handicapantes.
                  </p>
                  <p>
                    Au fil des années, nous avons acquis un savoir-faire indéniable, une expérience plus que probante et une excellente réputation sur le marché. Notre force réside dans notre approche minutieuse du recrutement : nous sélectionnons nos intervenants tant sur le plan humain que sur celui des compétences techniques.
                  </p>
                </div>
              </div>

              {/* Un Engagement qui Perdure */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-mylli-quaternary/10">
                <h3 className="text-2xl font-bold text-mylli-dark mb-6 flex items-center">
                  <div className="w-8 h-8 bg-mylli-quaternary rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  Un Engagement qui Perdure
                </h3>
                <div className="space-y-4 text-mylli-gray leading-relaxed">
                  <p>
                    Dix ans après sa création, Mylli Services continue d'innover et de s'adapter aux besoins évolutifs de nos concitoyens.
                  </p>
                  <p className="font-semibold text-mylli-quaternary">
                    Notre succès témoigne de la justesse de notre vision initiale et de notre engagement indéfectible envers ceux qui nous font confiance.
                  </p>
                </div>
                
                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-mylli-quaternary/20">
                  <div className="text-right">
                    <p className="text-lg font-bold text-mylli-dark">M. HARAKAT</p>
                    <p className="text-mylli-gray italic">Fondateur de Mylli Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
    </div>
  );
};

export default ServicesPage;
