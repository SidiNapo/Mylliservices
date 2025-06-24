
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Smartphone, Clock, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SEOHead from '@/components/seo/SEOHead';

const OutilsPage = () => {
  const tools = [
    {
      title: 'Application Mobile',
      description: 'Suivez vos rendez-vous et communiquez facilement avec nos équipes.',
      icon: Smartphone,
      features: ['Prise de rendez-vous', 'Suivi en temps réel', 'Messages sécurisés']
    },
    {
      title: 'Suivi 24/7',
      description: 'Surveillance continue de votre état de santé et assistance d\'urgence.',
      icon: Clock,
      features: ['Monitoring continu', 'Alerte d\'urgence', 'Rapport quotidien']
    },
    {
      title: 'Équipements Professionnels',
      description: 'Matériel médical de pointe pour des soins de qualité à domicile.',
      icon: Wrench,
      features: ['Matériel stérilisé', 'Équipements certifiés', 'Maintenance régulière']
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Nos Outils - Technologies et équipements | Mylli Services"
        description="Découvrez nos outils technologiques et équipements professionnels pour des soins à domicile de qualité."
        keywords="outils soins, équipements médicaux, application mobile, technologie santé"
      />
      
      <PageBanner 
        title="Nos Outils" 
        subtitle="Technologies et équipements de pointe pour votre accompagnement" 
        variant="modern" 
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Technologies</h2>
            <p className="section-subtitle">
              Des outils modernes pour un service d'excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                    <tool.icon className="text-mylli-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-mylli-dark">{tool.title}</h3>
                </div>
                <p className="text-mylli-gray mb-6">{tool.description}</p>
                <div className="space-y-3">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-mylli-primary" size={16} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à découvrir nos services ?</h2>
          <p className="text-xl text-mylli-gray mb-8 max-w-2xl mx-auto">
            Contactez-nous pour en savoir plus sur nos outils et technologies.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OutilsPage;
