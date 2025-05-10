
import React, { useState } from 'react';
import { MapPin, Heart, Phone } from 'lucide-react';
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
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

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
          {/* Map-like visual background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-mylli-primary/5 animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-mylli-secondary/5 animate-pulse-soft"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map visualization */}
            <div className="md:col-span-1 flex flex-col space-y-4 order-2 md:order-1">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl transition-all duration-300 cursor-pointer relative group overflow-hidden ${
                    activeLocation === index 
                      ? 'bg-gradient-to-r from-mylli-primary/10 to-mylli-quaternary/10 shadow-md' 
                      : 'bg-white/80 hover:bg-white shadow-soft'
                  }`}
                  onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                >
                  {/* Highlight indicator */}
                  {location.highlight && (
                    <div className="absolute top-0 right-0 bg-mylli-secondary text-white text-xs py-1 px-2 rounded-bl-lg">
                      Principal
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeLocation === index 
                        ? 'bg-gradient-to-br from-mylli-primary to-mylli-quaternary text-white' 
                        : 'bg-mylli-light text-mylli-primary'
                    }`}>
                      <MapPin size={18} />
                    </div>
                    <div className="ml-3">
                      <h3 className={`font-bold transition-colors ${
                        activeLocation === index ? 'text-mylli-primary' : 'text-mylli-dark'
                      }`}>
                        {location.city}
                      </h3>
                      <p className="text-sm text-mylli-gray">
                        {location.areas.length} {location.areas.length > 1 ? 'quartiers' : 'quartier'} couvert{location.areas.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expanded details */}
                  <div className={`mt-3 pt-3 border-t border-gray-100 transition-all duration-300 ${
                    activeLocation === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <ul className="space-y-2">
                      {location.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center text-sm text-mylli-gray">
                          <span className="w-1.5 h-1.5 rounded-full bg-mylli-primary mr-2"></span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Information card */}
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-mylli-dark mb-4">Service à domicile <span className="text-mylli-secondary">professionnel</span></h3>
                  
                  <div className="flex-1">
                    <p className="text-mylli-gray mb-6">
                      Notre équipe de professionnels qualifiés intervient à votre domicile dans toute la région de Casablanca pour vous apporter des soins de qualité et un accompagnement personnalisé.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-start p-4 bg-mylli-light rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-mylli-primary shadow-sm">
                          <MapPin size={18} />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-mylli-dark">Couverture étendue</h4>
                          <p className="text-sm text-mylli-gray">Casablanca et périphérie</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 bg-mylli-light rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-mylli-secondary shadow-sm">
                          <Heart size={18} />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-mylli-dark">Service de proximité</h4>
                          <p className="text-sm text-mylli-gray">Accompagnement personnalisé</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                    <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white rounded-full">
                      <Link to="/contact" className="flex items-center justify-center">
                        <Phone size={16} className="mr-2" />
                        Nous contacter
                      </Link>
                    </Button>
                    <p className="text-sm text-mylli-gray">Vous avez des questions sur notre zone d'intervention ? N'hésitez pas à nous contacter.</p>
                  </div>
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
