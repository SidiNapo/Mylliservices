import { ReactNode, useState } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import ServiceDetailDialog from './ServiceDetailDialog';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon | ReactNode;
  image?: string;
  link: string;
  className?: string;
  style?: 'default' | 'modern' | 'minimal' | 'featured' | 'glass' | '3d';
  color?: string;
  detailedDescription?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  link,
  className = '', 
  style = 'default',
  color = 'primary',
  detailedDescription
}: ServiceCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleEnSavoirPlusClick = (e: React.MouseEvent) => {
    if (!detailedDescription) return;
    e.preventDefault();
    e.stopPropagation();
    setDialogOpen(true);
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    // Check if icon is a Lucide icon component
    if (typeof icon === 'function') {
      const IconComponent = icon as LucideIcon;
      return <IconComponent />;
    }
    
    // Otherwise render as ReactNode
    return icon;
  };

  // Mobile-first base classes with better mobile sizing
  const baseMobileClasses = "w-full min-h-[280px] sm:min-h-[320px] flex flex-col p-4 sm:p-6 relative";
  
  if (style === 'glass') {
    return (
      <>
        <div className={`${baseMobileClasses} backdrop-blur-md bg-white/60 rounded-2xl border border-white/30 shadow-glass transition-all duration-300 hover:shadow-lg group overflow-hidden ${className}`}>
          <div className="absolute -inset-0.5 bg-gradient-to-br from-mylli-primary/20 to-mylli-quaternary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex flex-col h-full z-10">
            {icon && (
              <div className="text-mylli-primary mb-4 transform transition-transform duration-300 group-hover:scale-110 text-2xl sm:text-3xl flex justify-center">
                {renderIcon()}
              </div>
            )}
            <h3 className="text-base sm:text-lg font-bold mb-3 text-mylli-dark leading-tight text-center px-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-mylli-gray mb-6 flex-grow leading-relaxed text-center px-2">
              {description}
            </p>
            <button 
              onClick={handleEnSavoirPlusClick} 
              className="mt-auto w-full inline-flex items-center justify-center px-4 py-3 sm:py-4 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white text-sm sm:text-base font-medium transform transition-all duration-300 group-hover:scale-105 shadow-sm min-h-[44px] sm:min-h-[48px]"
            >
              En savoir plus 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {detailedDescription && (
          <ServiceDetailDialog 
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title={title}
            description={detailedDescription || description}
            icon={icon}
            color={color}
            link={link}
          />
        )}
      </>
    );
  }
  
  if (style === '3d') {
    return (
      <>
        <div className={`${baseMobileClasses} bg-white rounded-2xl shadow-soft transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg group overflow-hidden ${className}`}>
          <div className="absolute top-0 left-0 w-full h-full transform -rotate-6 scale-95 bg-gradient-to-br from-mylli-primary/10 to-mylli-quaternary/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-mylli-primary to-mylli-quaternary transform translate-x-full group-hover:translate-x-0 transition-all duration-300 rounded-r-lg"></div>
          
          <div className="flex flex-col h-full">
            {icon && (
              <div className="mb-4 relative flex justify-center">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-quaternary/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white rounded-full p-3 shadow-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 w-fit">
                  <div className="text-xl sm:text-2xl text-mylli-primary">
                    {renderIcon()}
                  </div>
                </div>
              </div>
            )}
            <h3 className="text-base sm:text-lg font-bold mb-3 text-mylli-dark transition-all duration-300 group-hover:translate-x-1 leading-tight text-center px-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-mylli-gray mb-6 flex-grow leading-relaxed text-center px-2">
              {description}
            </p>
            <button 
              onClick={handleEnSavoirPlusClick} 
              className="w-full flex items-center justify-center text-mylli-primary font-medium transition-all duration-300 group-hover:translate-x-2 px-4 py-3 sm:py-4 rounded-lg bg-mylli-primary/5 text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
            >
              En savoir plus 
              <ArrowRight size={16} className="ml-2 transform transition-all duration-300 group-hover:translate-x-1" />
            </button>
            
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-mylli-primary/5 to-transparent rounded-tl-3xl"></div>
          </div>
        </div>
        
        {detailedDescription && (
          <ServiceDetailDialog 
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title={title}
            description={detailedDescription || description}
            icon={icon}
            color={color}
            link={link}
          />
        )}
      </>
    );
  }
  
  if (style === 'modern') {
    return (
      <>
        <div className={`${baseMobileClasses} group bg-white rounded-2xl shadow-card ${className}`}>
          {image && (
            <div className="h-32 sm:h-40 mb-4 overflow-hidden rounded-xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          )}
          <div className="flex flex-col flex-grow">
            {!image && icon && (
              <div className="text-mylli-primary mb-4 text-2xl sm:text-3xl flex justify-center">
                {renderIcon()}
              </div>
            )}
            <h3 className="text-base sm:text-lg font-bold mb-3 text-mylli-dark leading-tight text-center px-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-mylli-gray mb-6 flex-grow leading-relaxed text-center px-2">
              {description}
            </p>
            <button 
              onClick={handleEnSavoirPlusClick} 
              className="w-full flex items-center justify-center text-mylli-primary font-medium hover:text-mylli-dark transition-colors group-hover:translate-x-1 duration-300 mt-auto px-4 py-3 sm:py-4 rounded-lg bg-mylli-primary/5 text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
            >
              En savoir plus 
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
        
        {detailedDescription && (
          <ServiceDetailDialog 
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title={title}
            description={detailedDescription || description}
            icon={icon}
            color={color}
            link={link}
          />
        )}
      </>
    );
  }
  
  if (style === 'minimal') {
    return (
      <>
        <div className={`${baseMobileClasses} border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white rounded-lg ${className}`}>
          <div className="flex flex-col h-full">
            {icon && (
              <div className="text-mylli-primary mb-3 text-2xl sm:text-3xl self-center">
                {renderIcon()}
              </div>
            )}
            <div className="flex flex-col h-full flex-grow">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-mylli-dark leading-tight text-center px-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-mylli-gray mb-4 flex-grow leading-relaxed text-center px-2">
                {description}
              </p>
              <button 
                onClick={handleEnSavoirPlusClick} 
                className="w-full flex items-center justify-center text-mylli-primary font-medium hover:text-mylli-dark transition-colors mt-auto px-4 py-3 sm:py-4 rounded-lg bg-mylli-primary/5 text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
              >
                En savoir plus 
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        {detailedDescription && (
          <ServiceDetailDialog 
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title={title}
            description={detailedDescription || description}
            icon={icon}
            color={color}
            link={link}
          />
        )}
      </>
    );
  }
  
  if (style === 'featured') {
    return (
      <>
        <div className={`${baseMobileClasses} bg-gradient-to-br from-white to-mylli-light rounded-2xl shadow-card transition-all duration-300 border border-mylli-primary/20 ${className}`}>
          <div className="flex flex-col h-full text-center">
            {icon && (
              <div className="text-mylli-primary mb-4 text-3xl sm:text-4xl self-center">
                {renderIcon()}
              </div>
            )}
            <h3 className="text-base sm:text-lg font-bold mb-3 text-mylli-dark leading-tight px-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-mylli-gray mb-6 flex-grow leading-relaxed px-2">
              {description}
            </p>
            <button 
              onClick={handleEnSavoirPlusClick}
              className="btn-primary text-center w-full mt-auto py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]"
            >
              En savoir plus
            </button>
          </div>
        </div>
        
        {detailedDescription && (
          <ServiceDetailDialog 
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title={title}
            description={detailedDescription || description}
            icon={icon}
            color={color}
            link={link}
          />
        )}
      </>
    );
  }

  // Default style
  return (
    <>
      <div className={`${baseMobileClasses} bg-white rounded-2xl shadow-card border border-gray-100 ${className}`}>
        {icon && (
          <div className="text-mylli-primary mb-4 text-2xl sm:text-3xl self-center">
            {renderIcon()}
          </div>
        )}
        <h3 className="text-base sm:text-lg font-bold mb-3 text-mylli-dark leading-tight text-center px-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-mylli-gray mb-6 flex-grow leading-relaxed text-center px-2">
          {description}
        </p>
        <button 
          onClick={handleEnSavoirPlusClick}
          className="w-full flex items-center justify-center text-mylli-primary font-medium hover:text-mylli-dark transition-colors mt-auto px-4 py-3 sm:py-4 rounded-lg bg-mylli-primary/5 text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
        >
          En savoir plus 
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
      
      {detailedDescription && (
        <ServiceDetailDialog 
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title={title}
          description={detailedDescription || description}
          icon={icon}
          color={color}
          link={link}
        />
      )}
    </>
  );
};

export default ServiceCard;
