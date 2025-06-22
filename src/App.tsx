
import { Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import APropos from "./pages/APropos";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import MotDuPresident from "./pages/MotDuPresident";
import Equipe from "./pages/Equipe";
import Fonctionnement from "./pages/Fonctionnement";
import NotFound from "./pages/NotFound";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CookiePolicy from "./pages/CookiePolicy";
import AideSoignant from "./pages/services/AideSoignant";
import Infirmier from "./pages/services/Infirmier";
import { initializeFaviconManager, cleanURLFragments } from "./utils/faviconManager";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Clean URL and initialize enhanced favicon system immediately
    console.log('🚀 Initializing Mylli Services App...');
    
    // Clean any URL fragments first
    cleanURLFragments();
    
    // Initialize the enhanced favicon manager for iOS Safari window switching
    initializeFaviconManager();
    
    // Additional Safari-specific initialization
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
      console.log('🍎 Safari detected - Enhanced favicon system active');
      
      // Preload favicon for faster switching
      const img = new Image();
      img.src = '/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png';
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/aide-soignant" element={<AideSoignant />} />
                <Route path="/services/infirmier" element={<Infirmier />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/mot-du-president" element={<MotDuPresident />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/fonctionnement" element={<Fonctionnement />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                <Route path="/politique-cookies" element={<CookiePolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
