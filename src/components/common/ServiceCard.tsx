
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
  style?: 'default' | 'modern' | 'minimal' | 'featured';
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  link,
  className = '', 
  style = 'default' 
}: ServiceCardProps) => {
  
  const cardStyles = {
    default: `card-service flex flex-col h-full ${className}`,
    modern: `card-service flex flex-col h-full relative overflow-hidden group ${className}`,
    minimal: `p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors h-full ${className}`,
    featured: `bg-gradient-to-br from-white to-mylli-light rounded-2xl shadow-card p-6 transition-all duration-300 border border-mylli-primary/20 h-full ${className}`
  };
  
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
