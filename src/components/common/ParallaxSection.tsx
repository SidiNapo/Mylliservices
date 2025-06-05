
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
  pattern = 'none',
  mapLayout = false,
  interactive = false,
  floatingElements = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Remove the problematic scroll effect that was causing live editing issues
  // Instead, use CSS-only approach for better compatibility
  
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
          opacity: 0.05,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
        };
      case 'waves':
        return {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m0 10c10-5 20-5 30 0s20 5 30 0 20-5 30 0 20 5 30 0v10h-120z" fill="rgba(255,255,255,0.05)"/%3E%3C/svg%3E")',
          backgroundSize: '100px 20px',
          backgroundRepeat: 'repeat'
        };
      case 'circuit':
        return {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3Cpath d="M30 0v30M0 30h30M60 30H30M30 60V30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        };
      case 'hexagons':
        return {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="28" height="49" viewBox="0 0 28 49" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-opacity="0.4" fill-rule="evenodd"%3E%3Cpolygon points="13.99 9.25 13.99 1.75 1.74 8.75 1.74 16.25"/%3E%3Cpolygon points="13.99 33.25 13.99 25.75 1.74 32.75 1.74 40.25"/%3E%3Cpolygon points="26.24 16.25 26.24 8.75 13.99 1.75 13.99 9.25"/%3E%3Cpolygon points="26.24 40.25 26.24 32.75 13.99 25.75 13.99 33.25"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '28px 49px'
        };
      default:
        return {};
    }
  };

  const backgroundStyle: React.CSSProperties = {
    height,
    background: backgroundGradient || backgroundImage ? `url(${backgroundImage})` || backgroundGradient : 'linear-gradient(135deg, #0077C0 0%, #005e9c 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // This creates the parallax effect without JS
    position: 'relative'
  };

  return (
    <div 
      ref={sectionRef} 
      className={`relative overflow-hidden ${className}`} 
      style={backgroundStyle}
      data-testid="parallax-section"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={getOverlayStyle()}
        data-testid="parallax-overlay"
      />
      
      {/* Pattern */}
      {pattern !== 'none' && (
        <div 
          className="absolute inset-0 z-20" 
          style={getPatternStyle()}
          data-testid="parallax-pattern"
        />
      )}
      
      {/* Glass effect */}
      {glassEffect && (
        <div 
          className="absolute inset-0 z-30 backdrop-blur-sm" 
          data-testid="parallax-glass"
        />
      )}
      
      {/* Content */}
      <div className="relative z-40" data-testid="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
