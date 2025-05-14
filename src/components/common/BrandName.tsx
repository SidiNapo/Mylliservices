
import React from 'react';

interface BrandNameProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A component that renders the brand name "Mylli Services" with custom styling
 * The "y" in "Mylli" is colored #029edd, while the rest is colored #ff0707
 */
const BrandName: React.FC<BrandNameProps> = ({ 
  className = "", 
  size = "md" 
}) => {
  // Font size based on the size prop
  const fontSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }[size];
  
  return (
    <span className={`font-bold ${fontSize} ${className}`} style={{ fontFamily: "'Gliker', sans-serif" }}>
      <span style={{ color: '#ff0707' }}>M</span>
      <span style={{ color: '#ff0707' }}>y</span>
      <span style={{ color: '#029edd' }}>l</span>
      <span style={{ color: '#ff0707' }}>l</span>
      <span style={{ color: '#ff0707' }}>i</span>
      <span style={{ color: '#ff0707' }}> S</span>
      <span style={{ color: '#ff0707' }}>e</span>
      <span style={{ color: '#ff0707' }}>r</span>
      <span style={{ color: '#ff0707' }}>v</span>
      <span style={{ color: '#ff0707' }}>i</span>
      <span style={{ color: '#ff0707' }}>c</span>
      <span style={{ color: '#ff0707' }}>e</span>
      <span style={{ color: '#ff0707' }}>s</span>
    </span>
  );
};

export default BrandName;
