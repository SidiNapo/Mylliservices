
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t, isRTL } = useLanguage();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-banner-gradient min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-block p-6 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          <span className="text-6xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('notFound.title')}</h1>
        <p className="text-lg text-white/90 mb-8">
          {t('notFound.message')}
        </p>
        <Button asChild className="bg-white text-mylli-primary hover:bg-white/90 inline-flex items-center">
          <Link to="/">
            <Home size={18} className={isRTL ? "ml-2" : "mr-2"} />
            {t('notFound.button')}
          </Link>
        </Button>
        <div className="mt-8">
          <img 
            alt="Mylli Services Logo" 
            className="h-8 w-auto mx-auto filter brightness-0 invert" 
            src="/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png" 
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
