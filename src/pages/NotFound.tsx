
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-mylli-dark">Page non trouvée</h1>
        <p className="text-lg text-mylli-gray mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="btn-primary inline-flex items-center">
          <Link to="/">
            <Home size={18} className="mr-2" />
            Retour à l'accueil
          </Link>
        </Button>
        <div className="mt-8">
          <img 
            alt="Mylli Services Logo" 
            className="h-8 w-auto mx-auto" 
            src="/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png" 
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
