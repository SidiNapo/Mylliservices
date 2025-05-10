
import React from 'react';

interface GoogleMapEmbedProps {
  address: string;
  className?: string;
}

const GoogleMapEmbed = ({ address, className = '' }: GoogleMapEmbedProps) => {
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=16`;
  
  return (
    <div className={`w-full h-full overflow-hidden rounded-3xl shadow-2xl ${className}`}>
      <iframe
        title="Google Maps Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
