import { Award, CheckCircle, Shield, Users } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ParallaxSection from '@/components/common/ParallaxSection';
const EquipePage = () => {
  const values = [{
    title: "Professionnalisme",
    description: "Nos intervenants sont sélectionnés pour leurs compétences techniques et leur rigueur. Ils suivent une formation continue pour maintenir le plus haut niveau de qualité.",
    icon: <Shield size={40} strokeWidth={1.5} />,
    color: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-500/10 to-purple-600/10"
  }, {
    title: "Respect de la dignité",
    description: "Nous considérons chaque personne dans sa globalité et sa singularité. Le respect de la dignité et de l'intimité guide chacune de nos actions.",
    icon: <Award size={40} strokeWidth={1.5} />,
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10"
  }, {
    title: "Empathie",
    description: "La capacité à comprendre et partager les sentiments d'autrui est au cœur de notre approche. Nous accordons une attention particulière à la dimension émotionnelle.",
    icon: <Users size={40} strokeWidth={1.5} />,
    color: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/10 to-rose-600/10"
  }, {
    title: "Adaptabilité",
    description: "Nous ajustons constamment nos services pour répondre aux besoins changeants de nos clients. La flexibilité est essentielle pour un accompagnement de qualité.",
    icon: <CheckCircle size={40} strokeWidth={1.5} />,
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/10 to-red-600/10"
  }];
  return <div>
      <PageBanner title="Nos Outils" subtitle="Des outils performants au service de votre bien-être" />
      
      {/* Approach Section with Parallax - Updated with new image and modern design */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-mylli-accent/20 to-mylli-quaternary/20 rounded-full blur-lg animate-pulse-soft"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
          backgroundSize: '60px 60px'
        }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left side - Image with modern styling */}
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-mylli-primary/30 to-transparent rounded-full blur-xl opacity-40"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-mylli-secondary/30 to-transparent rounded-full blur-xl opacity-40"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Image with overlay effects */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img src="/lovable-uploads/12ada3b4-5734-4170-b5a3-090ee9c4f507.png" alt="Équipe médicale professionnelle - Le caractère des soignants" className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105" />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-full animate-pulse"></div>
                </div>
                
                {/* Professional badge */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white text-sm font-semibold rounded-full shadow-xl flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Excellence Professionnelle</span>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-mylli-accent/50 rounded-full animate-bounce-subtle opacity-70"></div>
              <div className="absolute bottom-1/3 -right-6 w-3 h-3 bg-mylli-secondary/50 rounded-full animate-bounce-subtle opacity-70" style={{
              animationDelay: '1s'
            }}></div>
            </div>
            
            {/* Right side - Content */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-full blur-xl"></div>
              
              {/* Enhanced content container */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30 relative overflow-hidden">
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Decorative header */}
                  
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]">
                      LE CARACTÈRE DES SOIGNANTS
                    </span>
                    <br />
                    <span className="text-mylli-dark">
                      EST AUSSI IMPORTANT QUE LES CONNAISSANCES QU'ILS POSSÈDENT
                    </span>
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-mylli-gray leading-relaxed">
                      Chez Mylli Services, nous sommes convaincus que la qualité des soins dépend autant des compétences techniques que des qualités humaines des intervenants.
                    </p>
                    
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      C'est pourquoi nous accordons une importance particulière au recrutement et à la formation continue de notre équipe, en privilégiant l'empathie, le professionnalisme et l'excellence humaine.
                    </p>
                  </div>
                  
                  {/* Enhanced call-to-action elements */}
                  <div className="mt-10 flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-secondary border-2 border-white shadow-lg animate-pulse" style={{
                      animationDelay: `${i * 0.3}s`
                    }}></div>)}
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-transparent via-mylli-primary to-transparent"></div>
                    <span className="text-mylli-dark font-semibold">Notre engagement qualité</span>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mylli-primary/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="white" fillOpacity="0.1"></path>
          </svg>
        </div>
      </section>
      
      {/* Selection Process - Modern design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <SectionHeading title="Notre Processus de Sélection" subtitle="Une approche rigoureuse pour garantir l'excellence de nos intervenants" variant="modern" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-mylli-primary/5 rounded-3xl shadow-lg p-8 border-t-4 border-mylli-primary h-full">
                <h3 className="text-2xl font-bold mb-6 text-mylli-dark flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-3">
                    <span className="text-mylli-primary font-bold">1</span>
                  </div>
                  Recrutement rigoureux
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Vérification des qualifications professionnelles et des diplômes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Contrôle des références et de l'expérience professionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Entretiens approfondis pour évaluer les compétences techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Mises en situation pratiques pour tester les réactions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-mylli-secondary/5 rounded-3xl shadow-lg p-8 border-t-4 border-mylli-secondary h-full">
                <h3 className="text-2xl font-bold mb-6 text-mylli-dark flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-secondary/10 flex items-center justify-center mr-3">
                    <span className="text-mylli-secondary font-bold">2</span>
                  </div>
                  Évaluation des qualités humaines
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Évaluation de l'empathie et des capacités d'écoute</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Analyse de la patience et de la bienveillance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Vérification de l'équilibre émotionnel et capacité à gérer le stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-mylli-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-mylli-gray">Évaluation de la capacité d'adaptation aux différentes situations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Section - Much Larger cards with bigger images */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading title="Formation et Évaluation Continue" subtitle="Un programme complet pour maintenir l'excellence" variant="gradient" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formation technique card - Much larger */}
              <div className="group relative">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/5 via-mylli-secondary/5 to-mylli-accent/5"></div>
                  
                  {/* Top decorative bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent"></div>
                  
                  {/* Much Larger Image container - Increased height significantly */}
                  <div className="relative h-80 overflow-hidden">
                    <img src="/lovable-uploads/496bdd38-75d8-468b-8ab2-12ad476aac02.png" alt="Formation technique - Équipe médicale en formation" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Status indicator - bottom left */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-md flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                      Formation Active
                    </div>
                  </div>
                  
                  {/* Content section - Enhanced spacing */}
                  <div className="relative p-10">
                    <h3 className="text-3xl font-bold text-mylli-dark group-hover:text-mylli-primary transition-colors duration-300 mb-8">
                      Formation technique
                    </h3>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Formations spécifiques aux pathologies courantes</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Mise à jour des connaissances médicales</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Formation aux gestes d'urgence et premiers secours</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-mylli-primary/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Formation relationnelle card - Much larger */}
              <div className="group relative">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mylli-secondary/5 via-mylli-accent/5 to-mylli-quaternary/5"></div>
                  
                  {/* Top decorative bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mylli-secondary via-mylli-accent to-mylli-quaternary"></div>
                  
                  {/* Much Larger Image container - Increase height significantly */}
                  <div className="relative h-80 overflow-hidden">
                    <img src="/lovable-uploads/b88e9383-9448-4c3e-a0c4-e2e489b62f90.png" alt="Formation relationnelle - Équipe médicale professionnelle" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Status indicator - bottom left */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                      Formation Excellence
                    </div>
                  </div>
                  
                  {/* Content section - Enhanced spacing */}
                  <div className="relative p-10">
                    <h3 className="text-3xl font-bold text-mylli-dark group-hover:text-mylli-secondary transition-colors duration-300 mb-8">
                      Formation relationnelle
                    </h3>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Développement des compétences en communication</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Gestion des situations difficiles ou conflictuelles</span>
                      </li>
                      <li className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm border border-gray-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                        <CheckCircle size={20} className="text-mylli-secondary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-mylli-gray font-medium">Accompagnement de la fin de vie et soutien aux familles</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-mylli-secondary/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Évaluation et suivi section - Enhanced styling */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white shadow-xl border border-mylli-primary/10 transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-3xl font-bold mb-8 text-mylli-dark text-center bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
                Évaluation et suivi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 text-mylli-dark flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mylli-primary/10 to-mylli-primary/20 flex items-center justify-center mr-3">
                      <span className="text-mylli-primary font-bold">A</span>
                    </div>
                    Évaluation régulière
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Contrôles de qualité mensuels</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Visites surprises sur le terrain</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Évaluation des compétences techniques</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 text-mylli-dark flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mylli-secondary/10 to-mylli-secondary/20 flex items-center justify-center mr-3">
                      <span className="text-mylli-secondary font-bold">B</span>
                    </div>
                    Retours clients
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Enquêtes de satisfaction régulières</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Entretiens avec les patients et les familles</span>
                    </li>
                    <li className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                      <CheckCircle size={18} className="text-mylli-secondary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-mylli-gray">Système de recueil des suggestions d'amélioration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section - Completely redesigned with modern creative styling */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-mylli-accent/20 to-mylli-quaternary/20 rounded-full blur-lg animate-pulse-soft"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-xl animate-pulse-soft" style={{
          animationDelay: '1s'
        }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
          backgroundSize: '60px 60px'
        }}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Enhanced Section Heading */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/30 mb-6 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-semibold text-mylli-dark tracking-wider uppercase">Nos Principes</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-mylli-dark via-mylli-primary to-mylli-secondary bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]">
                Nos Valeurs
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
            </h2>
            
            <p className="text-xl text-mylli-gray max-w-3xl mx-auto leading-relaxed">
              Des principes fondamentaux qui définissent notre identité et guident chacune de nos actions au quotidien
            </p>
          </div>
          
          {/* Creative Values Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => <div key={index} className="group relative" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  {/* Main Card with glass morphism */}
                  <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-3xl overflow-hidden">
                    
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container with creative styling */}
                      <div className="flex items-start mb-6">
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} p-4 shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                          <div className="text-white transform transition-transform duration-500 group-hover:scale-110">
                            {value.icon}
                          </div>
                          
                          {/* Glowing effect behind icon */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="flex-1 pl-6">
                          <div className="flex items-center mb-2">
                            <h3 className="text-2xl font-bold text-mylli-dark group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-mylli-primary group-hover:to-mylli-secondary group-hover:bg-clip-text transition-all duration-500">
                              {value.title}
                            </h3>
                            <div className="ml-3 w-2 h-2 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                          </div>
                          
                          {/* Animated underline */}
                          <div className="w-0 h-0.5 bg-gradient-to-r from-mylli-primary to-mylli-secondary group-hover:w-16 transition-all duration-500 mb-4 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Description with enhanced typography */}
                      <p className="text-mylli-gray leading-relaxed text-lg transform transition-all duration-500 group-hover:text-mylli-dark">
                        {value.description}
                      </p>
                      
                      {/* Interactive bottom accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mylli-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-mylli-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce-subtle"></div>
                    <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-mylli-secondary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce-subtle" style={{
                  animationDelay: '0.5s'
                }}></div>
                  </div>
                  
                  {/* Enhanced shadow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 scale-95`}></div>
                </div>)}
            </div>
            
            {/* Bottom decorative section */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className={`w-4 h-4 rounded-full bg-gradient-to-br ${values[i - 1]?.color} animate-pulse`} style={{
                    animationDelay: `${i * 0.2}s`
                  }}></div>)}
                  </div>
                  <div className="h-6 w-px bg-gradient-to-b from-transparent via-mylli-primary to-transparent"></div>
                  <p className="text-mylli-dark font-semibold text-lg">
                    Des valeurs qui font la différence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="white" fillOpacity="0.1"></path>
          </svg>
        </div>
      </section>
    </div>;
};
export default EquipePage;