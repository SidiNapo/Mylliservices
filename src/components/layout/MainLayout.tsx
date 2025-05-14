
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

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
  
  // Apply RTL styling
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
  }, [isRTL]);

  // Only apply special styling to the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className={`flex flex-col min-h-screen ${!isHomePage ? 'bg-gradient-to-br from-white to-mylli-light/30' : ''}`}>
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
