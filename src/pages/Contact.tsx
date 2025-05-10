
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from '@/components/common/ContactForm';
import ParallaxSection from '@/components/common/ParallaxSection';

const ContactPage = () => {
  // Opening hours
  const openingHours = [
    { day: "Lundi - Vendredi", hours: "8h30 - 18h30" },
    { day: "Samedi", hours: "9h00 - 16h00" },
    { day: "Dimanche", hours: "Fermé (Urgences uniquement)" }
  ];
  
  // FAQ items
  const faqs = [
    {
      question: "Quel est le délai de réponse après un premier contact?",
      answer: "Nous nous engageons à vous répondre dans les 24 heures ouvrables suivant votre demande. Pour les cas urgents, nous mettons tout en œuvre pour vous recontacter dans les plus brefs délais."
    },
    {
      question: "Quels documents sont nécessaires pour débuter une intervention?",
      answer: "Pour mettre en place nos services, nous aurons besoin d'une pièce d'identité, d'informations médicales pertinentes (ordonnances, rapports médicaux récents), et éventuellement d'une attestation d'assurance si applicable."
    },
    {
      question: "Quelles sont les modalités de paiement?",
      answer: "Nous acceptons plusieurs modes de paiement : virement bancaire, chèque ou espèces. Les factures sont émises mensuellement, et nous proposons également des formules d'abonnement avec tarifs préférentiels."
    }
  ];

  return (
    <div>
      <PageBanner 
        title="Contactez-nous" 
        subtitle="NOUS SOMMES LÀ POUR VOUS AIDER!"
      />
      
      {/* Contact Info Section - Redesigned with gradient cards */}
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
              <a 
                href="https://wa.me/212661377438" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-green-600 font-medium text-lg transition-all duration-300 hover:bg-green-50 hover:scale-105"
              >
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
                  Services d'intervention disponibles 24h/24 et 7j/7 selon vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section with Parallax */}
      <ParallaxSection 
        backgroundGradient="linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)"
        height="auto"
        overlayOpacity={0.1}
        className="py-20"
      >
        <div className="container-custom">
          <SectionHeading 
            title="Prenons contact"
            subtitle="Nous sommes à votre écoute pour répondre à toutes vos questions"
            variant="modern"
            className="text-white"
            highlightColor="white"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-mylli-dark">Envoyez-nous un message</h3>
              <ContactForm />
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-start">
                  <AlertCircle size={20} className="text-mylli-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-mylli-gray">
                    Pour les demandes urgentes, nous vous recommandons de nous contacter directement par téléphone au <a href="tel:+212661377438" className="text-mylli-primary font-medium hover:underline">+212 661 37 74 38</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Recall Request - Modern design */}
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
                    <input 
                      type="text" 
                      placeholder="Votre nom" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300"
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Votre téléphone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mylli-primary focus:ring focus:ring-mylli-primary/20 transition-all duration-300"
                      required 
                    />
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
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-gradient-to-r from-mylli-primary to-mylli-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                    >
                      Demander un rappel
                    </button>
                  </div>
                </form>
              </div>
              
              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-mylli-dark">Questions fréquentes</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-mylli-primary transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
                    >
                      <h4 className="text-lg font-bold mb-3 text-mylli-dark">{faq.question}</h4>
                      <p className="text-mylli-gray">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        height="auto"
        className="py-20"
      >
        <div className="container-custom">
          <SectionHeading 
            title="Nous trouver"
            subtitle="Notre bureau est situé au cœur de Casablanca"
            variant="gradient"
            className="text-white"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
              <div className="h-96 bg-mylli-primary/10 flex items-center justify-center">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="text-center p-8">
                  <MapPin size={80} className="text-mylli-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-mylli-dark mb-3">Mylli Services</h3>
                  <p className="text-lg text-mylli-gray">
                    19, rue Masmouda hay Al Hana - Casablanca - 20210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default ContactPage;
