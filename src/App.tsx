
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import FonctionnementPage from "./pages/Fonctionnement";
import EquipePage from "./pages/Equipe";
import AProposPage from "./pages/APropos";
import ContactPage from "./pages/Contact";
import AideSoignantPage from "./pages/services/AideSoignant";
import InfirmierPage from "./pages/services/Infirmier";
import ArticlesPage from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import { initEmailJS } from "./utils/emailjs";
import { LanguageProvider } from "./context/LanguageContext";
import "./styles/global.css"; // Import global CSS for RTL support

const queryClient = new QueryClient();

const App: React.FC = () => {
  // Initialize EmailJS when the app loads
  useEffect(() => {
    try {
      initEmailJS();
      console.log("EmailJS initialized successfully");
      
      // Set document title with the styled Mylli Services name (text only version for title)
      document.title = "Mylli Services - Accompagnement à domicile depuis 2014";
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
              <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
              <Route path="/services/aide-soignant" element={<MainLayout><AideSoignantPage /></MainLayout>} />
              <Route path="/services/infirmier" element={<MainLayout><InfirmierPage /></MainLayout>} />
              <Route path="/fonctionnement" element={<MainLayout><FonctionnementPage /></MainLayout>} />
              <Route path="/equipe" element={<MainLayout><EquipePage /></MainLayout>} />
              <Route path="/apropos" element={<MainLayout><AProposPage /></MainLayout>} />
              <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
              <Route path="/articles" element={<MainLayout><ArticlesPage /></MainLayout>} />
              <Route path="/articles/:slug" element={<MainLayout><ArticleDetail /></MainLayout>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
