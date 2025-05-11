
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Services', path: '/services' },
    { name: 'Notre Fonctionnement', path: '/fonctionnement' },
    { name: 'Notre Équipe', path: '/equipe' },
    { name: 'À Propos', path: '/apropos' },
    { name: 'Articles', path: '/articles' } // Added Articles link here
    // Removed the Contact entry from the array
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
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png" alt="Mylli Services Logo" className="w-12 h-12" />
          <div className="font-serif font-bold text-xl">
            <span className="text-red-500">Mylli</span> <span className="text-mylli-primary">Services</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
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
        
        {/* Contact Button */}
        <div className="hidden md:block">
          <Button asChild className="btn-accent">
            <Link to="/contact">
              Contactez-nous
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mylli-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
