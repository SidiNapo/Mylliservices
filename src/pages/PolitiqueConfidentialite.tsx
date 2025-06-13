
import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import PageBanner from '@/components/common/PageBanner';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEOHead 
        title="Politique de Confidentialité - Mylli Services"
        description="Découvrez comment Mylli Services protège vos données personnelles et respecte votre vie privée dans nos services de soins à domicile."
        canonicalUrl="/politique-confidentialite"
      />
      
      <PageBanner
        title="Politique de Confidentialité"
        subtitle="Protection de vos données personnelles"
        bgImage="/lovable-uploads/b9ac4790-4e3c-4f05-aaa8-cffc22c2b8d9.png"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Introduction</h2>
              <p className="text-mylli-gray leading-relaxed">
                Chez <strong className="text-mylli-primary">Mylli Services</strong>, nous nous engageons à protéger 
                et respecter votre vie privée. Cette politique explique comment nous collectons, utilisons et 
                protégeons vos informations personnelles dans le cadre de nos services de soins à domicile.
              </p>
            </div>

            {/* Collecte des données */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Collecte des Données</h2>
              <div className="space-y-4 text-mylli-gray">
                <p>Nous collectons les informations suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Informations d'identification personnelle (nom, prénom, adresse)</li>
                  <li>Coordonnées (téléphone, email)</li>
                  <li>Informations médicales nécessaires aux soins</li>
                  <li>Données de contact d'urgence</li>
                  <li>Informations de facturation</li>
                </ul>
              </div>
            </div>

            {/* Utilisation des données */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Utilisation des Données</h2>
              <div className="space-y-4 text-mylli-gray">
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fournir nos services de soins à domicile</li>
                  <li>Coordonner les interventions médicales</li>
                  <li>Communiquer avec vous et vos proches</li>
                  <li>Gérer la facturation et les paiements</li>
                  <li>Améliorer la qualité de nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </div>

            {/* Protection des données */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Protection des Données</h2>
              <div className="space-y-4 text-mylli-gray">
                <p>Nous mettons en place des mesures de sécurité appropriées :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données sensibles</li>
                  <li>Accès limité aux informations personnelles</li>
                  <li>Formation du personnel sur la confidentialité</li>
                  <li>Systèmes informatiques sécurisés</li>
                  <li>Sauvegarde régulière des données</li>
                </ul>
              </div>
            </div>

            {/* Partage des données */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Partage des Données</h2>
              <div className="space-y-4 text-mylli-gray">
                <p>Nous partageons vos données uniquement :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avec les professionnels de santé impliqués dans vos soins</li>
                  <li>Avec votre médecin traitant (avec votre consentement)</li>
                  <li>Avec les organismes de sécurité sociale pour le remboursement</li>
                  <li>En cas d'obligation légale ou réglementaire</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Vos Droits</h2>
              <div className="space-y-4 text-mylli-gray">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> consulter vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger des informations inexactes</li>
                  <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                  <li><strong>Droit de limitation :</strong> limiter le traitement</li>
                </ul>
              </div>
            </div>

            {/* Conservation des données */}
            <div className="border-b border-mylli-light pb-6">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Conservation des Données</h2>
              <p className="text-mylli-gray leading-relaxed">
                Nous conservons vos données personnelles pendant la durée nécessaire à la fourniture de nos services 
                et conformément aux obligations légales. Les données médicales sont conservées selon les règles 
                déontologiques et légales en vigueur.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-mylli-primary/5 to-mylli-secondary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-mylli-dark mb-4">Contact</h2>
              <div className="space-y-3 text-mylli-gray">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                  contactez-nous :
                </p>
                <div className="space-y-2">
                  <p><strong>Email :</strong> <a href="mailto:contact@mylliservices.ma" className="text-mylli-primary hover:text-mylli-secondary">contact@mylliservices.ma</a></p>
                  <p><strong>Téléphone :</strong> <a href="tel:+212600000000" className="text-mylli-primary hover:text-mylli-secondary">+212 6 00 00 00 00</a></p>
                  <p><strong>WhatsApp :</strong> <a href="https://wa.me/212600000000" className="text-mylli-primary hover:text-mylli-secondary">+212 6 00 00 00 00</a></p>
                  <p><strong>Adresse :</strong> Avenue Hassan II, Casablanca, Maroc</p>
                </div>
              </div>
            </div>

            {/* Dernière mise à jour */}
            <div className="text-center text-sm text-mylli-gray pt-6 border-t border-mylli-light">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
