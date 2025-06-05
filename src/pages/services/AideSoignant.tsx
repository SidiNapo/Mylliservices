
import { Link } from 'react-router-dom';
import { Heart, User, Clock, Shield, CheckCircle, Star, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
import ParallaxSection from '@/components/common/ParallaxSection';
import OptimizedImage from '@/components/seo/OptimizedImage';

const AideSoignantPage = () => {
  // Roles of caregiver with specific healthcare icons
  const roles = [{
    title: "Assister à l'hygiène corporelle",
    iconImage: "/lovable-uploads/d2780d4e-04e6-4ff9-8a1f-a54048bb2eb8.png"
  }, {
    title: "Aider à la prise de médicaments",
    iconImage: "/lovable-uploads/bde9c2cf-6a1e-4994-bb87-13e3a1bc9321.png"
  }, {
    title: "Aider à l'alimentation",
    iconImage: "/lovable-uploads/a61a5c50-65cb-4a37-a063-27067cc1f2c1.png"
  }, {
    title: "Mesurer électroniquement les constantes",
    iconImage: "/lovable-uploads/5364c2b1-9466-4ff2-b1bf-f6288e735add.png"
  }, {
    title: "Accompagner et sécuriser le patient",
    iconImage: "/lovable-uploads/da550c48-1c62-4eb0-b6cc-df8d0db5cdd8.png"
  }];

  // Testimonials
  const testimonials = [{
    quote: "L'aide-soignante qui s'occupe de ma mère fait preuve d'une patience et d'une douceur remarquables. Nous avons noté une réelle amélioration de son moral depuis qu'elle intervient.",
    name: "Karima L.",
    title: "Fille d'une patiente"
  }, {
    quote: "Après mon AVC, j'avais peur de ne plus pouvoir vivre seul. Grâce à l'aide-soignant de Mylli Services, j'ai retrouvé une autonomie que je croyais perdue.",
    name: "Hassan M.",
    title: "69 ans"
  }];

  return <div>
      <PageBanner title="AIDE-SOIGNANT(E) À DOMICILE" subtitle="Préservation de l'autonomie et accompagnement quotidien" />
      
      {/* Introduction - Centered and modern design */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-mylli-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-mylli-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mylli-light/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Modern centered title */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-mylli-primary via-mylli-dark to-mylli-secondary bg-clip-text text-transparent leading-tight">
                Un accompagnement quotidien personnalisé
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full mx-auto mb-8"></div>
            </div>
            
            {/* Content in modern card layout */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-mylli-primary/10 p-8 md:p-12">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-gradient-to-br from-mylli-light to-white rounded-2xl p-6 shadow-lg border border-mylli-primary/10">
                      <div className="w-16 h-16 rounded-full bg-mylli-primary/10 flex items-center justify-center mx-auto mb-4">
                        <User size={32} className="text-mylli-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-mylli-dark mb-4 text-center">Notre mission</h3>
                      <p className="text-mylli-gray text-center leading-relaxed">
                        Stimuler et préserver l'autonomie du malade tout en l'accompagnant dans sa vie quotidienne
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <p className="text-lg text-mylli-gray leading-relaxed text-left">
                      Tout en stimulant et préservant l'autonomie du malade, l'aide-soignant accomplit différents actes de la vie quotidienne : aide au lever et au coucher, aide au transfert du malade, aide à la toilette et à l'habillage, administration des repas, changement de la literie…
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-mylli-primary/5 to-mylli-primary/10 rounded-xl p-6 border border-mylli-primary/20">
                    <div className="w-12 h-12 rounded-full bg-mylli-primary/20 flex items-center justify-center mx-auto mb-3">
                      <Heart size={24} className="text-mylli-primary" />
                    </div>
                    <p className="text-sm text-mylli-gray text-center">
                      Contribue au bien-être et à la récupération de l'autonomie
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-mylli-secondary/5 to-mylli-secondary/10 rounded-xl p-6 border border-mylli-secondary/20">
                    <div className="w-12 h-12 rounded-full bg-mylli-secondary/20 flex items-center justify-center mx-auto mb-3">
                      <Shield size={24} className="text-mylli-secondary" />
                    </div>
                    <p className="text-sm text-mylli-gray text-center">
                      Réalise des soins d'entretien et de continuité de la vie
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-mylli-accent/5 to-mylli-accent/10 rounded-xl p-6 border border-mylli-accent/20">
                    <div className="w-12 h-12 rounded-full bg-mylli-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Clock size={24} className="text-mylli-accent" />
                    </div>
                    <p className="text-sm text-mylli-gray text-center">
                      Garde de jour, de nuit ou 24h/24h selon vos besoins
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-mylli-light to-white rounded-2xl p-6 border border-mylli-primary/10">
                  <p className="text-lg text-mylli-gray leading-relaxed">
                    Son rôle s'inscrit dans une approche globale de la personne soignée et prend en compte la dimension relationnelle des soins. L'aide-soignant accompagne cette personne dans les activités de sa vie quotidienne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roles - Clean minimalist design */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading title="Rôles de l'aide-soignant(e)" subtitle="Un accompagnement complet pour le bien-être quotidien" variant="gradient" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {roles.map((role, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                  {/* Image container - made larger and more prominent */}
                  <div className="relative p-8 pb-6">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-mylli-light/30 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
                      <OptimizedImage 
                        src={role.iconImage}
                        alt={role.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    
                    {/* Title only - no description */}
                    <h3 className="text-center text-mylli-dark font-semibold text-sm leading-tight px-2">
                      {role.title}
                    </h3>
                  </div>
                  
                  {/* Subtle hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-mylli-primary/20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Types of Interventions - Modern cards with animation */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading title="Types d'interventions" subtitle="Des formules adaptées à tous les besoins" variant="gradient" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-mylli-primary to-mylli-dark text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  Garde de jour
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Présence attentive pendant la journée pour les soins quotidiens, l'accompagnement aux activités et la surveillance continue.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white">
                    Horaires flexibles entre 7h et 20h selon vos besoins
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-secondary to-mylli-primary/90 text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  Garde de nuit
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Surveillance nocturne, aide au coucher et au lever, gestion des réveils nocturnes et des situations d'urgence.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white">
                    Interventions de 20h à 7h avec possibilité de veille
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-accent to-mylli-primary text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  Garde 24h/24h
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Accompagnement permanent avec relève d'équipes pour une présence continue et des soins ininterrompus.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white">
                    Service complet avec rotation des équipes soignantes
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-mylli-light to-white rounded-3xl p-8 mt-16 shadow-xl border border-mylli-primary/10 transform transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-6 flex-shrink-0">
                  <Clock size={32} className="text-mylli-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-mylli-dark">Interventions ponctuelles</h3>
                  <p className="text-lg text-mylli-gray mb-6">
                    Nous proposons également des interventions ponctuelles pour:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray">Remplacements temporaires de l'aidant principal</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray">Périodes de convalescence après hospitalisation</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center">
                        <CheckCircle size={20} className="text-mylli-secondary mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray">Accompagnement pour les rendez-vous médicaux</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials with Parallax */}
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" height="auto" className="py-24" overlayOpacity={0.7}>
        <div className="container-custom">
          <SectionHeading title="Témoignages" subtitle="Ce que disent nos clients du service d'aide-soignant(e)" variant="modern" className="text-white" highlightColor="white" />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} style="modern" className="bg-white/90 backdrop-blur-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" />)}
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* CTA - Modern design */}
      
    </div>;
};
export default AideSoignantPage;
