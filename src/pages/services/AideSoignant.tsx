
import { Link } from 'react-router-dom';
import { Heart, User, Clock, Shield, CheckCircle, Star, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';

const AideSoignantPage = () => {
  // Roles of caregiver
  const roles = [
    {
      title: "Assister à l'hygiène corporelle",
      description: "L'aide-soignant(e) assure la toilette quotidienne complète ou partielle selon les besoins, ainsi que les soins d'hygiène spécifiques.",
      icon: <User size={36} className="text-mylli-primary" />
    },
    {
      title: "Aider à la prise de médicaments",
      description: "Administration des médicaments selon les prescriptions médicales, avec surveillance des effets et rappels des horaires.",
      icon: <Heart size={36} className="text-mylli-primary" />
    },
    {
      title: "Aider à l'alimentation",
      description: "Préparation des repas équilibrés, aide à la prise alimentaire si nécessaire, et surveillance de l'hydratation.",
      icon: <Clock size={36} className="text-mylli-primary" />
    },
    {
      title: "Mesurer les constantes",
      description: "Suivi électronique régulier de la température, tension artérielle, pouls et saturation en oxygène.",
      icon: <Shield size={36} className="text-mylli-primary" />
    },
    {
      title: "Accompagner et sécuriser",
      description: "Présence rassurante, aide aux déplacements, prévention des chutes et accidents domestiques.",
      icon: <CheckCircle size={36} className="text-mylli-primary" />
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "L'aide-soignante qui s'occupe de ma mère fait preuve d'une patience et d'une douceur remarquables. Nous avons noté une réelle amélioration de son moral depuis qu'elle intervient.",
      name: "Karima L.",
      title: "Fille d'une patiente"
    },
    {
      quote: "Après mon AVC, j'avais peur de ne plus pouvoir vivre seul. Grâce à l'aide-soignant de Mylli Services, j'ai retrouvé une autonomie que je croyais perdue.",
      name: "Hassan M.",
      title: "69 ans"
    }
  ];
  
  return (
    <div>
      <PageBanner 
        title="AIDE-SOIGNANT(E) À DOMICILE" 
        subtitle="Préservation de l'autonomie et accompagnement quotidien"
      />
      
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 animate-fade-in-right">
                <h2 className="text-3xl font-bold mb-6 text-mylli-dark">Un accompagnement quotidien personnalisé</h2>
                <p className="text-mylli-gray mb-4">
                  L'aide-soignant(e) à domicile stimule et préserve l'autonomie du patient tout en accomplissant différents actes de la vie quotidienne. Son approche globale prend en compte les dimensions physiques, psychologiques et sociales pour assurer un accompagnement complet.
                </p>
                <p className="text-mylli-gray mb-4">
                  Au-delà des actes techniques, l'aide-soignant(e) développe une relation de confiance avec le patient et sa famille, facilitant ainsi la communication et l'adaptation des soins aux évolutions de la situation.
                </p>
                <p className="text-mylli-gray">
                  Nos aide-soignant(e)s sont titulaires d'un diplôme d'État et bénéficient de formations continues régulières pour garantir la qualité des soins prodigués.
                </p>
              </div>
              
              <div className="lg:col-span-1 animate-fade-in-left">
                <div className="bg-mylli-primary/5 rounded-2xl p-6 border border-mylli-primary/20">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-mylli-primary/10 flex items-center justify-center">
                      <User size={40} className="text-mylli-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-mylli-dark">Bénéfices clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star size={18} className="text-mylli-accent mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Maintien à domicile sécurisé</span>
                    </li>
                    <li className="flex items-center">
                      <Star size={18} className="text-mylli-accent mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Préservation de l'autonomie</span>
                    </li>
                    <li className="flex items-center">
                      <Star size={18} className="text-mylli-accent mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Suivi rigoureux de l'état de santé</span>
                    </li>
                    <li className="flex items-center">
                      <Star size={18} className="text-mylli-accent mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Soutien psychologique et social</span>
                    </li>
                    <li className="flex items-center">
                      <Star size={18} className="text-mylli-accent mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Tranquillité d'esprit pour les proches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Rôles de l'aide-soignant(e)"
            subtitle="Un accompagnement complet pour le bien-être quotidien"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-hover border border-transparent hover:border-mylli-primary/20 animate-fade-in"
              >
                <div className="w-16 h-16 rounded-full bg-mylli-primary/10 flex items-center justify-center mb-4">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-mylli-dark">{role.title}</h3>
                <p className="text-mylli-gray">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Types of Interventions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Types d'interventions"
            subtitle="Des formules adaptées à tous les besoins"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-mylli-primary to-mylli-dark text-white rounded-2xl p-6 transform transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                <h3 className="text-xl font-bold mb-4">Garde de jour</h3>
                <p className="text-white/90 mb-4">
                  Présence attentive pendant la journée pour les soins quotidiens, l'accompagnement aux activités et la surveillance continue.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm text-white/90">
                    Horaires flexibles entre 7h et 20h selon vos besoins
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-secondary to-mylli-primary/90 text-white rounded-2xl p-6 transform transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                <h3 className="text-xl font-bold mb-4">Garde de nuit</h3>
                <p className="text-white/90 mb-4">
                  Surveillance nocturne, aide au coucher et au lever, gestion des réveils nocturnes et des situations d'urgence.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm text-white/90">
                    Interventions de 20h à 7h avec possibilité de veille
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-accent to-mylli-primary text-white rounded-2xl p-6 transform transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                <h3 className="text-xl font-bold mb-4">Garde 24h/24h</h3>
                <p className="text-white/90 mb-4">
                  Accompagnement permanent avec relève d'équipes pour une présence continue et des soins ininterrompus.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm text-white/90">
                    Service complet avec rotation des équipes soignantes
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-mylli-primary/5 rounded-2xl p-6 mt-8 animate-fade-in">
              <div className="flex items-start">
                <Clock size={24} className="text-mylli-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mylli-dark">Interventions ponctuelles</h3>
                  <p className="text-mylli-gray mb-4">
                    Nous proposons également des interventions ponctuelles pour:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle size={18} className="text-mylli-secondary mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Remplacements temporaires de l'aidant principal</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={18} className="text-mylli-secondary mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Périodes de convalescence après hospitalisation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={18} className="text-mylli-secondary mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Accompagnement pour les rendez-vous médicaux</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Témoignages"
            subtitle="Ce que disent nos clients du service d'aide-soignant(e)"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  style="modern"
                  className="animate-fade-in"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Besoin d'un(e) aide-soignant(e) à domicile?
            </h2>
            <p className="text-xl opacity-90 mb-8 animate-fade-in">
              Contactez-nous dès aujourd'hui pour un devis personnalisé adapté à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <Button asChild className="btn-accent">
                <Link to="/contact">
                  Demander un devis personnalisé
                </Link>
              </Button>
              <a 
                href="tel:+212661377438" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white bg-transparent hover:bg-white/10 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                +212 661 37 74 38
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AideSoignantPage;
