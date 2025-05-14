
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { isRTL } = useLanguage();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const getContent = () => {
    // You could also use t() here, but for simplicity we'll use a direct approach
    const { language } = useLanguage();
    
    switch (language) {
      case 'en':
        return {
          title: "Page Not Found",
          message: "Sorry, the page you're looking for doesn't exist or has been moved.",
          button: "Back to Home"
        };
      case 'ar':
        return {
          title: "الصفحة غير موجودة",
          message: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
          button: "العودة إلى الصفحة الرئيسية"
        };
      case 'fr':
      default:
        return {
          title: "Page non trouvée",
          message: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
          button: "Retourner à l'accueil"
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen flex items-center justify-center bg-mylli-primary/5 px-4">
      <div className="text-center max-w-md">
        <div className="inline-block p-6 rounded-full bg-mylli-primary/10 mb-6">
          <span className="text-6xl font-bold text-mylli-primary">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-mylli-dark">{content.title}</h1>
        <p className="text-lg text-mylli-gray mb-8">
          {content.message}
        </p>
        <Button asChild className="btn-primary inline-flex items-center">
          <Link to="/">
            <Home size={18} className={isRTL ? "ml-2" : "mr-2"} />
            {content.button}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
