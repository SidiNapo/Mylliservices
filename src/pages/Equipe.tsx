
import { Award, CheckCircle, Shield, Users } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';

const EquipePage = () => {
  const values = [
    {
      title: "Professionnalisme",
      description: "Nos intervenants sont sélectionnés pour leurs compétences techniques et leur rigueur. Ils suivent une formation continue pour maintenir le plus haut niveau de qualité.",
      icon: <Shield size={40} strokeWidth={1.5} />
    },
    {
      title: "Respect de la dignité",
      description: "Nous considérons chaque personne dans sa globalité et sa singularité. Le respect de la dignité et de l'intimité guide chacune de nos actions.",
      icon: <Award size={40} strokeWidth={1.5} />
    },
    {
      title: "Empathie",
      description: "La capacité à comprendre et partager les sentiments d'autrui est au cœur de notre approche. Nous accordons une attention particulière à la dimension émotionnelle.",
      icon: <Users size={40} strokeWidth={1.5} />
    },
    {
      title: "Adaptabilité",
      description: "Nous ajustons constamment nos services pour répondre aux besoins changeants de nos clients. La flexibilité est essentielle pour un accompagnement de qualité.",
      icon: <CheckCircle size={40} strokeWidth={1.5} />
    }
  ];
  
  return (
    <div>
      <PageBanner 
        title="Nos Outils" 
        subtitle="Des outils performants au service de votre bien-être"
      />
      
      {/* Approach Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22"
        height="auto"
        className="py-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-mylli-dark bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
                LE CARACTÈRE DES SOIGNANTS EST AUSSI IMPORTANT QUE LES CONNAISSANCES QU'ILS POSSÈDENT
              </h2>
              <p className="text-xl text-mylli-gray">
                Chez Mylli Services, nous sommes convaincus que la qualité des soins dépend autant des compétences techniques que des qualités humaines des intervenants. C'est pourquoi nous accordons une importance particulière au recrutement et à la formation continue de notre équipe.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Selection Process - Modern design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Processus de Sélection"
            subtitle="Une approche rigoureuse pour garantir l'excellence de nos intervenants"
            variant="modern"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-mylli-primary/5 rounded-3xl shadow-lg p-8 border-t-4 border-mylli-primary h-full">
                <h3 className="text-2xl font-bold mb-6 text-mylli-dark flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-3">
                    <span className="text-mylli-primary font-bold">1</span>
                  </div>
                  Recrutement rigoureux
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Vérification des qualifications professionnelles et des diplômes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Contrôle des références et de l'expérience professionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Entretiens approfondis pour évaluer les compétences techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Mises en situation pratiques pour tester les réactions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-mylli-secondary/5 rounded-3xl shadow-lg p-8 border-t-4 border-mylli-secondary h-full">
                <h3 className="text-2xl font-bold mb-6 text-mylli-dark flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-secondary/10 flex items-center justify-center mr-3">
                    <span className="text-mylli-secondary font-bold">2</span>
                  </div>
                  Évaluation des qualités humaines
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Évaluation de l'empathie et des capacités d'écoute</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Analyse de la patience et de la bienveillance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Vérification de l'équilibre émotionnel et capacité à gérer le stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Évaluation de la capacité d'adaptation aux différentes situations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Section - Modern design */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Formation et Évaluation Continue"
            subtitle="Un programme complet pour maintenir l'excellence"
            variant="gradient"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-mylli-primary/10 to-white rounded-3xl shadow-lg p-8 transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-mylli-primary/15 flex items-center justify-center mr-4">
                    <Award size={32} className="text-mylli-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-mylli-dark">Formation technique</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Formations spécifiques aux pathologies courantes</span>
                  </li>
                  <li className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Mise à jour des connaissances médicales</span>
                  </li>
                  <li className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Formation aux gestes d'urgence et premiers secours</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-secondary/10 to-white rounded-3xl shadow-lg p-8 transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-mylli-secondary/15 flex items-center justify-center mr-4">
                    <Users size={32} className="text-mylli-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-mylli-dark">Formation relationnelle</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Développement des compétences en communication</span>
                  </li>
                  <li className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Gestion des situations difficiles ou conflictuelles</span>
                  </li>
                  <li className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Accompagnement de la fin de vie et soutien aux familles</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-mylli-primary/10 transform transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-mylli-dark text-center">Évaluation et suivi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-mylli-dark flex items-center">
                    <div className="w-8 h-8 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-2">
                      <span className="text-mylli-primary font-bold text-sm">A</span>
                    </div>
                    Évaluation régulière
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Contrôles de qualité mensuels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Visites surprises sur le terrain</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Évaluation des compétences techniques</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-mylli-dark flex items-center">
                    <div className="w-8 h-8 rounded-full bg-mylli-secondary/10 flex items-center justify-center mr-2">
                      <span className="text-mylli-secondary font-bold text-sm">B</span>
                    </div>
                    Retours clients
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Enquêtes de satisfaction régulières</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Entretiens avec les patients et les familles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Système de recueil des suggestions d'amélioration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section - Modern glass cards */}
      <section className="py-24 bg-gradient-to-r from-mylli-primary to-mylli-dark">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Valeurs"
            subtitle="Des principes qui guident notre travail au quotidien"
            variant="modern"
            className="text-white"
            highlightColor="white"
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-lg transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-2xl hover:bg-white/15"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:rotate-12">
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                      <p className="text-white/80 text-lg">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
