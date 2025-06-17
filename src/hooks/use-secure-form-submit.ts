
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendFormDataToEmail } from '@/utils/emailjs';
import { sanitizeFormData, contactFormSchema, recallRequestSchema } from '@/utils/validationSchemas';
import { securityMonitor, detectXSSAttempt } from '@/utils/securityMonitoring';
import { useSecurity } from '@/components/security/SecurityProvider';
import { z } from 'zod';

type SubmitOptions = {
  formName: string;
  templateId?: string;
  resetForm?: boolean;
  validationSchema?: z.ZodSchema;
  successMessage?: {
    title?: string;
    description?: string;
  };
  errorMessage?: {
    title?: string;
    description?: string;
  };
};

export const useSecureFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { isRateLimited } = useSecurity();

  const submitForm = async (
    formData: Record<string, any>,
    options: SubmitOptions,
    onReset?: () => void
  ) => {
    // Check rate limiting
    if (isRateLimited) {
      toast({
        title: "Limite atteinte",
        description: "Trop de requêtes. Veuillez attendre avant de soumettre à nouveau.",
        variant: "destructive",
      });
      securityMonitor.logEvent('rate_limit', { formName: options.formName });
      return false;
    }

    setIsSubmitting(true);
    
    try {
      // Step 1: Sanitize input data
      const sanitizedData = sanitizeFormData(formData);
      
      // Step 2: Detect XSS attempts
      const allValues = Object.values(sanitizedData).join(' ');
      if (detectXSSAttempt(allValues)) {
        securityMonitor.logEvent('xss_attempt', { 
          formName: options.formName,
          suspiciousInput: allValues.substring(0, 100)
        });
        
        toast({
          title: "Contenu non autorisé",
          description: "Votre message contient du contenu potentiellement dangereux.",
          variant: "destructive",
        });
        return false;
      }

      // Step 3: Runtime validation with Zod
      if (options.validationSchema) {
        try {
          options.validationSchema.parse(sanitizedData);
        } catch (validationError) {
          securityMonitor.logEvent('invalid_input', { 
            formName: options.formName,
            errors: validationError instanceof z.ZodError ? validationError.errors : []
          });
          
          toast({
            title: "Données invalides",
            description: "Veuillez vérifier les informations saisies.",
            variant: "destructive",
          });
          return false;
        }
      }

      // Step 4: Log legitimate form submission
      securityMonitor.logEvent('form_submission', { 
        formName: options.formName,
        timestamp: Date.now()
      });

      console.log('Secure submission with sanitized data:', sanitizedData);
      
      // Step 5: Send email
      const result = await sendFormDataToEmail(
        sanitizedData,
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

  // Convenience methods for common forms
  const submitContactForm = (formData: Record<string, any>, onReset?: () => void) => {
    return submitForm(formData, {
      formName: "Formulaire de contact",
      validationSchema: contactFormSchema,
      resetForm: true,
      successMessage: {
        title: "Message envoyé",
        description: "Nous vous contacterons dans les plus brefs délais."
      }
    }, onReset);
  };

  const submitRecallRequest = (formData: Record<string, any>, onReset?: () => void) => {
    return submitForm(formData, {
      formName: "Demande de rappel",
      validationSchema: recallRequestSchema,
      resetForm: true,
      successMessage: {
        title: "Demande reçue",
        description: "Nous vous contacterons dès que possible au moment indiqué."
      }
    }, onReset);
  };

  return {
    submitForm,
    submitContactForm,
    submitRecallRequest,
    isSubmitting
  };
};
