
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
      const result = await sendFormDataToEmail(
        formData,
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
        toast({
          title: options.errorMessage?.title || "Erreur",
          description: options.errorMessage?.description || "Une erreur est survenue lors de l'envoi du formulaire.",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
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
