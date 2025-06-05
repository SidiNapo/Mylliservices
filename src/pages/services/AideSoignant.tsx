
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
    iconImage: "/lovable-uploads/0ac5ce88-2b3f-4931-9488-210bc9425794.png"
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
      
      {/* Introduction - Centered and Modern design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/5 via-transparent to-mylli-secondary/5 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-mylli-primary/10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-secondary flex items-center justify-center shadow-lg">
                    <User size={40} className="text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
                  Un accompagnement quotidien personnalisé
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-6">
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      Tout en stimulant et préservant l'autonomie du malade, l'aide-soignant accomplit différents actes de la vie quotidienne : aide au lever et au coucher, aide au transfert du malade, aide à la toilette et à l'habillage, administration des repas, changement de la literie…
                    </p>
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      Il accompagne cette personne dans les activités de sa vie quotidienne, il contribue à son bien-être et à lui faire recouvrer, dans la mesure du possible, son autonomie.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      L'aide-soignant réalise des soins liés aux fonctions d'entretien et de continuité de la vie visant à compenser partiellement ou totalement un manque ou une diminution de l'autonomie de la personne.
                    </p>
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      Son rôle s'inscrit dans une approche globale de la personne soignée et prend en compte la dimension relationnelle des soins.
                    </p>
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      Le service d'aide-soignant assure les gardes de jour, de nuit ou de 24h/24h.
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-mylli-primary/10 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-mylli-secondary/10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roles - Unique modern design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-mylli-primary/5 to-transparent"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-mylli-secondary/5 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Rôles de l'aide-soignant(e)" 
            subtitle="Un accompagnement complet pour le bien-être quotidien" 
            variant="gradient" 
          />
          
          <div className="max-w-7xl mx-auto">
            {/* Unique hexagonal grid layout */}
            <div className="relative">
              {/* Central connecting lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border border-mylli-primary/10"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {roles.map((role, index) => (
                  <div key={index} className="group relative">
                    {/* Connecting line to center (visible on larger screens) */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-mylli-primary/20 to-transparent transform -translate-y-1/2 origin-left"
                         style={{ transform: `translate(-50%, -50%) rotate(${index * 72}deg)` }}></div>
                    
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:border-mylli-primary/30 group-hover:scale-105">
                      {/* Image container with unique styling */}
                      <div className="relative p-8 pb-6">
                        <div className="relative">
                          {/* Decorative background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-mylli-light/20 to-transparent rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                          
                          {/* Image container */}
                          <div className="relative w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white to-mylli-light/30 flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                            <OptimizedImage 
                              src={role.iconImage}
                              alt={role.title}
                              width={64}
                              height={64}
                              className="w-16 h-16 object-contain filter group-hover:brightness-110 transition-all duration-500"
                            />
                          </div>
                        </div>
                        
                        {/* Title with modern typography */}
                        <h3 className="text-center text-mylli-dark font-semibold text-sm leading-tight px-2 group-hover:text-mylli-primary transition-colors duration-300">
                          {role.title}
                        </h3>
                      </div>
                      
                      {/* Subtle bottom accent */}
                      <div className="h-1 bg-gradient-to-r from-transparent via-mylli-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Central decorative element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-secondary shadow-lg flex items-center justify-center opacity-20">
                <Heart size={24} className="text-white" />
              </div>
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
