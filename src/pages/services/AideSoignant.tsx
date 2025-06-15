
import { Link } from 'react-router-dom';
import { Heart, User, Clock, Shield, CheckCircle, Star, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import OptimizedImage from '@/components/seo/OptimizedImage';

const AideSoignantPage = () => {
  // Roles of caregiver with specific healthcare icons
  const roles = [{
    title: "Assister à l'hygiène corporelle",
    iconImage: "/lovable-uploads/d2780d4e-04e6-4ff9-8a1f-a54048bb2eb8.png"
  }, {
    title: "Aider à la prise de médicaments",
    iconImage: "/lovable-uploads/bde9c2cf-6a1e-4994-bb87-13e3a1bc9321.png"
  }, {
    title: "Aider à l'alimentation",
    iconImage: "/lovable-uploads/0ac5ce88-2b3f-4931-9488-210bc9425794.png"
  }, {
    title: "Mesurer électroniquement les constantes",
    iconImage: "/lovable-uploads/5364c2b1-9466-4ff2-b1bf-f6288e735add.png"
  }, {
    title: "Accompagner et sécuriser le patient",
    iconImage: "/lovable-uploads/da550c48-1c62-4eb0-b6cc-df8d0db5cdd8.png"
  }];

  return (
    <div>
      <PageBanner 
        title="AIDE-SOIGNANT(E) À DOMICILE" 
        subtitle="Préservation de l'autonomie et accompagnement quotidien" 
      />
      
      {/* Revolutionary Redesigned Introduction Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-mylli-light/30">
        {/* Dynamic Background Architecture */}
        <div className="absolute inset-0">
          {/* Primary mesh gradient */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
          
          {/* Floating geometric shapes with improved positioning */}
          <div className="absolute top-16 left-8 w-96 h-96 bg-gradient-to-br from-mylli-primary/15 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-16 right-8 w-80 h-80 bg-gradient-to-tl from-mylli-secondary/12 to-transparent rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-mylli-accent/8 to-transparent rounded-full blur-2xl animate-float delay-500"></div>
          
          {/* Modern geometric decorations */}
          <div className="absolute top-20 right-16 w-24 h-24 border-2 border-mylli-primary/20 rounded-3xl transform rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 left-16 w-16 h-16 bg-mylli-secondary/10 rounded-2xl transform -rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-8 w-8 h-8 bg-mylli-accent/20 rounded-full animate-bounce-subtle"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-8xl mx-auto">
            {/* Revolutionary Main Container */}
            <div className="relative">
              {/* Multi-layered background system */}
              <div className="absolute -inset-16 bg-gradient-to-r from-white/80 via-white/95 to-white/80 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-mylli-primary/10 transform rotate-0.5"></div>
              <div className="absolute -inset-12 bg-gradient-to-br from-mylli-primary/5 via-transparent to-mylli-secondary/5 rounded-[3.5rem] blur-2xl"></div>
              <div className="absolute -inset-8 bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-xl"></div>
              
              {/* Main revolutionary content container */}
              <div className="relative bg-gradient-to-br from-white/95 via-white to-white/90 backdrop-blur-lg rounded-[3rem] shadow-2xl border border-white/70 p-20">
                
                {/* Redesigned Header with Revolutionary Styling */}
                <div className="text-center mb-20">
                  {/* Revolutionary Icon Design */}
                  <div className="flex justify-center mb-12">
                    <div className="relative group">
                      {/* Multi-layer glow effects */}
                      <div className="absolute -inset-8 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
                      <div className="absolute -inset-6 bg-gradient-to-br from-mylli-primary/30 to-mylli-secondary/30 rounded-full blur-xl opacity-50 animate-radial-pulse"></div>
                      <div className="absolute -inset-4 bg-gradient-to-tl from-mylli-accent/40 to-mylli-primary/40 rounded-full blur-lg"></div>
                      
                      {/* Main icon container with revolutionary design */}
                      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-mylli-primary via-mylli-secondary to-mylli-accent flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border-4 border-white/50">
                        <User size={64} className="text-white transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                      </div>
                      
                      {/* Revolutionary floating elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-mylli-accent to-mylli-quaternary rounded-full flex items-center justify-center shadow-xl animate-bounce border-2 border-white/60">
                        <Heart size={20} className="text-white" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-mylli-secondary to-mylli-primary rounded-full flex items-center justify-center shadow-lg animate-pulse border border-white/50">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div className="absolute top-2 -left-6 w-6 h-6 bg-mylli-tertiary rounded-full animate-float shadow-md"></div>
                      <div className="absolute -top-2 right-2 w-4 h-4 bg-mylli-quaternary rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                  
                  {/* Revolutionary Typography Design */}
                  <div className="space-y-8">
                    <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent bg-clip-text text-transparent animate-text-gradient bg-[length:200%]">
                          Un accompagnement
                        </span>
                        {/* Decorative line under first part */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full"></div>
                      </span>
                      <br />
                      <span className="relative inline-block mt-4">
                        <span className="text-mylli-dark relative">
                          quotidien
                        </span>
                        {/* Floating accent */}
                        <div className="absolute -top-2 -right-8 w-4 h-4 bg-mylli-accent rounded-full animate-pulse"></div>
                      </span>
                      <br />
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-mylli-secondary via-mylli-accent to-mylli-primary bg-clip-text text-transparent font-extrabold">
                          personnalisé
                        </span>
                        {/* Enhanced decorative underline */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-mylli-accent via-mylli-quaternary to-mylli-secondary rounded-full opacity-80 blur-sm"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-mylli-accent to-mylli-quaternary rounded-full"></div>
                      </span>
                    </h2>
                  </div>
                </div>
                
                {/* Revolutionary Content Grid with Creative Card System */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                  
                  {/* Left Column - Revolutionary Card Designs */}
                  <div className="space-y-10">
                    {/* First Revolutionary Card */}
                    <div className="group relative">
                      {/* Multi-layer background system */}
                      <div className="absolute -inset-6 bg-gradient-to-br from-mylli-primary/15 to-mylli-secondary/10 rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-all duration-700 blur-sm"></div>
                      <div className="absolute -inset-4 bg-gradient-to-tl from-white/80 to-white/60 backdrop-blur-sm rounded-[1.8rem] shadow-lg"></div>
                      
                      <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg rounded-[1.8rem] p-10 shadow-xl border border-mylli-primary/20 transform group-hover:-translate-y-3 group-hover:shadow-2xl transition-all duration-700">
                        
                        {/* Decorative elements */}
                        <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-2xl transform rotate-12 blur-sm"></div>
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 rounded-2xl transform rotate-12"></div>
                        
                        {/* Content with enhanced styling */}
                        <div className="relative z-10">
                          <div className="flex items-start space-x-4 mb-6">
                            <div className="w-3 h-3 bg-mylli-primary rounded-full animate-pulse mt-2"></div>
                            <div className="w-2 h-2 bg-mylli-secondary rounded-full animate-pulse delay-300 mt-3"></div>
                          </div>
                          
                          <p className="text-lg text-mylli-gray leading-relaxed font-medium">
                            Tout en stimulant et préservant l'autonomie du malade, l'aide-soignant accomplit différents actes de la vie quotidienne : aide au lever et au coucher, aide au transfert du malade, aide à la toilette et à l'habillage, administration des repas, changement de la literie…
                          </p>
                          
                          {/* Bottom accent line */}
                          <div className="mt-6 h-1 w-full bg-gradient-to-r from-mylli-primary/30 via-mylli-secondary/30 to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Second Revolutionary Card */}
                    <div className="group relative">
                      <div className="absolute -inset-6 bg-gradient-to-tl from-mylli-accent/15 to-mylli-quaternary/10 rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-all duration-700 blur-sm"></div>
                      <div className="absolute -inset-4 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-[1.8rem] shadow-lg"></div>
                      
                      <div className="relative bg-gradient-to-tl from-white/95 to-white/85 backdrop-blur-lg rounded-[1.8rem] p-10 shadow-xl border border-mylli-accent/20 transform group-hover:-translate-y-3 group-hover:shadow-2xl transition-all duration-700">
                        
                        {/* Creative side decoration */}
                        <div className="absolute left-6 top-6 w-3 h-32 bg-gradient-to-b from-mylli-accent to-mylli-quaternary rounded-full"></div>
                        <div className="absolute left-4 top-4 w-1 h-24 bg-gradient-to-b from-mylli-accent/50 to-mylli-quaternary/50 rounded-full blur-sm"></div>
                        
                        <div className="relative z-10 pl-8">
                          <div className="flex items-center space-x-2 mb-6">
                            <div className="w-2 h-2 bg-mylli-accent rounded-full animate-bounce"></div>
                            <div className="w-3 h-3 bg-mylli-quaternary rounded-full animate-bounce delay-200"></div>
                            <div className="w-2 h-2 bg-mylli-accent rounded-full animate-bounce delay-400"></div>
                          </div>
                          
                          <p className="text-lg text-mylli-gray leading-relaxed font-medium">
                            Il accompagne cette personne dans les activités de sa vie quotidienne, il contribue à son bien-être et à lui faire recouvrer, dans la mesure du possible, son autonomie.
                          </p>
                          
                          {/* Decorative bottom element */}
                          <div className="mt-6 flex space-x-2">
                            <div className="w-8 h-1 bg-mylli-accent/40 rounded-full"></div>
                            <div className="w-6 h-1 bg-mylli-quaternary/40 rounded-full"></div>
                            <div className="w-4 h-1 bg-mylli-accent/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Enhanced Revolutionary Cards */}
                  <div className="space-y-10">
                    {/* Third Revolutionary Card */}
                    <div className="group relative">
                      <div className="absolute -inset-6 bg-gradient-to-bl from-mylli-secondary/15 to-mylli-primary/10 rounded-[2rem] transform rotate-1 group-hover:-rotate-1 transition-all duration-700 blur-sm"></div>
                      <div className="absolute -inset-4 bg-gradient-to-tr from-white/80 to-white/60 backdrop-blur-sm rounded-[1.8rem] shadow-lg"></div>
                      
                      <div className="relative bg-gradient-to-bl from-white/95 to-white/85 backdrop-blur-lg rounded-[1.8rem] p-10 shadow-xl border border-mylli-secondary/20 transform group-hover:-translate-y-3 group-hover:shadow-2xl transition-all duration-700">
                        
                        {/* Floating star decoration */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-mylli-secondary to-mylli-primary rounded-full shadow-xl flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-1000">
                          <Star size={24} className="text-white" />
                        </div>
                        
                        <div className="relative z-10">
                          <div className="grid grid-cols-4 gap-1 mb-6 w-fit">
                            <div className="w-2 h-2 bg-mylli-secondary/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-mylli-primary/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-mylli-secondary/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-mylli-primary/30 rounded-full"></div>
                          </div>
                          
                          <p className="text-lg text-mylli-gray leading-relaxed font-medium">
                            L'aide-soignant réalise des soins liés aux fonctions d'entretien et de continuité de la vie visant à compenser partiellement ou totalement un manque ou une diminution de l'autonomie de la personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fourth Revolutionary Card with Special Highlight */}
                    <div className="group relative">
                      <div className="absolute -inset-6 bg-gradient-to-tr from-mylli-quaternary/15 to-mylli-accent/10 rounded-[2rem] transform -rotate-2 group-hover:rotate-1 transition-all duration-700 blur-sm"></div>
                      <div className="absolute -inset-4 bg-gradient-to-bl from-white/80 to-white/60 backdrop-blur-sm rounded-[1.8rem] shadow-lg"></div>
                      
                      <div className="relative bg-gradient-to-tr from-white/95 to-white/85 backdrop-blur-lg rounded-[1.8rem] p-10 shadow-xl border border-mylli-quaternary/20 transform group-hover:-translate-y-3 group-hover:shadow-2xl transition-all duration-700">
                        
                        {/* Decorative corner pattern */}
                        <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-mylli-quaternary/30' : 'bg-mylli-accent/30'}`}></div>
                          ))}
                        </div>
                        
                        <div className="relative z-10 mb-8">
                          <p className="text-lg text-mylli-gray leading-relaxed font-medium mb-8">
                            Son rôle s'inscrit dans une approche globale de la personne soignée et prend en compte la dimension relationnelle des soins.
                          </p>
                          
                          {/* Revolutionary highlighted service info */}
                          <div className="relative">
                            {/* Enhanced background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary/10 via-mylli-secondary/10 to-mylli-accent/10 rounded-3xl blur-sm"></div>
                            <div className="relative bg-gradient-to-r from-mylli-primary/15 via-mylli-secondary/10 to-mylli-accent/15 rounded-3xl p-8 border border-mylli-primary/20 backdrop-blur-sm">
                              
                              {/* Decorative elements */}
                              <div className="absolute top-4 left-4 w-8 h-8 bg-mylli-primary/20 rounded-full animate-pulse"></div>
                              <div className="absolute top-6 right-6 w-6 h-6 bg-mylli-secondary/20 rounded-full animate-pulse delay-500"></div>
                              <div className="absolute bottom-4 right-4 w-4 h-4 bg-mylli-accent/20 rounded-full animate-pulse delay-1000"></div>
                              
                              <p className="text-xl text-mylli-dark font-bold leading-tight relative z-10">
                                Le service d'aide-soignant assure les gardes de{' '}
                                <span className="relative inline-block">
                                  <span className="font-black text-mylli-primary">jour</span>
                                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-mylli-primary/20 rounded-full"></div>
                                </span>
                                , de{' '}
                                <span className="relative inline-block">
                                  <span className="font-black text-mylli-secondary">nuit</span>
                                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-mylli-secondary/20 rounded-full"></div>
                                </span>
                                {' '}ou de{' '}
                                <span className="relative inline-block">
                                  <span className="font-black text-mylli-accent">24h/24h</span>
                                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-mylli-accent/20 rounded-full"></div>
                                </span>
                                .
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Revolutionary Bottom Decorative Elements */}
                <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 animate-float blur-sm"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-tl from-mylli-accent/10 to-mylli-quaternary/10 animate-float delay-1000"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-mylli-secondary/10 to-mylli-primary/10 animate-pulse"></div>
                <div className="absolute top-1/4 -left-6 w-8 h-8 bg-mylli-tertiary/10 rounded-full animate-bounce-subtle"></div>
                <div className="absolute bottom-1/4 -right-6 w-6 h-6 bg-mylli-quaternary/10 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roles - Enhanced larger cards with uniform sizing */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading title="Rôles de l'aide-soignant(e)" subtitle="Un accompagnement complet pour le bien-être quotidien" variant="gradient" />
          
          <div className="max-w-7xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {roles.map((role, index) => <div key={index} className="group relative">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:border-mylli-primary/30 group-hover:scale-105 h-80 flex flex-col">
                    {/* Image container with enhanced styling */}
                    <div className="relative p-8 pb-6 flex-grow flex flex-col items-center justify-center">
                      <div className="relative mb-6">
                        {/* Enhanced decorative background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/10 to-mylli-secondary/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-mylli-accent/5 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 scale-105"></div>
                        
                        {/* Main image container - much larger size */}
                        <div className="relative w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br from-white to-mylli-light/30 flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl border border-mylli-primary/10">
                          <OptimizedImage src={role.iconImage} alt={role.title} width={120} height={120} className="w-32 h-32 object-contain filter group-hover:brightness-110 transition-all duration-500" />
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
                </div>)}
            </div>
          </div>
        </div>
      </section>
      
      {/* Types of Interventions - Modern cards with animation */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading title="Types d'interventions" subtitle="Des formules adaptées à tous les besoins" variant="gradient" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-mylli-primary to-mylli-dark text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  Garde de jour
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Présence attentive pendant la journée pour les soins quotidiens, l'accompagnement aux activités et la surveillance continue.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-secondary to-mylli-primary/90 text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  Garde de nuit
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Surveillance nocturne, aide au coucher et au lever, gestion des réveils nocturnes et des situations d'urgence.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-mylli-accent to-mylli-primary text-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  Garde 24h/24h
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Accompagnement permanent avec relève d'équipes pour une présence continue et des soins ininterrompus.
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Besoin de nos services ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            <Button asChild className="btn-accent">
              <Link to="/contact">
                Contactez-nous
              </Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-white hover:bg-white/10">
              <Link to="/fonctionnement">
                Notre fonctionnement
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AideSoignantPage;
