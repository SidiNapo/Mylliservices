
import React from 'react';
import FastIcon from './FastIcon';

interface ServiceIconProps {
  type: 'aide-soignant' | 'infirmier' | 'garde-malade' | 'medical' | 'domicile' | 'urgence';
  size?: number;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ 
  type, 
  size = 48, 
  className = '' 
}) => {
  const getIconConfig = () => {
    switch (type) {
      case 'aide-soignant':
        return { name: 'heart', color: '#0077C0' };
      case 'infirmier':
        return { name: 'stethoscope', color: '#0077C0' };
      case 'garde-malade':
        return { name: 'shield', color: '#0077C0' };
      case 'medical':
        return { name: 'activity', color: '#0077C0' };
      case 'domicile':
        return { name: 'home', color: '#0077C0' };
      case 'urgence':
        return { name: 'zap', color: '#DC2626' };
      default:
        return { name: 'heart', color: '#0077C0' };
    }
  };

  const { name, color } = getIconConfig();

  return (
    <div className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 p-3 shadow-sm ${className}`}>
      <FastIcon 
        name={name} 
        size={size} 
        color={color}
        className="drop-shadow-sm"
      />
    </div>
  );
};

export default ServiceIcon;
