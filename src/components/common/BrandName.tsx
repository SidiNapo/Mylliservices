
import React from 'react';

interface BrandNameProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BrandName: React.FC<BrandNameProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <span className={`brand-name ${sizeClasses[size]} ${className}`}>
      <span className="mylli">Mylli</span> <span className="services">Services</span>
    </span>
  );
};

export default BrandName;
