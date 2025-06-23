
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Clock, CheckCircle, Star } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Mylli Services - Soins et Services à Domicile au Maroc"
        description="Leader des soins à domicile au Maroc depuis 2014. Services d'aide-soignant, infirmier, et accompagnement personnalisé pour préserver votre autonomie."
        keywords="soins à domicile Maroc, aide-soignant domicile, infirmier domicile, services médicaux domicile"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            NOUS SOMMES LÀ POUR VOUS AIDER!
          </h1>
          
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/services/aide-soignant"
              className="group relative px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">AIDE-SOIGNANT(E) À DOMICILE</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/services/infirmier"
              className="group relative px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">INFIRMIER(ÈRE) À DOMICILE</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Depuis 2014, première société au Maroc à être spécialisée dans l'accompagnement à domicile des personnes en perte d'autonomie.
          </p>
          
          <Link 
            to="/services" 
            className="inline-flex items-center bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir nos services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Mylli Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pourquoi choisir Mylli Services
            </h2>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-800">
                Depuis 2014, Mylli Services est le pionnier de l'accompagnement à domicile au Maroc. Forts de plus de dix années d'engagement auprès des personnes en perte d'autonomie, nous avons développé un savoir-faire solide, basé sur l'écoute, la rigueur, et une parfaite connaissance des besoins du terrain.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-800">
                Cette expérience nous permet aujourd'hui d'offrir un accompagnement personnalisé, réactif et humain, en toutes circonstances. Nos compétences couvrent l'ensemble des soins à domicile : assistance quotidienne, surveillance médicale, soins infirmiers, soutien moral et relationnel.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-800">
                Nous formons et sélectionnons avec exigence nos intervenants pour garantir un service de haute qualité, toujours empreint de respect et de bienveillance.
              </p>
              
              <div className="text-center">
                <Link 
                  to="/a-propos" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  En savoir plus sur nous
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nos Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Aide-soignant Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Header with Gradient */}
              <div className="relative h-20 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-between px-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <span className="text-white font-semibold text-lg">Service Premium</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Image Section */}
              <div className="p-8 pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/5e72d59f-037f-46a2-a887-3878ba72f5dd.png" 
                    alt="Aide-soignant"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="px-8 pb-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                  Aide-soignant(e) à domicile
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Préservation de l'autonomie tout en accomplissant des actes de la vie quotidienne.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-blue-800 mb-4 text-center">Nos prestations :</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Toilette et hygiène</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Aide à la mobilité</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Surveillance médicale</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Accompagnement social</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/services/aide-soignant"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Infirmier Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Header with Gradient */}
              <div className="relative h-20 bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-between px-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <span className="text-white font-semibold text-lg">Service Premium</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Image Section */}
              <div className="p-8 pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png" 
                    alt="Infirmier"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="px-8 pb-8">
                <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">
                  Infirmier(ère) à domicile
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Soins médicaux à domicile comme alternative à l'hospitalisation.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-red-700 mb-4 text-center">Nos prestations :</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Soins post-opératoires</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Pansements et injections</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Surveillance glycémique</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Chimiothérapie</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/services/infirmier"
                  className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ce que disent nos clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <TestimonialCard
              name="Fatima Benali"
              text="Service exceptionnel ! L'aide-soignante est très professionnelle et bienveillante. Ma mère se sent en sécurité."
              rating={5}
              location="Casablanca"
            />
            <TestimonialCard
              name="Mohammed Alami"
              text="Mylli Services a transformé notre quotidien. Les soins sont de qualité et le personnel est remarquable."
              rating={5}
              location="Rabat"
            />
            <TestimonialCard
              name="Aicha Tazi"
              text="Professionnalisme et humanité. Exactement ce dont nous avions besoin pour accompagner papa."
              rating={5}
              location="Marrakech"
            />
            <TestimonialCard
              name="Hassan Berrada"
              text="Une équipe formidable ! Ponctuelle, compétente et à l'écoute. Je recommande vivement."
              rating={5}
              location="Fès"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à commencer ?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Nous contacter
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
