
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

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
