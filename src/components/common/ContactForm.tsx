import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubmit } from '@/hooks/use-form-submit';

interface ContactFormProps {
  simple?: boolean;
  className?: string;
}

const ContactForm = ({ simple = false, className = '' }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  
  const { submitForm, isSubmitting } = useFormSubmit();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: ''
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process form data to ensure values are properly formatted
    const processedData = {
      name: formData.name.trim() || "Non spécifié",
      email: formData.email.trim() || "Non spécifié",
      phone: formData.phone.trim() || "Non spécifié",
      subject: formData.subject || "Non spécifié",
      service: formData.service || "Non spécifié",
      message: formData.message.trim() || "Non spécifié",
    };
    
    await submitForm(
      processedData, 
      {
        formName: "Formulaire de contact",
        resetForm: true,
        successMessage: {
          title: "Message envoyé",
          description: "Nous vous contacterons dans les plus brefs délais."
        }
      },
      resetForm
    );
  };
  
  if (simple) {
    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <div className="grid grid-cols-1 gap-4">
          <Input
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom" 
            required 
            className="focus:border-mylli-primary"
          />
          
          <Input
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre téléphone" 
            required 
            className="focus:border-mylli-primary"
          />
          
          <Input
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email" 
            required 
            className="focus:border-mylli-primary"
          />
          
          <Textarea
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message" 
            rows={3} 
            className="resize-none focus:border-mylli-primary"
          />
          
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-mylli-primary to-mylli-accent hover:from-mylli-primary/90 hover:to-mylli-accent/90 text-white w-full rounded-xl py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
            {!isSubmitting && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-mylli-dark/80">Votre nom</label>
          <Input
            id="name"
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom complet" 
            required 
            className="rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-mylli-dark/80">Votre email</label>
          <Input
            id="email"
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre adresse email" 
            required 
            className="rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-mylli-dark/80">Votre téléphone</label>
          <Input
            id="phone"
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Entrez votre numéro de téléphone" 
            required 
            className="rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-mylli-dark/80">Objet de votre demande</label>
          <select 
            id="subject"
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            className="rounded-xl h-10 w-full border border-mylli-gray/20 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mylli-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Sélectionnez un objet</option>
            <option value="information">Demande d'information</option>
            <option value="devis">Demande de devis</option>
            <option value="urgence">Demande urgente</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-mylli-dark/80">Service qui vous intéresse</label>
          <select 
            id="service"
            name="service" 
            value={formData.service}
            onChange={handleChange}
            className="rounded-xl h-10 w-full border border-mylli-gray/20 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mylli-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Service qui vous intéresse (optionnel)</option>
            <option value="aide-soignant">Aide-soignant(e) à domicile</option>
            <option value="infirmier">Infirmier(ère) à domicile</option>
            <option value="garde-jour">Garde-malade de jour</option>
            <option value="garde-nuit">Garde-malade de nuit</option>
            <option value="garde-24h">Garde-malade 24h/24h</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-mylli-dark/80">Votre message</label>
          <Textarea
            id="message"
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre demande en détail..." 
            rows={5} 
            className="resize-none rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary"
            required
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="bg-gradient-to-r from-mylli-primary to-mylli-accent hover:from-mylli-primary/90 hover:to-mylli-accent/90 text-white rounded-xl py-6 px-8 transition-all duration-300 flex items-center justify-center gap-3 h-auto" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer votre message'}
        {!isSubmitting && <Send className="h-5 w-5" />}
      </Button>
    </form>
  );
};

export default ContactForm;
