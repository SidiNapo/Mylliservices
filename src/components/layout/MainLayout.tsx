
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import BreadcrumbNav from '../seo/BreadcrumbNav';
import WhatsAppButton from '../common/WhatsAppButton';
import { preloadCriticalResources, measureCoreWebVitals } from '@/utils/seoUtils';
import '../../styles/whatsapp-button.css';

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
  
  // SEO optimizations
  useEffect(() => {
    // SEO optimizations
    preloadCriticalResources();
    measureCoreWebVitals();
  }, []);

  // Only apply special styling to the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const showBreadcrumbs = !isHomePage;

  return (
    <HelmetProvider>
      <Helmet>
        {/* Force refresh favicon for iOS - add timestamp to bust cache */}
        <link rel="icon" type="image/png" sizes="32x32" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="shortcut icon" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        
        {/* iOS specific favicon implementation */}
        <link rel="apple-touch-icon" sizes="180x180" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        <link rel="apple-touch-icon" sizes="57x57" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        
        {/* Default apple-touch-icon without sizes for better iOS compatibility */}
        <link rel="apple-touch-icon" href={`/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${Date.now()}`} />
        
        {/* iOS meta tags for better web app integration */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mylli Services" />
      </Helmet>
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
