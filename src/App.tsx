
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/Home';
import ServicesPage from '@/pages/Services';
import AideSoignantPage from '@/pages/services/AideSoignant';
import InfirmierPage from '@/pages/services/Infirmier';
import ContactPage from '@/pages/Contact';
import FonctionnementPage from '@/pages/Fonctionnement';
import OutilsPage from '@/pages/Outils';
import AProposPage from '@/pages/APropos';
import ArticlesPage from '@/pages/Articles';
import ArticleDetailPage from '@/pages/ArticleDetail';
import NotFoundPage from '@/pages/NotFound';
import CookieConsentManager from '@/components/cookies/CookieConsentManager';
import './App.css';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    // iOS-specific optimizations
    const applyIOSOptimizations = () => {
      // Prevent zoom on input focus for iOS
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
        );
      }

      // Prevent rubber band scrolling on iOS
      document.body.style.overscrollBehavior = 'none';
      
      // Improve touch responsiveness on iOS
      document.body.style.touchAction = 'manipulation';
      
      // Prevent text selection highlighting on iOS
      const style = document.createElement('style');
      style.textContent = `
        * {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        input, textarea {
          -webkit-user-select: text;
        }
        .selectable-text {
          -webkit-user-select: text;
        }
        /* iOS Safari specific fixes */
        @supports (-webkit-touch-callout: none) {
          .fixed {
            position: -webkit-sticky;
            position: sticky;
          }
          
          /* Fix for iOS viewport units */
          .min-h-screen {
            min-height: 100vh;
            min-height: -webkit-fill-available;
          }
          
          /* Smooth scrolling for iOS */
          html {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Button touch improvements */
          button, .btn {
            -webkit-appearance: none;
            border-radius: 0;
          }
        }
        
        /* Additional iOS fixes */
        .ios-fix {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `;
      document.head.appendChild(style);

      // Handle iOS safe area
      const handleSafeArea = () => {
        const safeAreaStyle = document.createElement('style');
        safeAreaStyle.textContent = `
          :root {
            --safe-area-inset-top: env(safe-area-inset-top);
            --safe-area-inset-right: env(safe-area-inset-right);
            --safe-area-inset-bottom: env(safe-area-inset-bottom);
            --safe-area-inset-left: env(safe-area-inset-left);
          }
          
          .safe-area-top {
            padding-top: calc(var(--safe-area-inset-top) + 1rem);
          }
          
          .safe-area-bottom {
            padding-bottom: calc(var(--safe-area-inset-bottom) + 1rem);
          }
        `;
        document.head.appendChild(safeAreaStyle);
      };

      handleSafeArea();

      // Prevent iOS bounce effect
      const preventBounce = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        const isScrollable = target.scrollHeight > target.clientHeight;
        
        if (!isScrollable) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchmove', preventBounce, { passive: false });

      // Cleanup function
      return () => {
        document.removeEventListener('touchmove', preventBounce);
      };
    };

    // Apply optimizations
    const cleanup = applyIOSOptimizations();

    // Performance optimizations
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause heavy animations when tab is not visible
        document.body.classList.add('paused');
      } else {
        document.body.classList.remove('paused');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <Router>
      <div className="App ios-fix">
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/aide-soignant" element={<AideSoignantPage />} />
            <Route path="/services/infirmier" element={<InfirmierPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fonctionnement" element={<FonctionnementPage />} />
            <Route path="/outils" element={<OutilsPage />} />
            <Route path="/apropos" element={<AProposPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
        <CookieConsentManager />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
