
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
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        {/* Close button - more prominent on mobile */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white/80 hover:bg-white/90 shadow-md transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Fermer"
        >
          <X size={20} className="text-mylli-dark" />
        </button>

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-mylli-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mylli-secondary/20 rounded-full filter blur-3xl"></div>
        
        <DialogHeader className="pb-4">
          <div className="flex items-center gap-3 pr-8">
            {icon && <div className="p-3 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 flex-shrink-0">{icon}</div>}
            <DialogTitle className="text-xl sm:text-2xl font-bold text-mylli-dark leading-tight">{title}</DialogTitle>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-full mt-4"></div>
        </DialogHeader>
        
        <div className="relative z-10 space-y-4 pb-4">
          <DialogDescription className="text-base leading-relaxed text-mylli-gray">
            {description.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
            ))}
          </DialogDescription>
          
          {/* Additional content specific to service type */}
          <div className="space-y-4">
            <div className="p-4 bg-mylli-light/50 rounded-xl border border-mylli-primary/10">
              <h3 className="font-bold text-mylli-dark mb-3">Nos engagements:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-mylli-primary mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Personnel hautement qualifié</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Suivi personnalisé et régulier</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Respect de la dignité et de l'autonomie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action buttons - fixed positioning for mobile */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-mylli-primary/10 pt-4 mt-6 -mx-4 -mb-4 px-4 pb-4 sm:mx-0 sm:mb-0 sm:px-0 sm:pb-0 sm:static sm:bg-transparent sm:backdrop-blur-none sm:border-t-0 sm:pt-0 sm:mt-4">
          <div className="space-y-3">
            {link && (
              <Button asChild className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg group min-h-[48px] text-base font-medium`}>
                <Link to={link} className="flex items-center justify-center gap-2">
                  Contactez-nous
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </Button>
            )}
            
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full min-h-[48px] text-base font-medium border-mylli-primary/20 text-mylli-dark hover:bg-mylli-primary/5"
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
