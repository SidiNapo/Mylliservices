import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'modern' | 'gradient' | 'underline' | 'split' | 'outlined' | 'animated';
  highlightColor?: string;
  highlightText?: string;
  id?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  children,
  variant = 'default',
  highlightColor = 'mylli-primary',
  highlightText,
  id
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const renderTitle = () => {
    switch (variant) {
      case 'modern':
        return <h2 id={id} className="relative mb-3 text-3xl md:text-4xl font-bold">
            {title}
            <div className={`absolute -bottom-2 left-0 h-1 w-16 bg-${highlightColor} rounded-full ${align === 'center' ? 'right-0 mx-auto' : ''}`}></div>
          </h2>;
      case 'gradient':
        return <h2 id={id} className="mb-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
            {title}
          </h2>;
      case 'underline':
        return <h2 id={id} className="relative inline-block mb-3 text-3xl md:text-4xl font-bold">
            {title}
            <div className={`absolute -bottom-1 left-0 right-0 h-3 w-full bg-${highlightColor}/20 -z-10`}></div>
          </h2>;
      case 'split':
        if (!highlightText) {
          return <h2 id={id} className="section-title animate-fade-in">{title}</h2>;
        }

        // Find the highlight text within the title and wrap it in a span
        const parts = title.split(highlightText);
        if (parts.length < 2) return <h2 id={id} className="section-title animate-fade-in">{title}</h2>;
        return <h2 id={id} className="section-title animate-fade-in">
            {parts[0]}
            <span className="bg-gradient-to-r from-mylli-accent to-mylli-primary bg-clip-text text-transparent">{highlightText}</span>
            {parts[1]}
          </h2>;
      case 'outlined':
        return <h2 id={id} className="mb-3 text-3xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mylli-primary to-mylli-secondary 
                  relative after:absolute after:inset-0 after:bg-transparent after:border-2 after:border-mylli-primary/30 
                  after:rounded-lg after:-z-10 after:translate-x-2 after:translate-y-2">
              {title}
            </span>
          </h2>;
      case 'animated':
        if (!highlightText) {
          return <h2 id={id} className="mb-3 text-3xl md:text-4xl font-bold relative overflow-hidden">
              <span className="animate-text-gradient bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent bg-[length:200%] bg-clip-text text-transparent">
                {title}
              </span>
            </h2>;
        }
        const animatedParts = title.split(highlightText);
        if (animatedParts.length < 2) return <h2 id={id} className="section-title">{title}</h2>;
        return <h2 id={id} className="section-title mb-3 text-3xl md:text-4xl font-bold">
            {animatedParts[0]}
            <span className="animate-text-gradient bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent bg-[length:200%] bg-clip-text text-transparent animated-border-gradient relative">
              {highlightText}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-mylli-primary via-mylli-secondary to-mylli-accent animate-pulse-soft"></span>
            </span>
            {animatedParts[1]}
          </h2>;
      default:
        return <h2 id={id} className="section-title animate-fade-in">{title}</h2>;
    }
  };

  return <div className={`${alignmentClasses[align]} mb-12 md:mb-16 ${className}`}>
      {renderTitle()}
      {subtitle && <p className={`section-subtitle max-w-3xl animate-fade-in mt-4 leading-relaxed ${align === 'left' ? 'text-left' : align === 'right' ? 'text-right ml-auto' : 'text-center mx-auto'}`}>
          {subtitle}
        </p>}
      {children}
    </div>;
};

export default SectionHeading;
