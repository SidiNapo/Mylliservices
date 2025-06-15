import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from "@/components/layout/MainLayout";
import CookieConsentManager from "@/components/cookies/CookieConsentManager";

// Lazy load components
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const APropos = lazy(() => import("@/pages/APropos"));
const Contact = lazy(() => import("@/pages/Contact"));
const Equipe = lazy(() => import("@/pages/Equipe"));
const Fonctionnement = lazy(() => import("@/pages/Fonctionnement"));
const Articles = lazy(() => import("@/pages/Articles"));
const ArticleDetail = lazy(() => import("@/pages/ArticleDetail"));
const Infirmier = lazy(() => import("@/pages/services/Infirmier"));
const AideSoignant = lazy(() => import("@/pages/services/AideSoignant"));
const PolitiqueConfidentialite = lazy(() => import("@/pages/PolitiqueConfidentialite"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const MotDuPresident = lazy(() => import("@/pages/MotDuPresident"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <MainLayout>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/infirmier" element={<Infirmier />} />
                    <Route path="/services/aide-soignant" element={<AideSoignant />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path="/equipe" element={<Equipe />} />
                    <Route path="/fonctionnement" element={<Fonctionnement />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:slug" element={<ArticleDetail />} />
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                    <Route path="/politique-cookies" element={<CookiePolicy />} />
                    <Route path="/mot-du-president" element={<MotDuPresident />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </MainLayout>
              <CookieConsentManager />
              <Toaster />
            </div>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
