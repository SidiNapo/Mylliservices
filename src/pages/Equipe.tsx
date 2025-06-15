import React from 'react';
import { Users, Heart, Award, Shield, Clock, CheckCircle, Star, Target, Zap, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import OptimizedImage from "@/components/seo/OptimizedImage";

const EquipePage: React.FC = () => {
  const teamValues = [
    {
      icon: Heart,
      title: "Empathie",
      description: "Comprendre et partager les émotions de nos patients pour un accompagnement humain."
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Une présence constante et un service de qualité sur lequel vous pouvez compter."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Recherche permanente de la perfection dans chaque geste de soin."
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respect des horaires et engagement dans la continuité des soins."
    }
  ];

  const qualifications = [
    {
      icon: Award,
      title: "Formation Continue",
      description: "Nos équipes suivent régulièrement des formations pour rester à la pointe des pratiques médicales."
    },
    {
      icon: CheckCircle,
      title: "Certifications",
      description: "Tous nos soignants possèdent les diplômes et certifications requis par la réglementation."
    },
    {
      icon: Target,
      title: "Spécialisations",
      description: "Chaque membre de l'équipe développe des compétences spécifiques selon les besoins."
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Capacité d'adaptation rapide aux situations d'urgence et aux besoins changeants."
    }
  ];

  return (
    <div>
      <PageBanner 
        title="Notre Équipe" 
        subtitle="Des professionnels dévoués à votre service" 
        variant="modern"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="container-custom">
          <SectionHeading
            title="Une Équipe d'Exception"
            subtitle="Chez Mylli Services, nous croyons que la qualité des soins commence par la qualité humaine de nos équipes. Nos professionnels allient compétence technique et bienveillance."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-mylli-dark mb-3">{value.title}</h3>
                  <p className="text-mylli-gray leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Character Section with Image */}
      <section className="section-padding bg-gradient-to-br from-mylli-light/50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <SectionHeading
                title="LE CARACTÈRE DES SOIGNANTS EST AUSSI IMPORTANT QUE LES CONNAISSANCES QU'ILS POSSÈDENT"
                subtitle="Notre philosophie repose sur l'équilibre parfait entre expertise technique et qualités humaines exceptionnelles."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-accent rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-mylli-dark mb-2">Bienveillance Authentique</h4>
                    <p className="text-mylli-gray">Chaque soignant est sélectionné pour sa capacité naturelle à créer un lien de confiance et de réconfort.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mylli-secondary to-mylli-tertiary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-mylli-dark mb-2">Intelligence Émotionnelle</h4>
                    <p className="text-mylli-gray">Nos équipes savent adapter leur approche selon la personnalité et les besoins de chaque patient.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mylli-accent to-mylli-quaternary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-mylli-dark mb-2">Formation Humaine</h4>
                    <p className="text-mylli-gray">Au-delà des compétences techniques, nous formons nos équipes à l'écoute active et à la communication thérapeutique.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-mylli-primary/20 to-mylli-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-mylli-secondary/20 to-mylli-tertiary/20 rounded-full blur-xl"></div>
                
                {/* Main image container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-soft hover:shadow-hover transition-all duration-500 group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src="/lovable-uploads/dc75ef76-411e-4208-ad9c-330e88f44581.png"
                      alt="Équipe médicale professionnelle avec stéthoscopes et tenue médicale"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-mylli-dark">Équipe Certifiée</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats cards */}
                <div className="absolute -left-6 bottom-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-white/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mylli-primary">100%</div>
                    <div className="text-xs text-mylli-gray font-medium">Diplômés</div>
                  </div>
                </div>
                
                <div className="absolute -right-4 top-12 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-white/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mylli-secondary">24/7</div>
                    <div className="text-xs text-mylli-gray font-medium">Disponibles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-mylli-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-mylli-accent/5 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* Qualifications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Qualifications & Compétences"
            subtitle="Nos équipes maintiennent un niveau d'excellence grâce à une formation continue et rigoureuse."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {qualifications.map((qual, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mylli-secondary to-mylli-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <qual.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-mylli-dark mb-3">{qual.title}</h3>
                  <p className="text-mylli-gray leading-relaxed">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-mylli-primary via-mylli-accent to-mylli-quaternary text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez Notre Équipe d'Exception
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Si vous partagez nos valeurs et souhaitez contribuer à améliorer la qualité de vie de nos patients, nous serions ravis de vous rencontrer.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-mylli-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-hover transition-all duration-300"
            >
              Postuler Maintenant
            </Button>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
