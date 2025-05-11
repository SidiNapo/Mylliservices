
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendFormDataToEmail } from '@/utils/emailjs';

type SubmitOptions = {
  formName: string;
  templateId?: string;
  resetForm?: boolean;
  successMessage?: {
    title?: string;
    description?: string;
  };
  errorMessage?: {
    title?: string;
    description?: string;
  };
};

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (
    formData: Record<string, any>,
    options: SubmitOptions,
    onReset?: () => void
  ) => {
    setIsSubmitting(true);
    
    try {
      // Ensure all form data is properly stringified
      const sanitizedFormData: Record<string, string> = {};
      
      // Explicitly process and sanitize each form field
      Object.keys(formData).forEach(key => {
        const value = formData[key];
        
        // Handle each data type explicitly
        if (value === null || value === undefined) {
          sanitizedFormData[key] = '';
        } else if (typeof value === 'object') {
          try {
            sanitizedFormData[key] = JSON.stringify(value);
          } catch {
            sanitizedFormData[key] = '[Object]';
          }
        } else {
          // Convert everything else to string
          sanitizedFormData[key] = String(value);
        }
      });

      console.log('Submitting with sanitized data:', sanitizedFormData);
      
      const result = await sendFormDataToEmail(
        sanitizedFormData,
        options.formName,
        options.templateId
      );

      if (result.success) {
        toast({
          title: options.successMessage?.title || "Formulaire envoyé",
          description: options.successMessage?.description || "Votre demande a été envoyée avec succès.",
        });

        if (options.resetForm && onReset) {
          onReset();
        }
        return true;
      } else {
        console.error('Email submission failed:', result.error);
        toast({
          title: options.errorMessage?.title || "Erreur",
          description: options.errorMessage?.description || "Une erreur est survenue lors de l'envoi du formulaire.",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: options.errorMessage?.title || "Erreur",
        description: options.errorMessage?.description || "Une erreur est survenue lors de l'envoi du formulaire.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};
