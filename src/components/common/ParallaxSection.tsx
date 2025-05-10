
import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  backgroundImage?: string;
  backgroundGradient?: string;
  speed?: number;
  height?: string;
  className?: string;
  children: ReactNode;
  overlayOpacity?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  backgroundGradient,
  speed = 0.3,
  height = '50vh',
  className = '',
  children,
  overlayOpacity = 0.5
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.pageYOffset;
      const sectionPosition = sectionRef.current.offsetTop;
      const distance = scrollPosition - sectionPosition;
      
      // Only apply parallax effect when section is in view
      if (
        sectionPosition - window.innerHeight <= scrollPosition && 
        scrollPosition <= sectionPosition + sectionRef.current.offsetHeight
      ) {
        const yValue = distance * speed;
        sectionRef.current.style.backgroundPositionY = `${yValue}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  const backgroundStyle: React.CSSProperties = {
    height,
    backgroundImage: backgroundImage 
      ? `url(${backgroundImage})` 
      : backgroundGradient 
        ? backgroundGradient 
        : 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative'
  };
  
  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
