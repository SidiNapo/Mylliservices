
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
  // Updated opening hours - always open
  const openingHours = [{
    day: "Lundi - Dimanche",
    hours: "24h/24 - 7j/7"
  }, {
    day: "Services d'urgence",
    hours: "Disponibles à tout moment"
  }, {
    day: "Consultations",
    hours: "Sur rendez-vous"
  }];

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
                <a href="https://maps.google.com/?q=19,+rue+Masmouda+hay+Al+Hana+Casablanca+20210" target="_blank" rel="noopener noreferrer" className="text-mylli-primary hover:underline">
                  Voir sur Google Maps
                </a>
              </p>
            </div>
          </div>
          
          {/* WhatsApp and Hours - Fixed WhatsApp logo and updated hours */}
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
            
            {/* Opening Hours - Updated to always open */}
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
      
      {/* Unique Interactive Location Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mylli-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-40 h-40 bg-mylli-secondary/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-mylli-accent/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trouvez-nous sur la{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                carte interactive
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explorez notre localisation avec une expérience cartographique immersive
            </p>
          </div>

          {/* Interactive Map Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Glassmorphism Container */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Floating Action Buttons */}
              <div className="absolute -top-4 -right-4 z-20 flex gap-3">
                <a 
                  href="https://maps.google.com/?q=19,+rue+Masmouda+hay+Al+Hana+Casablanca+20210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <Navigation size={20} />
                </a>
                <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300">
                  <Compass size={20} />
                </button>
              </div>

              {/* Interactive Header with Mylli Services Logo */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png" 
                        alt="Mylli Services Logo" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Mylli Services</h3>
                    <p className="text-blue-200">Centre de soins à domicile</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-white font-semibold">Casablanca, Maroc</div>
                  <div className="text-blue-200 text-sm">Hay Al Hana</div>
                </div>
              </div>

              {/* Map Container with Unique Design */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <GoogleMapEmbed address="19, rue Masmouda hay Al Hana, Casablanca, Morocco" />
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Animated Location Pulse */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute w-20 h-20 bg-red-500/30 rounded-full animate-ping"></div>
                      <div className="absolute w-12 h-12 bg-red-500/50 rounded-full animate-pulse delay-300"></div>
                      <div className="relative w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Info Cards */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl p-3 text-white pointer-events-auto">
                    <div className="text-xs opacity-80">Distance du centre</div>
                    <div className="font-semibold">12.5 km</div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-3 text-white pointer-events-auto">
                    <div className="text-xs opacity-80">Temps d'arrivée</div>
                    <div className="font-semibold">15-20 min</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <a 
                  href="https://maps.google.com/maps/dir/?api=1&destination=19,+rue+Masmouda+hay+Al+Hana+Casablanca+20210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-3"
                >
                  <Navigation className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <span className="font-medium">Obtenir l'itinéraire</span>
                </a>

                <a 
                  href="tel:+212661377438"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="font-medium">Appeler maintenant</span>
                </a>

                <a 
                  href="https://wa.me/212661377438" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center gap-3"
                >
                  <MessageSquare className="group-hover:bounce transition-transform duration-300" size={20} />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Fixed Floating Address Card - Better positioned */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 max-w-sm w-full mx-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-mylli-primary to-mylli-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Notre adresse précise</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  19, rue Masmouda hay Al Hana<br />
                  Casablanca - 20210, Maroc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
