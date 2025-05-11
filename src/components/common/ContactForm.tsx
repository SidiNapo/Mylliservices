
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubmit } from '@/hooks/use-form-submit';
import { Label } from "@/components/ui/label";

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
    
    // Explicitly convert each field to a string to avoid template corruption
    const processedData = {
      name: String(formData.name || "Non spécifié"),
      email: String(formData.email || "Non spécifié"),
      phone: String(formData.phone || "Non spécifié"),
      subject: String(formData.subject || "Non spécifié"),
      service: String(formData.service || "Non spécifié"),
      message: String(formData.message || "Non spécifié"),
    };
    
    console.log('Submitting contact form:', processedData);
    
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
          <div className="space-y-2">
            <Label htmlFor="simple-name" className="text-mylli-dark font-medium">Votre nom</Label>
            <Input
              id="simple-name"
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom" 
              required 
              className="text-mylli-dark bg-white border-gray-200 focus:border-mylli-primary focus-visible:ring-mylli-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="simple-phone" className="text-mylli-dark font-medium">Votre téléphone</Label>
            <Input
              id="simple-phone"
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre téléphone" 
              required 
              className="text-mylli-dark bg-white border-gray-200 focus:border-mylli-primary focus-visible:ring-mylli-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="simple-email" className="text-mylli-dark font-medium">Votre email</Label>
            <Input
              id="simple-email"
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email" 
              required 
              className="text-mylli-dark bg-white border-gray-200 focus:border-mylli-primary focus-visible:ring-mylli-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="simple-message" className="text-mylli-dark font-medium">Votre message</Label>
            <Textarea
              id="simple-message"
              name="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message" 
              rows={3} 
              className="resize-none text-mylli-dark bg-white border-gray-200 focus:border-mylli-primary focus-visible:ring-mylli-primary"
            />
          </div>
          
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
          <label htmlFor="name" className="text-sm font-medium text-mylli-dark">Votre nom</label>
          <Input
            id="name"
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom complet" 
            required 
            className="rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary text-mylli-dark bg-white"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-mylli-dark">Votre email</label>
          <Input
            id="email"
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre adresse email" 
            required 
            className="rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary text-mylli-dark bg-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-mylli-dark">Votre téléphone</label>
          <Input
            id="phone"
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Entrez votre numéro de téléphone" 
            required 
            className="rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary text-mylli-dark bg-white"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-mylli-dark">Objet de votre demande</label>
          <select 
            id="subject"
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            className="rounded-xl h-10 w-full border border-mylli-gray/20 bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mylli-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-mylli-dark"
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
          <label htmlFor="service" className="text-sm font-medium text-mylli-dark">Service qui vous intéresse</label>
          <select 
            id="service"
            name="service" 
            value={formData.service}
            onChange={handleChange}
            className="rounded-xl h-10 w-full border border-mylli-gray/20 bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mylli-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-mylli-dark"
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
          <label htmlFor="message" className="text-sm font-medium text-mylli-dark">Votre message</label>
          <Textarea
            id="message"
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre demande en détail..." 
            rows={5} 
            className="resize-none rounded-xl border-mylli-gray/20 focus-visible:ring-mylli-primary text-mylli-dark bg-white"
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
