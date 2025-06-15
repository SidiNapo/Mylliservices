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
      
      {/* Training Section - Much Larger cards with bigger images */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Formation et Évaluation Continue"
            subtitle="Un programme complet pour maintenir l'excellence"
            variant="gradient"
          />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formation technique card - Much larger */}
              <div className="group relative">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/5 via-mylli-secondary/5 to-mylli-accent/5"></div>
                  
                  {/* Top decorative bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent"></div>
                  
                  {/* Much Larger Image container - Increased height significantly */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src="/lovable-uploads/496bdd38-75d8-468b-8ab2-12ad476aac02.png" 
                      alt="Formation technique - Équipe médicale en formation" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Status indicator - bottom left */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-md flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                      Formation Active
                    </div>
                  </div>
                  
                  {/* Content section - Enhanced spacing */}
                  <div className="relative p-10">
                    <h3 className="text-3xl font-bold text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300 mb-8">
                      Formation technique
                    </h3>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Formations spécifiques aux pathologies courantes</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Mise à jour des connaissances médicales</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Formation aux gestes d'urgence et premiers secours</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-mylli-primary/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Formation relationnelle card - Much larger */}
              <div className="group relative">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-secondary/5 via-mylli-accent/5 to-mylli-quaternary/5"></div>
                  
                  {/* Top decorative bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mylli-secondary via-mylli-accent to-mylli-quaternary"></div>
                  
                  {/* Much Larger Image container - Increase height significantly */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src="/lovable-uploads/b88e9383-9448-4c3e-a0c4-e2e489b62f90.png" 
                      alt="Formation relationnelle - Équipe médicale professionnelle" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Status indicator - bottom left */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                      Formation Excellence
                    </div>
                  </div>
                  
                  {/* Content section - Enhanced spacing */}
                  <div className="relative p-10">
                    <h3 className="text-3xl font-bold text-mylli-dark group-hover:text-mylli-secondary transition-colors duration-300 mb-8">
                      Formation relationnelle
                    </h3>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Développement des compétences en communication</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Gestion des situations difficiles ou conflictuelles</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Accompagnement de la fin de vie et soutien aux familles</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-mylli-secondary/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Évaluation et suivi section - Enhanced styling */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white shadow-xl border border-mylli-primary/10 transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-3xl font-bold mb-8 text-mylli-dark text-center bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
                Évaluation et suivi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 text-mylli-dark flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mylli-primary/10 to-mylli-primary/20 flex items-center justify-center mr-3">
                      <span className="text-mylli-primary font-bold">A</span>
                    </div>
                    Évaluation régulière
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Contrôles de qualité mensuels</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Visites surprises sur le terrain</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Évaluation des compétences techniques</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 text-mylli-dark flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mylli-secondary/10 to-mylli-secondary/20 flex items-center justify-center mr-3">
                      <span className="text-mylli-secondary font-bold">B</span>
                    </div>
                    Retours clients
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Enquêtes de satisfaction régulières</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Entretiens avec les patients et les familles</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
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
