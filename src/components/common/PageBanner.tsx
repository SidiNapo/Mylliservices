
import { ReactNode } from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: ReactNode;
  className?: string;
}

const PageBanner = ({ title, subtitle, bgImage, children, className = '' }: PageBannerProps) => {
  return (
    <div className={`relative py-24 md:py-32 ${className}`}>
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      >
        <div className={`absolute inset-0 ${bgImage ? 'bg-mylli-dark/70' : 'bg-gradient-to-r from-mylli-primary/90 to-mylli-dark/90'}`}></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8 animate-fade-in">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageBanner;
