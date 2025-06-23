
import { Link } from 'react-router-dom';
import { Heart, Clock, File, Phone, Clipboard, Syringe, Hospital, Calendar, CheckCircle, User, MessageSquare, Award, Shield, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
import OptimizedImage from '@/components/seo/OptimizedImage';

const InfirmierPage = () => {
  // Patient profiles
  const patientProfiles = [{
    title: "Personnes en convalescence après hospitalisation",
    description: "Patients nécessitant un suivi médical après une intervention chirurgicale ou une hospitalisation, pour assurer une transition en douceur vers le domicile et prévenir les complications.",
    icon: <Hospital className="text-mylli-primary" size={32} />
  }, {
    title: "Personnes atteintes de maladies chroniques",
    description: "Patients souffrant de pathologies de longue durée comme le diabète, l'insuffisance cardiaque ou respiratoire, nécessitant des soins réguliers et un suivi constant.",
    icon: <Heart className="text-mylli-primary" size={32} />
  }, {
    title: "Personnes nécessitant des soins palliatifs",
    description: "Accompagnement des patients en fin de vie pour assurer leur confort, soulager la douleur et offrir un soutien psychologique tant au patient qu'à son entourage.",
    icon: <User className="text-mylli-primary" size={32} />
  }];

  // Nurse roles with updated images
  const nurseRoles = [{
    title: "Exécuter une ordonnance médicale",
    description: "Administration de traitements, préparation et administration d'injections, surveillance des effets secondaires.",
    iconImage: "/lovable-uploads/b8378166-5f0c-4885-a490-0d24a2bdf1eb.png"
  }, {
    title: "Poser et surveiller les sondes",
    description: "Installation et maintenance des sondes urinaires, nasogastriques et autres dispositifs médicaux invasifs.",
    iconImage: "/lovable-uploads/1f822bff-881d-4652-8f91-25b9ea183dcf.png"
  }, {
    title: "Poser et surveiller une perfusion",
    description: "Mise en place et surveillance des perfusions pour l'hydratation, la nutrition et l'administration de médicaments.",
    iconImage: "/lovable-uploads/da550c48-1c62-4eb0-b6cc-df8d0db5cdd8.png"
  }, {
    title: "Assurer la communication avec le médecin traitant",
    description: "Transmission régulière des informations sur l'évolution de l'état du patient, coordination des soins.",
    iconImage: "/lovable-uploads/2f756573-a96c-4061-998c-b25adfae324e.png"
  }, {
    title: "Rédiger un rapport quotidiennement",
    description: "Documentation détaillée des soins prodigués, des observations et de l'évolution du patient pour une traçabilité optimale.",
    iconImage: "/lovable-uploads/365fd2be-c1d3-47ea-9a38-6787ebfd2331.png"
  }];

  // Testimonials
  const testimonials = [{
    quote: "Après mon opération de la hanche, j'étais inquiète de rentrer chez moi. L'infirmière de Mylli Services m'a rassurée dès sa première visite. Ses soins professionnels et sa présence chaleureuse ont grandement contribué à ma récupération rapide.",
    name: "Mme Bennani, 72 ans",
    title: "Casablanca",
    image: "/placeholder.svg"
  }, {
    quote: "Mon père souffre d'un cancer avancé et souhaitait rester à la maison. Les infirmiers de Mylli Services ont été remarquables dans la gestion de sa douleur et des soins complexes. Leur expertise et leur humanité font toute la différence.",
    name: "Ahmed L.",
    title: "Fils d'un patient",
    image: "/placeholder.svg"
  }];

  return (
    <div className="pb-12">
      {/* Banner */}
      <PageBanner 
        title="INFIRMIER(ÈRE) À DOMICILE" 
        subtitle="Une alternative professionnelle à l'hospitalisation pour les patients nécessitant des soins médicaux réguliers" 
        variant="modern" 
      />
      
      {/* Redesigned Soins infirmiers à domicile Section */}
      <section className="py-24 bg-gradient-to-br from-white via-mylli-light/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/5 via-transparent to-mylli-secondary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-mylli-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-mylli-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-mylli-accent/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-mylli-primary/10 to-mylli-secondary/10 rounded-full">
                    <Heart className="w-5 h-5 text-mylli-primary mr-2" />
                    <span className="text-mylli-primary font-semibold text-sm">Soins professionnels</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-mylli-dark leading-tight">
                    Soins infirmiers 
                    <span className="block bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
                      à domicile
                    </span>
                  </h2>
                  
                  <p className="text-xl text-mylli-gray leading-relaxed">
                    Alternative à l'hospitalisation pour une prise en charge médicale personnalisée
                  </p>
                </div>
                
                {/* Key Points */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-mylli-primary/10 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-mylli-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <File className="w-4 h-4 text-mylli-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mylli-dark mb-1">Prescription médicale</h4>
                      <p className="text-mylli-gray text-sm">Les soins infirmiers à domicile se font toujours suite à une prescription d'un médecin, sauf pour les soins d'hygiène.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-mylli-primary/10 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-mylli-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clipboard className="w-4 h-4 text-mylli-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mylli-dark mb-1">Dossier patient</h4>
                      <p className="text-mylli-gray text-sm">L'infirmier à domicile doit rédiger et tenir à jour un dossier pour chaque patient.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-mylli-primary/10 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-mylli-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-mylli-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mylli-dark mb-1">Service continu</h4>
                      <p className="text-mylli-gray text-sm">Le service d'infirmier assure les gardes de jour, de nuit ou de 24h/24h.</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-primary-dark mx-auto mb-2 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-mylli-primary">24/7</div>
                    <div className="text-xs text-mylli-gray">Disponibilité</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mylli-secondary to-mylli-tertiary mx-auto mb-2 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-mylli-secondary">100%</div>
                    <div className="text-xs text-mylli-gray">Sécurisé</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mylli-accent to-mylli-quaternary mx-auto mb-2 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-mylli-accent">Expert</div>
                    <div className="text-xs text-mylli-gray">Qualité</div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 z-10"></div>
                  <OptimizedImage 
                    src="/lovable-uploads/495a4786-8bc0-4000-b5a5-c7a48f1f6765.png" 
                    alt="Infirmière prodiguant des soins à domicile" 
                    width={600} 
                    height={600} 
                    className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float">
                  <Heart className="w-8 h-8 text-mylli-primary" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-mylli-secondary to-mylli-tertiary rounded-full shadow-xl flex items-center justify-center animate-float delay-1000">
                  <Syringe className="w-10 h-10 text-white" />
                </div>
                
                <div className="absolute top-1/4 -right-4 w-12 h-12 bg-mylli-accent rounded-full shadow-lg flex items-center justify-center animate-bounce-subtle">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Profiles */}
      <section className="section-padding bg-gradient-to-b from-mylli-light to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Profils des patients concernés" 
            subtitle="Nos services s'adaptent à différents besoins médicaux" 
            align="center" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {patientProfiles.map((profile, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-5 p-3 rounded-full bg-mylli-primary/10">
                      {profile.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-mylli-dark">{profile.title}</h3>
                    <p className="text-mylli-gray">{profile.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Execution d'ordonnance médicale Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Exécution d'ordonnance médicale" 
            subtitle="Soins techniques et surveillance médicale à domicile" 
            align="center" 
            variant="gradient" 
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Administration des traitements */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-white to-mylli-light/20">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-mylli-primary/10 to-mylli-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Syringe className="w-10 h-10 text-mylli-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-mylli-secondary rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300">
                    Administration des traitements
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    Injections sous-cutanées, intramusculaires et intraveineuses selon prescription médicale stricte.
                  </p>
                </CardContent>
              </Card>

              {/* Surveillance des signes vitaux */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-white to-mylli-light/20">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-mylli-secondary/10 to-mylli-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Activity className="w-10 h-10 text-mylli-secondary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-mylli-accent rounded-full animate-pulse delay-500"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-secondary transition-colors duration-300">
                    Surveillance des signes vitaux
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    Contrôle régulier de la tension artérielle, température, pouls et saturation en oxygène.
                  </p>
                </CardContent>
              </Card>

              {/* Soins de plaies */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-white to-mylli-light/20">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-mylli-accent/10 to-mylli-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-mylli-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-mylli-primary rounded-full animate-pulse delay-1000"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-accent transition-colors duration-300">
                    Soins de plaies
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    Nettoyage, désinfection et pansements de plaies chirurgicales, escarres et ulcères.
                  </p>
                </CardContent>
              </Card>

              {/* Prélèvements sanguins */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-white to-mylli-light/20">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-mylli-tertiary/10 to-mylli-tertiary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clipboard className="w-10 h-10 text-mylli-tertiary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-mylli-quaternary rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-tertiary transition-colors duration-300">
                    Prélèvements sanguins
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    Prises de sang pour analyses biologiques et suivi de l'évolution des pathologies.
                  </p>
                </CardContent>
              </Card>

              {/* Éducation thérapeutique */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-white to-mylli-light/20">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-mylli-quaternary/10 to-mylli-quaternary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="w-10 h-10 text-mylli-quaternary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-mylli-secondary rounded-full animate-pulse delay-700"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-quaternary transition-colors duration-300">
                    Éducation thérapeutique
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    Formation du patient et de sa famille aux gestes de soins et à l'utilisation du matériel médical.
                  </p>
                </CardContent>
              </Card>

              {/* Coordination médicale */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-white to-mylli-light/20">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-mylli-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-mylli-accent rounded-full animate-pulse delay-300"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300">
                    Coordination médicale
                  </h3>
                  <p className="text-mylli-gray leading-relaxed">
                    Liaison continue avec l'équipe médicale et transmission des observations cliniques.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nurse Roles - Centered with Images */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading 
            title="Rôles de l'infirmier(ère)" 
            subtitle="Une prise en charge médicale complète à domicile" 
            align="center" 
            variant="gradient" 
          />
          
          <div className="max-w-7xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {nurseRoles.map((role, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:border-mylli-primary/30 group-hover:scale-105 h-80 flex flex-col">
                    {/* Image container with enhanced styling */}
                    <div className="relative p-8 pb-6 flex-grow flex flex-col items-center justify-center">
                      <div className="relative mb-6">
                        {/* Enhanced decorative background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-mylli-accent/5 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 scale-105"></div>
                        
                        {/* Main image container */}
                        <div className="relative w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br from-white to-mylli-light/30 flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl border border-mylli-primary/10">
                          <OptimizedImage 
                            src={role.iconImage} 
                            alt={role.title} 
                            width={140} 
                            height={140} 
                            className="w-36 h-36 object-contain filter group-hover:brightness-110 transition-all duration-500" 
                          />
                        </div>
                        
                        {/* Additional decorative elements */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-mylli-secondary/20 animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-mylli-primary/20 animate-pulse delay-500 group-hover:scale-150 transition-transform duration-500"></div>
                      </div>
                    </div>
                    
                    {/* Title section with fixed height */}
                    <div className="px-6 pb-8 flex items-center justify-center min-h-[80px]">
                      <h3 className="text-center text-mylli-dark font-bold text-base leading-tight group-hover:text-mylli-primary transition-colors duration-300">
                        {role.title}
                      </h3>
                    </div>
                    
                    {/* Enhanced bottom accent */}
                    <div className="h-2 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    {/* Floating elements for enhanced uniqueness */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-mylli-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-mylli-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  </div>
                  
                  {/* External glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 transform scale-0 group-hover:scale-110 transition-transform duration-700 -z-10 blur-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedules */}
      
      
      {/* Testimonials */}
      
      
      {/* Call to Action */}
      
    </div>
  );
};

export default InfirmierPage;
