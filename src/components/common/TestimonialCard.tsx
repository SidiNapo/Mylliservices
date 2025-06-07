
import { ReactNode } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  image?: string;
  rating?: number;
  className?: string;
  style?: 'default' | 'modern' | 'minimal';
}

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  image, 
  rating = 5,
  className = '',
  style = 'default'
}: TestimonialCardProps) => {
  
  const renderStars = () => {
    const stars: ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          width="16" 
          height="16" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };
  
  if (style === 'modern') {
    return (
      <div className={`bg-white rounded-2xl shadow-card p-6 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${className}`}>
        {/* Quote icon */}
        <svg width="35" height="28" className="absolute top-6 left-6 text-mylli-primary/10" viewBox="0 0 35 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.644 0.577C14.937 1.324 16.025 2.316 16.906 3.551C17.787 4.653 18.465 5.906 18.941 7.311C19.416 8.584 19.654 10.01 19.654 11.589C19.654 14.334 18.873 16.584 17.312 18.34C15.785 20.096 13.478 20.975 10.394 20.975C7.445 20.975 5.104 20.013 3.372 18.091C1.675 16.136 0.828 13.522 0.828 10.248C0.828 4.403 2.795 0.113 6.727 -2.62855e-07C7.343 -2.62855e-07 7.818 0.0625 8.157 0.187C8.496 0.312 8.785 0.5 9.023 0.75C9.531 1.187 9.785 1.687 9.785 2.249C9.785 2.812 9.666 3.288 9.429 3.676C9.226 3.989 8.904 4.3 8.463 4.614C8.056 4.927 7.716 5.241 7.445 5.553C7.173 5.866 7.037 6.243 7.037 6.681C7.037 7.739 7.649 8.268 8.87 8.268C9.039 8.268 9.362 8.231 9.837 8.155C9.77 9.8 9.09 11.133 7.8 12.155C6.507 13.178 4.884 13.689 2.93 13.689C2.762 13.689 2.625 13.689 2.524 13.689C3.68 16.809 6.035 18.369 9.599 18.369C11.566 18.369 13.14 17.784 14.326 16.613C15.513 15.442 16.107 13.921 16.107 12.05C16.107 9.18 15.105 6.274 13.103 3.335C12.224 1.954 11.699 1.263 11.531 1.263C11.396 1.263 10.888 1.818 10.004 2.928L8.632 4.489C8.463 4.676 8.242 4.769 7.97 4.769C7.7 4.769 7.479 4.67 7.309 4.471C7.172 4.272 7.104 4.021 7.104 3.72C7.104 3.045 7.646 2.238 8.733 1.299C9.853 0.327 11.093 -0.158 12.451 -0.158C12.857 -0.158 13.239 0.088 13.644 0.577ZM33.082 0.577C34.376 1.324 35.464 2.316 36.345 3.551C37.226 4.653 37.904 5.906 38.379 7.311C38.854 8.584 39.092 10.01 39.092 11.589C39.092 14.334 38.312 16.584 36.751 18.34C35.223 20.096 32.917 20.975 29.833 20.975C26.884 20.975 24.543 20.013 22.811 18.091C21.113 16.136 20.267 13.522 20.267 10.248C20.267 4.403 22.233 0.113 26.166 -2.62855e-07C26.782 -2.62855e-07 27.257 0.0625 27.596 0.187C27.935 0.312 28.223 0.5 28.461 0.75C28.969 1.187 29.224 1.687 29.224 2.249C29.224 2.812 29.104 3.288 28.868 3.676C28.664 3.989 28.343 4.3 27.902 4.614C27.495 4.927 27.155 5.241 26.884 5.553C26.612 5.866 26.475 6.243 26.475 6.681C26.475 7.739 27.088 8.268 28.309 8.268C28.478 8.268 28.8 8.231 29.276 8.155C29.209 9.8 28.529 11.133 27.239 12.155C25.946 13.178 24.324 13.689 22.369 13.689C22.201 13.689 22.064 13.689 21.962 13.689C23.119 16.809 25.473 18.369 29.038 18.369C31.005 18.369 32.579 17.784 33.765 16.613C34.951 15.442 35.546 13.921 35.546 12.05C35.546 9.18 34.544 6.274 32.542 3.335C31.662 1.954 31.137 1.263 30.969 1.263C30.835 1.263 30.326 1.818 29.443 2.928L28.071 4.489C27.902 4.676 27.681 4.769 27.409 4.769C27.138 4.769 26.917 4.67 26.748 4.471C26.611 4.272 26.543 4.021 26.543 3.72C26.543 3.045 27.088 2.238 28.172 1.299C29.291 0.327 30.532 -0.158 31.89 -0.158C32.295 -0.158 32.678 0.088 33.082 0.577Z" />
        </svg>
        
        <div className="flex items-center mt-10 mb-4">
          {renderStars()}
        </div>
        
        <p className="text-mylli-gray mb-6 italic">"{quote}"</p>
        
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-bold text-mylli-dark">{name}</h4>
            {title && <p className="text-sm text-mylli-gray">{title}</p>}
          </div>
        </div>
      </div>
    );
  }
  
  if (style === 'minimal') {
    return (
      <div className={`p-6 border-l-4 border-mylli-primary ${className}`}>
        <p className="text-mylli-gray mb-4 italic">"{quote}"</p>
        <div className="flex items-center mb-2">
          {renderStars()}
        </div>
        <h4 className="font-bold text-mylli-dark">{name}</h4>
        {title && <p className="text-sm text-mylli-gray">{title}</p>}
      </div>
    );
  }
  
  // Default style
  return (
    <div className={`bg-white rounded-2xl shadow-card p-6 ${className}`}>
      <div className="flex justify-center mb-6">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover ring-4 ring-mylli-primary/20"
          />
        ) : (
          <div className="w-16 h-16 bg-mylli-primary/10 rounded-full flex items-center justify-center">
            <span className="text-mylli-primary font-bold text-xl">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <p className="text-mylli-gray mb-4 text-center italic">"{quote}"</p>
      
      <div className="flex justify-center items-center mb-2">
        {renderStars()}
      </div>
      
      <div className="text-center">
        <h4 className="font-bold text-mylli-dark">{name}</h4>
        {title && <p className="text-sm text-mylli-gray">{title}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
