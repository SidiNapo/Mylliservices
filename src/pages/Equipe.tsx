
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Search, Award, Target, Clock, Shield, Star } from 'lucide-react';

const Equipe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectionSteps = [
    {
      step: 1,
      title: "Analyse des Besoins",
      description: "Évaluation approfondie de vos besoins spécifiques en soins",
      details: "Notre équipe procède à une analyse détaillée de votre situation médicale, de votre environnement familial et de vos préférences personnelles pour déterminer le profil idéal du professionnel de santé.",
      icon: Target,
      color: "from-mylli-primary to-mylli-quaternary",
      delay: 0
    },
    {
      step: 2,
      title: "Sélection Rigoureuse",
      description: "Tri minutieux de nos professionnels qualifiés",
      details: "Nous sélectionnons soigneusement parmi notre réseau de professionnels certifiés ceux qui correspondent parfaitement à vos critères médicaux, géographiques et relationnels.",
      icon: Search,
      color: "from-mylli-secondary to-mylli-tertiary",
      delay: 200
    },
    {
      step: 3,
      title: "Validation des Compétences",
      description: "Vérification des qualifications et de l'expérience",
      details: "Chaque professionnel est soumis à une validation stricte de ses diplômes, certifications, expériences et références pour garantir un niveau d'excellence optimal.",
      icon: Award,
      color: "from-mylli-quaternary to-mylli-accent",
      delay: 400
    },
    {
      step: 4,
      title: "Mise en Relation",
      description: "Introduction personnalisée et accompagnement",
      details: "Nous organisons la rencontre initiale et assurons un suivi personnalisé pour garantir une collaboration harmonieuse et efficace entre vous et votre professionnel de santé.",
      icon: Users,
      color: "from-mylli-accent to-mylli-primary",
      delay: 600
    }
  ];

  const qualityIndicators = [
    {
      icon: Shield,
      title: "100% Certifiés",
      description: "Tous nos professionnels sont diplômés et certifiés"
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Service d'urgence et support continu"
    },
    {
      icon: Star,
      title: "Excellence Garantie",
      description: "Satisfaction client de plus de 98%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notre Équipe & Processus de Sélection | Mylli Services</title>
        <meta name="description" content="Découvrez notre processus rigoureux de sélection des professionnels de santé et les outils que nous utilisons pour garantir des soins d'excellence." />
        <meta name="keywords" content="équipe médicale, sélection professionnels, outils santé, Mylli Services, soins à domicile" />
      </Helmet>

      {/* Hero Section */}
      <ParallaxSection
        backgroundGradient="linear-gradient(135deg, #0077C0 0%, #005e9c 50%, #00467A 100%)"
        height="60vh"
        className="flex items-center justify-center"
        pattern="dots"
        overlayOpacity={0.1}
      >
        <div className="container-custom text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Notre Équipe & Nos Outils
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Excellence, rigueur et innovation au service de votre santé
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Quality Indicators */}
      <section className="section-padding bg-gradient-to-br from-white to-mylli-light/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {qualityIndicators.map((indicator, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-mylli-primary to-mylli-accent rounded-full flex items-center justify-center">
                    <indicator.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-mylli-dark mb-2">{indicator.title}</h3>
                  <p className="text-mylli-gray">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Processus de Sélection - Modern Design */}
      <section className="section-padding bg-gradient-to-br from-mylli-light/30 via-white to-mylli-quaternary/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mylli-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-mylli-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-mylli-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <SectionHeading
            title="Notre Processus de Sélection"
            subtitle="Un processus rigoureux en 4 étapes pour vous garantir les meilleurs professionnels de santé"
            variant="animated"
            highlightText="Processus de Sélection"
            align="center"
            className="mb-20"
          />

          {/* Process Steps - Modern Timeline Design */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mylli-primary via-mylli-secondary to-mylli-accent transform -translate-x-1/2 rounded-full"></div>

            <div className="space-y-20">
              {selectionSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${step.delay}ms` }}
                >
                  {/* Step Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-3 animate-fade-in bg-white/90 backdrop-blur-sm">
                      {/* Gradient Border Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
                      
                      <CardContent className="p-8 relative z-10">
                        {/* Step Number Badge */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} text-white font-bold text-lg rounded-full mb-6 shadow-lg`}>
                          {step.step}
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="w-7 h-7 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-mylli-dark mb-3 group-hover:text-mylli-primary transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-mylli-gray font-medium mb-4 text-lg">
                              {step.description}
                            </p>
                            <p className="text-mylli-gray/80 leading-relaxed">
                              {step.details}
                            </p>
                            
                            {/* Progress Indicator */}
                            <div className="mt-6 flex items-center space-x-2">
                              <div className={`h-2 w-full bg-gray-200 rounded-full overflow-hidden`}>
                                <div 
                                  className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                                  style={{ width: `${(step.step / 4) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-mylli-gray font-medium">{step.step}/4</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central Circle for Timeline */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-125 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-20">
            <Card className="inline-block border-0 shadow-card bg-gradient-to-r from-mylli-primary/5 to-mylli-secondary/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-mylli-primary" />
                  <h3 className="text-2xl font-bold text-mylli-dark">Processus Certifié</h3>
                </div>
                <p className="text-mylli-gray mb-6 max-w-md">
                  Notre processus de sélection est certifié et audité régulièrement pour maintenir les plus hauts standards de qualité.
                </p>
                <button className="btn-primary group">
                  Découvrir nos Services
                  <CheckCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Nos Outils d'Excellence"
            subtitle="Technologies et méthodes avancées pour garantir un service optimal"
            variant="modern"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Système de Matching Intelligent",
                description: "Algorithme avancé pour associer le bon professionnel au bon patient",
                icon: Target
              },
              {
                title: "Suivi Qualité en Temps Réel",
                description: "Monitoring continu de la satisfaction et de la qualité des soins",
                icon: Shield
              },
              {
                title: "Formation Continue",
                description: "Programme de formation permanente pour nos professionnels",
                icon: Award
              }
            ].map((tool, index) => (
              <Card key={index} className="group border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-mylli-primary to-mylli-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-mylli-dark mb-3">{tool.title}</h3>
                  <p className="text-mylli-gray">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipe;
