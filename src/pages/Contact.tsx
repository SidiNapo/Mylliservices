
import { Phone, Mail, MapPin, Clock, AlertCircle, Send, MessageSquare, User } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from '@/components/common/ContactForm';
import ParallaxSection from '@/components/common/ParallaxSection';
import GoogleMapEmbed from '@/components/common/GoogleMapEmbed';
import MapInfoCard from '@/components/common/MapInfoCard';
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  // Opening hours
  const openingHours = [{
    day: "Lundi - Vendredi",
    hours: "8h30 - 18h30"
  }, {
    day: "Samedi",
    hours: "9h00 - 16h00"
  }, {
    day: "Dimanche",
    hours: "Fermé (Urgences uniquement)"
  }];

  // FAQ items
  const faqs = [{
    question: "Quel est le délai de réponse après un premier contact?",
    answer: "Nous nous engageons à vous répondre dans les 24 heures ouvrables suivant votre demande. Pour les cas urgents, nous mettons tout en œuvre pour vous recontacter dans les plus brefs délais."
  }, {
    question: "Quels documents sont nécessaires pour débuter une intervention?",
    answer: "Pour mettre en place nos services, nous aurons besoin d'une pièce d'identité, d'informations médicales pertinentes (ordonnances, rapports médicaux récents), et éventuellement d'une attestation d'assurance si applicable."
  }, {
    question: "Quelles sont les modalités de paiement?",
    answer: "Nous acceptons plusieurs modes de paiement : virement bancaire, chèque ou espèces. Les factures sont émises mensuellement, et nous proposons également des formules d'abonnement avec tarifs préférentiels."
  }];
  return <div>
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
                Disponible 7j/7 pour les urgences
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
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-mylli-primary hover:underline">
                  Voir sur Google Maps
                </a>
              </p>
            </div>
          </div>
          
          {/* WhatsApp and Hours - Redesigned with modern cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white p-8 shadow-lg transform transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mr-4">
                  <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S15.7 3.7 18.1 7.7c2.4 4 1.2 9-2.7 11.5" />
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
            
            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-mylli-light to-white rounded-2xl p-8 shadow-lg border border-mylli-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-4">
                  <Clock size={28} className="text-mylli-primary" />
                </div>
                <h3 className="text-2xl font-bold text-mylli-dark">Heures d'ouverture</h3>
              </div>
              <div className="space-y-4">
                {openingHours.map((item, index) => <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                    <span className="text-lg text-mylli-dark font-medium">{item.day}</span>
                    <span className="text-lg font-bold text-mylli-primary">{item.hours}</span>
                  </div>)}
              </div>
              <div className="mt-6 flex items-start p-4 bg-mylli-primary/5 rounded-lg">
                <AlertCircle size={20} className="text-mylli-accent mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-mylli-gray">
                  Services d'intervention disponibles 24h/24 et 7j/7 selon vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section with Parallax - REDESIGNED */}
      <section className="py-24 relative overflow-hidden">
        {/* Modern Background with Overlapping Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-mylli-light via-white to-blue-50 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-r from-mylli-primary/10 to-mylli-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-l from-mylli-secondary/10 to-mylli-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl z-0"></div>
        
        {/* Animated Wave Patterns */}
        <div className="absolute inset-0 opacity-10 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-1/3 left-0 w-full opacity-20">
            <path fill="#0099FF" fillOpacity="1" d="M0,160L40,149.3C80,139,160,117,240,128C320,139,400,181,480,181.3C560,181,640,139,720,133.3C800,128,880,160,960,186.7C1040,213,1120,235,1200,213.3C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full opacity-20">
            <path fill="#E02E31" fillOpacity="1" d="M0,64L40,80C80,96,160,128,240,138.7C320,149,400,139,480,149.3C560,160,640,192,720,176C800,160,880,96,960,74.7C1040,53,1120,75,1200,101.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Floating Dots */}
        <div className="absolute inset-0 z-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className={`absolute rounded-full bg-mylli-primary/10 animate-pulse-soft`}
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Prenons contact" 
            subtitle="Nous sommes impatients de vous connaître et de répondre à vos besoins" 
            variant="split"
            highlightText="contact" 
            className="mb-16" 
          />
          
          {/* Centered Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,119,192,0.25)] border border-mylli-primary/5">
              {/* Header with Modern Gradient */}
              <div className="bg-gradient-to-r from-mylli-primary to-mylli-accent p-8 relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Envoyez-nous un message</h3>
                </div>
                <p className="text-white/90 text-lg relative ml-16">
                  Notre équipe est disponible pour répondre à toutes vos questions
                </p>
              </div>
              
              {/* Form with Enhanced Styling */}
              <div className="p-8 md:p-10">
                <ContactForm className="space-y-6" />
              </div>
            </div>
            
            {/* Additional Contact Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-mylli-primary/10 shadow-lg shadow-mylli-primary/5 transform transition-all hover:scale-[1.02] duration-300">
                <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-mylli-primary" />
                </div>
                <div>
                  <p className="text-sm text-mylli-gray font-medium">Email</p>
                  <a href="mailto:info@mylliservices.com" className="text-mylli-primary font-bold hover:underline">info@mylliservices.com</a>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-mylli-accent/10 shadow-lg shadow-mylli-accent/5 transform transition-all hover:scale-[1.02] duration-300">
                <div className="w-10 h-10 rounded-full bg-mylli-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-mylli-accent" />
                </div>
                <div>
                  <p className="text-sm text-mylli-gray font-medium">Téléphone</p>
                  <a href="tel:+212661377438" className="text-mylli-accent font-bold hover:underline">+212 661 37 74 38</a>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-mylli-secondary/10 shadow-lg shadow-mylli-secondary/5 transform transition-all hover:scale-[1.02] duration-300">
                <div className="w-10 h-10 rounded-full bg-mylli-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-mylli-secondary" />
                </div>
                <div>
                  <p className="text-sm text-mylli-gray font-medium">Notre adresse</p>
                  <p className="text-mylli-secondary font-bold">19, rue Masmouda hay Al Hana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recall Request Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Recall Form */}
              <div className="bg-gradient-to-br from-mylli-light to-white rounded-3xl p-8 shadow-xl border border-mylli-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-mylli-dark">Demande de rappel</h3>
                <p className="text-mylli-gray mb-8">
                  Laissez-nous votre numéro et nous vous contacterons rapidement à un moment qui vous convient.
                </p>
                <form className="space-y-6">
                  <div>
                    <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Votre téléphone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300" required />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300" required>
                      <option value="">Moment préféré pour être rappelé</option>
                      <option value="matin">Matin (9h - 12h)</option>
                      <option value="midi">Midi (12h - 14h)</option>
                      <option value="apres-midi">Après-midi (14h - 17h)</option>
                      <option value="soir">Soir (17h - 19h)</option>
                    </select>
                  </div>
                  <div>
                    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                      Demander un rappel
                    </button>
                  </div>
                </form>
              </div>
              
              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-mylli-dark">Questions fréquentes</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-mylli-primary transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                      <h4 className="text-lg font-bold mb-3 text-mylli-dark">{faq.question}</h4>
                      <p className="text-mylli-gray">{faq.answer}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.1),_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.1),_transparent_70%)]"></div>
        
        <div className="container-custom relative z-10">
          <SectionHeading title="Notre emplacement" subtitle="Venez nous rencontrer au cœur de Casablanca" variant="gradient" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Info Card */}
            <div className="lg:col-span-2">
              <MapInfoCard address="19, rue Masmouda hay Al Hana, Casablanca - 20210" phone="+212 661 37 74 38" hours={[{
              day: "Lundi - Vendredi",
              hours: "8h30 - 18h30"
            }, {
              day: "Samedi",
              hours: "9h00 - 16h00"
            }, {
              day: "Dimanche",
              hours: "Fermé"
            }]} className="h-full transform transition-all duration-500 hover:shadow-2xl" />
            </div>
            
            {/* Google Map */}
            <div className="lg:col-span-3 h-[550px]">
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <GoogleMapEmbed address="19, rue Masmouda hay Al Hana, Casablanca, Morocco" />
                
                {/* Location pin overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-mylli-primary/30 rounded-full animate-ping"></div>
                    <div className="relative z-10 w-8 h-8 bg-mylli-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Company card overlay */}
                <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-xl p-4 shadow-lg max-w-xs">
                  <h4 className="text-xl font-bold mb-1 text-mylli-dark">Mylli Services</h4>
                  <p className="text-mylli-gray text-sm">
                    19, rue Masmouda hay Al Hana,<br />Casablanca - 20210
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional information cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-mylli-primary">
              <h4 className="font-bold mb-2 text-mylli-dark">Transport en commun</h4>
              <p className="text-mylli-gray">Facilement accessible par les lignes de tramway et bus à proximité</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-mylli-secondary">
              <h4 className="font-bold mb-2 text-mylli-dark">Stationnement</h4>
              <p className="text-mylli-gray">Parking gratuit disponible pour nos clients</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-mylli-accent">
              <h4 className="font-bold mb-2 text-mylli-dark">Accessibilité</h4>
              <p className="text-mylli-gray">Nos locaux sont entièrement accessibles aux personnes à mobilité réduite</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;
