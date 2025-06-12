
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: React.ReactNode;
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg max-w-[95vw] w-full mx-auto max-h-[90vh] overflow-y-auto">
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg sm:hidden"
          aria-label="Fermer"
        >
          <X size={20} className="text-mylli-dark" />
        </button>

        {/* Background decorations */}
        <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-mylli-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-mylli-secondary/20 rounded-full filter blur-3xl"></div>
        
        <DialogHeader className="relative z-10 pb-4">
          <div className="flex items-center gap-3 pr-10 sm:pr-0">
            {icon && (
              <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 flex-shrink-0">
                <div className="text-lg sm:text-xl text-mylli-primary">
                  {icon}
                </div>
              </div>
            )}
            <DialogTitle className="text-xl sm:text-2xl font-bold text-mylli-dark leading-tight">
              {title}
            </DialogTitle>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-full mt-4"></div>
        </DialogHeader>
        
        <div className="relative z-10 py-4 space-y-6">
          <DialogDescription className="text-sm sm:text-base leading-relaxed text-mylli-gray">
            {description.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </DialogDescription>
          
          {/* Additional content */}
          <div className="p-4 bg-mylli-light/50 rounded-xl border border-mylli-primary/10">
            <h3 className="font-bold text-mylli-dark mb-3 text-sm sm:text-base">
              Nos engagements:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-xs sm:text-sm">
                <div className="w-2 h-2 rounded-full bg-mylli-primary mr-2 flex-shrink-0"></div>
                <span>Personnel hautement qualifié</span>
              </li>
              <li className="flex items-center text-xs sm:text-sm">
                <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 flex-shrink-0"></div>
                <span>Suivi personnalisé et régulier</span>
              </li>
              <li className="flex items-center text-xs sm:text-sm">
                <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-2 flex-shrink-0"></div>
                <span>Respect de la dignité et de l'autonomie</span>
              </li>
            </ul>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col gap-3 pt-4">
            {link && (
              <Button 
                asChild 
                className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg group py-3 text-sm sm:text-base font-medium`}
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
              className="w-full py-3 text-sm sm:text-base font-medium border-mylli-primary/20 text-mylli-primary hover:bg-mylli-primary/5"
            >
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
