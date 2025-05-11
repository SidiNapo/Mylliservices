
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
    const formattedDate = now.toLocaleDateString('fr-FR');
    const formattedTime = now.toLocaleTimeString('fr-FR');
    
    // Prepare the data for sending - ensure all fields are properly stringified
    const templateParams = {
      form_name: formName,
      system_date: formattedDate,
      system_time: formattedTime,
      // Include all form fields with proper string conversion
      ...Object.entries(formData).reduce((acc, [key, value]) => {
        // Convert any non-string values to strings to prevent variable corruption
        acc[key] = value === null || value === undefined ? '' : String(value);
        return acc;
      }, {} as Record<string, string>)
    };
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_x5plzgd", // Your EmailJS service ID
      templateId,
      templateParams
    );
    
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
