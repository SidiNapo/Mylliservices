import { useState } from 'react';
import { Phone } from 'lucide-react';
import { useSecureFormSubmit } from '@/hooks/use-secure-form-submit';
import { Label } from '@/components/ui/label';
import SecureFormWrapper from '@/components/security/SecureFormWrapper';

const RecallRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
  });
  
  const { submitForm, isSubmitting } = useSecureFormSubmit();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      preferredTime: '',
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await submitForm(
      formData, 
      {
        formName: "Demande de rappel",
        resetForm: true,
        requireCSRFValidation: true,
        successMessage: {
          title: "Demande reçue",
          description: "Nous vous contacterons dès que possible au moment indiqué."
        }
      },
      resetForm
    );
  };

  const handleSecurityViolation = (violation: string) => {
    console.warn('Security violation in recall request form:', violation);
  };
  
  return (
    <SecureFormWrapper 
      formType="recall-request" 
      onSecurityViolation={handleSecurityViolation}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-mylli-dark font-medium">Votre nom</Label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/20 to-mylli-accent/20 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
            <input 
              id="name"
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom" 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300 bg-white text-mylli-dark"
              required 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-mylli-dark font-medium">Votre téléphone</Label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/20 to-mylli-accent/20 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
            <input 
              id="phone"
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre téléphone" 
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300 bg-white text-mylli-dark" 
              required 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="preferredTime" className="text-mylli-dark font-medium">Moment préféré pour être rappelé</Label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary/20 to-mylli-accent/20 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
            <select 
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300 bg-white text-mylli-dark" 
              required
            >
              <option value="">Sélectionnez un moment</option>
              <option value="matin">Matin (9h - 12h)</option>
              <option value="midi">Midi (12h - 14h)</option>
              <option value="apres-midi">Après-midi (14h - 17h)</option>
              <option value="soir">Soir (17h - 19h)</option>
            </select>
          </div>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="w-full relative overflow-hidden px-6 py-4 bg-gradient-to-r from-mylli-primary to-mylli-accent text-white font-medium rounded-xl transition-all duration-500 hover:shadow-lg hover:from-mylli-primary hover:to-mylli-primary group"
            disabled={isSubmitting}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              {isSubmitting ? 'Envoi en cours...' : 'Demander un rappel'}
            </span>
          </button>
        </div>
      </form>
    </SecureFormWrapper>
  );
};

export default RecallRequestForm;
