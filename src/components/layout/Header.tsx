
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import BrandName from '../common/BrandName';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, isRTL } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.functioning'), path: '/fonctionnement' },
    { name: t('nav.team'), path: '/equipe' },
    { name: t('nav.about'), path: '/apropos' },
    { name: t('nav.articles'), path: '/articles' }
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
          <img src="/lovable-uploads/c2fc9be5-1f88-4ea6-b024-37652a5a671e.png" alt="Mylli Services Logo" className="w-12 h-12" />
          <BrandName size="lg" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-1`}>
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${isActiveLink(link.path) ? 'active-nav-link' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Contact Button and Language Switcher */}
        <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
          <LanguageSwitcher />
          <Button asChild className="btn-accent">
            <Link to="/contact">
              {t('nav.contact')}
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className={`md:hidden flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
          <LanguageSwitcher />
          <button 
            className="text-mylli-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`p-2 ${isActiveLink(link.path) ? 'text-mylli-primary font-medium' : 'text-mylli-dark'}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="btn-accent w-full">
              <Link to="/contact" onClick={closeMenu}>
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
