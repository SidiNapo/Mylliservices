
import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  backgroundImage?: string;
  backgroundGradient?: string;
  speed?: number;
  height?: string;
  className?: string;
  children: ReactNode;
  overlayOpacity?: number;
  overlayColor?: string;
  overlayGradient?: string;
  glassEffect?: boolean;
  pattern?: 'dots' | 'lines' | 'grid' | 'noise' | 'none';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  backgroundGradient,
  speed = 0.3,
  height = '50vh',
  className = '',
  children,
  overlayOpacity = 0.5,
  overlayColor = 'black',
  overlayGradient,
  glassEffect = false,
  pattern = 'none'
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
  
  const getOverlayStyle = () => {
    if (overlayGradient) {
      return { background: overlayGradient, opacity: 1 };
    }
    return { backgroundColor: overlayColor, opacity: overlayOpacity };
  };
  
  const getPatternStyle = () => {
    switch (pattern) {
      case 'dots':
        return {
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        };
      case 'lines':
        return {
          backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        };
      case 'grid':
        return {
          backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        };
      case 'noise':
        return {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          opacity: 0.05
        };
      default:
        return {};
    }
  };
  
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
      {/* Main overlay */}
      <div 
        className="absolute inset-0"
        style={getOverlayStyle()}
      ></div>
      
      {/* Pattern overlay */}
      {pattern !== 'none' && (
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={getPatternStyle()}
        ></div>
      )}
      
      {/* Glass effect overlay - only applies when glassEffect is true */}
      {glassEffect && (
        <div className="absolute inset-0 backdrop-blur-sm bg-white/5 pointer-events-none"></div>
      )}
      
      {/* Content container */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
