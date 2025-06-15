
import { useState } from 'react';
import { Heart, Shield, Users, Lightbulb, Target, Award, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';
import OptimizedImage from '@/components/seo/OptimizedImage';

const EquipePage = () => {
  const [activeValue, setActiveValue] = useState(0);
  
  const valeurs = [
    {
      id: 'bienveillance',
      title: 'Bienveillance',
      subtitle: 'Au cœur de nos actions',
      description: 'Nous plaçons l\'humain au centre de nos préoccupations avec empathie, respect et attention particulière à chaque personne accompagnée.',
      icon: <Heart size={40} strokeWidth={1.5} />,
      color: 'from-rose-400 to-pink-600',
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-100',
      details: [
        'Écoute active et personnalisée',
        'Respect de la dignité et de l\'intimité',
        'Accompagnement avec chaleur humaine',
        'Adaptation à chaque situation personnelle'
      ]
    },
    {
      id: 'professionnalisme',
      title: 'Professionnalisme',
      subtitle: 'Excellence et expertise',
      description: 'Notre équipe qualifiée s\'engage à fournir des services de qualité supérieure avec rigueur, compétence et respect des bonnes pratiques.',
      icon: <Shield size={40} strokeWidth={1.5} />,
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      details: [
        'Formation continue de nos équipes',
        'Respect des protocoles et normes',
        'Engagement qualité permanent',
        'Suivi rigoureux des prestations'
      ]
    },
    {
      id: 'proximite',
      title: 'Proximité',
      subtitle: 'Proche de vous, proche de chez vous',
      description: 'Nous privilégions une relation de proximité et de confiance, en étant à l\'écoute de vos besoins et disponibles quand vous en avez besoin.',
      icon: <Users size={40} strokeWidth={1.5} />,
      color: 'from-emerald-400 to-green-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-100',
      details: [
        'Équipe locale et accessible',
        'Relation de confiance durable',
        'Disponibilité et réactivité',
        'Communication transparente'
      ]
    },
    {
      id: 'innovation',
      title: 'Innovation',
      subtitle: 'Toujours plus loin',
      description: 'Nous nous adaptons aux évolutions des besoins et intégrons les meilleures pratiques pour améliorer continuellement nos services.',
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      color: 'from-amber-400 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-100',
      details: [
        'Veille technologique et méthodologique',
        'Amélioration continue des services',
        'Solutions personnalisées innovantes',
        'Anticipation des besoins futurs'
      ]
    },
    {
      id: 'engagement',
      title: 'Engagement',
      subtitle: 'Notre promesse, votre tranquillité',
      description: 'Nous nous engageons pleinement dans notre mission d\'accompagnement avec responsabilité, fiabilité et constance.',
      icon: <Target size={40} strokeWidth={1.5} />,
      color: 'from-purple-400 to-violet-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-100',
      details: [
        'Respect de nos engagements',
        'Fiabilité et ponctualité',
        'Responsabilité assumée',
        'Constance dans la qualité'
      ]
    },
    {
      id: 'excellence',
      title: 'Excellence',
      subtitle: 'La qualité comme standard',
      description: 'Nous visons l\'excellence dans tous nos services en maintenant des standards élevés et en cherchant constamment à nous dépasser.',
      icon: <Award size={40} strokeWidth={1.5} />,
      color: 'from-cyan-400 to-teal-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-teal-100',
      details: [
        'Standards de qualité élevés',
        'Recherche de la perfection',
        'Amélioration permanente',
        'Reconnaissance de l\'expertise'
      ]
    }
  ];

  const outils = [
    {
      title: "Matériel médical adapté",
      description: "Équipements professionnels de dernière génération pour tous types de soins",
      image: "/lovable-uploads/816b248a-adf4-4cb2-bf47-5f0e4904567e.png"
    },
    {
      title: "Technologies d'assistance",
      description: "Solutions technologiques pour faciliter le quotidien et maintenir l'autonomie",
      image: "/lovable-uploads/cfbe77b8-0c6a-4e5c-b8f4-b2fb19e403a5.png"
    },
    {
      title: "Outils de communication",
      description: "Systèmes de liaison pour un suivi optimal entre tous les intervenants",
      image: "/lovable-uploads/dc40d7ba-e017-4b5e-aabc-071e8f563810.png"
    }
  ];

  return (
    <div>
      <PageBanner 
        title="Nos Outils & Valeurs" 
        subtitle="L'excellence au service de votre bien-être" 
        variant="gradient"
      />
      
      {/* Outils Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Outils Professionnels" 
            subtitle="Des équipements de pointe pour des soins de qualité"
            variant="modern"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outils.map((outil, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <OptimizedImage
                    src={outil.image}
                    alt={outil.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-mylli-dark">{outil.title}</h3>
                  <p className="text-mylli-gray">{outil.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Valeurs Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-mylli-primary/5 to-mylli-accent/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-mylli-secondary/5 to-mylli-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-mylli-accent/3 to-mylli-quaternary/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Sparkles className="text-mylli-primary" size={20} />
              <span className="text-sm font-medium text-mylli-dark">NOS VALEURS FONDAMENTALES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent bg-clip-text text-transparent">
                Ce qui nous anime
              </span>
            </h2>
            <p className="text-lg text-mylli-gray max-w-3xl mx-auto leading-relaxed">
              Découvrez les valeurs qui guident chacune de nos actions et façonnent notre engagement quotidien envers votre bien-être.
            </p>
          </div>

          {/* Interactive Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Values Cards */}
            <div className="space-y-4">
              {valeurs.map((valeur, index) => (
                <div
                  key={valeur.id}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeValue === index 
                      ? 'scale-[1.02] shadow-2xl' 
                      : 'hover:scale-[1.01] hover:shadow-lg'
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  {/* Glass card */}
                  <div className={`backdrop-blur-xl bg-white/70 rounded-2xl border border-white/30 p-6 relative overflow-hidden transition-all duration-500 ${
                    activeValue === index ? 'shadow-2xl border-white/50' : ''
                  }`}>
                    
                    {/* Active indicator */}
                    {activeValue === index && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${valeur.color} opacity-5 rounded-2xl`}></div>
                    )}

                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${valeur.color} text-white shadow-lg transition-transform duration-300 ${
                        activeValue === index ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                      }`}>
                        {valeur.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-mylli-dark">{valeur.title}</h3>
                          <ChevronRight 
                            className={`text-mylli-primary transition-transform duration-300 ${
                              activeValue === index ? 'rotate-90' : 'group-hover:translate-x-1'
                            }`} 
                            size={20} 
                          />
                        </div>
                        <p className="text-sm font-medium text-mylli-primary mb-2">{valeur.subtitle}</p>
                        <p className="text-mylli-gray text-sm leading-relaxed">{valeur.description}</p>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${valeur.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Value Details */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="backdrop-blur-xl bg-white/80 rounded-3xl border border-white/40 p-8 shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${valeurs[activeValue].color} opacity-10 rounded-full blur-xl`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${valeurs[activeValue].color} text-white shadow-xl`}>
                      {valeurs[activeValue].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-mylli-dark">{valeurs[activeValue].title}</h3>
                      <p className="text-mylli-primary font-medium">{valeurs[activeValue].subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-mylli-gray text-lg leading-relaxed mb-8">
                    {valeurs[activeValue].description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-mylli-dark mb-4">Points clés :</h4>
                    {valeurs[activeValue].details.map((detail, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 group/item"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${valeurs[activeValue].color} shadow-sm group-hover/item:scale-125 transition-transform duration-200`}></div>
                        <span className="text-mylli-gray group-hover/item:text-mylli-dark transition-colors duration-200">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection
        backgroundGradient="linear-gradient(135deg, #029edd 0%, #0077C0 50%, #005e9c 100%)"
        className="text-white"
        overlayOpacity={0.1}
        pattern="dots"
      >
        <div className="container-custom text-center section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Prêt à découvrir nos services ?
            </h2>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Contactez-nous pour une évaluation gratuite de vos besoins et découvrez comment nous pouvons vous accompagner au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button className="btn-accent px-8 py-3 text-lg">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mylli-primary px-8 py-3 text-lg">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default EquipePage;
