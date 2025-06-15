import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import OptimizedImage from '@/components/seo/OptimizedImage';

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [{
    icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
      <OptimizedImage src="/lovable-uploads/fcb791a8-469a-4d8f-a3a4-a0298acb30a8.png" alt="Expérience professionnelle" width={80} height={80} className="w-full h-full object-cover" />
    </div>,
    title: "Une expérience de plus de 10 ans",
    description: "Personnel qualifié et vérifié pour une prise en charge en toute sécurité et sérénité.",
    link: "/services",
    detailedDescription: "Plus de 10 ans d'expérience au service de la dignité humaine\n\nDepuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc. Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une parfaite connaissance des besoins du terrain.\n\nCette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, soutien moral et relationnel. Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de haute qualité, toujours empreint de respect et de bienveillance."
  }, {
    icon: <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
      <OptimizedImage src="/lovable-uploads/f44d65a2-d31c-4815-a088-b4b4465908e2.png" alt="Équipe compétente" width={80} height={80} className="w-full h-full object-cover" />
    </div>,
    title: "Une équipe compétente pour un service de qualité",
    description: "Accompagnement personnalisé et suivi régulier pour garantir votre entière satisfaction.",
    link: "/equipe",
    detailedDescription: "Une équipe compétente pour un service de qualité\n\nNotre force réside dans la qualité de nos intervenants. Chaque membre de notre équipe est soigneusement sélectionné, formé et accompagné pour offrir un service d'exception. Nos professionnels – infirmières, aides-soignants, auxiliaires de vie – possèdent les compétences techniques et humaines nécessaires pour répondre à tous vos besoins.\n\nNous privilégions une approche globale qui combine expertise médicale, soutien moral et respect de la personne. Nos équipes sont formées régulièrement aux dernières pratiques et technologies pour garantir des soins toujours plus efficaces et adaptés.\n\nChaque intervention fait l'objet d'un suivi personnalisé pour s'assurer de votre entière satisfaction et ajuster si nécessaire notre accompagnement à l'évolution de vos besoins."
  }];

  const testimonials = [
    {
      name: "Aicha D.",
      role: "Cliente",
      image: "/lovable-uploads/aicha.jpg",
      testimonial: "Grâce à Mylli Services, ma mère reçoit des soins de qualité à domicile. L'équipe est professionnelle, attentionnée et toujours à l'écoute de nos besoins. Je recommande vivement leurs services."
    },
    {
      name: "Ahmed L.",
      role: "Client",
      image: "/lovable-uploads/ahmed.jpg",
      testimonial: "J'ai été très satisfait de l'accompagnement de Mylli Services lors de ma convalescence. Les infirmiers sont compétents et disponibles, et leur soutien m'a été précieux pour retrouver mon autonomie."
    },
    {
      name: "Fatima Z.",
      role: "Cliente",
      image: "/lovable-uploads/fatima.jpg",
      testimonial: "Mylli Services a changé la vie de mon père. Il peut rester chez lui en toute sécurité grâce à l'aide précieuse des auxiliaires de vie. Je suis très reconnaissante de leur professionnalisme et de leur gentillesse."
    }
  ];

  return (
    <>
      <SEOHead
        title="Mylli Services - Accompagnement à domicile au Maroc"
        description="Services d'accompagnement à domicile personnalisés au Maroc. Infirmiers, aides-soignants qualifiés pour soins médicaux et assistance quotidienne."
        keywords="accompagnement domicile Maroc, soins infirmiers, aide soignant, services médicaux domicile"
        canonicalUrl="/"
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-mylli-light/20 to-mylli-accent/10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/lovable-uploads/home-hero.jpg"
              alt="Mylli Services - Accompagnement à domicile"
              layout="fill"
              objectFit="cover"
              className="object-center opacity-70"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="container-custom relative z-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left space-y-8 animate-fade-in">
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-mylli-dark leading-tight">
                      Accompagnement à <span className="text-transparent bg-clip-text bg-gradient-to-r from-mylli-primary to-mylli-secondary">domicile</span> personnalisé
                    </h1>
                    <p className="text-xl md:text-2xl text-mylli-gray/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      Des professionnels qualifiés pour vous accompagner au quotidien avec bienveillance et expertise.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to="/services" className="btn-primary inline-flex items-center justify-center group">
                      <span>Découvrir nos services</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/mot-du-president" className="btn-secondary inline-flex items-center justify-center">
                      Mot du Président
                    </Link>
                  </div>
                </div>

                {/* Right Content */}
                <div className="hidden lg:block animate-fade-in">
                  <OptimizedImage
                    src="/lovable-uploads/home-hero-person.png"
                    alt="Mylli Services - Accompagnement à domicile"
                    width={500}
                    height={600}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container-custom">
            <SectionHeading
              title="Nos atouts"
              subtitle="Pourquoi choisir Mylli Services ?"
              variant="modern"
            />
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-hover transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 cursor-pointer"
                  onClick={() => setSelectedFeature(feature)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-mylli-dark mb-3 group-hover:text-mylli-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-mylli-gray leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-mylli-light/30 to-white/50">
          <div className="container-custom">
            <SectionHeading
              title="Témoignages"
              subtitle="Ce que nos clients disent de nous"
              variant="gradient"
            />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-card bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <OptimizedImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-mylli-dark">{testimonial.name}</h4>
                        <p className="text-sm text-mylli-gray">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-mylli-gray leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto text-center">
              <SectionHeading
                title="Prêt à améliorer votre quotidien ?"
                subtitle="Contactez-nous dès aujourd'hui pour discuter de vos besoins"
                variant="underline"
              />
              <div className="mt-12">
                <Link to="/contact" className="btn-primary btn-lg inline-flex items-center group">
                  <span>Prendre contact</span>
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Detail Modal */}
        <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedFeature && (
              <div className="space-y-6">
                <DialogHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {selectedFeature.icon}
                    <DialogTitle className="text-2xl font-bold text-mylli-dark">
                      {selectedFeature.title}
                    </DialogTitle>
                  </div>
                </DialogHeader>
                
                <div className="prose max-w-none">
                  {selectedFeature.detailedDescription.split('\n').map((paragraph, index) => {
                    if (paragraph.trim() === '') return null;
                    
                    return (
                      <p key={index} className="text-mylli-gray leading-relaxed mb-4 text-justify">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                
                <div className="pt-4 border-t">
                  <Link 
                    to={selectedFeature.link} 
                    className="btn-primary inline-flex items-center"
                    onClick={() => setSelectedFeature(null)}
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Home;
