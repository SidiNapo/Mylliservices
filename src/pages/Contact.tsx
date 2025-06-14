import { Phone, Mail, MapPin, Clock, AlertCircle, Send, MessageSquare, User, Navigation, MapPinHouse, Compass } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from '@/components/common/ContactForm';
import ParallaxSection from '@/components/common/ParallaxSection';
import GoogleMapEmbed from '@/components/common/GoogleMapEmbed';
import MapInfoCard from '@/components/common/MapInfoCard';
import { Card, CardContent } from "@/components/ui/card";
import RecallRequestForm from '@/components/common/RecallRequestForm';

const ContactPage = () => {
  // Updated opening hours - removed consultations
  const openingHours = [{
    day: "Lundi - Dimanche",
    hours: "24h/24 - 7j/7"
  }, {
    day: "Services d'urgence",
    hours: "Disponibles à tout moment"
  }];

  // Updated exact address and coordinates for Mylli Services
  const exactAddress = "Infirmier à domicile Mylli Services, 19 Rue De Masmouda, Casablanca 20210";
  const displayAddress = "19, rue Masmouda hay Al Hana\nCasablanca - 20210";

  return (
    <div>
      <PageBanner title="Contactez-nous" subtitle="NOUS SOMMES LÀ POUR VOUS AIDER!" />
      
      {/* Contact Info Section */}
      <section className="py-20 relative bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-white to-mylli-primary/5 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mylli-primary to-mylli-secondary text-white flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-mylli-dark">Téléphone</h3>
              <a href="tel:+212661377438" className="text-mylli-primary font-medium text-lg hover:underline">
                +212 661 37 74 38
              </a>
              <p className="text-mylli-gray mt-3">
                Disponible 24h/24 et 7j/7
              </p>
            </div>
            
            {/* Email */}
            <div className="bg-gradient-to-br from-white to-mylli-primary/5 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mylli-secondary to-mylli-accent text-white flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-mylli-dark">Email</h3>
              <a href="mailto:info@mylliservices.com" className="text-mylli-primary font-medium text-lg hover:underline">
                info@mylliservices.com
              </a>
              <p className="text-mylli-gray mt-3">
                Réponse sous 24h ouvrées
              </p>
            </div>
            
            {/* Address */}
            <div className="bg-gradient-to-br from-white to-mylli-primary/5 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mylli-accent to-mylli-dark text-white flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-mylli-dark">Adresse</h3>
              <p className="text-mylli-gray text-lg">
                19, rue Masmouda hay Al Hana<br />
                Casablanca - 20210
              </p>
              <p className="text-mylli-gray mt-3">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(exactAddress)}`} target="_blank" rel="noopener noreferrer" className="text-mylli-primary hover:underline">
                  Voir sur Google Maps
                </a>
              </p>
            </div>
          </div>
          
          {/* WhatsApp and Hours - Updated hours without consultations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp - Fixed logo using proper SVG path */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white p-8 shadow-lg transform transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mr-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <h3 className="text-2xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-lg mb-6">
                Contactez-nous directement par WhatsApp pour une réponse rapide à vos questions.
              </p>
              <a href="https://wa.me/212661377438" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-green-600 font-medium text-lg transition-all duration-300 hover:bg-green-50 hover:scale-105">
                Contacter par WhatsApp
              </a>
            </div>
            
            {/* Opening Hours - Updated without consultations */}
            <div className="bg-gradient-to-br from-mylli-light to-white rounded-2xl p-8 shadow-lg border border-mylli-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-4">
                  <Clock size={28} className="text-mylli-primary" />
                </div>
                <h3 className="text-2xl font-bold text-mylli-dark">Disponibilité</h3>
              </div>
              <div className="space-y-4">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                    <span className="text-lg text-mylli-dark font-medium">{item.day}</span>
                    <span className="text-lg font-bold text-mylli-primary">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start p-4 bg-mylli-primary/5 rounded-lg">
                <AlertCircle size={20} className="text-mylli-accent mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-mylli-gray">
                  Nous sommes disponibles 24h/24 et 7j/7 pour répondre à tous vos besoins de soins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern Interactive Location Section */}
      <section className="py-20 bg-gradient-to-br from-mylli-light via-white to-mylli-primary/5">
        <div className="container-custom">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mylli-dark mb-6">
              Trouvez-nous sur la{" "}
              <span className="text-gradient">carte interactive</span>
            </h2>
            <p className="text-xl text-mylli-gray max-w-2xl mx-auto">
              Découvrez notre emplacement exact et planifiez facilement votre visite
            </p>
          </div>

          {/* Modern Map Container */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-mylli-primary/10">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-mylli-primary to-mylli-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Infirmier à domicile Mylli Services</h3>
                      <p className="text-white/90 text-sm">Centre de soins à domicile</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Casablanca</div>
                    <div className="text-xs opacity-75">Rue De Masmouda</div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative h-[400px] md:h-[500px]">
                <GoogleMapEmbed address={exactAddress} className="w-full h-full" />
                
                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="text-xs text-mylli-gray">Localisation exacte</div>
                  <div className="font-semibold text-mylli-dark">Infirmier à domicile Mylli Services</div>
                </div>
              </div>

              {/* Address Information */}
              <div className="p-8 bg-gradient-to-r from-mylli-light/50 to-white">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary to-mylli-secondary rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-mylli-dark mb-2">Notre adresse</h4>
                    <p className="text-lg text-mylli-gray leading-relaxed">
                      Infirmier à domicile Mylli Services<br />
                      19 Rue De Masmouda<br />
                      Casablanca 20210, Maroc
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(exactAddress)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Navigation size={20} />
                    Obtenir l'itinéraire
                  </a>

                  <a 
                    href="tel:+212661377438"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Phone size={20} />
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
