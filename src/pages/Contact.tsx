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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-mylli-primary/10 to-mylli-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-mylli-accent/10 to-mylli-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <SectionHeading title="Prenons contact" subtitle="Nous sommes impatients de vous connaître et de répondre à vos besoins" variant="gradient" className="mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
            {/* Left side: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border-0 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-mylli-dark">Nos coordonnées</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-4 mt-1">
                        <Phone className="h-5 w-5 text-mylli-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-mylli-dark">Téléphone</h4>
                        <a href="tel:+212661377438" className="text-mylli-primary hover:underline">
                          +212 661 37 74 38
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-4 mt-1">
                        <Mail className="h-5 w-5 text-mylli-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-mylli-dark">Email</h4>
                        <a href="mailto:info@mylliservices.com" className="text-mylli-primary hover:underline">
                          info@mylliservices.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-mylli-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-mylli-dark">Adresse</h4>
                        <p className="text-mylli-gray">
                          19, rue Masmouda hay Al Hana<br />
                          Casablanca - 20210
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-mylli-primary/10 flex items-center justify-center mr-4 mt-1">
                        <Clock className="h-5 w-5 text-mylli-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-mylli-dark">Heures d'ouverture</h4>
                        <p className="text-mylli-gray">
                          Lun-Ven: 8h30 - 18h30<br />
                          Sam: 9h00 - 16h00
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-bold mb-3 text-mylli-dark">Suivez-nous</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-mylli-primary to-mylli-dark p-6 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Envoyez-nous un message</h3>
                </div>
                
                <div className="p-8">
                  <ContactForm />
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
