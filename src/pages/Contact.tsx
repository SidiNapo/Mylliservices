
import { Phone, Mail, MapPin, Clock, AlertCircle, MessageSquare, Users } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from '@/components/common/ContactForm';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

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

  // State for callback request
  const { toast } = useToast();
  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    preferredTime: ''
  });

  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCallbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de rappel envoyée",
      description: `Nous vous contacterons bientôt, ${callbackData.name}.`,
    });
    setCallbackData({
      name: '',
      phone: '',
      preferredTime: ''
    });
  };

  return (
    <div>
      <PageBanner 
        title="Contactez-nous" 
        subtitle="NOUS SOMMES LÀ POUR VOUS AIDER!"
      />
      
      {/* Contact Methods Section - Modern card design */}
      <section className="py-20 bg-gradient-to-b from-white to-mylli-light/30">
        <div className="container-custom">
          {/* Section heading with modern style */}
          <SectionHeading 
            title="Comment nous joindre"
            subtitle="Choisissez le moyen de communication qui vous convient le mieux"
            variant="gradient"
            className="mb-16"
          />
          
          {/* Modern contact cards with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Phone Contact Card */}
            <Card className="group overflow-hidden border-none rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-40 bg-gradient-to-r from-mylli-primary/90 to-mylli-quaternary/90 flex flex-col items-center justify-center text-white">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={28} className="text-mylli-primary" />
                </div>
                <h3 className="font-bold text-2xl mt-8">Téléphone</h3>
                <p className="text-white/80">Réponse immédiate</p>
              </div>
              <CardContent className="pt-6 pb-8 px-8 flex flex-col items-center text-center">
                <a href="tel:+212661377438" className="text-xl font-medium text-mylli-dark hover:text-mylli-primary transition-colors">
                  +212 661 37 74 38
                </a>
                <p className="mt-3 text-mylli-gray">
                  Notre équipe est disponible 7j/7 pour les urgences et les demandes prioritaires.
                </p>
                <Button variant="outline" className="mt-4 border-mylli-primary/30 hover:border-mylli-primary hover:bg-mylli-primary hover:text-white" asChild>
                  <a href="tel:+212661377438">
                    Appeler maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Email Contact Card */}
            <Card className="group overflow-hidden border-none rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-40 bg-gradient-to-r from-mylli-secondary/90 to-mylli-tertiary/90 flex flex-col items-center justify-center text-white">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                  <Mail size={28} className="text-mylli-secondary" />
                </div>
                <h3 className="font-bold text-2xl mt-8">Email</h3>
                <p className="text-white/80">Réponse sous 24h</p>
              </div>
              <CardContent className="pt-6 pb-8 px-8 flex flex-col items-center text-center">
                <a href="mailto:info@mylliservices.com" className="text-xl font-medium text-mylli-dark hover:text-mylli-secondary transition-colors">
                  info@mylliservices.com
                </a>
                <p className="mt-3 text-mylli-gray">
                  Pour toutes vos questions et demandes de devis, nous vous répondrons rapidement par email.
                </p>
                <Button variant="outline" className="mt-4 border-mylli-secondary/30 hover:border-mylli-secondary hover:bg-mylli-secondary hover:text-white" asChild>
                  <a href="mailto:info@mylliservices.com">
                    Envoyer un email
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Office Location Card */}
            <Card className="group overflow-hidden border-none rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-40 bg-gradient-to-r from-mylli-dark/90 to-mylli-dark flex flex-col items-center justify-center text-white">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                  <MapPin size={28} className="text-mylli-dark" />
                </div>
                <h3 className="font-bold text-2xl mt-8">Notre adresse</h3>
                <p className="text-white/80">Rendez-vous sur place</p>
              </div>
              <CardContent className="pt-6 pb-8 px-8 flex flex-col items-center text-center">
                <p className="text-xl font-medium text-mylli-dark">
                  19, rue Masmouda hay Al Hana
                </p>
                <p className="text-mylli-dark">
                  Casablanca - 20210
                </p>
                <p className="mt-3 text-mylli-gray">
                  Venez nous rencontrer pour discuter en personne de vos besoins en soins à domicile.
                </p>
                <Button variant="outline" className="mt-4 border-mylli-dark/30 hover:border-mylli-dark hover:bg-mylli-dark hover:text-white" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Ouvrir dans Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Information cards row with modern design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Opening Hours Card */}
            <Card className="rounded-2xl border-none bg-gradient-to-br from-white to-mylli-light shadow-xl overflow-hidden">
              <div className="flex items-center gap-4 p-6 border-b border-mylli-primary/10">
                <div className="w-12 h-12 rounded-full bg-mylli-light flex items-center justify-center">
                  <Clock size={24} className="text-mylli-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mylli-dark">Heures d'ouverture</h3>
                  <p className="text-mylli-gray">À votre service selon vos besoins</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-mylli-light last:border-0 last:pb-0">
                      <span className="font-medium text-mylli-dark">{item.day}</span>
                      <span className="font-bold text-mylli-primary">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-mylli-primary/10 shadow-sm">
                  <div className="flex items-start">
                    <AlertCircle size={18} className="text-mylli-accent mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-mylli-gray text-sm">
                      Notre service d'interventions d'urgence est disponible 24h/24 et 7j/7 pour nos clients abonnés.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* WhatsApp Card - Modern Design */}
            <Card className="rounded-2xl border-none overflow-hidden shadow-xl">
              <div className="p-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                    <p className="opacity-90">Contactez-nous par message</p>
                  </div>
                </div>
                <p className="mb-6 text-white/90">
                  Pour une réponse rapide et pratique, envoyez-nous un message WhatsApp. Notre équipe est prête à vous aider.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white hover:bg-white/90 text-green-600 font-medium border-none" asChild>
                    <a href="https://wa.me/212661377438" target="_blank" rel="noopener noreferrer">
                      WhatsApp Direct
                    </a>
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    +212 661 37 74 38
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section with modern design */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form Column - 3/5 width */}
            <div className="lg:col-span-3">
              <SectionHeading 
                title="Envoyez-nous un message" 
                subtitle="Nous vous répondrons dans les plus brefs délais"
                align="left"
                variant="modern"
                highlightColor="mylli-primary"
              />
              
              <Card className="border-none rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 sm:p-10">
                  <ContactForm />
                </div>
              </Card>
            </div>
            
            {/* FAQ Column - 2/5 width */}
            <div className="lg:col-span-2">
              <SectionHeading 
                title="Questions fréquentes" 
                subtitle="Les réponses aux questions les plus posées"
                align="left"
                variant="modern"
                highlightColor="mylli-secondary"
              />
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-none rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-3 text-mylli-dark border-l-4 border-mylli-secondary pl-3">
                        {faq.question}
                      </h4>
                      <p className="text-mylli-gray">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Callback Request Form */}
              <Card className="mt-10 border-none rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-mylli-primary/10 to-white">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-mylli-primary/20 flex items-center justify-center">
                      <Phone size={20} className="text-mylli-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-mylli-dark">Demande de rappel</h3>
                  </div>
                  
                  <form onSubmit={handleCallbackSubmit} className="space-y-4">
                    <div>
                      <Input 
                        type="text" 
                        placeholder="Votre nom" 
                        name="name"
                        value={callbackData.name}
                        onChange={handleCallbackChange}
                        className="border-mylli-primary/20 focus:border-mylli-primary"
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Votre téléphone" 
                        name="phone"
                        value={callbackData.phone}
                        onChange={handleCallbackChange}
                        className="border-mylli-primary/20 focus:border-mylli-primary"
                        required 
                      />
                    </div>
                    <div>
                      <select 
                        name="preferredTime"
                        value={callbackData.preferredTime}
                        onChange={handleCallbackChange}
                        className="flex h-10 w-full rounded-md border border-mylli-primary/20 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Moment préféré pour être rappelé</option>
                        <option value="matin">Matin (9h - 12h)</option>
                        <option value="midi">Midi (12h - 14h)</option>
                        <option value="apres-midi">Après-midi (14h - 17h)</option>
                        <option value="soir">Soir (17h - 19h)</option>
                      </select>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-mylli-primary to-mylli-accent text-white"
                    >
                      Demander un rappel
                    </Button>
                  </form>
                </div>
              </Card>
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
            title="Notre localisation"
            subtitle="Venez nous rencontrer dans nos bureaux à Casablanca"
            variant="gradient"
            className="text-white"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
              <div className="h-96 bg-mylli-primary/10 flex flex-col items-center justify-center">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-mylli-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin size={40} className="text-mylli-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-mylli-dark mb-3">Mylli Services</h3>
                  <p className="text-lg text-mylli-gray mb-4">
                    19, rue Masmouda hay Al Hana - Casablanca - 20210
                  </p>
                  <Button className="bg-mylli-primary hover:bg-mylli-dark" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <MapPin size={18} className="mr-2" />
                      Voir sur Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Team Contact Section - NEW */}
      <section className="py-20 bg-gradient-to-b from-white to-mylli-light/30">
        <div className="container-custom">
          <SectionHeading 
            title="Notre équipe à votre service"
            subtitle="Contactez directement nos responsables selon vos besoins"
            variant="split"
            highlightText="équipe"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="border-none rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-mylli-primary/20 flex items-center justify-center">
                    <Users size={28} className="text-mylli-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Maria Rodriguez</h4>
                    <p className="text-mylli-gray">Directrice des soins</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-mylli-gray mb-6">
                  Responsable de la coordination des équipes de soins et du suivi qualité des interventions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" className="border-mylli-primary/30 hover:border-mylli-primary hover:bg-mylli-primary hover:text-white" asChild>
                    <a href="tel:+212661112233">
                      <Phone size={16} className="mr-1" />
                      Appeler
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-mylli-primary/30 hover:border-mylli-primary hover:bg-mylli-primary hover:text-white" asChild>
                    <a href="mailto:maria@mylliservices.com">
                      <Mail size={16} className="mr-1" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="border-none rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-mylli-secondary/20 flex items-center justify-center">
                    <Users size={28} className="text-mylli-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Hassan Alaoui</h4>
                    <p className="text-mylli-gray">Responsable administratif</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-mylli-gray mb-6">
                  En charge des aspects administratifs, financiers et des demandes de prise en charge.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" className="border-mylli-secondary/30 hover:border-mylli-secondary hover:bg-mylli-secondary hover:text-white" asChild>
                    <a href="tel:+212661223344">
                      <Phone size={16} className="mr-1" />
                      Appeler
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-mylli-secondary/30 hover:border-mylli-secondary hover:bg-mylli-secondary hover:text-white" asChild>
                    <a href="mailto:hassan@mylliservices.com">
                      <Mail size={16} className="mr-1" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="border-none rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-mylli-dark/20 flex items-center justify-center">
                    <Users size={28} className="text-mylli-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Sophie Benani</h4>
                    <p className="text-mylli-gray">Service client</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-mylli-gray mb-6">
                  À votre écoute pour toutes vos questions et pour vous accompagner dans vos démarches.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" className="border-mylli-dark/30 hover:border-mylli-dark hover:bg-mylli-dark hover:text-white" asChild>
                    <a href="tel:+212661334455">
                      <Phone size={16} className="mr-1" />
                      Appeler
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-mylli-dark/30 hover:border-mylli-dark hover:bg-mylli-dark hover:text-white" asChild>
                    <a href="mailto:sophie@mylliservices.com">
                      <Mail size={16} className="mr-1" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
