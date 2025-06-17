
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import CookieConsentManager from '@/components/cookies/CookieConsentManager';
import HomePage from '@/pages/Home';
import ServicesPage from '@/pages/Services';
import ContactPage from '@/pages/Contact';
import AproposPage from '@/pages/APropos';
import FonctionnementPage from '@/pages/Fonctionnement';
import OutilsPage from '@/pages/Articles';
import AideSoignantPage from '@/pages/services/AideSoignant';
import InfirmierPage from '@/pages/services/Infirmier';
import ArticlesPage from '@/pages/Articles';
import SEOHead from '@/components/seo/SEOHead';
import NotFoundPage from '@/pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';
import SecurityProvider from '@/components/security/SecurityProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <SecurityProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <CookieConsentManager />
            <Toaster />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/apropos" element={<AproposPage />} />
              <Route path="/fonctionnement" element={<FonctionnementPage />} />
              <Route path="/outils" element={<OutilsPage />} />
              <Route path="/services/aide-soignant" element={<AideSoignantPage />} />
              <Route path="/services/infirmier" element={<InfirmierPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </HelmetProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </SecurityProvider>
  );
}

export default App;
