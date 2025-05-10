
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
  pattern?: 'dots' | 'lines' | 'grid' | 'noise' | 'waves' | 'circuit' | 'hexagons' | 'none';
  mapLayout?: boolean;
  interactive?: boolean;
  floatingElements?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundGradient,
  speed = 0.3,
  height = '50vh',
  className = '',
  children,
  overlayOpacity = 0.5,
  overlayColor = 'black',
  overlayGradient,
  glassEffect = false,
  pattern = 'none',
  mapLayout = false,
  interactive = false,
  floatingElements = false
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
        // Apply subtle color shift instead of position change
        const hueShift = Math.abs(distance * speed) % 10;
        sectionRef.current.style.backgroundColor = `hsl(201, 100%, ${35 + (hueShift / 2)}%)`;
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
          opacity: 0.05
        };
      case 'waves':
        return {
          backgroundSize: '100% 50px',
          backgroundRepeat: 'repeat-y'
        };
      case 'circuit':
        return {};
      case 'hexagons':
        return {};
      default:
        return {};
    }
  };
  
  const backgroundStyle: React.CSSProperties = {
    height,
    background: backgroundGradient || 'linear-gradient(135deg, #0077C0 0%, #005e9c 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
      
      {/* Map layout for locations display */}
      {mapLayout && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-full bg-mylli-primary/5 animate-pulse-soft" style={{ animationDuration: '4s' }}></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 rounded-full border-2 border-mylli-primary/20 animate-pulse-soft" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border border-mylli-secondary/10 animate-pulse-soft" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,119,192,0.05)_70%)]"></div>
        </div>
      )}
      
      {/* Interactive floating elements */}
      {floatingElements && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full bg-mylli-primary/20 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-2/3 left-3/4 w-10 h-10 rounded-full bg-mylli-secondary/15 animate-float" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-md rotate-45 bg-mylli-quaternary/10 animate-float" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-xl bg-mylli-primary/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}
      
      {/* Content container */}
      <div className={`relative z-10 h-full ${mapLayout ? 'flex items-center justify-center' : ''}`}>
        {children}
      </div>
      
      {/* Interactive layer */}
      {interactive && (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-mylli-primary/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-white/10">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C69,91.27,141.43,76.12,213.33,66.11Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParallaxSection;
