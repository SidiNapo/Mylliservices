
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'animated' | 'modern' | 'glassmorphism' | 'particles';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      case 'glassmorphism':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
            >
              <div className="absolute inset-0 bg-mylli-primary/10 backdrop-blur-md"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mylli-dark/5 to-mylli-dark/20"></div>
            {/* Dynamic light effect that follows mouse */}
            <div 
              className="absolute w-[40vw] h-[40vw] rounded-full radial-pulse opacity-20 pointer-events-none"
              style={{ 
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                left: `calc(${mousePosition.x}px - 20vw)`, 
                top: `calc(${mousePosition.y}px - 20vw)` 
              }}
            ></div>
            {/* Mesh grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjEwMGgxMDBWMEgwem0xMDAgOTlIMVYxaDk5djk4eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] bg-[length:30px]"></div>
          </>
        );
      case 'particles':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-mylli-dark to-mylli-primary opacity-95"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white/20"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                    opacity: Math.random() * 0.7 + 0.3,
                    transform: `translateY(${scrollPosition * (i % 3 + 1) * 0.1}px)`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Geometric shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-[10%] left-[10%] w-40 h-40 border border-white/10 rounded-full"></div>
              <div className="absolute bottom-[15%] right-[15%] w-60 h-60 border border-white/10 rounded-full"></div>
              <div className="absolute top-[30%] right-[20%] w-20 h-20 border border-white/10 transform rotate-45"></div>
            </div>
            
            {/* Light beams */}
            <div className="absolute inset-0">
              <div className="absolute -top-[40%] -left-[20%] w-[100%] h-[80%] bg-gradient-to-br from-mylli-accent/20 to-transparent rounded-[100%] blur-3xl"></div>
              <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-tl from-mylli-secondary/20 to-transparent rounded-[100%] blur-3xl"></div>
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
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20 transform transition-transform duration-1000 ease-in-out" 
             style={{ transform: `rotate(${scrollPosition * 0.05}deg)` }}></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20 transform transition-transform duration-1000 ease-in-out"
             style={{ transform: `rotate(${-scrollPosition * 0.05}deg)` }}></div>
        <div className="absolute top-1/2 left-5 w-32 h-32 bg-mylli-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-mylli-primary/10 rounded-full blur-3xl"></div>
        
        {/* Dynamic elements */}
        <div className="absolute w-full h-32 bottom-0 left-0">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '40%' }}>
            <path 
              fill="rgba(255, 255, 255, 0.05)" 
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,144C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative">
            {title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-mylli-accent/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mx-auto w-1/3"></span>
          </span>
          <div className="h-1.5 w-24 bg-mylli-accent rounded-full mx-auto mt-6 opacity-80 animate-pulse-soft"></div>
        </h1>
        
        {subtitle && (
          <p 
            className={cn(
              "text-xl md:text-2xl max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 drop-shadow-lg",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              {subtitle}
            </span>
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
      
      {/* Mouse scroll indicator for larger screens */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-[float_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
