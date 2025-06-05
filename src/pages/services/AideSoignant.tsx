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
    iconImage: "/lovable-uploads/815918b5-b645-4a8e-b1bf-f6288e735add.png"
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
      
      {/* Introduction - Modern design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-8 text-mylli-dark bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
                  Un accompagnement quotidien personnalisé
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-mylli-gray">
                    Tout en stimulant et préservant l'autonomie du malade, l'aide-soignant accomplit différents actes de la vie quotidienne : aide au lever et au coucher, aide au transfert du malade, aide à la toilette et à l'habillage, administration des repas, changement de la literie…
                  </p>
                  <p className="text-lg text-mylli-gray">
                    Il accompagne cette personne dans les activités de sa vie quotidienne, il contribue à son bien-être et à lui faire recouvrer, dans la mesure du possible, son autonomie.
                  </p>
                  <p className="text-lg text-mylli-gray">
                    L'aide-soignant réalise des soins liés aux fonctions d'entretien et de continuité de la vie visant à compenser partiellement ou totalement un manque ou une diminution de l'autonomie de la personne.
                  </p>
                  <p className="text-lg text-mylli-gray">
                    Son rôle s'inscrit dans une approche globale de la personne soignée et prend en compte la dimension relationnelle des soins.
                  </p>
                  <p className="text-lg text-mylli-gray">
                    Le service d'aide-soignant assure les gardes de jour, de nuit ou de 24h/24h.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1 order-1 lg:order-2">
                <div className="bg-gradient-to-br from-white to-mylli-light rounded-3xl shadow-xl p-8 border border-mylli-primary/20 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-mylli-primary/10 flex items-center justify-center">
                      <User size={48} className="text-mylli-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-mylli-dark">Rôle de l'aide soignant(e)</h3>
                  <ul className="space-y-4">
                    {roles.map((role, index) => (
                      <li key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-md">
                          <OptimizedImage 
                            src={role.iconImage}
                            alt={role.title}
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <span className="text-mylli-gray font-medium text-sm">{role.title}</span>
                      </li>
                    ))}
                  </ul>
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
