
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import BrandName from '@/components/common/BrandName';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import CartTrigger from '@/components/common/CartTrigger';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Équipe', path: '/equipe' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white py-2 px-4 text-sm">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+212661377438" className="flex items-center gap-2 hover:text-mylli-light transition-colors">
              <Phone size={14} />
              <span>+212 661 37 74 38</span>
            </a>
            <a href="mailto:info@mylliservices.com" className="flex items-center gap-2 hover:text-mylli-light transition-colors">
              <Mail size={14} />
              <span>info@mylliservices.com</span>
            </a>
          </div>
          <div className="text-xs opacity-90">
            Disponible 24h/24 - 7j/7
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png" 
                alt="Mylli Services Logo" 
                className="h-12 w-auto"
              />
              <BrandName className="text-2xl" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link ${
                    isActivePath(item.path) ? 'active-nav-link' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <CartTrigger />
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 border-t border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 text-lg transition-colors ${
                    isActivePath(item.path)
                      ? 'text-mylli-primary font-semibold'
                      : 'text-gray-700 hover:text-mylli-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
