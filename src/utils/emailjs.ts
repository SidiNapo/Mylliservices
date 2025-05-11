
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  emailjs.init("VChJY9kfgMI7KuKLf"); // Your EmailJS User ID
};

// Function to send email from any form
export const sendFormDataToEmail = async (
  formData: Record<string, any>, 
  formName: string,
  templateId: string = "template_azw35j3" // Your default template ID
) => {
  try {
    // Format the date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    
    // Create a basic template params object with required fields
    const templateParams: Record<string, string> = {
      form_name: String(formName || ''),
      system_date: formattedDate,
      system_time: formattedTime
    };
    
    // Process each form field to ensure valid string values
    Object.entries(formData).forEach(([key, value]) => {
      // Simple conversion to string, handling null, undefined, and objects
      if (value === null || value === undefined) {
        templateParams[key] = '';
      } else if (typeof value === 'object') {
        try {
          templateParams[key] = JSON.stringify(value);
        } catch {
          templateParams[key] = '[Object]';
        }
      } else {
        templateParams[key] = String(value);
      }
    });
    
    console.log('Sending email with params:', templateParams);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_x5plzgd", // Your EmailJS service ID
      templateId,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
