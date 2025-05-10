
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

interface MapInfoCardProps {
  address: string;
  phone: string;
  hours?: {
    day: string;
    hours: string;
  }[];
  className?: string;
}

const MapInfoCard = ({ address, phone, hours, className = '' }: MapInfoCardProps) => {
  return (
    <div className={`bg-white rounded-3xl shadow-xl p-8 backdrop-blur-md bg-opacity-95 ${className}`}>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-secondary flex items-center justify-center mr-4">
            <MapPin className="text-white h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-mylli-dark">Notre adresse</h3>
        </div>
        <p className="text-mylli-gray text-lg pl-16">
          {address}
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mylli-secondary to-mylli-accent flex items-center justify-center mr-4">
            <Phone className="text-white h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-mylli-dark">Téléphone</h3>
        </div>
        <a href={`tel:${phone}`} className="text-mylli-primary font-medium text-lg pl-16 hover:underline">
          {phone}
        </a>
      </div>
      
      {hours && (
        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mylli-accent to-mylli-dark flex items-center justify-center mr-4">
              <Clock className="text-white h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-mylli-dark">Heures d'ouverture</h3>
          </div>
          <div className="space-y-2 pl-16">
            {hours.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-mylli-gray">{item.day}</span>
                <span className="text-mylli-primary font-medium">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <a 
          href="https://maps.google.com/?q=19,+rue+Masmouda+hay+Al+Hana+Casablanca+20210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] w-full"
        >
          Itinéraire Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapInfoCard;
