
import { Award, CheckCircle, Shield, Users } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';

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
  
  const teamMembers = [
    {
      name: "Ahmed Bennani",
      title: "Directeur",
      bio: "Fondateur de Mylli Services avec plus de 15 ans d'expérience dans le secteur médico-social. Ahmed supervise l'ensemble des opérations et garantit le respect des valeurs de l'entreprise."
    },
    {
      name: "Sophia Alami",
      title: "Responsable du recrutement",
      bio: "Ancienne infirmière coordinatrice, Sophia sélectionne rigoureusement chaque intervenant selon des critères techniques et humains stricts pour assurer la qualité de nos services."
    },
    {
      name: "Karim Tazi",
      title: "Coordinateur médical",
      bio: "Infirmier de formation, Karim assure la liaison avec les professionnels de santé et supervise la formation continue de notre équipe d'intervenants."
    },
    {
      name: "Leila Bensouda",
      title: "Conseillère principale",
      bio: "Avec sa formation en psychologie et son expérience en gestion de cas complexes, Leila accompagne personnellement nos clients dans la définition de leurs besoins."
    }
  ];
  
  return (
    <div>
      <PageBanner 
        title="Notre Équipe & Nos Outils" 
        subtitle="Une équipe dévouée et des outils performants au service de votre bien-être"
      />
      
      {/* Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mylli-dark">
              LE CARACTÈRE DES SOIGNANTS EST AUSSI IMPORTANT QUE LES CONNAISSANCES QU'ILS POSSÈDENT
            </h2>
            <p className="text-lg text-mylli-gray">
              Chez Mylli Services, nous sommes convaincus que la qualité des soins dépend autant des compétences techniques que des qualités humaines des intervenants. C'est pourquoi nous accordons une importance particulière au recrutement et à la formation continue de notre équipe.
            </p>
          </div>
        </div>
      </section>
      
      {/* Selection Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Processus de Sélection"
            subtitle="Une approche rigoureuse pour garantir l'excellence de nos intervenants"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-mylli-primary h-full">
                <h3 className="text-xl font-bold mb-4 text-mylli-dark">Recrutement rigoureux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Vérification des qualifications professionnelles et des diplômes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Contrôle des références et de l'expérience professionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Entretiens approfondis pour évaluer les compétences techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Mises en situation pratiques pour tester les réactions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="animate-fade-in-left">
              <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-mylli-secondary h-full">
                <h3 className="text-xl font-bold mb-4 text-mylli-dark">Évaluation des qualités humaines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Évaluation de l'empathie et des capacités d'écoute</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Analyse de la patience et de la bienveillance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Vérification de l'équilibre émotionnel et capacité à gérer le stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Évaluation de la capacité d'adaptation aux différentes situations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Formation et Évaluation Continue"
            subtitle="Un programme complet pour maintenir l'excellence"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-mylli-primary/5 rounded-2xl p-6 animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-mylli-dark">Formation technique</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Formations spécifiques aux pathologies courantes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Mise à jour des connaissances médicales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Formation aux gestes d'urgence et premiers secours</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-mylli-primary/5 rounded-2xl p-6 animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-mylli-dark">Formation relationnelle</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Développement des compétences en communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Gestion des situations difficiles ou conflictuelles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Accompagnement de la fin de vie et soutien aux familles</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 border border-mylli-primary/20 rounded-2xl bg-white shadow-soft animate-fade-in">
              <h3 className="text-xl font-bold mb-4 text-mylli-dark">Évaluation et suivi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-mylli-dark">Évaluation régulière</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray text-sm">Contrôles de qualité mensuels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray text-sm">Visites surprises sur le terrain</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray text-sm">Évaluation des compétences techniques</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-mylli-dark">Retours clients</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray text-sm">Enquêtes de satisfaction régulières</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray text-sm">Entretiens avec les patients et les familles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray text-sm">Système de recueil des suggestions d'amélioration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Notre Équipe de Direction"
            subtitle="Des professionnels expérimentés dédiés à votre bien-être"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in"
              >
                <div className="h-48 bg-gradient-to-br from-mylli-primary to-mylli-dark flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-mylli-dark">{member.name}</h3>
                  <p className="text-mylli-primary font-medium mb-3">{member.title}</p>
                  <p className="text-mylli-gray text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Valeurs"
            subtitle="Des principes qui guident notre travail au quotidien"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in"
              >
                <div className="flex items-start">
                  <div className="mr-4 text-white">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
