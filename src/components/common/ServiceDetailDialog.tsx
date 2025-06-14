
import React, { ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: LucideIcon | ReactNode;
  color?: string;
  link?: string;
}

const ServiceDetailDialog = ({
  isOpen,
  onClose,
  title,
  description,
  icon,
  color = "primary",
  link
}: ServiceDetailDialogProps) => {
  const colorClasses = {
    primary: "from-mylli-primary to-mylli-quaternary",
    secondary: "from-mylli-secondary to-mylli-tertiary",
    accent: "from-mylli-accent to-mylli-quaternary",
    mixed: "from-mylli-primary via-mylli-secondary to-mylli-quaternary"
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-[90vw] sm:max-w-[400px] h-[90vh] sm:h-[85vh] max-h-[90vh] sm:max-h-[600px] mx-auto p-0 overflow-hidden flex flex-col fixed top-[5vh] left-[2.5vw] sm:top-auto sm:left-auto">
        {/* Close button - always visible */}
        <div className="absolute top-3 right-3 z-50">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/95 hover:bg-white shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Fermer"
          >
            <X size={18} className="text-mylli-dark" />
          </button>
        </div>

        {/* Header section */}
        <div className="flex-shrink-0 p-4 pb-2 bg-white">
          <DialogHeader className="space-y-3">
            <div className="flex items-center gap-3 pr-12">
              {icon && (
                <div className="p-2 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 flex-shrink-0">
                  <div className="text-lg text-mylli-primary">
                    {renderIcon()}
                  </div>
                </div>
              )}
              <DialogTitle className="text-lg sm:text-xl font-bold text-mylli-dark leading-tight">
                {title}
              </DialogTitle>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-full"></div>
          </DialogHeader>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-4 py-2 bg-white">
          <div className="space-y-4 pb-4">
            <DialogDescription className="text-sm sm:text-base leading-relaxed text-mylli-gray">
              {description.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </DialogDescription>
            
            {/* Additional content */}
            <div className="p-3 sm:p-4 bg-mylli-light/50 rounded-xl border border-mylli-primary/10">
              <h3 className="font-bold text-mylli-dark mb-3 text-sm sm:text-base">
                Nos engagements:
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center text-xs sm:text-sm">
                  <div className="w-2 h-2 rounded-full bg-mylli-primary mr-3 flex-shrink-0"></div>
                  <span>Personnel hautement qualifié</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-3 flex-shrink-0"></div>
                  <span>Suivi personnalisé et régulier</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-3 flex-shrink-0"></div>
                  <span>Respect de la dignité et de l'autonomie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
          
        {/* Fixed bottom buttons - always visible */}
        <div className="flex-shrink-0 p-4 pt-3 bg-white border-t border-gray-100 space-y-3">
          {link && (
            <Button 
              asChild 
              className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg group py-3 sm:py-4 text-sm sm:text-base font-medium min-h-[48px] sm:min-h-[52px] flex items-center justify-center text-white`}
            >
              <Link to={link} onClick={onClose}>
                Contactez-nous
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
          
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full py-3 sm:py-4 text-sm sm:text-base font-medium border-mylli-primary/20 text-mylli-primary hover:bg-mylli-primary/5 min-h-[48px] sm:min-h-[52px] flex items-center justify-center"
          >
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
