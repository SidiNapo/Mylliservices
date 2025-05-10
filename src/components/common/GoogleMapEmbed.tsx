
import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

interface GoogleMapEmbedProps {
  address: string;
  className?: string;
  interactive?: boolean;
  zoom?: number;
}

const GoogleMapEmbed = ({ 
  address, 
  className = '', 
  interactive = true,
  zoom = 16 
}: GoogleMapEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=${zoom}`;
  
  // Handle map loading states
  const handleMapLoad = () => {
    setIsLoading(false);
  };
  
  const handleMapError = () => {
    setIsLoading(false);
    setMapError("Impossible de charger la carte. Veuillez réessayer plus tard.");
  };
  
  // Custom styling for map container
  const containerClasses = `
    relative w-full h-full overflow-hidden rounded-3xl shadow-lg 
    transition-all duration-500 hover:shadow-2xl
    ${interactive ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div className={containerClasses}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin">
              <Loader size={32} className="text-mylli-primary" />
            </div>
            <p className="text-mylli-gray text-sm font-medium">Chargement de la carte...</p>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {mapError && (
        <div className="absolute inset-0 bg-red-50 flex items-center justify-center z-10 p-6 text-center">
          <p className="text-red-500">{mapError}</p>
        </div>
      )}
      
      {/* Map iframe */}
      <iframe
        title="Google Maps Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        className="w-full h-full z-0"
        onLoad={handleMapLoad}
        onError={handleMapError}
      ></iframe>
      
      {/* Interactive overlay elements - only visible on hover */}
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full px-4 py-2 text-sm font-medium text-mylli-dark shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      )}
      
      {/* Map style overlay - subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-10"
           style={{
             backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '20px 20px',
           }}
      ></div>
    </div>
  );
};

export default GoogleMapEmbed;
