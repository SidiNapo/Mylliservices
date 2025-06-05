import { Link } from 'react-router-dom';
import { Heart, Clock, File, Phone, Clipboard, Syringe, Hospital, Calendar, CheckCircle, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
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

  // Nurse roles
  const nurseRoles = [{
    title: "Exécuter une ordonnance médicale",
    description: "Administration de traitements, préparation et administration d'injections, surveillance des effets secondaires.",
    icon: <Clipboard size={36} className="text-mylli-primary" />
  }, {
    title: "Poser et surveiller les sondes",
    description: "Installation et maintenance des sondes urinaires, nasogastriques et autres dispositifs médicaux invasifs.",
    icon: <Syringe size={36} className="text-mylli-primary" />
  }, {
    title: "Poser et surveiller une perfusion",
    description: "Mise en place et surveillance des perfusions pour l'hydratation, la nutrition et l'administration de médicaments.",
    icon: <Hospital size={36} className="text-mylli-primary" />
  }, {
    title: "Assurer la communication avec le médecin traitant",
    description: "Transmission régulière des informations sur l'évolution de l'état du patient, coordination des soins.",
    icon: <MessageSquare size={36} className="text-mylli-primary" />
  }, {
    title: "Rédiger un rapport quotidiennement",
    description: "Documentation détaillée des soins prodigués, des observations et de l'évolution du patient pour une traçabilité optimale.",
    icon: <File size={36} className="text-mylli-primary" />
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
  return <div className="pb-12">
      {/* Banner */}
      <PageBanner title="INFIRMIER(ÈRE) À DOMICILE" subtitle="Une alternative professionnelle à l'hospitalisation pour les patients nécessitant des soins médicaux réguliers" variant="particles" />
      
      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <SectionHeading title="Soins infirmiers à domicile" subtitle="Une alternative à l'hospitalisation" align="left" />
              <div className="prose max-w-none">
                <p className="text-mylli-gray mb-4">
                  Notre service d'infirmier(ère) à domicile offre une prise en charge complète des soins médicaux, permettant aux patients de recevoir des traitements professionnels dans le confort de leur environnement familier.
                </p>
                <p className="text-mylli-gray mb-4">
                  Cette solution représente une véritable alternative à l'hospitalisation pour de nombreuses pathologies : cancers, maladies respiratoires, situations de dépendance, et bien d'autres conditions nécessitant un suivi médical régulier.
                </p>
                <p className="text-mylli-gray">
                  Nos infirmier(ère)s qualifié(e)s assurent la continuité des soins prescrits par le médecin, tout en maintenant un lien permanent avec l'équipe médicale pour adapter le traitement si nécessaire.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Patient Profiles */}
      <section className="section-padding bg-gradient-to-b from-mylli-light to-white">
        <div className="container-custom">
          <SectionHeading title="Profils des patients concernés" subtitle="Nos services s'adaptent à différents besoins médicaux" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {patientProfiles.map((profile, index) => <Card key={index} className="border-none shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-5 p-3 rounded-full bg-mylli-primary/10">
                      {profile.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-mylli-dark">{profile.title}</h3>
                    <p className="text-mylli-gray">{profile.description}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Nurse Roles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Rôles de l'infirmier(ère)" subtitle="Une prise en charge médicale complète à domicile" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {nurseRoles.map((role, index) => <div key={index} className="flex p-5 bg-mylli-light/50 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in h-full">
                <div className="mr-4">
                  <div className="p-3 rounded-full bg-white shadow-md">
                    {role.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-mylli-dark">{role.title}</h3>
                  <p className="text-sm text-mylli-gray">{role.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Schedules */}
      
      
      {/* Testimonials */}
      
      
      {/* Call to Action */}
      
    </div>;
};
export default InfirmierPage;