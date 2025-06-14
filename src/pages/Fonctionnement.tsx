import { Link } from 'react-router-dom';
import { User, Calendar, Check, Phone, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';

const FonctionnementPage = () => {
  const steps = [{
    id: "rencontre",
    title: "Rencontre à votre domicile",
    description: "Notre conseiller prend le temps de vous rencontrer chez vous pour comprendre vos besoins spécifiques et établir une relation de confiance.",
    icon: <User size={32} strokeWidth={1.5} />,
    details: ["Évaluation complète de vos besoins et contraintes", "Discussion sur vos attentes et habitudes de vie", "Analyse de l'environnement et de l'accessibilité", "Écoute attentive de vos préoccupations"]
  }, {
    id: "proposition",
    title: "Proposition personnalisée",
    description: "Sur la base de notre rencontre, nous élaborons un devis sur mesure parfaitement adapté à votre situation particulière.",
    icon: <Calendar size={32} strokeWidth={1.5} />,
    details: ["Création d'un planning adapté à vos besoins spécifiques", "Sélection des services les plus appropriés", "Devis détaillé et transparent", "Flexibilité pour s'adapter à l'évolution de vos besoins"]
  }, {
    id: "presentation",
    title: "Présentation de votre intervenant",
    description: "Nous vous présentons l'intervenant sélectionné selon vos critères avant la première intervention pour favoriser une bonne entente.",
    icon: <Check size={32} strokeWidth={1.5} />,
    details: ["Sélection rigoureuse basée sur vos préférences", "Présentation avant le début des interventions", "Possibilité de demander un autre intervenant si nécessaire", "Formation spécifique à vos besoins particuliers"]
  }, {
    id: "suivi",
    title: "Suivi de votre satisfaction",
    description: "Nous effectuons un suivi régulier pour nous assurer de la qualité des prestations et ajuster si nécessaire.",
    icon: <Phone size={32} strokeWidth={1.5} />,
    details: ["Visites de contrôle régulières", "Appels de suivi pour recueillir vos impressions", "Ajustement du service selon vos retours", "Communication constante entre vous, l'intervenant et notre équipe"]
  }];
  const faqs = [{
    question: "Comment modifier le planning?",
    answer: "Vous pouvez modifier votre planning en contactant directement votre conseiller personnel par téléphone ou par email, idéalement 48h à l'avance. Pour les ajustements réguliers, une simple notification nous suffit. Pour les changements majeurs, nous organiserons une nouvelle visite pour réévaluer vos besoins."
  }, {
    question: "Que faire en cas d'absence de l'intervenant?",
    answer: "En cas d'absence prévue de votre intervenant, nous vous proposons systématiquement un remplaçant avec un profil similaire. Pour les absences imprévues, notre service d'urgence est disponible 24h/24 pour trouver une solution rapide. Nous vous garantissons toujours une continuité de service."
  }, {
    question: "Comment sont gérées les urgences?",
    answer: "Nous disposons d'un service d'urgence disponible 24h/24, 7j/7. Un numéro spécial vous est communiqué lors de la mise en place des services. Notre équipe d'astreinte peut intervenir rapidement ou coordonner l'intervention des services d'urgence si nécessaire."
  }];
  return <div>
      <PageBanner title="Notre Fonctionnement" subtitle="Un accompagnement personnalisé en 4 étapes" variant="particles" />
      
      {/* Modern Redesigned Conseiller Section */}
      <section className="section-padding bg-gradient-to-br from-mylli-light/10 via-white to-mylli-primary/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-mylli-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-mylli-secondary/5 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-2xl mb-6 shadow-lg">
                <User size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-mylli-dark">
                VOTRE CONSEILLER <span className="text-gradient bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">MYLLI SERVICES</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-mylli-primary/10 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Image section */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-square lg:aspect-auto lg:h-full bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 flex items-center justify-center p-8">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/1edca1de-cb6f-4a4c-8644-ade90a3c280c.png" 
                        alt="Conseiller Mylli Services - Soins à domicile"
                        className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                      />
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-mylli-secondary rounded-full opacity-20"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-mylli-primary rounded-full opacity-30"></div>
                      <div className="absolute top-1/2 -left-6 w-4 h-4 bg-mylli-accent rounded-full opacity-25"></div>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-16 bg-gradient-to-b from-mylli-primary to-mylli-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-mylli-dark">
                          Votre interlocuteur unique et dédié
                        </h3>
                        <p className="text-lg text-mylli-gray leading-relaxed mb-6">
                          <strong className="text-mylli-primary">VOTRE CONSEILLER MYLLI SERVICES EST VOTRE INTERLOCUTEUR UNIQUE</strong> au sein de notre société. Il est à votre écoute et à votre disposition pour organiser le bon déroulement des prestations et pour répondre à vos questions.
                        </p>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-4 bg-mylli-primary/5 rounded-xl">
                        <div className="w-3 h-3 bg-mylli-primary rounded-full"></div>
                        <span className="text-mylli-dark font-medium">Accompagnement personnalisé</span>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-mylli-secondary/5 rounded-xl">
                        <div className="w-3 h-3 bg-mylli-secondary rounded-full"></div>
                        <span className="text-mylli-dark font-medium">Disponibilité garantie</span>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-mylli-accent/5 rounded-xl">
                        <div className="w-3 h-3 bg-mylli-accent rounded-full"></div>
                        <span className="text-mylli-dark font-medium">Suivi de qualité</span>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-mylli-primary/5 rounded-xl">
                        <div className="w-3 h-3 bg-mylli-primary rounded-full"></div>
                        <span className="text-mylli-dark font-medium">Écoute active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => <div key={step.id} className={`flex flex-col lg:flex-row items-start lg:items-center mb-12 p-8 rounded-2xl ${index % 2 === 0 ? 'bg-white shadow-card animate-fade-in-right' : 'bg-mylli-primary/5 animate-fade-in-left'}`}>
                <div className="lg:w-1/4 mb-6 lg:mb-0 flex justify-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${index % 2 === 0 ? 'bg-mylli-primary text-white' : 'bg-white text-mylli-primary'}`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="lg:w-3/4">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-mylli-primary">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-mylli-dark">{step.title}</h3>
                  </div>
                  
                  <p className="text-mylli-gray mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => <li key={i} className="flex items-start">
                        <Check size={18} className="text-mylli-secondary mt-1 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Engagements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Nos Engagements" subtitle="Des valeurs fortes qui guident chacune de nos actions" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-mylli-primary animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-mylli-dark">Une relation contractuelle claire</h3>
              <p className="text-mylli-gray">
                Tous nos engagements sont formalisés par écrit. Nous vous assurons une transparence totale sur nos prestations, nos tarifs et les modalités d'intervention.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-mylli-secondary animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-mylli-dark">Des exigences déontologiques élevées</h3>
              <p className="text-mylli-gray">
                Nos intervenants respectent une charte déontologique stricte garantissant le respect, la dignité et la confidentialité dans toutes nos interactions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-mylli-accent animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-mylli-dark">Une personnalisation des prestations</h3>
              <p className="text-mylli-gray">
                Chaque service est adapté à votre situation particulière. Nous prenons en compte vos habitudes, vos préférences et vos contraintes pour vous offrir un accompagnement sur mesure.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-mylli-primary animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-mylli-dark">Un suivi individualisé</h3>
              <p className="text-mylli-gray">
                Votre conseiller personnel assure un suivi régulier pour garantir votre satisfaction et ajuster nos services en fonction de l'évolution de vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Questions Fréquentes" subtitle="Des réponses claires à vos interrogations" />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="mb-4 bg-white rounded-lg shadow-soft">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg text-mylli-dark">
                    <div className="flex items-center text-left">
                      <HelpCircle size={20} className="text-mylli-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-1 text-mylli-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white my-0 py-[30px]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Prêt à commencer?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Prenez rendez-vous pour une première rencontre sans engagement. Nous serons heureux de vous écouter et de vous proposer des solutions adaptées à votre situation.
          </p>
          <Button asChild className="btn-accent animate-fade-in">
            <Link to="/contact">
              Prendre rendez-vous
            </Link>
          </Button>
        </div>
      </section>
    </div>;
};

export default FonctionnementPage;
