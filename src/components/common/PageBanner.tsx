
import { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  className?: string;
}

const PageBanner = ({ 
  title, 
  subtitle, 
  children, 
  backgroundImage,
  className = ""
}: PageBannerProps) => {
  const { isRTL } = useLanguage();
  
  const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(2,158,221,0.9) 0%, rgba(0,119,192,0.9) 50%, rgba(0,90,139,0.9) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <section 
      className={`page-banner-gradient text-white py-20 ${className}`}
      style={backgroundStyle}
    >
      <div className="container-custom text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'} md:text-center animate-fade-in`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'} md:text-center animate-fade-in`}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-fade-in">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
