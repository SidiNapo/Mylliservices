
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from '../common/LanguageSwitcher';
import BrandName from '../common/BrandName';
import { useLanguage } from '@/context/LanguageContext';

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
    {
      name: t('nav.home'),
      path: '/'
    },
    {
      name: t('nav.functioning'),
      path: '/fonctionnement'
    },
    {
      name: t('nav.team'),
      path: '/equipe'
    },
    {
      name: t('nav.about'),
      path: '/apropos'
    },
    {
      name: t('nav.articles'),
      path: '/articles'
    }
  ];

  const serviceItems = [
    {
      title: "Infirmier(ère) à domicile",
      description: "Soins médicaux professionnels à votre domicile",
      href: "/services/infirmier",
      icon: Heart
    },
    {
      title: "Aide-soignant(e) à domicile",
      description: "Accompagnement dans les actes de la vie quotidienne",
      href: "/services/aide-soignant",
      icon: User
    }
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md h-16">
      <div className="container-custom flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            alt="Mylli Services Logo" 
            className="h-10 w-auto" 
            src="/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className={`${isRTL ? 'space-x-reverse' : ''} space-x-1`}>
            {navLinks.map(link => (
              <NavigationMenuItem key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActiveLink(link.path) ? 'active-nav-link' : ''}`} 
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
            
            {/* Services dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`nav-link ${location.pathname.startsWith('/services') ? 'active-nav-link' : ''}`}>
                {t('nav.services')}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] bg-white border border-gray-200 shadow-lg rounded-lg">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-mylli-light/50 to-mylli-light p-6 no-underline outline-none focus:shadow-md hover:bg-mylli-light/70 transition-colors"
                        to="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-mylli-dark">
                          Nos Services
                        </div>
                        <p className="text-sm leading-tight text-mylli-gray">
                          Découvrez tous nos services d'aide et de soins à domicile
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <div className="grid gap-2">
                    {serviceItems.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mylli-light/50 focus:bg-mylli-light/50 group"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-mylli-primary group-hover:text-mylli-secondary transition-colors" />
                            <div>
                              <div className="text-sm font-medium leading-none text-mylli-dark group-hover:text-mylli-primary transition-colors">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-mylli-gray mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
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
            
            {/* Mobile Services Section */}
            <div className="border-t pt-4">
              <Link 
                to="/services" 
                className={`p-2 block ${location.pathname.startsWith('/services') ? 'text-mylli-primary font-medium' : 'text-mylli-dark'}`} 
                onClick={closeMenu}
              >
                {t('nav.services')}
              </Link>
              <div className="ml-4 mt-2 space-y-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-2 p-2 text-sm text-mylli-gray hover:text-mylli-primary transition-colors"
                    onClick={closeMenu}
                  >
                    <item.icon size={16} />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
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
