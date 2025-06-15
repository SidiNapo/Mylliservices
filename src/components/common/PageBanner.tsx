
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'modern' | 'fast';
}

const PageBanner = ({ 
  title, 
  subtitle, 
  bgImage, 
  children, 
  className = '',
  variant = 'fast'
}: PageBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Faster visibility for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const renderBackground = () => {
    switch (variant) {
      case 'fast':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary/95 to-mylli-dark/95"></div>
        );
      case 'modern':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-mylli-dark via-mylli-primary to-mylli-accent opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_25%)]"></div>
          </>
        );
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/90 to-mylli-dark/90"></div>
        );
    }
  };

  return (
    <div className={`relative py-20 md:py-28 overflow-hidden ${className}`}>
      {/* Optimized background */}
      {renderBackground()}
      
      {/* Minimal decorative elements for faster loading */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-white/20"></div>
      </div>
      
      {/* Content with faster animations */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            {title}
          </span>
          <div className="h-1 w-20 bg-mylli-accent rounded-full mx-auto mt-4"></div>
        </h1>
        
        {subtitle && (
          <p 
            className={cn(
              "text-xl md:text-2xl max-w-3xl mx-auto mb-8 transition-all duration-300 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            {subtitle}
          </p>
        )}
        
        <div 
          className={cn(
            "transition-all duration-300 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
