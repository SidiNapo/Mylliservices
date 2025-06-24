
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Shield, CheckCircle, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import SEOHead from '@/components/seo/SEOHead';
import { generateTeamPageStructuredData } from '@/utils/structuredData';

const OutilsPage = () => {
  const structuredData = generateTeamPageStructuredData();

  const tools = [
    {
      title: 'Processus de sélection rigoureux',
      description: 'Nos professionnels sont sélectionnés selon des critères stricts de qualification et d\'expérience.',
      icon: Users,
    },
    {
      title: 'Formation continue',
      description: 'Programmes de formation réguliers pour maintenir les plus hauts standards de qualité.',
      icon: Award,
    },
    {
      title: 'Approche bienveillante',
      description: 'Nos équipes sont formées à l\'accompagnement humain et empathique.',
      icon: Heart,
    },
    {
      title: 'Protocoles de sécurité',
      description: 'Respect strict des protocoles médicaux et de sécurité pour tous nos services.',
      icon: Shield,
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Nos Outils - Mylli Services"
        description="Découvrez nos processus de sélection rigoureux et nos programmes de formation continue pour garantir des soins de qualité exceptionnelle."
        keywords="formation, sélection, qualité, professionnels, soins"
        canonicalUrl="/outils"
        structuredData={structuredData}
      />
      
      <PageBanner
        title="Nos Outils"
        subtitle="La qualité de nos services repose sur notre équipe d'experts et nos méthodes rigoureuses"
        bgImage="/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Notre approche qualité" 
            subtitle="Découvrez les outils et processus qui garantissent l'excellence de nos services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <ServiceCard
                  key={index}
                  title={tool.title}
                  description={tool.description}
                  icon={<IconComponent className="h-8 w-8" />}
                  link="#"
                />
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">
                Contactez-nous pour en savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default OutilsPage;
