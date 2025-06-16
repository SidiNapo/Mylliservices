import { Link } from 'react-router-dom';
import { User, Calendar, Check, Phone, HelpCircle, Shield, Heart, Award, Users, Target, Star, Zap, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import OptimizedImage from '@/components/seo/OptimizedImage';

const FonctionnementPage = () => {
  const steps = [{
    id: "rencontre",
    title: "Rencontre à votre domicile",
    description: "Notre conseiller prend le temps de vous rencontrer chez vous pour comprendre vos besoins spécifiques et établir une relation de confiance.",
    icon: <User size={32} strokeWidth={1.5} />,
    details: ["Évaluation complète de vos besoins et contraintes", "Discussion sur vos attentes et habitudes de vie", "Analyse de l'environnement et de l'accessibilité", "Écoute attentive de vos préoccupations"],
    gradient: "from-mylli-primary to-mylli-secondary"
  }, {
    id: "proposition",
    title: "Proposition personnalisée",
    description: "Sur la base de notre rencontre, nous élaborons un devis sur mesure parfaitement adapté à votre situation particulière.",
    icon: <Calendar size={32} strokeWidth={1.5} />,
    details: ["Création d'un planning adapté à vos besoins spécifiques", "Sélection des services les plus appropriés", "Devis détaillé et transparent", "Flexibilité pour s'adapter à l'évolution de vos besoins"],
    gradient: "from-mylli-secondary to-mylli-accent"
  }, {
    id: "presentation",
    title: "Présentation de votre intervenant",
    description: "Nous vous présentons l'intervenant sélectionné selon vos critères avant la première intervention pour favoriser une bonne entente.",
    icon: <Check size={32} strokeWidth={1.5} />,
    details: ["Sélection rigoureuse basée sur vos préférences", "Présentation avant le début des interventions", "Possibilité de demander un autre intervenant si nécessaire", "Formation spécifique à vos besoins particuliers"],
    gradient: "from-mylli-accent to-mylli-quaternary"
  }, {
    id: "suivi",
    title: "Suivi de votre satisfaction",
    description: "Nous effectuons un suivi régulier pour nous assurer de la qualité des prestations et ajuster si nécessaire.",
    icon: <Phone size={32} strokeWidth={1.5} />,
    details: ["Visites de contrôle régulières", "Appels de suivi pour recueillir vos impressions", "Ajustement du service selon vos retours", "Communication constante entre vous, l'intervenant et notre équipe"],
    gradient: "from-mylli-quaternary to-mylli-primary"
  }];
  const engagements = [{
    title: "Une relation contractuelle claire",
    description: "Tous nos engagements sont formalisés par écrit. Nous vous assurons une transparence totale sur nos prestations, nos tarifs et les modalités d'intervention.",
    icon: Shield,
    gradient: "from-mylli-primary to-mylli-secondary",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(0, 119, 192, 0.1) 0%, transparent 50%)"
  }, {
    title: "Des exigences déontologiques élevées",
    description: "Nos intervenants respectent une charte déontologique stricte garantissant le respect, la dignité et la confidentialité dans toutes nos interactions.",
    icon: Heart,
    gradient: "from-mylli-secondary to-mylli-accent",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(224, 46, 49, 0.1) 0%, transparent 50%)"
  }, {
    title: "Une personnalisation des prestations",
    description: "Chaque service est adapté à votre situation particulière. Nous prenons en compte vos habitudes, vos préférences et vos contraintes pour vous offrir un accompagnement sur mesure.",
    icon: Target,
    gradient: "from-mylli-accent to-mylli-quaternary",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(0, 153, 232, 0.1) 0%, transparent 50%)"
  }, {
    title: "Un suivi individualisé",
    description: "Votre conseiller personnel assure un suivi régulier pour garantir votre satisfaction et ajuster nos services en fonction de l'évolution de vos besoins.",
    icon: Users,
    gradient: "from-mylli-quaternary to-mylli-primary",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(12, 170, 255, 0.1) 0%, transparent 50%)"
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
      <PageBanner title="Notre Fonctionnement" subtitle="Un accompagnement personnalisé en 4 étapes" variant="modern" />
      
      {/* Redesigned Conseiller Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-mylli-accent/10 to-mylli-primary/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-fade-in">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                
                {/* Image Section */}
                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative">
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-3xl blur-lg transform rotate-3"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                      <OptimizedImage src="/lovable-uploads/1a734acd-93c2-4f7b-88a3-fa8c91f19cc0.png" alt="Conseiller Mylli Services - Professionnel de santé à domicile" width={280} height={280} className="w-full h-auto rounded-xl" priority={true} />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-3/5 text-center lg:text-left">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white text-sm font-semibold rounded-full mb-4">
                      VOTRE INTERLOCUTEUR PRIVILÉGIÉ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-mylli-dark to-mylli-primary bg-clip-text text-transparent leading-tight">
                      VOTRE CONSEILLER MYLLI SERVICES
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-lg text-mylli-gray leading-relaxed">
                    <p className="font-semibold text-mylli-dark">
                      Votre conseiller Mylli Services est votre interlocuteur unique au sein de notre société.
                    </p>
                    <p>
                      Il est à votre écoute et à votre disposition pour organiser le bon déroulement des prestations et pour répondre à toutes vos questions avec bienveillance et professionnalisme.
                    </p>
                  </div>
                  
                  {/* Key features */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                      <span className="text-sm font-medium text-mylli-dark">Écoute personnalisée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                      <span className="text-sm font-medium text-mylli-dark">Suivi continu</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                      <span className="text-sm font-medium text-mylli-dark">Disponibilité garantie</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                      <span className="text-sm font-medium text-mylli-dark">Expertise professionnelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultra Modern Process Steps */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIG0gLTQwIDAgbCA0MCAwIiBzdHJva2U9IiMwMDc3QzAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-pulse-soft"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading title="Notre Processus en 4 Étapes" subtitle="Un accompagnement structuré et personnalisé pour répondre à vos besoins" variant="gradient" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {steps.map((step, index) => <div key={step.id} className="group relative transform transition-all duration-700 hover:translate-y-[-8px]" style={{
              animationDelay: `${index * 0.15}s`
            }}>
                  {/* Animated background glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${step.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Main card */}
                  <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 group-hover:border-mylli-primary/20">
                    
                    {/* Animated top border */}
                    <div className={`h-2 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    {/* Content */}
                    <div className="p-8">
                      
                      {/* Header with number and icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                          <div className="text-white">{step.icon}</div>
                        </div>
                        
                        {/* Step number with sophisticated styling */}
                        <div className="relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                            <span className="text-xl font-bold text-white">{index + 1}</span>
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-mylli-primary/20 to-transparent rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      
                      {/* Title with gradient text on hover */}
                      <h3 className="text-2xl font-bold mb-4 text-mylli-dark group-hover:bg-gradient-to-r group-hover:from-mylli-primary group-hover:to-mylli-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-mylli-gray leading-relaxed mb-6 text-lg">
                        {step.description}
                      </p>
                      
                      {/* Enhanced details list */}
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => <li key={i} className="flex items-start group/item">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <div className={`w-6 h-6 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300`}>
                                <Check size={12} className="text-white" />
                              </div>
                            </div>
                            <span className="text-mylli-gray group-hover/item:text-mylli-dark transition-colors duration-300">{detail}</span>
                          </li>)}
                      </ul>
                      
                      {/* Interactive bottom section */}
                      <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100 group-hover:border-mylli-primary/20 transition-colors duration-500">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-current opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        transitionDelay: `${i * 0.1}s`
                      }} />)}
                        </div>
                        
                        {/* Animated arrow */}
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2`}>
                          <Zap size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-mylli-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultra Modern Engagements Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-20 w-96 h-96 rounded-full border-2 border-mylli-primary animate-spin-slow" style={{
          animationDuration: '30s'
        }}></div>
          <div className="absolute bottom-40 right-32 w-64 h-64 rounded-full border border-mylli-secondary animate-spin-slow" style={{
          animationDuration: '25s',
          animationDirection: 'reverse'
        }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-mylli-accent/30 animate-pulse-soft"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading title="Nos Engagements" subtitle="Des valeurs fortes qui guident chacune de nos actions avec un professionnalisme exemplaire" variant="gradient" highlightText="Nos Engagements" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engagements.map((engagement, index) => {
              const IconComponent = engagement.icon;
              return <div key={index} className="group relative transform transition-all duration-700 hover:translate-y-[-12px] hover:scale-105" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    {/* Multiple layered backgrounds for extreme depth */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${engagement.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-all duration-700`}></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl blur opacity-30"></div>
                    
                    {/* Main card with sophisticated styling */}
                    <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/50 group-hover:border-mylli-primary/30">
                      
                      {/* Dynamic background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: engagement.bgPattern
                  }}></div>
                      
                      {/* Animated top border with gradient flow */}
                      <div className={`h-2 bg-gradient-to-r ${engagement.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                      
                      {/* Content with enhanced spacing */}
                      <div className="relative p-8 flex flex-col h-full">
                        
                        {/* Icon section with advanced animations */}
                        <div className="flex items-center justify-between mb-8">
                          <div className={`w-20 h-20 bg-gradient-to-br ${engagement.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-700`}>
                            <IconComponent size={32} className="text-white" />
                          </div>
                          
                          {/* Floating decorative element */}
                          
                        </div>
                        
                        {/* Title with sophisticated hover effects */}
                        <h3 className="text-2xl font-bold mb-6 text-mylli-dark leading-tight relative">
                          <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-mylli-primary group-hover:to-mylli-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">
                            {engagement.title}
                          </span>
                          {/* Underline animation */}
                          <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${engagement.gradient} group-hover:w-full transition-all duration-700`}></div>
                        </h3>
                        
                        {/* Description with enhanced typography */}
                        <p className="text-mylli-gray leading-relaxed flex-grow text-lg group-hover:text-mylli-dark transition-colors duration-500">
                          {engagement.description}
                        </p>
                        
                        {/* Enhanced interactive bottom section */}
                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200 group-hover:border-mylli-primary/30 transition-colors duration-500">
                          {/* Animated quality indicators */}
                          <div className="flex space-x-2">
                            {[...Array(4)].map((_, i) => <div key={i} className={`w-3 h-3 rounded-full bg-gradient-to-r ${engagement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-soft`} style={{
                          transitionDelay: `${i * 0.1}s`,
                          animationDelay: `${i * 0.2}s`
                        }}></div>)}
                          </div>
                          
                          {/* Interactive action indicator */}
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${engagement.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:rotate-45 shadow-lg`}>
                            <Star size={18} className="text-white transform group-hover:-rotate-45 transition-transform duration-700" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Advanced hover effect overlay with multiple gradients */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mylli-primary/2 to-mylli-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mylli-accent/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    </div>
                  </div>;
            })}
            </div>
            
            {/* Enhanced call to action section */}
            <div className="mt-20 text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-soft"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-mylli-primary/20 group-hover:border-mylli-primary/40 transition-all duration-500">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                      <Heart size={28} className="text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-mylli-dark mb-4">
                    Découvrez notre engagement qualité
                  </h4>
                  <p className="text-lg text-mylli-gray mb-8 max-w-2xl mx-auto">
                    Chaque engagement reflète notre détermination à vous offrir les meilleurs services d'aide à domicile.
                  </p>
                  <Link to="/contact">
                    <Button className="btn-primary group relative overflow-hidden shadow-lg hover:shadow-xl">
                      <span className="relative z-10 flex items-center">
                        Parlons de vos besoins
                        <Zap size={18} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-mylli-secondary to-mylli-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultra Modern FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 opacity-20">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-mylli-primary/30 to-mylli-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-tl from-mylli-accent/25 to-mylli-quaternary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s', animationDuration: '10s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-mylli-secondary/20 to-mylli-primary/20 rounded-full blur-2xl animate-pulse-soft"></div>
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIG0gLTQwIDAgbCA0MCAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-background-pan opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10">
          {/* Enhanced section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-subtle">
                <HelpCircle size={24} className="text-white" />
              </div>
              <div className="w-2 h-2 bg-gradient-to-r from-mylli-accent to-mylli-quaternary rounded-full animate-pulse-soft"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-mylli-secondary to-mylli-accent rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-text-gradient">
                Questions Fréquentes
              </span>
            </h2>
            
            <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Des réponses claires et détaillées à vos interrogations les plus courantes
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mylli-primary to-transparent"></div>
              <Sparkles size={20} className="text-mylli-accent animate-pulse-soft" />
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mylli-secondary to-transparent"></div>
            </div>
          </div>
          
          {/* Ultra Modern FAQ Container */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="group relative transform transition-all duration-700 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Main card */}
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden group-hover:border-mylli-primary/40 transition-all duration-700">
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-mylli-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Enhanced trigger */}
                    <AccordionTrigger className="px-8 py-6 hover:no-underline group/trigger relative">
                      <div className="flex items-center justify-between w-full text-left">
                        <div className="flex items-center space-x-4">
                          {/* Question number with sophisticated styling */}
                          <div className="w-10 h-10 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center shadow-lg group-hover/trigger:scale-110 group-hover/trigger:rotate-12 transition-all duration-500">
                            <span className="text-sm font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          
                          {/* Question text */}
                          <h3 className="text-xl font-semibold text-white group-hover/trigger:text-blue-100 transition-colors duration-500 pr-8">
                            {faq.question}
                          </h3>
                        </div>
                        
                        {/* Custom chevron with enhanced styling */}
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-mylli-accent to-mylli-quaternary rounded-full flex items-center justify-center shadow-lg group-hover/trigger:shadow-xl transition-all duration-500">
                            <ChevronDown size={16} className="text-white transition-transform duration-500 group-data-[state=open]/trigger:rotate-180" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover line effect */}
                      <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent transform scale-x-0 group-hover/trigger:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </AccordionTrigger>
                    
                    {/* Enhanced content */}
                    <AccordionContent className="px-8 pb-8 pt-2">
                      <div className="relative">
                        {/* Content background */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary/5 to-mylli-secondary/5 rounded-2xl"></div>
                        
                        <div className="relative flex items-start space-x-4">
                          {/* Decorative icon */}
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-mylli-accent/20 to-mylli-quaternary/20 rounded-full flex items-center justify-center mt-1">
                            <Star size={14} className="text-mylli-accent" />
                          </div>
                          
                          {/* Answer text */}
                          <p className="text-blue-100/90 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Additional help section */}
            <div className="mt-16 text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-soft"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 group-hover:border-mylli-primary/40 transition-all duration-500">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-mylli-accent to-mylli-quaternary rounded-full flex items-center justify-center shadow-2xl animate-float">
                      <Phone size={28} className="text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Une autre question ?</h4>
                  <p className="text-blue-100/80 mb-6 max-w-md mx-auto">
                    Notre équipe est là pour répondre à toutes vos interrogations
                  </p>
                  <Link to="/contact">
                    <Button className="btn-primary group relative overflow-hidden shadow-lg hover:shadow-2xl">
                      <span className="relative z-10 flex items-center">
                        Nous contacter
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-mylli-secondary to-mylli-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultra Modern CTA Section */}
      <section className="py-32 bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-dark relative overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0">
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-background-pan"></div>
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s' }}></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-mylli-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '-4s', animationDuration: '10s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mylli-quaternary/10 rounded-full blur-3xl animate-pulse-soft"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-32 right-32 w-24 h-24 border-2 border-white/20 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 left-40 w-16 h-16 border border-mylli-accent/30 rounded-full animate-pulse-soft"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          {/* Enhanced header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-subtle border border-white/30">
                <Zap size={32} className="text-white" />
              </div>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-3 h-3 bg-white/40 rounded-full animate-pulse-soft" 
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="inline-block animate-wave mr-4">👋</span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-text-gradient">
                Prêt à commencer?
              </span>
            </h2>
          </div>
          
          {/* Enhanced description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl text-white/90 leading-relaxed mb-8 font-light">
              Prenez rendez-vous pour une première rencontre sans engagement. 
              <br className="hidden md:block" />
              Nous serons heureux de vous écouter et de vous proposer des solutions adaptées à votre situation.
            </p>
            
            {/* Key benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Shield, text: "Consultation gratuite", color: "from-mylli-accent to-mylli-quaternary" },
                { icon: Heart, text: "Sans engagement", color: "from-white/20 to-white/40" },
                { icon: Target, text: "Solutions sur mesure", color: "from-mylli-quaternary to-mylli-accent" }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative transform transition-all duration-500 hover:scale-110"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-r ${benefit.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 group-hover:border-white/40 transition-all duration-500">
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <p className="text-white font-medium">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="relative inline-block group">
            {/* Multiple glow layers */}
            <div className="absolute -inset-6 bg-gradient-to-r from-white/30 via-mylli-accent/30 to-white/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-soft"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-mylli-quaternary/40 to-mylli-accent/40 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <Link to="/contact">
              <Button className="relative bg-white text-mylli-primary hover:text-mylli-dark px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 group overflow-hidden border-2 border-white/20 hover:border-white/40">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  <Calendar size={24} className="mr-3 group-hover:rotate-12 transition-transform duration-500" />
                  Prendre rendez-vous
                  <div className="ml-3 flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 animate-bounce-subtle" 
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
          </div>
          
          {/* Contact information */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span>Appel gratuit</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>Disponible 24h/24</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Award size={18} />
              <span>Service premium</span>
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
