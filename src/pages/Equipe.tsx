
import { Users, Heart, Star, CheckCircle, Award, BookOpen, UserCheck, Clock, Shield, Target, Zap, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import BrandName from '@/components/common/BrandName';
import SEOHead from '@/components/seo/SEOHead';
import { generateTeamPageStructuredData } from '@/utils/structuredData';

const EquipePage = () => {
  // Generate structured data for team page
  const structuredData = generateTeamPageStructuredData();

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Bennani",
      role: "Directrice Médicale",
      speciality: "Médecine Générale",
      experience: "15 ans d'expérience",
      image: "/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png",
      description: "Spécialisée dans les soins à domicile et la coordination médicale."
    },
    {
      name: "Fatima El Amrani",
      role: "Infirmière Coordinatrice",
      speciality: "Soins Infirmiers",
      experience: "12 ans d'expérience",
      image: "/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png",
      description: "Experte en soins complexes et formation du personnel soignant."
    },
    {
      name: "Mohamed Tazi",
      role: "Aide-Soignant Senior",
      speciality: "Accompagnement Quotidien",
      experience: "10 ans d'expérience",
      image: "/lovable-uploads/5e72d59f-037f-46a2-a887-3878ba72f5dd.png",
      description: "Spécialisé dans l'aide aux personnes âgées et dépendantes."
    },
    {
      name: "Aicha Benjelloun",
      role: "Psychologue",
      speciality: "Soutien Psychologique",
      experience: "8 ans d'expérience",
      image: "/lovable-uploads/609a7402-4f73-4888-bedd-2256c3fbd997.png",
      description: "Accompagnement psychologique des patients et des familles."
    }
  ];

  // Formation cards data with modern styling
  const formationCards = [
    {
      title: "Formation technique",
      description: "Nos professionnels bénéficient d'une formation technique approfondie couvrant les dernières pratiques médicales et les protocoles de soins.",
      image: "/lovable-uploads/4b638b88-85f9-4ab7-b0bf-209363f8e749.png",
      features: ["Techniques de soins avancées", "Protocoles médicaux", "Utilisation d'équipements", "Mise à jour des connaissances"],
      icon: <Award className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Formation relationnelle",
      description: "L'aspect humain est au cœur de nos préoccupations. Nos équipes sont formées à l'écoute, à l'empathie, et à la communication bienveillante.",
      image: "/lovable-uploads/5531d2d4-87fe-4d47-88ad-6db5fc66be70.png",
      features: ["Communication empathique", "Écoute active", "Gestion des émotions", "Relation d'aide"],
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Notre Équipe - Professionnels de santé qualifiés | Mylli Services" 
        description="Découvrez notre équipe de professionnels de santé qualifiés : médecins, infirmiers, aides-soignants. Formation continue et expertise reconnue." 
        keywords="équipe médicale, professionnels santé, infirmiers qualifiés, aides-soignants, formation continue" 
        canonicalUrl="/equipe" 
        structuredData={structuredData} 
      />
      
      <PageBanner 
        title="Notre Équipe" 
        subtitle="Des professionnels qualifiés et dévoués à votre service" 
        variant="modern" 
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-mylli-gray text-xl leading-relaxed">
              Notre équipe est composée de professionnels de santé expérimentés et passionnés, 
              tous unis par la même mission : vous offrir des soins de qualité dans le confort de votre domicile.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Professionnels" 
            subtitle="Une équipe multidisciplinaire à votre écoute" 
            align="center"
            className="mb-16" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/5 via-transparent to-mylli-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110">
                    <Users className="w-6 h-6 text-mylli-primary" />
                  </div>
                </div>
                
                <CardContent className="relative p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-mylli-dark mb-1 group-hover:text-mylli-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-mylli-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-mylli-gray text-sm">{member.speciality}</p>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-mylli-secondary mr-2" />
                    <span className="text-sm text-mylli-gray">{member.experience}</span>
                  </div>
                  
                  <p className="text-mylli-gray text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formation et Évaluation Continue - Enhanced Modern Design */}
      <section className="section-padding bg-gradient-to-br from-mylli-primary/5 via-white to-mylli-secondary/5">
        <div className="container-custom">
          <SectionHeading 
            title="Formation et Évaluation Continue" 
            subtitle="L'excellence par la formation permanente" 
            align="center"
            className="mb-20" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {formationCards.map((card, index) => (
              <div key={index} className="group relative">
                {/* Enhanced Modern Card with Glass Morphism */}
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:-translate-y-8 hover:shadow-3xl border border-white/30">
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                  
                  {/* Header Section with Icon and Image */}
                  <div className="relative h-80 overflow-hidden">
                    {/* Main Image */}
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <div className={`text-transparent bg-gradient-to-r ${card.gradient} bg-clip-text`}>
                        {card.icon}
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${card.gradient} text-white text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
                      Formation Premium
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative p-8">
                    <p className="text-mylli-gray mb-8 text-lg leading-relaxed">
                      {card.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-4 mb-8">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center group/item">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center mr-4 transform transition-all duration-300 group-hover/item:scale-110`}>
                            <CheckCircle size={14} className="text-white" />
                          </div>
                          <span className="text-mylli-dark font-medium group-hover/item:text-mylli-primary transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-mylli-dark">Niveau d'expertise</span>
                        <span className="text-sm font-bold text-mylli-primary">Expert</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${card.gradient} rounded-full transform transition-all duration-1000 group-hover:w-full`} style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br ${card.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${card.gradient} opacity-15 rounded-2xl blur-lg group-hover:opacity-25 transition-opacity duration-700`}></div>
                  
                  {/* Border Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-sm`}></div>
                </div>
                
                {/* External Shadow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-10 transform scale-0 group-hover:scale-110 transition-transform duration-700 -z-20 blur-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Outils section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Outils" 
            subtitle="Des ressources modernes pour un service d'excellence" 
            align="center"
            className="mb-16" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dossier Patient Numérique",
                description: "Suivi personnalisé et sécurisé de chaque patient avec historique complet des soins.",
                icon: <UserCheck size={32} className="text-mylli-primary" />,
                features: ["Historique médical", "Suivi des traitements", "Communication équipe"]
              },
              {
                title: "Planning Intelligent",
                description: "Optimisation des tournées et gestion efficace des horaires pour un service ponctuel.",
                icon: <Clock size={32} className="text-mylli-secondary" />,
                features: ["Planification optimisée", "Notifications temps réel", "Flexibilité horaires"]
              },
              {
                title: "Protocoles de Sécurité",
                description: "Procédures strictes pour garantir la sécurité et la qualité des soins prodigués.",
                icon: <Shield size={32} className="text-mylli-accent" />,
                features: ["Standards qualité", "Procédures contrôlées", "Formation sécurité"]
              }
            ].map((tool, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/5 via-transparent to-mylli-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-mylli-light to-white rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-hover transition-all duration-300">
                    {tool.icon}
                  </div>
                  <CardTitle className="text-xl text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative pt-0">
                  <p className="text-mylli-gray mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-mylli-secondary mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications section */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Certifications et Qualité</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto animate-fade-in">
            <BrandName /> respecte les plus hauts standards de qualité et dispose de toutes les certifications nécessaires pour vous garantir des soins exemplaires.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <Award size={48} />, title: "Certification Qualité", desc: "Agréée par les autorités sanitaires" },
              { icon: <Shield size={48} />, title: "Assurance Professionnelle", desc: "Couverture complète pour votre sécurité" },
              { icon: <Star size={48} />, title: "Formation Continue", desc: "Mise à jour permanente des compétences" }
            ].map((cert, index) => (
              <div key={index} className="text-center animate-fade-in group">
                <div className="mx-auto mb-4 text-mylli-accent group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="opacity-90">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
