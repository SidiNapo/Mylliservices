
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/common/ContactForm';
import GoogleMapEmbed from '@/components/common/GoogleMapEmbed';
import SectionHeading from '@/components/common/SectionHeading';
import SEOHead from '@/components/seo/SEOHead';
import OptimizedImage from '@/components/seo/OptimizedImage';
import { generateLocalBusinessSchema } from '@/utils/structuredData';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      details: "+212 661 377 438",
      link: "tel:+212661377438",
      description: "Appelez-nous pour une consultation immédiate"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@mylliservices.com",
      link: "mailto:info@mylliservices.com",
      description: "Écrivez-nous pour toute question"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      details: "19, rue Masmouda hay Al Hana, Casablanca 20210",
      link: "https://maps.google.com/?q=19+rue+Masmouda+hay+Al+Hana+Casablanca",
      description: "Visitez notre bureau principal"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      details: "24h/24 - 7j/7",
      description: "Service disponible en permanence"
    }
  ];

  const emergencyContact = {
    title: "Urgences 24h/24",
    phone: "+212 661 377 438",
    description: "Pour toute urgence médicale ou besoin immédiat d'assistance"
  };

  // SEO structured data
  const localBusinessSchema = generateLocalBusinessSchema();
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Mylli Services",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212661377438",
        "contactType": "customer service",
        "availableLanguage": ["French", "Arabic"],
        "hoursAvailable": "Mo-Su 00:00-23:59"
      }
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, contactSchema]
  };

  return (
    <>
      <SEOHead
        title="Contact - Mylli Services | Aide à Domicile Casablanca | +212 661 377 438"
        description="Contactez Mylli Services pour vos besoins d'aide à domicile à Casablanca. Devis gratuit, service 24h/24. Téléphone : +212 661 377 438"
        keywords="contact Mylli Services, aide domicile Casablanca, devis gratuit, urgence 24h/24, téléphone +212661377438"
        canonicalUrl="/contact"
        structuredData={combinedSchema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-mylli-primary/10 to-mylli-light overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <header>
                <h1 className="text-4xl md:text-5xl font-bold text-mylli-dark mb-6">
                  Contactez-nous
                </h1>
                <p className="text-xl text-mylli-gray mb-8 leading-relaxed">
                  Notre équipe est disponible 24h/24 pour répondre à vos questions et vous accompagner dans vos démarches.
                </p>
                
                {/* Emergency Contact Highlight */}
                <div className="bg-mylli-primary/10 border-l-4 border-mylli-primary p-4 rounded-r-lg mb-6">
                  <div className="flex items-center mb-2">
                    <MessageCircle className="h-5 w-5 text-mylli-primary mr-2" />
                    <h3 className="font-bold text-mylli-dark">{emergencyContact.title}</h3>
                  </div>
                  <p className="text-sm text-mylli-gray mb-2">{emergencyContact.description}</p>
                  <a 
                    href={`tel:${emergencyContact.phone}`}
                    className="text-mylli-primary font-bold text-lg hover:underline"
                  >
                    {emergencyContact.phone}
                  </a>
                </div>
              </header>
              
              <aside className="relative">
                <OptimizedImage
                  src="/lovable-uploads/cfbe77b8-0c6a-4e5c-b8f4-b2fb19e403a5.png"
                  alt="Équipe Mylli Services disponible pour vous aider"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                  priority={true}
                />
              </aside>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white" aria-labelledby="contact-info-heading">
          <div className="container-custom">
            <header>
              <SectionHeading
                title="Nos Coordonnées"
                subtitle="Plusieurs moyens de nous joindre selon vos préférences"
                variant="gradient"
                id="contact-info-heading"
              />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <article key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card hover:border-mylli-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-mylli-primary mb-4">{info.icon}</div>
                  <h3 className="font-bold text-mylli-dark mb-2">{info.title}</h3>
                  <div className="text-mylli-gray mb-2">
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="hover:text-mylli-primary transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.details}
                      </a>
                    ) : (
                      info.details
                    )}
                  </div>
                  <p className="text-sm text-mylli-gray">{info.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-20 bg-mylli-light/30" aria-labelledby="contact-form-heading">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <header className="mb-8">
                  <h2 id="contact-form-heading" className="text-3xl font-bold text-mylli-dark mb-4">
                    Demandez votre devis gratuit
                  </h2>
                  <p className="text-mylli-gray">
                    Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais pour établir un devis personnalisé.
                  </p>
                </header>
                <ContactForm />
              </div>

              {/* Map */}
              <div>
                <header className="mb-8">
                  <h2 className="text-3xl font-bold text-mylli-dark mb-4">
                    Notre Localisation
                  </h2>
                  <p className="text-mylli-gray">
                    Retrouvez-nous à notre bureau principal à Casablanca pour un rendez-vous personnalisé.
                  </p>
                </header>
                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <GoogleMapEmbed />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="container-custom">
            <header>
              <SectionHeading
                title="Questions Fréquentes"
                subtitle="Trouvez rapidement les réponses à vos questions"
                variant="split"
                highlightText="Questions"
                id="faq-heading"
              />
            </header>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Combien coûtent vos services ?",
                  answer: "Nos tarifs varient selon le type de service et la durée d'intervention. Nous proposons un devis gratuit personnalisé après évaluation de vos besoins."
                },
                {
                  question: "Vos intervenants sont-ils qualifiés ?",
                  answer: "Oui, tous nos intervenants sont diplômés et possèdent les qualifications requises. Ils sont également régulièrement formés aux nouvelles pratiques."
                },
                {
                  question: "Intervenez-vous en urgence ?",
                  answer: "Nous proposons un service d'urgence 24h/24 et 7j/7. N'hésitez pas à nous appeler pour toute situation urgente."
                },
                {
                  question: "Dans quelles zones intervenez-vous ?",
                  answer: "Nous intervenons principalement à Casablanca, Mohammedia, Bouskoura, Dar Bouazza, mais aussi à Marrakech et Rabat."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-mylli-primary/30 transition-colors">
                  <summary className="font-semibold text-mylli-dark cursor-pointer hover:text-mylli-primary transition-colors">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-mylli-gray leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
