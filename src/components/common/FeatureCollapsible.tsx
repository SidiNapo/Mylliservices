
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FeatureCollapsibleProps {
  title: string;
  description: string;
  detailedContent: string;
  icon?: React.ReactNode;
  color?: string;
}

const FeatureCollapsible = ({
  title,
  description,
  detailedContent,
  icon,
  color = 'primary'
}: FeatureCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const colorVariants = {
    primary: "border-mylli-primary/20 bg-gradient-to-r from-mylli-primary/5 to-transparent",
    secondary: "border-mylli-secondary/20 bg-gradient-to-r from-mylli-secondary/5 to-transparent",
    accent: "border-mylli-quaternary/20 bg-gradient-to-r from-mylli-quaternary/5 to-transparent",
  };
  
  const colorClass = colorVariants[color as keyof typeof colorVariants] || colorVariants.primary;
  
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden"
    >
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div>
            <h3 className="font-bold text-lg text-mylli-dark">{title}</h3>
            <p className="text-mylli-gray text-sm">{description}</p>
          </div>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent>
        <div className={`px-5 pb-5 pt-3 border-t ${colorClass}`}>
          {detailedContent.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-3 text-mylli-gray last:mb-0">{paragraph}</p>
          ))}
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" className="text-xs group">
              En savoir plus
              <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FeatureCollapsible;
