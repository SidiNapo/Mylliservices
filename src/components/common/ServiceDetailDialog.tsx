import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
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
  return <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-mylli-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mylli-secondary/20 rounded-full filter blur-3xl"></div>
        
        <DialogHeader>
          <div className="flex items-center gap-3">
            {icon && <div className="p-3 rounded-full bg-gradient-to-br from-mylli-primary/20 to-mylli-secondary/20">{icon}</div>}
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-full mt-4"></div>
        </DialogHeader>
        
        <div className="relative z-10 py-4">
          <DialogDescription className="text-base leading-relaxed mb-6">
            {description.split('\n').map((paragraph, i) => <p key={i} className="mb-4">{paragraph}</p>)}
          </DialogDescription>
          
          {/* Additional content specific to service type */}
          <div className="space-y-4">
            <div className="p-4 bg-mylli-light/50 rounded-xl border border-mylli-primary/10">
              <h3 className="font-bold text-mylli-dark mb-2">Nos engagements:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-mylli-primary mr-2"></div>
                  <span>Personnel hautement qualifié</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-mylli-secondary mr-2"></div>
                  <span>Suivi personnalisé et régulier</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-mylli-quaternary mr-2"></div>
                  <span>Respect de la dignité et de l'autonomie</span>
                </li>
              </ul>
            </div>
          </div>
          
          {link && <div className="mt-6">
              <Button asChild className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg group`}>
                
              </Button>
            </div>}
        </div>
      </DialogContent>
    </Dialog>;
};
export default ServiceDetailDialog;