
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
    <div className="min-h-screen flex items-center justify-center bg-mylli-primary/5 px-4">
      <div className="text-center max-w-md">
        <div className="inline-block p-6 rounded-full bg-mylli-primary/10 mb-6">
          <span className="text-6xl font-bold text-mylli-primary">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-mylli-dark">{t('notFound.title')}</h1>
        <p className="text-lg text-mylli-gray mb-8">
          {t('notFound.message')}
        </p>
        <Button asChild className="btn-primary inline-flex items-center">
          <Link to="/">
            <Home size={18} className={isRTL ? "ml-2" : "mr-2"} />
            {t('notFound.button')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
