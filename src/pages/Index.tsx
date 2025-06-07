
import React from 'react';
import { Clock, Users, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ServiceLocations from '@/components/common/ServiceLocations';
import ParallaxSection from '@/components/common/ParallaxSection';

// Sample location data
const locations = [
  {
    city: "Casablanca",
    areas: ["Ain Diab", "Anfa", "Maarif", "Bourgogne", "Hay Hassani", "Sidi Maarouf", "California", "Centre-ville"],
    highlight: true
  },
  {
    city: "Mohammedia",
    areas: ["Centre-ville", "El Alia", "Les Crêtes"],
    highlight: false
  },
  {
    city: "Rabat",
    areas: ["Agdal", "Hassan", "Hay Riad"],
    highlight: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-mylli-light to-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-mylli-primary">Soins à domicile de qualité</h1>
            <p className="text-xl text-mylli-gray mb-12">Des professionnels qualifiés pour vous accompagner dans le confort de votre foyer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mylli-primary hover:bg-mylli-primary/90 text-white">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-mylli-secondary text-mylli-secondary hover:bg-mylli-secondary/10">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service locations section */}
      <ServiceLocations 
        title="Nos zones d'intervention"
        subtitle="Nous intervenons dans plusieurs villes du Maroc pour vous offrir nos services de qualité"
        locations={locations}
      />
      
      {/* Features section */}
      <ParallaxSection 
        backgroundGradient="linear-gradient(135deg, #f5f9ff 0%, #e1f0fc 100%)"
        height="auto"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mylli-primary mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-lg text-mylli-gray max-w-3xl mx-auto">Notre engagement : vous offrir des soins de qualité dans le respect et la bienveillance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-mylli-light rounded-full flex items-center justify-center mb-4">
                <Clock size={24} className="text-mylli-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Disponibilité 24h/7</h3>
              <p className="text-mylli-gray">Une équipe disponible à tout moment pour répondre à vos besoins urgents</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-mylli-light rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-mylli-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personnel qualifié</h3>
              <p className="text-mylli-gray">Des professionnels diplômés et expérimentés pour des soins de qualité</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-mylli-light rounded-full flex items-center justify-center mb-4">
                <Shield size={24} className="text-mylli-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soins personnalisés</h3>
              <p className="text-mylli-gray">Une approche adaptée aux besoins spécifiques de chaque patient</p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Index;
