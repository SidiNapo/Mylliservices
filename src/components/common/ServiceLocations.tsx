
import React from 'react';
import { MapPin, Heart, Phone, Building, Landmark, Clock, Users, Shield } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import SectionHeading from './SectionHeading';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface Location {
  city: string;
  areas: string[];
  highlight?: boolean;
}

interface ServiceLocationsProps {
  title?: string;
  subtitle?: string;
  locations: Location[];
  className?: string;
}

const ServiceLocations: React.FC<ServiceLocationsProps> = ({
  title = "Nos Zones d'Intervention",
  subtitle = "Nous proposons nos services d'aide et de soins à domicile dans toute la région de Casablanca et ses environs.",
  locations,
  className = ''
}) => {
  return (
    <ParallaxSection 
      backgroundGradient="linear-gradient(135deg, #f5f9ff 0%, #e1f0fc 100%)"
      height="auto"
      pattern="dots"
      mapLayout={true}
      glassEffect={true}
      className={`py-16 ${className}`}
      overlayOpacity={0.02}
      overlayColor="#ffffff"
    >
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={title}
          subtitle={subtitle}
          variant="gradient"
          highlightColor="mylli-primary"
        />
        
        <div className="relative mt-12 max-w-6xl mx-auto">
          {/* Enhanced Map-like visual background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-mylli-primary/5 animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-mylli-secondary/5 animate-pulse-soft"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full border border-mylli-quaternary/10 animate-spin-slow" style={{animationDuration: '60s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-mylli-secondary/5 animate-float"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Map visualization with location cards */}
            <div className="lg:col-span-1 order-2 lg:order-1 space-y-4">
              <h3 className="text-xl font-bold text-mylli-primary mb-4 flex items-center">
                <Building className="mr-2" size={20} /> Nos villes d'intervention
              </h3>
              
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-white/80 border-gray-100 shadow-soft border transition-all duration-300 hover:shadow-md hover:border-mylli-primary/20 hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-mylli-light text-mylli-primary flex items-center justify-center">
                      <Landmark size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-mylli-dark">
                        {location.city}
                      </h3>
                      <p className="text-sm text-mylli-gray">
                        Service disponible
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right: Enhanced information card with visual elements */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-mylli-primary/5 relative overflow-hidden">
                {/* Background decoration elements */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-mylli-light/30 blur-xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-mylli-secondary/5 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col h-full">
                    <div className="inline-block mb-6">
                      <div className="bg-mylli-light px-4 py-2 rounded-full text-mylli-primary text-sm font-medium flex items-center">
                        <MapPin size={16} className="mr-2" /> Service de proximité
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-mylli-dark mb-4">
                      Aide et soins à domicile <span className="text-mylli-secondary">près de chez vous</span>
                    </h3>
                    
                    <div className="flex-1">
                      <p className="text-mylli-gray mb-8 text-lg">
                        Notre équipe de professionnels qualifiés intervient dans toute la région de Casablanca et certaines villes avoisinantes pour vous apporter des soins de qualité et un accompagnement personnalisé, au plus près de votre domicile.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-gradient-to-br from-mylli-light to-white p-6 rounded-xl border border-mylli-primary/10 hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-mylli-primary shadow-sm mb-4 border border-mylli-primary/10">
                            <MapPin size={22} />
                          </div>
                          <h4 className="font-medium text-lg text-mylli-dark mb-1">Couverture étendue</h4>
                          <p className="text-mylli-gray">Nos services sont disponibles dans toute la région de Casablanca et villes environnantes.</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-mylli-light to-white p-6 rounded-xl border border-mylli-primary/10 hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-mylli-secondary shadow-sm mb-4 border border-mylli-secondary/10">
                            <Heart size={22} />
                          </div>
                          <h4 className="font-medium text-lg text-mylli-dark mb-1">Soins personnalisés</h4>
                          <p className="text-mylli-gray">Des soins adaptés à vos besoins spécifiques, dans le confort de votre domicile.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-5 bg-mylli-primary/5 p-4 rounded-xl">
                      <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-mylli-primary to-mylli-quaternary hover:from-mylli-primary/90 hover:to-mylli-quaternary/90 text-white rounded-full shadow-md">
                        <Link to="/contact" className="flex items-center justify-center px-6 py-5">
                          <Phone size={18} className="mr-2" />
                          Discuter de votre zone
                        </Link>
                      </Button>
                      <p className="text-sm text-mylli-gray">Vous n'êtes pas sûr si nous desservons votre quartier ? Contactez-nous pour vérifier votre éligibilité.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* New: Key benefits of our local service */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/80 p-4 rounded-xl border border-mylli-primary/5 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-light flex items-center justify-center mb-3">
                    <Clock size={18} className="text-mylli-primary" />
                  </div>
                  <h4 className="font-medium text-sm text-mylli-dark">Intervention rapide</h4>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border border-mylli-primary/5 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-light flex items-center justify-center mb-3">
                    <Users size={18} className="text-mylli-primary" />
                  </div>
                  <h4 className="font-medium text-sm text-mylli-dark">Équipe locale</h4>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border border-mylli-primary/5 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-mylli-light flex items-center justify-center mb-3">
                    <Shield size={18} className="text-mylli-primary" />
                  </div>
                  <h4 className="font-medium text-sm text-mylli-dark">Service garanti</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ServiceLocations;
