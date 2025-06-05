
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
      if (sectionPosition - window.innerHeight <= scrollPosition && scrollPosition <= sectionPosition + sectionRef.current.offsetHeight) {
        // Apply subtle color shift instead of position change
        const hueShift = Math.abs(distance * speed) % 10;
        sectionRef.current.style.backgroundColor = `hsl(201, 100%, ${35 + hueShift / 2}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getOverlayStyle = () => {
    if (overlayGradient) {
      return {
        background: overlayGradient,
        opacity: 1
      };
    }
    return {
      backgroundColor: overlayColor,
      opacity: overlayOpacity
    };
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
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={getOverlayStyle()}
      />
      
      {/* Pattern */}
      {pattern !== 'none' && (
        <div
          className="absolute inset-0 z-20"
          style={getPatternStyle()}
        />
      )}
      
      {/* Glass effect */}
      {glassEffect && (
        <div className="absolute inset-0 z-30 backdrop-blur-sm bg-white/10" />
      )}
      
      {/* Content */}
      <div className="relative z-40 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
