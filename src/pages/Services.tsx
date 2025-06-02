
import { Link } from 'react-router-dom';
import { ArrowRight, User, Heart, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import SEOHead from '@/components/seo/SEOHead';
import OptimizedImage from '@/components/seo/OptimizedImage';
import { generateServiceSchema } from '@/utils/structuredData';

const ServicesPage = () => {
  const services = [
    {
      title: "Aide-soignant(e) à domicile",
      description: "Assistance personnalisée pour les activités de la vie quotidienne, préservation de l'autonomie et accompagnement bienveillant.",
      detailedDescription: "Nos aide-soignants qualifiés vous accompagnent dans vos gestes quotidiens : toilette, habillage, repas, mobilisation et transferts. Ils veillent à maintenir votre autonomie tout en respectant votre dignité et vos habitudes de vie.",
      icon: <User size={40} className="text-mylli-primary" />,
      link: "/services/aide-soignant",
      features: ["Aide à la toilette", "Aide aux repas", "Mobilisation", "Accompagnement moral"]
    },
    {
      title: "Infirmier(ère) à domicile",
      description: "Soins médicaux professionnels à domicile comme alternative sûre et confortable à l'hospitalisation.",
      detailedDescription: "Nos infirmiers diplômés d'État réalisent tous types de soins médicaux à votre domicile : injections, pansements, perfusions, surveillance médicale. Une prise en charge médicale complète dans le confort de votre foyer.",
      icon: <Heart size={40} className="text-mylli-primary" />,
      link: "/services/infirmier",
      features: ["Soins médicaux", "Injections", "Pansements", "Surveillance médicale"]
    },
    {
      title: "Services de garde-malade",
      description: "Présence continue et surveillance professionnelle pour les personnes fragiles, disponible jour, nuit ou 24h/24.",
      detailedDescription: "Service de garde-malade avec présence continue pour assurer sécurité et réconfort. Surveillance médicale, aide aux gestes quotidiens et présence rassurante pour vous et votre famille.",
      icon: <Clock size={40} className="text-mylli-primary" />,
      link: "/services/garde-malade",
      features: ["Garde de jour", "Garde de nuit", "Garde 24h/24", "Surveillance médicale"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-mylli-primary" />,
      title: "Personnel qualifié",
      description: "Équipe de professionnels diplômés et expérimentés, sélectionnés avec soin."
    },
    {
      icon: <Star className="h-8 w-8 text-mylli-secondary" />,
      title: "Suivi personnalisé",
      description: "Plan de soins adapté à vos besoins spécifiques avec suivi régulier."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-mylli-quaternary" />,
      title: "Disponibilité 24/7",
      description: "Service disponible jour et nuit, week-ends et jours fériés inclus."
    }
  ];

  // SEO structured data
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": generateServiceSchema(service.title, service.description)
    }))
  };

  return (
    <>
      <SEOHead
        title="Services d'Aide à Domicile - Mylli Services | Aide-soignant, Infirmier, Garde-malade"
        description="Découvrez nos services professionnels d'aide et de soins à domicile : aide-soignant, infirmier, garde-malade. Équipe qualifiée disponible 24h/24 à Casablanca."
        keywords="services aide domicile, aide-soignant domicile, infirmier domicile, garde-malade, soins médicaux domicile, Casablanca"
        canonicalUrl="/services"
        structuredData={servicesSchema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-mylli-primary/10 to-mylli-light overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/5 to-transparent"></div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <header>
                <h1 className="text-4xl md:text-5xl font-bold text-mylli-dark mb-6">
                  Nos Services d'Aide à Domicile
                </h1>
                <p className="text-xl text-mylli-gray mb-8 leading-relaxed">
                  Des soins professionnels et personnalisés pour préserver votre autonomie et votre bien-être à domicile.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-mylli-primary hover:bg-mylli-primary-dark">
                    <Link to="/contact">Demander un devis gratuit</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-mylli-primary text-mylli-primary">
                    <Link to="/fonctionnement">Comment ça marche</Link>
                  </Button>
                </div>
              </header>
              
              <aside className="relative">
                <OptimizedImage
                  src="/lovable-uploads/814f2ab3-ccf7-489c-a719-2651c104e2b6.png"
                  alt="Services professionnels d'aide et de soins à domicile"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                  priority={true}
                />
              </aside>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white" aria-labelledby="services-heading">
          <div className="container-custom">
            <header>
              <SectionHeading
                title="Nos Services Professionnels"
                subtitle="Une gamme complète de services adaptés à vos besoins spécifiques"
                variant="gradient"
                id="services-heading"
              />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article key={index}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    detailedDescription={service.detailedDescription}
                    icon={service.icon}
                    link={service.link}
                    style="modern"
                    className="h-full"
                  />
                  <div className="mt-4 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-mylli-gray">
                        <CheckCircle size={16} className="text-mylli-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-mylli-light/30" aria-labelledby="why-choose-heading">
          <div className="container-custom">
            <header>
              <SectionHeading
                title="Pourquoi choisir Mylli Services ?"
                subtitle="Des garanties de qualité pour votre tranquillité d'esprit"
                variant="split"
                highlightText="Mylli Services"
                id="why-choose-heading"
              />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-mylli-dark mb-3">{item.title}</h3>
                  <p className="text-mylli-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-mylli-primary to-mylli-quaternary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à bénéficier de nos services ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-mylli-primary hover:bg-gray-100">
                <Link to="/contact">
                  Demander un devis <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/equipe">Rencontrer notre équipe</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
