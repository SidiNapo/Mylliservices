
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({ title, subtitle, align = 'center', className = '', children }: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <div className={`${alignmentClasses[align]} mb-12 md:mb-16 ${className}`}>
      <h2 className="section-title animate-fade-in">{title}</h2>
      {subtitle && (
        <p className="section-subtitle max-w-3xl animate-fade-in">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
