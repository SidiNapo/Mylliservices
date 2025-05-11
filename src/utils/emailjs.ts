
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  emailjs.init("VChJY9kfgMI7KuKLf"); // Your EmailJS User ID
};

// Helper function to ensure all values are properly formatted strings
const formatValue = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  // Handle objects and arrays by converting to JSON string
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return String(value);
    }
  }
  
  // Convert everything else to string
  return String(value);
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
    const formattedDate = now.toLocaleDateString('fr-FR');
    const formattedTime = now.toLocaleTimeString('fr-FR');
    
    // Create a clean template params object with proper string conversion
    const templateParams: Record<string, string> = {
      form_name: formatValue(formName),
      system_date: formattedDate,
      system_time: formattedTime,
    };
    
    // Process each form field to ensure it's a properly formatted string
    Object.entries(formData).forEach(([key, value]) => {
      templateParams[key] = formatValue(value);
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
