import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import CookieConsentManager from '@/components/common/CookieConsentManager';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';
import AproposPage from '@/pages/AproposPage';
import FonctionnementPage from '@/pages/FonctionnementPage';
import OutilsPage from '@/pages/OutilsPage';
import AideSoignantPage from '@/pages/AideSoignantPage';
import InfirmierPage from '@/pages/InfirmierPage';
import ArticlesPage from '@/pages/ArticlesPage';
import SEOHead from '@/components/seo/SEOHead';
import NotFoundPage from '@/pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';
import SecurityProvider from '@/components/security/SecurityProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <SecurityProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CookieConsentManager>
            <Toaster />
            <HelmetProvider>
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
          </CookieConsentManager>
        </QueryClientProvider>
      </BrowserRouter>
    </SecurityProvider>
  );
}

export default App;
