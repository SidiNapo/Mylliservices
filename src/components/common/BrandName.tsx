
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface BrandNameProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const BrandName: React.FC<BrandNameProps> = ({ size = 'md', className = '' }) => {
  const { t } = useLanguage();
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  // Get the brand name from translations
  const brandName = t('brand.name');
  
  return (
    <span className={`brand-name ${sizeClasses[size]} ${className}`}>
      <span className="mylli">Myll</span>
      <span className="y-letter">y</span>
      <span className="services"> Services</span>
    </span>
  );
};

export default BrandName;
