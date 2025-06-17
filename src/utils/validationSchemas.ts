
import { z } from 'zod';

// Phone number validation for Moroccan numbers
const phoneRegex = /^(\+212|0)[5-7]\d{8}$/;

// Email validation with additional security checks
const emailSchema = z.string()
  .email('Format email invalide')
  .min(5, 'Email trop court')
  .max(100, 'Email trop long')
  .refine(email => !email.includes('<') && !email.includes('>'), 'Caractères non autorisés');

// Phone validation
const phoneSchema = z.string()
  .min(10, 'Numéro de téléphone trop court')
  .max(15, 'Numéro de téléphone trop long')
  .refine(phone => phoneRegex.test(phone.replace(/\s/g, '')), 'Format de téléphone invalide');

// Name validation with XSS protection
const nameSchema = z.string()
  .min(2, 'Nom trop court')
  .max(50, 'Nom trop long')
  .refine(name => !/[<>{}[\]\\\/]/.test(name), 'Caractères non autorisés dans le nom');

// Message validation with enhanced security
const messageSchema = z.string()
  .min(10, 'Message trop court')
  .max(1000, 'Message trop long')
  .refine(msg => !/<script|javascript:|on\w+=/i.test(msg), 'Contenu potentiellement dangereux détecté');

// Contact form validation schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  subject: z.string().min(1, 'Veuillez sélectionner un objet'),
  service: z.string().optional(),
  message: messageSchema
});

// Recall request validation schema
export const recallRequestSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  preferredTime: z.string().min(1, 'Veuillez sélectionner un moment')
});

// Generic form data sanitizer
export const sanitizeFormData = (data: Record<string, any>): Record<string, string> => {
  const sanitized: Record<string, string> = {};
  
  Object.keys(data).forEach(key => {
    const value = data[key];
    if (typeof value === 'string') {
      // Remove potential XSS patterns
      sanitized[key] = value
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim();
    } else {
      sanitized[key] = String(value || '');
    }
  });
  
  return sanitized;
};
