import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import BreadcrumbNav from '../seo/BreadcrumbNav';
import { useLanguage } from '@/context/LanguageContext';
import { preloadCriticalResources, measureCoreWebVitals } from '@/utils/seoUtils';
import PerformanceMonitor from '../seo/PerformanceMonitor';
import Analytics from '../seo/Analytics';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const { isRTL } = useLanguage();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  // Apply RTL styling and SEO optimizations
  useEffect(() => {
    // Set RTL direction for the whole document
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Apply RTL CSS variables
    if (isRTL) {
      document.documentElement.classList.add('rtl-layout');
    } else {
      document.documentElement.classList.remove('rtl-layout');
    }
    
    // Apply RTL class to body for additional styling if needed
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

    // SEO optimizations
    preloadCriticalResources();
    measureCoreWebVitals();

    // Add console log for debugging
    console.log(`Language direction set to: ${isRTL ? 'RTL' : 'LTR'}`);
  }, [isRTL]);

  // Only apply special styling to the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const showBreadcrumbs = !isHomePage;

  return (
    <HelmetProvider>
      <div className={`flex flex-col min-h-screen ${!isHomePage ? 'bg-gradient-to-br from-white to-mylli-light/30' : ''}`}>
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Analytics - Replace with your actual Google Analytics ID */}
        <Analytics 
          gtag="G-XXXXXXXXXX" // Replace with your GA4 measurement ID
          gsc="your-google-search-console-verification-code" // Replace with your GSC verification code
        />
        
        <Header />
        {showBreadcrumbs && <BreadcrumbNav />}
        <main className={`flex-grow ${showBreadcrumbs ? 'pt-16' : 'pt-16'}`} role="main">
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
