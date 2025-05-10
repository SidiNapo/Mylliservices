
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MapInfoCardProps {
  address: string;
  phone: string;
  email?: string;
  hours?: {
    day: string;
    hours: string;
  }[];
  className?: string;
  variant?: 'light' | 'dark' | 'glass';
}

const MapInfoCard = ({ 
  address, 
  phone, 
  email,
  hours, 
  className = '',
  variant = 'light'
}: MapInfoCardProps) => {
  // Determine card style based on variant
  const cardBaseStyles = {
    'light': 'bg-white shadow-xl',
    'dark': 'bg-mylli-dark text-white',
    'glass': 'backdrop-blur-md bg-white/90 shadow-2xl'
  };
  
  const iconContainerStyles = {
    'light': [
      'bg-gradient-to-br from-mylli-primary to-mylli-secondary',
      'bg-gradient-to-br from-mylli-secondary to-mylli-accent',
      'bg-gradient-to-br from-mylli-accent to-mylli-dark'
    ],
    'dark': [
      'bg-white/20',
      'bg-white/20',
      'bg-white/20'
    ],
    'glass': [
      'bg-mylli-primary/20 backdrop-blur-md',
      'bg-mylli-secondary/20 backdrop-blur-md',
      'bg-mylli-accent/20 backdrop-blur-md'
    ]
  };
  
  const titleStyles = {
    'light': 'text-mylli-dark',
    'dark': 'text-white',
    'glass': 'text-mylli-dark'
  };
  
  const textStyles = {
    'light': 'text-mylli-gray',
    'dark': 'text-white/80',
    'glass': 'text-mylli-gray'
  };
  
  const buttonStyles = {
    'light': 'bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white',
    'dark': 'bg-white text-mylli-dark',
    'glass': 'bg-mylli-primary/80 backdrop-blur-sm text-white'
  };
  
  const hoursContainerStyles = {
    'light': 'border-gray-100',
    'dark': 'border-white/10',
    'glass': 'border-gray-200/50'
  };
  
  return (
    <Card className={`rounded-3xl overflow-hidden ${cardBaseStyles[variant]} ${className}`}>
      <CardContent className="p-8">
        {/* Address Section */}
        <div className="mb-8">
          <div className="flex items-start mb-4">
            <div className={`w-12 h-12 rounded-full ${iconContainerStyles[variant][0]} flex items-center justify-center mr-4 shrink-0`}>
              <MapPin className="text-white h-6 w-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-1 ${titleStyles[variant]}`}>Notre adresse</h3>
              <p className={`${textStyles[variant]} text-lg`}>
                {address}
              </p>
            </div>
          </div>
        </div>
        
        {/* Phone Section */}
        <div className="mb-8">
          <div className="flex items-start mb-4">
            <div className={`w-12 h-12 rounded-full ${iconContainerStyles[variant][1]} flex items-center justify-center mr-4 shrink-0`}>
              <Phone className="text-white h-6 w-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-1 ${titleStyles[variant]}`}>Téléphone</h3>
              <a href={`tel:${phone}`} className={`text-mylli-primary font-medium text-lg hover:underline`}>
                {phone}
              </a>
            </div>
          </div>
        </div>
        
        {/* Email Section - Optional */}
        {email && (
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-accent flex items-center justify-center mr-4 shrink-0`}>
                <Mail className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-1 ${titleStyles[variant]}`}>Email</h3>
                <a href={`mailto:${email}`} className={`text-mylli-primary font-medium text-lg hover:underline`}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Hours Section - Optional */}
        {hours && (
          <div className="mb-8">
            <div className="flex items-start mb-5">
              <div className={`w-12 h-12 rounded-full ${iconContainerStyles[variant][2]} flex items-center justify-center mr-4 shrink-0`}>
                <Clock className="text-white h-6 w-6" />
              </div>
              <div className="w-full">
                <h3 className={`text-2xl font-bold mb-3 ${titleStyles[variant]}`}>Heures d'ouverture</h3>
                <div className={`space-y-3 border-l-2 ${variant === 'dark' ? 'border-white/20' : 'border-mylli-primary/20'} pl-4`}>
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={textStyles[variant]}>{item.day}</span>
                      <span className="text-mylli-primary font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Directions Button */}
        <div className="pt-4 border-t border-gray-100">
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-3 rounded-lg ${buttonStyles[variant]} font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] w-full`}
          >
            Itinéraire Google Maps
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapInfoCard;
