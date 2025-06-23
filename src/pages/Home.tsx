
import React from 'react';
import { Link } from 'react-router-dom';
import { Syringe, Users, Clock, Shield, CheckCircle, ArrowRight, Phone, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';

const HomePage = () => {
  return (
    <div>
      <SEOHead 
        title="Mylli Services - Soins à domicile professionnels au Maroc"
        description="Services de soins à domicile professionnels : aide-soignant, infirmier, garde-malade 24h/24. Accompagnement personnalisé à Casablanca et environs."
        keywords="soins à domicile, aide-soignant, infirmier, garde-malade, Casablanca, Maroc"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-accent flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Soins à domicile avec <BrandName />
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Des services de santé professionnels et personnalisés dans le confort de votre foyer
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in">
              <Button asChild className="btn-accent text-lg px-8 py-4">
                <Link to="/services/infirmier" className="flex items-center gap-2">
                  <Syringe size={20} />
                  INFIRMIER(ÈRE) À DOMICILE
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                <Link to="/services/aide-soignant" className="flex items-center gap-2">
                  <Users size={20} />
                  AIDE-SOIGNANT(E) À DOMICILE
                </Link>
              </Button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">+6100</div>
                <div className="text-white/90">Interventions</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/90">Disponibilité</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/90">Professionnel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Des soins professionnels adaptés à vos besoins spécifiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Infirmier Service */}
            <div className="group card-service">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/6dec9a42-92c0-4aa4-8c65-89a7b3a95c5b.png" 
                  alt="Infirmier à domicile" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-mylli-primary/10 rounded-full flex items-center justify-center">
                  <Syringe className="text-mylli-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-mylli-dark">INFIRMIER(ÈRE) À DOMICILE</h3>
              </div>
              <p className="text-mylli-gray mb-6">
                Soins médicaux professionnels à domicile, incluant les injections, pansements et suivi médical.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-mylli-primary" size={20} />
                  <span>Injections médicales</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-mylli-primary" size={20} />
                  <span>Pansements et soins</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-mylli-primary" size={20} />
                  <span>Suivi thérapeutique</span>
                </div>
              </div>
              <Button asChild className="btn-primary w-full">
                <Link to="/services/infirmier" className="flex items-center justify-center gap-2">
                  Découvrir ce service
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            {/* Aide-soignant Service */}
            <div className="group card-service">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/93fb824b-3948-43af-a313-a54ebaf3ded0.png" 
                  alt="Aide-soignant à domicile" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-mylli-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="text-mylli-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-mylli-dark">AIDE-SOIGNANT(E) À DOMICILE</h3>
              </div>
              <p className="text-mylli-gray mb-6">
                Assistance personnalisée pour les activités de la vie quotidienne, avec un accompagnement bienveillant.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-mylli-secondary" size={20} />
                  <span>Soins personnalisés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-mylli-secondary" size={20} />
                  <span>Accompagnement quotidien</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-mylli-secondary" size={20} />
                  <span>Suivi médical</span>
                </div>
              </div>
              <Button asChild className="btn-secondary w-full">
                <Link to="/services/aide-soignant" className="flex items-center justify-center gap-2">
                  Découvrir ce service
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi Choisir Mylli Services ?</h2>
            <p className="section-subtitle">
              Notre engagement envers l'excellence et votre bien-être
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mylli-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-mylli-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professionnalisme</h3>
              <p className="text-mylli-gray">Personnel qualifié et expérimenté</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mylli-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-mylli-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Disponibilité 24/7</h3>
              <p className="text-mylli-gray">Service continu jour et nuit</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mylli-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-mylli-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualité</h3>
              <p className="text-mylli-gray">Standards élevés de soins</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mylli-quaternary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-mylli-quaternary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Accompagnement</h3>
              <p className="text-mylli-gray">Suivi personnalisé et bienveillant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin de nos services ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-accent">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone size={20} />
                Contactez-nous
              </Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/services">
                Nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
