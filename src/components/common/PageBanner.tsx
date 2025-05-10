
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'animated' | 'modern';
}

const PageBanner = ({ 
  title, 
  subtitle, 
  bgImage, 
  children, 
  className = '',
  variant = 'default'
}: PageBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const renderBackground = () => {
    switch (variant) {
      case 'gradient':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-mylli-primary via-mylli-dark to-mylli-primary/90 opacity-90"></div>
        );
      case 'animated':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/80 to-mylli-dark/90"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 512 512%22%3E%3Cpath fill=%22%23ffffff%22 d=%22M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z%22 opacity=%22.05%22/%3E%3C/svg%3E')]
                bg-[length:40px] animate-[background-pan_20s_linear_infinite]"></div>
            </div>
          </>
        );
      case 'modern':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-mylli-dark via-mylli-primary to-mylli-accent opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_25%)]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-white/30 blur-3xl"></div>
                <div className="absolute top-[30%] right-[5%] w-[40%] h-[40%] rounded-full bg-mylli-accent/30 blur-3xl"></div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
          >
            <div className={`absolute inset-0 ${bgImage ? 'bg-mylli-dark/70' : 'bg-gradient-to-r from-mylli-primary/90 to-mylli-dark/90'}`}></div>
          </div>
        );
    }
  };

  return (
    <div className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
      {/* Background */}
      {renderBackground()}
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>
        <div className="absolute top-1/2 left-5 w-32 h-32 bg-mylli-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-mylli-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-to-r transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            {title}
          </span>
          <div className="h-1.5 w-24 bg-mylli-accent rounded-full mx-auto mt-6 opacity-80"></div>
        </h1>
        
        {subtitle && (
          <p 
            className={cn(
              "text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {subtitle}
          </p>
        )}
        
        <div 
          className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
