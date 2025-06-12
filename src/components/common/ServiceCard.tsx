
import { ReactNode, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceDetailDialog from './ServiceDetailDialog';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
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
    setDialogOpen(true);
  };

  // Base mobile-first classes that work for all styles
  const baseMobileClasses = "w-full min-h-[280px] sm:min-h-[320px] flex flex-col p-4 sm:p-6";
  
  if (style === 'glass') {
    return (
      <div className={`${baseMobileClasses} backdrop-blur-md bg-white/60 rounded-2xl border border-white/30 shadow-glass transition-all duration-300 hover:shadow-lg group relative overflow-hidden ${className}`}>
        <div className="absolute -inset-0.5 bg-gradient-to-br from-mylli-primary/20 to-mylli-quaternary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex flex-col h-full z-10">
          {icon && (
            <div className="text-mylli-primary mb-4 sm:mb-5 transform transition-transform duration-300 group-hover:scale-110 text-2xl sm:text-3xl">
              {icon}
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-mylli-dark leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-mylli-gray mb-4 sm:mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          <button 
            onClick={handleEnSavoirPlusClick} 
            className="mt-auto w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 sm:py-2 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white text-sm sm:text-base font-medium transform transition-all duration-300 group-hover:scale-105 shadow-sm"
          >
            En savoir plus 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
      </div>
    );
  }
  
  if (style === '3d') {
    return (
      <div className={`${baseMobileClasses} relative bg-white rounded-2xl shadow-soft transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg group overflow-hidden ${className}`}>
        <div className="absolute top-0 left-0 w-full h-full transform -rotate-6 scale-95 bg-gradient-to-br from-mylli-primary/10 to-mylli-quaternary/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute top-0 right-0 w-2 sm:w-3 h-full bg-gradient-to-b from-mylli-primary to-mylli-quaternary transform translate-x-full group-hover:translate-x-0 transition-all duration-300 rounded-r-lg"></div>
        
        <div className="flex flex-col h-full">
          {icon && (
            <div className="mb-4 sm:mb-5 relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-quaternary/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white rounded-full p-2 sm:p-3 shadow-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 w-fit">
                <div className="text-xl sm:text-2xl text-mylli-primary">
                  {icon}
                </div>
              </div>
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-mylli-dark transition-all duration-300 group-hover:translate-x-1 leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-mylli-gray mb-4 sm:mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          <button 
            onClick={handleEnSavoirPlusClick} 
            className="w-full sm:w-auto flex items-center justify-center sm:justify-start text-mylli-primary font-medium transition-all duration-300 group-hover:translate-x-2 px-4 py-3 sm:px-0 sm:py-0 rounded-lg sm:rounded-none bg-mylli-primary/5 sm:bg-transparent text-sm sm:text-base"
          >
            En savoir plus 
            <ArrowRight size={16} className="ml-2 transform transition-all duration-300 group-hover:translate-x-1" />
          </button>
          
          <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tl from-mylli-primary/5 to-transparent rounded-tl-3xl"></div>
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
      </div>
    );
  }
  
  if (style === 'modern') {
    return (
      <div className={`${baseMobileClasses} relative overflow-hidden group bg-white rounded-2xl shadow-card ${className}`}>
        {image && (
          <div className="h-40 sm:h-48 mb-4 sm:mb-6 overflow-hidden rounded-xl">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
        )}
        <div className="flex flex-col flex-grow">
          {!image && icon && (
            <div className="text-mylli-primary mb-4 text-2xl sm:text-3xl">
              {icon}
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-mylli-dark leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-mylli-gray mb-4 sm:mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          <button 
            onClick={handleEnSavoirPlusClick} 
            className="w-full sm:w-auto flex items-center justify-center sm:justify-start text-mylli-primary font-medium hover:text-mylli-dark transition-colors group-hover:translate-x-1 duration-300 mt-auto px-4 py-3 sm:px-0 sm:py-0 rounded-lg sm:rounded-none bg-mylli-primary/5 sm:bg-transparent text-sm sm:text-base"
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
      </div>
    );
  }
  
  if (style === 'minimal') {
    return (
      <div className={`${baseMobileClasses} border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white rounded-lg sm:rounded-none ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-start h-full">
          {icon && (
            <div className="text-mylli-primary mb-3 sm:mb-0 sm:mr-4 text-2xl sm:text-xl self-center sm:self-start">
              {icon}
            </div>
          )}
          <div className="flex flex-col h-full flex-grow">
            <h3 className="text-lg font-bold mb-2 text-mylli-dark leading-tight text-center sm:text-left">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-mylli-gray mb-4 sm:mb-3 flex-grow leading-relaxed text-center sm:text-left">
              {description}
            </p>
            <button 
              onClick={handleEnSavoirPlusClick} 
              className="w-full sm:w-auto flex items-center justify-center sm:justify-start text-mylli-primary font-medium hover:text-mylli-dark transition-colors mt-auto px-4 py-3 sm:px-0 sm:py-0 rounded-lg sm:rounded-none bg-mylli-primary/5 sm:bg-transparent text-sm sm:text-base"
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
      </div>
    );
  }
  
  if (style === 'featured') {
    return (
      <div className={`${baseMobileClasses} bg-gradient-to-br from-white to-mylli-light rounded-2xl shadow-card transition-all duration-300 border border-mylli-primary/20 ${className}`}>
        <div className="flex flex-col h-full text-center sm:text-left">
          {icon && (
            <div className="text-mylli-primary mb-4 text-3xl sm:text-4xl self-center sm:self-start">
              {icon}
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-mylli-dark leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-mylli-gray mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          <button 
            onClick={handleEnSavoirPlusClick}
            className="btn-primary text-center w-full mt-auto py-3 text-sm sm:text-base font-medium rounded-lg"
          >
            En savoir plus
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
      </div>
    );
  }

  // Default style
  return (
    <div className={`${baseMobileClasses} bg-white rounded-2xl shadow-card border border-gray-100 ${className}`}>
      {icon && (
        <div className="text-mylli-primary mb-4 text-2xl sm:text-3xl self-center sm:self-start">
          {icon}
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-mylli-dark leading-tight text-center sm:text-left">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-mylli-gray mb-4 sm:mb-6 flex-grow leading-relaxed text-center sm:text-left">
        {description}
      </p>
      <button 
        onClick={handleEnSavoirPlusClick}
        className="w-full sm:w-auto flex items-center justify-center sm:justify-start text-mylli-primary font-medium hover:text-mylli-dark transition-colors mt-auto px-4 py-3 sm:px-0 sm:py-0 rounded-lg sm:rounded-none bg-mylli-primary/5 sm:bg-transparent text-sm sm:text-base"
      >
        En savoir plus 
        <ArrowRight size={16} className="ml-2" />
      </button>
      
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
    </div>
  );
};

export default ServiceCard;
