
import React from 'react';
import { Users, Heart, Award, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import SEOHead from '@/components/seo/SEOHead';

const EquipePage = () => {
  return (
    <div>
      <SEOHead 
        title="Nos Outils et Approches | Qualité des Soins à Domicile Mylli Services" 
        description="Chez Mylli Services, nous sélectionnons des intervenants professionnels, qualifiés et expérimentés. Découvrez nos approches basées sur l'écoute, la bienveillance et les compétences techniques." 
        keywords="intervenants qualifiés, professionnels aide à domicile, compétences techniques, qualités humaines, savoir-faire Mylli Services"
        canonicalUrl="/outils" 
      />
      
      <PageBanner 
        title="Nos Outils et Approches" 
        subtitle="Des professionnels qualifiés avec les compétences techniques et humaines essentielles" 
        variant="modern" 
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
              Intervenants qualifiés et professionnels aide à domicile
            </h1>
            <p className="text-mylli-gray text-xl leading-relaxed">
              Chez Mylli Services, nous sélectionnons rigoureusement nos intervenants pour leurs compétences techniques exceptionnelles et leurs qualités humaines remarquables.
            </p>
          </div>
        </div>
      </section>

      {/* Team Skills Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Compétences techniques et qualités humaines" 
            subtitle="Le savoir-faire Mylli Services au service de votre bien-être" 
            align="center" 
            className="mb-16" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-mylli-dark mb-4">Écoute et Bienveillance</h3>
              <p className="text-mylli-gray">Nos intervenants sont formés à l'écoute active et à l'accompagnement bienveillant pour créer une relation de confiance.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-mylli-secondary to-mylli-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-mylli-dark mb-4">Compétences Techniques</h3>
              <p className="text-mylli-gray">Formation médicale approfondie et mise à jour régulière des connaissances pour des soins de qualité optimale.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-mylli-accent to-mylli-quaternary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-mylli-dark mb-4">Professionnalisme</h3>
              <p className="text-mylli-gray">Respect strict des protocoles médicaux et des règles déontologiques pour votre sécurité et votre tranquillité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Découvrez notre savoir-faire Mylli Services</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour en savoir plus sur nos approches et rencontrer nos professionnels qualifiés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="btn-accent">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-white hover:bg-white/10">
              <Link to="/services">Voir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
