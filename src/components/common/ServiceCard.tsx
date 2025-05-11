
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link: string;
  className?: string;
  style?: 'default' | 'modern' | 'minimal' | 'featured' | 'glass' | '3d';
  color?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  link,
  className = '', 
  style = 'default',
  color = 'primary'
}: ServiceCardProps) => {
  
  const colorClasses = {
    primary: 'from-mylli-primary to-mylli-quaternary',
    secondary: 'from-mylli-secondary to-mylli-tertiary',
    accent: 'from-mylli-accent to-mylli-quaternary',
    mixed: 'from-mylli-primary via-mylli-secondary to-mylli-quaternary'
  };
  
  const cardStyles = {
    default: `card-service flex flex-col h-full ${className}`,
    modern: `card-service flex flex-col h-full relative overflow-hidden group ${className}`,
    minimal: `p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors h-full ${className}`,
    featured: `bg-gradient-to-br from-white to-mylli-light rounded-2xl shadow-card p-6 transition-all duration-300 border border-mylli-primary/20 h-full ${className}`,
    glass: `backdrop-blur-md bg-white/60 rounded-2xl border border-white/30 shadow-glass p-6 transition-all duration-300 hover:shadow-lg h-full group ${className}`,
    '3d': `relative bg-white rounded-2xl shadow-soft p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg h-full group overflow-hidden ${className}`
  };
  
  if (style === 'glass') {
    return (
      <div className={cardStyles[style]}>
        <div className="absolute -inset-0.5 bg-gradient-to-br from-mylli-primary/20 to-mylli-quaternary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex flex-col h-full z-10">
          {icon && <div className="text-mylli-primary mb-5 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>}
          <h3 className="text-xl font-bold mb-3 text-mylli-dark">{title}</h3>
          <p className="text-mylli-gray mb-4 flex-grow">{description}</p>
          <Link 
            to={link} 
            className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white transform transition-all duration-300 group-hover:scale-105 shadow-sm"
          >
            En savoir plus <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }
  
  if (style === '3d') {
    return (
      <div className={cardStyles[style]}>
        {/* 3D effects with pseudo-elements */}
        <div className="absolute top-0 left-0 w-full h-full transform -rotate-6 scale-95 bg-gradient-to-br from-mylli-primary/10 to-mylli-quaternary/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-b from-mylli-primary to-mylli-quaternary transform translate-x-full group-hover:translate-x-0 transition-all duration-300 rounded-r-lg"></div>
        
        <div className="flex flex-col h-full">
          {icon && (
            <div className="mb-5 relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-quaternary/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white rounded-full p-3 shadow-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {icon}
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold mb-3 text-mylli-dark transition-all duration-300 group-hover:translate-x-1">{title}</h3>
          <p className="text-mylli-gray mb-6 flex-grow">{description}</p>
          <Link 
            to={link} 
            className="flex items-center text-mylli-primary font-medium transition-all duration-300 group-hover:translate-x-2"
          >
            En savoir plus <ArrowRight size={16} className="ml-1 transform transition-all duration-300 group-hover:translate-x-1" />
          </Link>
          
          {/* Decorative corner element */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-mylli-primary/5 to-transparent rounded-tl-3xl"></div>
        </div>
      </div>
    );
  }
  
  if (style === 'modern') {
    return (
      <div className={cardStyles[style]}>
        {image && (
          <div className="h-48 mb-6 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow bg-white">
          {!image && icon && <div className="text-mylli-primary mb-4">{icon}</div>}
          <h3 className="text-xl font-bold mb-3 text-mylli-dark">{title}</h3>
          <p className="text-mylli-gray mb-4 flex-grow">{description}</p>
          <Link 
            to={link} 
            className="flex items-center text-mylli-primary font-medium hover:text-mylli-dark transition-colors group-hover:translate-x-1 duration-300 mt-auto"
          >
            En savoir plus <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    );
  }
  
  if (style === 'minimal') {
    return (
      <div className={cardStyles[style]}>
        <div className="flex items-start h-full">
          {icon && <div className="text-mylli-primary mr-4">{icon}</div>}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-bold mb-2 text-mylli-dark">{title}</h3>
            <p className="text-mylli-gray mb-3 flex-grow">{description}</p>
            <Link 
              to={link} 
              className="flex items-center text-mylli-primary font-medium hover:text-mylli-dark transition-colors mt-auto"
            >
              En savoir plus <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  if (style === 'featured') {
    return (
      <div className={cardStyles[style]}>
        <div className="flex flex-col h-full">
          {icon && <div className="text-mylli-primary mb-4 text-4xl">{icon}</div>}
          <h3 className="text-xl font-bold mb-3 text-mylli-dark">{title}</h3>
          <p className="text-mylli-gray mb-6 flex-grow">{description}</p>
          <Link 
            to={link} 
            className="btn-primary text-center w-full mt-auto"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    );
  }

  // Default style
  return (
    <div className={cardStyles.default}>
      {icon && <div className="text-mylli-primary mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-3 text-mylli-dark">{title}</h3>
      <p className="text-mylli-gray mb-4 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="flex items-center text-mylli-primary font-medium hover:text-mylli-dark transition-colors mt-auto"
      >
        En savoir plus <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
