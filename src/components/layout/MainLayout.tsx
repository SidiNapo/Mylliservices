
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import BreadcrumbNav from '../seo/BreadcrumbNav';
import WhatsAppButton from '../common/WhatsAppButton';
import '../../styles/whatsapp-button.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  
  // Optimized scroll to top
  useEffect(() => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // Instant for better performance
      });
    });
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const showBreadcrumbs = !isHomePage;

  return (
    <HelmetProvider>
      <div className={`flex flex-col min-h-screen ${!isHomePage ? 'bg-gradient-to-br from-white to-mylli-light/30' : ''}`}>
        <Header />
        {showBreadcrumbs && <BreadcrumbNav />}
        <main className="flex-grow" role="main" style={{ marginTop: '64px' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
