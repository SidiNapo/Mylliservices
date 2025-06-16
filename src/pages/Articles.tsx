import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';
import { articles } from '@/data/articles';
import SEOHead from '@/components/seo/SEOHead';

const ArticlesPage = () => {
  return (
    <div>
      <SEOHead 
        title="Articles Utiles sur l'Aide et les Soins à Domicile | Mylli Services" 
        description="Retrouvez nos articles informatifs sur la maladie de Parkinson, Alzheimer, la sclérose en plaques, les soins palliatifs, l'AVC et d'autres sujets liés à l'aide et aux soins à domicile." 
        keywords="articles aide à domicile, informations soins à domicile, maladie de Parkinson, Alzheimer, sclérose en plaques, soins palliatifs, AVC, santé à domicile"
        canonicalUrl="/articles" 
      />
      
      <PageBanner 
        title="Articles Utiles" 
        subtitle="Informations et conseils sur l'aide et les soins à domicile" 
        variant="modern" 
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-mylli-dark mb-6">
              Articles aide à domicile : maladie de Parkinson, Alzheimer, soins palliatifs
            </h1>
            <p className="text-mylli-gray text-xl leading-relaxed">
              Découvrez nos informations soins à domicile, conseils sur la sclérose en plaques, l'AVC et autres sujets de santé à domicile pour mieux accompagner vos proches.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Articles Récents" 
            subtitle="Conseils et informations pour mieux vivre à domicile" 
            align="center" 
            className="mb-16" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.slug} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <Link to={`/articles/${article.slug}`}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-64 object-cover object-center" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mylli-dark mb-2">{article.title}</h3>
                    <p className="text-mylli-gray mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-mylli-gray">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin de conseils personnalisés ?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour tous vos besoins d'informations soins à domicile et de prise en charge des maladies chroniques.
          </p>
          <Button asChild className="btn-accent">
            <Link to="/contact">Contactez nos experts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
