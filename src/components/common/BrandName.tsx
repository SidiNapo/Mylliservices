
import React from 'react';

interface BrandNameProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const BrandName: React.FC<BrandNameProps> = ({ className = "", size = "md" }) => {
  // Size classes
  const sizeClasses = {
    xs: "text-sm",
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  };
  
  return (
    <span className={`font-gliker font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-mylli-brand-red">M</span>
      <span className="text-mylli-y-color">y</span>
      <span className="text-mylli-brand-red">lli Services</span>
    </span>
  );
};

export default BrandName;
