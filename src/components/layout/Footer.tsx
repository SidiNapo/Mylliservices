import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section with Updated Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/700a6bf7-7fa1-4267-8bb1-9c87c6358e6a.png" alt="Mylli Services Logo" className="w-10 h-10" />
              <div className="font-serif font-bold text-xl">
                <span className="text-red-500">Mylli</span> <span className="text-mylli-primary">Services</span>
              </div>
            </Link>
            <p className="text-mylli-gray mb-6">
              Depuis 2014, accompagnement à domicile des personnes fragilisées avec dévouement et professionnalisme.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" aria-label="Facebook" className="w-9 h-9 bg-mylli-primary/10 hover:bg-mylli-primary/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-mylli-primary" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-9 h-9 bg-mylli-primary/10 hover:bg-mylli-primary/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-mylli-primary" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="w-9 h-9 bg-mylli-primary/10 hover:bg-mylli-primary/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} className="text-mylli-primary" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-mylli-dark">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-mylli-gray hover:text-mylli-primary transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-mylli-gray hover:text-mylli-primary transition-colors">Nos Services</Link></li>
              <li><Link to="/fonctionnement" className="text-mylli-gray hover:text-mylli-primary transition-colors">Notre Fonctionnement</Link></li>
              <li><Link to="/equipe" className="text-mylli-gray hover:text-mylli-primary transition-colors">Notre Équipe</Link></li>
              <li><Link to="/apropos" className="text-mylli-gray hover:text-mylli-primary transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-mylli-gray hover:text-mylli-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-mylli-dark">Nos Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/aide-soignant" className="text-mylli-gray hover:text-mylli-primary transition-colors">Aide-soignant(e) à domicile</Link></li>
              <li><Link to="/services/infirmier" className="text-mylli-gray hover:text-mylli-primary transition-colors">Infirmier(ère) à domicile</Link></li>
              <li><Link to="/services/garde-malade-jour" className="text-mylli-gray hover:text-mylli-primary transition-colors">Garde-malade de jour</Link></li>
              <li><Link to="/services/garde-malade-nuit" className="text-mylli-gray hover:text-mylli-primary transition-colors">Garde-malade de nuit</Link></li>
              <li><Link to="/services/garde-malade-24h" className="text-mylli-gray hover:text-mylli-primary transition-colors">Garde-malade 24h/24h</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-mylli-dark">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-mylli-gray">19, rue Masmouda hay Al Hana - Casablanca - 20210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-mylli-primary mr-3 flex-shrink-0" />
                <a href="tel:+212661377438" className="text-mylli-gray hover:text-mylli-primary transition-colors">+212 661 37 74 38</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-mylli-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@mylliservices.com" className="text-mylli-gray hover:text-mylli-primary transition-colors">info@mylliservices.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mylli-gray text-sm">&copy; {currentYear} Mylli Services. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <a href="#" className="text-mylli-gray hover:text-mylli-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-mylli-gray hover:text-mylli-primary transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
