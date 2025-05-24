
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import BrandName from '../common/BrandName';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section with Updated Logo */}
          <div>
            <Link to="/" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 mb-4`}>
              <img src="/lovable-uploads/ded65620-decd-481e-af15-8a646459626b.png" alt="Mylli Services Logo" className="w-10 h-10" />
              <BrandName />
            </Link>
            <p className="text-mylli-gray mb-6">
              {t('footer.about')}
            </p>
            <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-3 ${isRTL ? 'mr-[80px]' : 'mx-[80px]'}`}>
              <a href="https://web.facebook.com/mylliservices" aria-label="Facebook" className="w-9 h-9 bg-mylli-primary/10 hover:bg-mylli-primary/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-mylli-primary" />
              </a>
              <a href="https://www.instagram.com/mylliservices" aria-label="Instagram" className="w-9 h-9 bg-mylli-primary/10 hover:bg-mylli-primary/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-mylli-primary" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className={isRTL ? 'rtl' : ''}>
            <h4 className="font-serif font-bold text-lg mb-4 text-mylli-dark">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/fonctionnement" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.functioning')}</Link></li>
              <li><Link to="/equipe" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.team')}</Link></li>
              <li><Link to="/apropos" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/articles" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.articles')}</Link></li>
              <li><Link to="/contact" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className={isRTL ? 'rtl' : ''}>
            <h4 className="font-serif font-bold text-lg mb-4 text-mylli-dark">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><Link to="/services/aide-soignant" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('footer.service.caregiver')}</Link></li>
              <li><Link to="/services/infirmier" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('footer.service.nurse')}</Link></li>
              <li><Link to="/services/garde-malade-jour" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('footer.service.day')}</Link></li>
              <li><Link to="/services/garde-malade-nuit" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('footer.service.night')}</Link></li>
              <li><Link to="/services/garde-malade-24h" className="text-mylli-gray hover:text-mylli-primary transition-colors">{t('footer.service.24h')}</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className={isRTL ? 'rtl' : ''}>
            <h4 className="font-serif font-bold text-lg mb-4 text-mylli-dark">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className={`text-mylli-primary mt-1 ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                <span className="text-mylli-gray">19, rue Masmouda hay Al Hana - Casablanca - 20210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className={`text-mylli-primary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                <a href="tel:+212661377438" className="text-mylli-gray hover:text-mylli-primary transition-colors">+212 661 37 74 38</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className={`text-mylli-primary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                <a href="mailto:info@mylliservices.com" className="text-mylli-gray hover:text-mylli-primary transition-colors">info@mylliservices.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mylli-gray text-sm">&copy; {currentYear} <BrandName size="sm" />. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
