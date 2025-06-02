import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ServiceCardProps {
  title: string;
  description: string;
  detailedDescription?: string;
  icon: React.ReactNode;
  link: string;
  style?: 'default' | '3d' | 'minimal';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ServiceCard = ({
  title,
  description,
  detailedDescription,
  icon,
  link,
  style = 'default',
  color = 'primary',
  className = '',
  isExpanded,
  onToggle
}: ServiceCardProps) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  
  // Use external control if provided, otherwise use internal state
  const expanded = isExpanded !== undefined ? isExpanded : internalExpanded;
  const handleToggle = onToggle || (() => setInternalExpanded(!internalExpanded));

  const colorVariants = {
    primary: {
      gradient: "from-mylli-primary/5 to-mylli-primary/10",
      border: "border-mylli-primary/20",
      accent: "bg-mylli-primary",
      text: "text-mylli-primary"
    },
    secondary: {
      gradient: "from-mylli-secondary/5 to-mylli-secondary/10",
      border: "border-mylli-secondary/20",
      accent: "bg-mylli-secondary",
      text: "text-mylli-secondary"
    },
    accent: {
      gradient: "from-mylli-quaternary/5 to-mylli-quaternary/10",
      border: "border-mylli-quaternary/20",
      accent: "bg-mylli-quaternary",
      text: "text-mylli-quaternary"
    }
  };

  const colorScheme = colorVariants[color];

  if (style === '3d') {
    return (
      <Card className={`group relative overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 bg-white ${className}`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${colorScheme.accent} rounded-bl-3xl opacity-10`}></div>
        
        <CardContent className="p-8 relative z-10">
          {/* Icon */}
          <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 text-mylli-dark group-hover:text-mylli-primary transition-colors">
            {title}
          </h3>
          <p className="text-mylli-gray mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Collapsible content for detailed description */}
          {detailedDescription && (
            <Collapsible open={expanded} onOpenChange={handleToggle}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`mb-4 w-full justify-between ${colorScheme.border} ${colorScheme.text} hover:bg-gradient-to-r ${colorScheme.gradient}`}
                >
                  En savoir plus
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'transform rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-0 overflow-hidden">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${colorScheme.gradient} ${colorScheme.border} border`}>
                  {detailedDescription.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-3 text-mylli-gray text-sm leading-relaxed last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
          
          {/* Action button */}
          {link !== '#' && (
            <Button asChild className={`w-full ${colorScheme.accent} hover:opacity-90 text-white`}>
              <Link to={link} className="flex items-center justify-center">
                Découvrir ce service
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
          )}
        </CardContent>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mylli-light rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      </Card>
    );
  }

  // Default style (keeping existing implementation for backward compatibility)
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${className}`}>
      <CardContent className="p-6 h-full flex flex-col">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-mylli-dark">{title}</h3>
        <p className="text-mylli-gray mb-4 flex-grow">{description}</p>
        
        {detailedDescription && (
          <Collapsible open={expanded} onOpenChange={handleToggle} className="mb-4">
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-between">
                En savoir plus
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'transform rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-2">
              <div className="p-3 bg-mylli-light/50 rounded-lg">
                {detailedDescription.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-2 text-mylli-gray text-sm last:mb-0">{paragraph}</p>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
        
        {link !== '#' && (
          <Button asChild variant="outline" className="mt-auto">
            <Link to={link} className="flex items-center justify-center">
              Découvrir
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
