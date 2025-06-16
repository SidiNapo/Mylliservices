import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Award, Clock, Users, Calendar, Building, Phone, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';
const AProposPage = () => {
  // Why choose us data
  const reasons = [{
    title: "Plus de 10 ans d'expérience spécifique",
    description: "Notre expertise s'est construite au fil du temps, nous permettant d'anticiper les besoins et d'offrir des solutions éprouvées."
  }, {
    title: "Une relation contractuelle claire et transparente",
    description: "Nous vous garantissons une transparence totale sur nos services, nos tarifs et nos engagements."
  }, {
    title: "Des exigences déontologiques très élevées",
    description: "Nos intervenants respectent une charte éthique stricte garantissant le respect et la dignité de chaque patient."
  }, {
    title: "Une personnalisation des prestations",
    description: "Nous adaptons nos services à votre situation unique, en tenant compte de vos habitudes et préférences."
  }, {
    title: "Un suivi individualisé",
    description: "Votre conseiller personnel assure un suivi régulier pour garantir votre satisfaction et ajuster nos services si nécessaire."
  }];
  return <div>
      <PageBanner title="À Propos de Mylli Services" subtitle="PLUS DE 10 ANS D'EXPÉRIENCE AU SERVICE DES PERSONNES FRAGILISÉES À LEUR DOMICILE" />
      
      {/* President's Message Section - Ultra Modern Design */}
      
      
      {/* Mission Section with Parallax - Updated with modern design */}
      <ParallaxSection backgroundGradient="linear-gradient(135deg, rgba(0,70,122,0.85) 0%, rgba(0,119,192,0.75) 100%)" height="auto" className="py-24" pattern="grid">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white animate-fade-in">Notre Mission</h2>
            
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 transform transition-all duration-500 hover:shadow-2xl animate-fade-in border border-mylli-primary/10">
              <p className="text-2xl italic text-mylli-dark mb-8">
                "Permettre aux personnes en perte d'autonomie de rester chez elles dans les meilleures conditions possibles, avec dignité et confort."
              </p>
              
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-6 animate-fade-in">
              Chez Mylli Services, nous croyons fermement que chaque personne a droit au meilleur accompagnement possible, dans l'environnement qui lui est familier. Notre mission est de préserver l'autonomie et la qualité de vie des personnes fragilisées tout en offrant tranquillité d'esprit et soutien à leurs proches.
            </p>
            <p className="text-xl text-white/90 animate-fade-in">
              Nous mettons un point d'honneur à fournir des services personnalisés, respectueux et professionnels qui s'adaptent aux besoins évolutifs de chaque patient. Notre engagement va au-delà des soins techniques : nous créons une relation humaine basée sur la confiance, l'empathie et le respect.
            </p>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Why Choose Us Section - Modern design */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading title="Pourquoi Choisir Mylli Services" subtitle="Des raisons solides de nous confier votre bien-être ou celui de vos proches" variant="gradient" />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => <div key={index} className={`transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl rounded-xl overflow-hidden`}>
                  <div className={`h-full flex flex-col ${index % 2 === 0 ? 'bg-gradient-to-br from-mylli-primary/10 to-white border border-mylli-primary/20' : 'bg-white shadow-lg'}`}>
                    <div className={`h-2 ${index % 2 === 0 ? 'bg-gradient-to-r from-mylli-primary to-mylli-secondary' : 'bg-gradient-to-r from-mylli-secondary to-mylli-accent'}`}></div>
                    <div className="p-8 flex-grow">
                      <h3 className="text-xl font-bold mb-4 text-mylli-dark">{reason.title}</h3>
                      <p className="text-mylli-gray">{reason.description}</p>
                    </div>
                    <div className="p-4 flex justify-end">
                      <CheckCircle size={24} className={index % 2 === 0 ? 'text-mylli-primary' : 'text-mylli-secondary'} />
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AProposPage;