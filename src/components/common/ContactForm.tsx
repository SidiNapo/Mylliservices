
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormProps {
  simple?: boolean;
  className?: string;
}

const ContactForm = ({ simple = false, className = '' }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demande envoyée",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
    }, 1000);
  };
  
  if (simple) {
    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <div className="grid grid-cols-1 gap-4">
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom" 
            required 
            className="input-field"
          />
          
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre téléphone" 
            required 
            className="input-field"
          />
          
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email" 
            required 
            className="input-field"
          />
          
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message" 
            rows={3} 
            className="input-field resize-none"
          ></textarea>
          
          <Button type="submit" className="btn-accent w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
          </Button>
        </div>
      </form>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom" 
          required 
          className="input-field"
        />
        
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email" 
          required 
          className="input-field"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          placeholder="Votre téléphone" 
          required 
          className="input-field"
        />
        
        <select 
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">Objet de votre demande</option>
          <option value="information">Demande d'information</option>
          <option value="devis">Demande de devis</option>
          <option value="urgence">Demande urgente</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      
      <div className="mb-4">
        <select 
          name="service" 
          value={formData.service}
          onChange={handleChange}
          className="input-field w-full"
        >
          <option value="">Service qui vous intéresse (optionnel)</option>
          <option value="aide-soignant">Aide-soignant(e) à domicile</option>
          <option value="infirmier">Infirmier(ère) à domicile</option>
          <option value="garde-jour">Garde-malade de jour</option>
          <option value="garde-nuit">Garde-malade de nuit</option>
          <option value="garde-24h">Garde-malade 24h/24h</option>
        </select>
      </div>
      
      <div className="mb-4">
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message" 
          rows={5} 
          className="input-field resize-none w-full"
          required
        ></textarea>
      </div>
      
      <Button type="submit" className="btn-accent w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </Button>
    </form>
  );
};

export default ContactForm;
