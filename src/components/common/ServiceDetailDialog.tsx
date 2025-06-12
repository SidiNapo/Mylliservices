
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
      <DialogContent className="w-[95vw] max-w-[400px] h-[85vh] max-h-[600px] mx-auto p-0 overflow-hidden flex flex-col">
        {/* Header with close button */}
        <div className="relative p-4 pb-0 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200"
            aria-label="Fermer"
          >
            <X size={18} className="text-mylli-dark" />
          </button>

          {/* Background decorations */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-mylli-primary/15 rounded-full filter blur-2xl"></div>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-mylli-secondary/15 rounded-full filter blur-2xl"></div>
        </div>

        {/* Content area - scrollable */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <DialogHeader className="relative z-10 pb-4">
            <div className="flex items-center gap-3 pr-8">
              {icon && (
                <div className="p-2 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20 flex-shrink-0">
                  <div className="text-lg text-mylli-primary">
                    {icon}
                  </div>
                </div>
              )}
              <DialogTitle className="text-lg font-bold text-mylli-dark leading-tight">
                {title}
              </DialogTitle>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-full mt-3"></div>
          </DialogHeader>
          
          <div className="relative z-10 space-y-4">
            <DialogDescription className="text-sm leading-relaxed text-mylli-gray">
              {description.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </DialogDescription>
            
            {/* Additional content */}
            <div className="p-3 bg-mylli-light/50 rounded-xl border border-mylli-primary/10">
              <h3 className="font-bold text-mylli-dark mb-2 text-sm">
                Nos engagements:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-xs">
                  <div className="w-2 h-2 rounded-full bg-mylli-primary mr-2 flex-shrink-0"></div>
                  <span>Personnel hautement qualifié</span>
                </li>
                <li className="flex items-center text-xs">
                  <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2 flex-shrink-0"></div>
                  <span>Suivi personnalisé et régulier</span>
                </li>
                <li className="flex items-center text-xs">
                  <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-2 flex-shrink-0"></div>
                  <span>Respect de la dignité et de l'autonomie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
          
        {/* Fixed bottom buttons */}
        <div className="flex-shrink-0 p-4 pt-2 bg-white border-t border-gray-100">
          <div className="flex flex-col gap-2">
            {link && (
              <Button 
                asChild 
                className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg group py-3 text-sm font-medium min-h-[44px] flex items-center justify-center`}
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
              className="w-full py-3 text-sm font-medium border-mylli-primary/20 text-mylli-primary hover:bg-mylli-primary/5 min-h-[44px] flex items-center justify-center"
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
