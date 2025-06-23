
import { Heart, Users, Award, Star, CheckCircle, Target, Book, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from '@/components/common/SectionHeading';
import PageBanner from '@/components/common/PageBanner';
import SEOHead from '@/components/seo/SEOHead';
import OptimizedImage from '@/components/seo/OptimizedImage';

const EquipePage = () => {
  const teamValues = [
    {
      icon: <Heart className="w-8 h-8 text-mylli-primary" />,
      title: "Bienveillance",
      description: "Nos soignants font preuve d'empathie et de compassion dans chaque interaction."
    },
    {
      icon: <Users className="w-8 h-8 text-mylli-secondary" />,
      title: "Professionnalisme",
      description: "Une expertise technique rigoureuse associée à un savoir-être exemplaire."
    },
    {
      icon: <Award className="w-8 h-8 text-mylli-quaternary" />,
      title: "Excellence",
      description: "Nous visons constamment l'amélioration de nos pratiques et services."
    },
    {
      icon: <Star className="w-8 h-8 text-mylli-accent" />,
      title: "Respect",
      description: "Chaque patient est traité avec dignité et considération."
    }
  ];

  const qualifications = [
    "Diplômes d'État reconnus",
    "Formations spécialisées en gériatrie",
    "Certifications en soins palliatifs",
    "Expérience en milieu hospitalier",
    "Formation aux maladies chroniques",
    "Compétences en communication"
  ];

  const trainingPrograms = [
    {
      title: "Formation technique",
      description: "Perfectionnement des compétences médicales et paramédicales pour une prise en charge optimale.",
      image: "/lovable-uploads/2efeb232-802d-4d1a-8654-a3857eeadcc0.png",
      features: [
        "Techniques de soins avancées",
        "Protocoles d'hygiène renforcés",
        "Gestion des urgences à domicile",
        "Utilisation d'équipements médicaux"
      ],
      color: "primary"
    },
    {
      title: "Formation relationnelle",
      description: "Développement des soft skills pour une relation de confiance avec les patients et leurs familles.",
      image: "/lovable-uploads/c790fe07-e8fa-4d8a-9b4e-e5519f42463c.png",
      features: [
        "Communication thérapeutique",
        "Gestion du stress et des émotions",
        "Accompagnement des familles",
        "Éthique et déontologie"
      ],
      color: "secondary"
    }
  ];

  return (
    <>
      <SEOHead
        title="Notre Équipe - Mylli Services | Professionnels de Santé Qualifiés"
        description="Découvrez l'équipe de professionnels de santé de Mylli Services : infirmiers et aide-soignants diplômés, formés et expérimentés pour des soins à domicile de qualité."
        keywords="équipe soignante, infirmiers qualifiés, aide-soignants diplômés, professionnels santé domicile, formation continue"
        canonicalUrl="/equipe"
      />

      <div className="min-h-screen">
        <PageBanner
          title="Notre Équipe"
          subtitle="Des professionnels passionnés au service de votre bien-être"
          backgroundImage="/lovable-uploads/5fab226a-8f70-4cea-9a26-129fce7788b4.png"
        />

        {/* Team Introduction */}
        <section className="section-padding bg-gradient-to-br from-white to-mylli-light/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionHeading
                title="Une équipe d'exception"
                subtitle="Chez Mylli Services, nous croyons que la qualité des soins dépend avant tout de la qualité humaine de nos équipes. Chaque membre est sélectionné avec soin pour ses compétences techniques et ses valeurs humaines."
                variant="gradient"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-mylli-primary/10 to-mylli-quaternary/10 rounded-2xl flex items-center justify-center">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-mylli-dark mb-4">{value.title}</h3>
                    <p className="text-mylli-gray leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Character Section */}
        <section className="section-padding bg-gradient-to-br from-mylli-primary/5 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  title="LE CARACTÈRE DES SOIGNANTS EST AUSSI IMPORTANT QUE LES CONNAISSANCES QU'ILS POSSÈDENT"
                  align="left"
                  variant="gradient"
                />
                <div className="space-y-6 text-lg text-mylli-gray leading-relaxed">
                  <p>
                    Nos soignants ne se contentent pas d'être techniquement compétents. 
                    Ils possèdent cette capacité rare à créer un lien de confiance immédiat 
                    avec leurs patients, à les rassurer et à leur apporter un soutien moral 
                    précieux dans les moments difficiles.
                  </p>
                  <p>
                    Chaque membre de notre équipe est choisi pour sa capacité d'écoute, 
                    sa patience, son respect de la dignité humaine et sa faculté à s'adapter 
                    aux besoins spécifiques de chaque situation.
                  </p>
                  <p>
                    Cette approche humaine fait toute la différence dans la qualité 
                    de l'accompagnement que nous proposons.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-mylli-primary to-mylli-quaternary rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <OptimizedImage
                    src="/lovable-uploads/60119222-b60f-4c31-b78f-dbc7a6554cc5.png"
                    alt="Équipe soignante professionnelle Mylli Services avec drapeau marocain"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionHeading
                title="Qualifications et Expertises"
                subtitle="Tous nos professionnels possèdent les diplômes et certifications requis pour exercer en toute sécurité."
                variant="gradient"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-to-r from-mylli-primary/10 to-mylli-quaternary/10 rounded-xl border border-mylli-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CheckCircle className="w-6 h-6 text-mylli-primary mr-3 flex-shrink-0" />
                  <span className="text-mylli-dark font-medium">{qualification}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="section-padding bg-gradient-to-br from-mylli-light/50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionHeading
                title="Formation et Évaluation Continue"
                subtitle="Nous investissons constamment dans la formation de nos équipes pour garantir les meilleurs standards de soins."
                variant="gradient"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="relative h-64 overflow-hidden">
                    <OptimizedImage
                      src={program.image}
                      alt={program.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mylli-dark/80 via-mylli-dark/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`flex items-center ${program.color === 'primary' ? 'text-mylli-primary' : 'text-mylli-secondary'}`}>
                        {program.color === 'primary' ? <Target className="w-6 h-6 mr-2" /> : <Lightbulb className="w-6 h-6 mr-2" />}
                        <span className="text-white font-semibold">{program.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 ${program.color === 'primary' ? 'text-mylli-primary' : 'text-mylli-secondary'}`}>
                      {program.title}
                    </h3>
                    <p className="text-mylli-gray mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${program.color === 'primary' ? 'bg-mylli-primary' : 'bg-mylli-secondary'} mr-3`}></div>
                          <span className="text-mylli-dark font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-mylli-primary to-mylli-quaternary text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez Notre Équipe
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Vous êtes un professionnel de santé passionné par l'accompagnement à domicile ? 
                Nous recherchons constamment des talents pour renforcer notre équipe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-mylli-primary font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Candidater
                </a>
                <a
                  href="mailto:recrutement@mylliservices.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-mylli-primary transition-all duration-300 hover:scale-105"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EquipePage;
