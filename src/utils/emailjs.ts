
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
// You'll need to replace this with your actual EmailJS User ID from your account
export const initEmailJS = () => {
  emailjs.init("VChJY9kfgMI7KuKLf"); // Replace with your actual EmailJS User ID
};

// Function to send email from any form
export const sendFormDataToEmail = async (
  formData: Record<string, any>, 
  formName: string,
  templateId: string = "template_default" // Replace with your default template ID
) => {
  try {
    // Prepare the data for sending
    const templateParams = {
      form_name: formName,
      ...formData,
    };
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_x5plzgd", // Replace with your EmailJS service ID
      templateId,
      templateParams
    );
    
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
