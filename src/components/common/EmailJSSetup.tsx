
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle } from "lucide-react";

const EmailJSSetup = () => {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Configuration EmailJS requise</AlertTitle>
      <AlertDescription className="space-y-2">
        <p className="mt-2">
          Pour que l'envoi des formulaires par email fonctionne, vous devez configurer EmailJS :
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Créez un compte sur <a href="https://www.emailjs.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">emailjs.com</a></li>
          <li>Créez un service EmailJS et notez l'ID du service</li>
          <li>Créez un modèle d'email et notez l'ID du modèle</li>
          <li>Obtenez votre ID utilisateur EmailJS</li>
          <li>Remplacez les valeurs par défaut dans le fichier <code className="bg-gray-100 px-1 py-0.5 rounded">src/utils/emailjs.ts</code></li>
        </ol>
      </AlertDescription>
    </Alert>
  );
};

export default EmailJSSetup;
