
import { ReactNode } from 'react';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'modern' | 'gradient' | 'underline' | 'split';
  highlightColor?: string;
  highlightText?: string;
}
const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  children,
  variant = 'default',
  highlightColor = 'mylli-primary',
  highlightText
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  const renderTitle = () => {
    switch (variant) {
      case 'modern':
        return <h2 className="relative mb-3 text-3xl md:text-4xl font-bold">
            {title}
            <div className={`absolute -bottom-2 left-0 h-1 w-16 bg-${highlightColor} rounded-full ${align === 'center' ? 'right-0 mx-auto' : ''}`}></div>
          </h2>;
      case 'gradient':
        return <h2 className="mb-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-mylli-primary to-mylli-secondary bg-clip-text text-transparent">
            {title}
          </h2>;
      case 'underline':
        return <h2 className="relative inline-block mb-3 text-3xl md:text-4xl font-bold">
            {title}
            <div className={`absolute -bottom-1 left-0 right-0 h-3 w-full bg-${highlightColor}/20 -z-10`}></div>
          </h2>;
      case 'split':
        if (!highlightText) {
          return <h2 className="section-title animate-fade-in">{title}</h2>;
        }

        // Find the highlight text within the title and wrap it in a span
        const parts = title.split(highlightText);
        if (parts.length < 2) return <h2 className="section-title animate-fade-in">{title}</h2>;
        return <h2 className="section-title animate-fade-in">
            {parts[0]}
            <span className="bg-gradient-to-r from-mylli-accent to-mylli-primary bg-clip-text text-transparent">{highlightText}</span>
            {parts[1]}
          </h2>;
      default:
        return <h2 className="section-title animate-fade-in">{title}</h2>;
    }
  };
  return <div className={`${alignmentClasses[align]} mb-12 md:mb-16 ${className}`}>
      {renderTitle()}
      {subtitle && <p className="section-subtitle max-w-3xl animate-fade-in mx-auto mt-4 px-4">
          {subtitle}
        </p>}
      {children}
    </div>;
};
export default SectionHeading;
