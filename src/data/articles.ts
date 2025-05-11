
import { Article } from '@/types/article';

export const articles: Article[] = [
  {
    id: '1',
    title: "Comprendre l'Alzheimer: Signes précoces et traitements actuels",
    slug: "comprendre-alzheimer-signes-et-traitements",
    excerpt: "L'Alzheimer est une maladie neurodégénérative qui touche principalement les personnes âgées. Découvrez les signes précoces et les traitements disponibles.",
    content: `
      <h2>Qu'est-ce que la maladie d'Alzheimer?</h2>
      <p>La maladie d'Alzheimer est une maladie neurodégénérative qui provoque une détérioration progressive et irréversible des cellules nerveuses du cerveau. Elle représente la cause la plus fréquente de démence chez les personnes âgées et affecte environ 50 millions de personnes dans le monde.</p>
      
      <h2>Les signes précoces</h2>
      <p>Les premiers symptômes de la maladie d'Alzheimer peuvent être subtils et souvent confondus avec les effets normaux du vieillissement. Voici quelques signes précoces à surveiller:</p>
      <ul>
        <li>Perte de mémoire affectant la vie quotidienne</li>
        <li>Difficultés à planifier ou résoudre des problèmes</li>
        <li>Confusion avec le temps ou le lieu</li>
        <li>Problèmes de langage et de communication</li>
        <li>Jugement altéré</li>
        <li>Retrait social et professionnel</li>
      </ul>
      
      <h2>Traitements actuels</h2>
      <p>Bien qu'il n'existe pas encore de traitement curatif pour la maladie d'Alzheimer, plusieurs approches peuvent aider à gérer les symptômes et améliorer la qualité de vie:</p>
      <ul>
        <li><strong>Traitements médicamenteux</strong>: Inhibiteurs de la cholinestérase et mémantine qui peuvent temporairement améliorer les symptômes.</li>
        <li><strong>Thérapies non médicamenteuses</strong>: Stimulation cognitive, thérapie par réminiscence, activité physique régulière.</li>
        <li><strong>Aménagements du cadre de vie</strong>: Adapter l'environnement pour plus de sécurité et moins de confusion.</li>
        <li><strong>Soutien aux aidants</strong>: Formation et soutien psychologique pour les proches qui accompagnent les patients.</li>
      </ul>
      
      <h2>Recherches en cours</h2>
      <p>La recherche sur la maladie d'Alzheimer est très active, avec plusieurs pistes prometteuses:</p>
      <ul>
        <li>Développement de nouveaux médicaments ciblant les plaques amyloïdes et les enchevêtrements neurofibrillaires.</li>
        <li>Thérapies immunologiques visant à stimuler le système immunitaire pour éliminer les protéines toxiques.</li>
        <li>Approches préventives basées sur la nutrition, l'exercice et la stimulation cognitive.</li>
      </ul>
      
      <h2>Comment Mylli Services peut vous aider</h2>
      <p>Chez Mylli Services, nos professionnels sont formés pour accompagner les personnes atteintes de la maladie d'Alzheimer et leurs familles. Nos services incluent:</p>
      <ul>
        <li>Soins personnalisés à domicile</li>
        <li>Stimulation cognitive adaptée</li>
        <li>Soutien aux aidants familiaux</li>
        <li>Formation spécifique pour les proches</li>
      </ul>
      
      <p>Si vous ou un proche êtes concernés par la maladie d'Alzheimer, n'hésitez pas à nous contacter pour un accompagnement professionnel et bienveillant.</p>
    `,
    imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    imageAlt: "Personne âgée avec un soignant",
    category: "Maladies neurodégénératives",
    publishedDate: "2023-11-15",
    readTime: 8,
    author: "Dr. Sophie Martin"
  },
  {
    id: '2',
    title: "Prévention des chutes chez les personnes âgées: Guide pratique",
    slug: "prevention-chutes-personnes-agees",
    excerpt: "Les chutes représentent un risque majeur pour les seniors. Découvrez nos conseils pratiques pour sécuriser le domicile et prévenir les accidents.",
    content: `
      <h2>L'importance de la prévention des chutes</h2>
      <p>Les chutes sont la principale cause de blessures chez les personnes âgées et peuvent avoir des conséquences graves sur leur santé et leur autonomie. Chaque année, près d'un tiers des personnes de plus de 65 ans sont victimes d'une chute, dont les conséquences peuvent être dramatiques: fractures, hospitalisation, perte d'autonomie, voire décès.</p>
      
      <h2>Facteurs de risque</h2>
      <p>Plusieurs facteurs peuvent augmenter le risque de chute chez les personnes âgées:</p>
      <ul>
        <li>Troubles de l'équilibre et de la marche</li>
        <li>Diminution de la force musculaire</li>
        <li>Problèmes de vision</li>
        <li>Certains médicaments (somnifères, antidépresseurs...)</li>
        <li>Maladies chroniques (Parkinson, arthrose...)</li>
        <li>Environnement inadapté au domicile</li>
      </ul>
      
      <h2>Sécuriser le domicile</h2>
      <p>Voici quelques aménagements simples mais efficaces pour rendre le domicile plus sûr:</p>
      <ul>
        <li>Éliminer les obstacles: fils électriques, petits meubles, tapis...</li>
        <li>Installer des barres d'appui dans la salle de bain et les toilettes</li>
        <li>Améliorer l'éclairage, particulièrement dans les escaliers</li>
        <li>Privilégier les sols antidérapants</li>
        <li>Disposer les objets d'usage quotidien à portée de main</li>
      </ul>
      
      <h2>Exercices recommandés</h2>
      <p>L'activité physique régulière joue un rôle clé dans la prévention des chutes:</p>
      <ul>
        <li>Exercices d'équilibre (tai-chi, yoga adapté...)</li>
        <li>Renforcement musculaire ciblé (jambes et hanches principalement)</li>
        <li>Marche quotidienne</li>
        <li>Étirements pour maintenir la souplesse</li>
      </ul>
      
      <h2>Suivi médical</h2>
      <p>Un suivi médical régulier permet de:</p>
      <ul>
        <li>Réévaluer les traitements médicamenteux</li>
        <li>Contrôler la vision et l'audition</li>
        <li>Adapter les aides techniques (canne, déambulateur...)</li>
        <li>Suivre l'évolution des pathologies chroniques</li>
      </ul>
      
      <h2>L'expertise de Mylli Services</h2>
      <p>Chez Mylli Services, nous proposons:</p>
      <ul>
        <li>Une évaluation personnalisée des risques à domicile</li>
        <li>Des conseils d'aménagement du logement</li>
        <li>Un accompagnement pour les activités physiques adaptées</li>
        <li>Une présence rassurante pour sécuriser le quotidien</li>
      </ul>
      
      <p>La prévention des chutes est un élément essentiel du maintien à domicile des personnes âgées dans de bonnes conditions. N'hésitez pas à nous contacter pour bénéficier de notre expertise dans ce domaine.</p>
    `,
    imageSrc: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    imageAlt: "Aménagement sécurisé pour seniors",
    category: "Prévention et sécurité",
    publishedDate: "2023-09-22",
    readTime: 6,
    author: "Mme Claire Dupont"
  },
  {
    id: '3',
    title: "Nutrition adaptée pour les seniors: conseils et menus équilibrés",
    slug: "nutrition-adaptee-seniors",
    excerpt: "Une alimentation équilibrée est essentielle pour préserver la santé des personnes âgées. Découvrez nos recommandations nutritionnelles spécifiques.",
    content: `
      <h2>Les besoins nutritionnels spécifiques des seniors</h2>
      <p>Avec l'âge, les besoins nutritionnels évoluent tandis que l'appétit diminue souvent. Il est donc crucial d'adapter l'alimentation pour maintenir un bon état de santé et prévenir les carences.</p>
      
      <h2>Macronutriments essentiels</h2>
      <p>Voici comment équilibrer les apports en macronutriments chez les personnes âgées:</p>
      <ul>
        <li><strong>Protéines</strong>: Les besoins sont augmentés (1g/kg de poids corporel) pour lutter contre la sarcopénie (perte musculaire). Privilégier les sources de protéines de haute qualité: viandes maigres, poissons, œufs, produits laitiers, légumineuses.</li>
        <li><strong>Glucides</strong>: Favoriser les glucides complexes à index glycémique bas (céréales complètes, légumineuses) pour maintenir une glycémie stable.</li>
        <li><strong>Lipides</strong>: Privilégier les bonnes graisses (huile d'olive, poissons gras) riches en oméga-3, bénéfiques pour la santé cardiovasculaire et cognitive.</li>
      </ul>
      
      <h2>Micronutriments à surveiller</h2>
      <p>Certains micronutriments nécessitent une attention particulière:</p>
      <ul>
        <li><strong>Calcium et vitamine D</strong>: Essentiels pour la santé osseuse et la prévention de l'ostéoporose.</li>
        <li><strong>Vitamine B12</strong>: Son absorption diminue avec l'âge, augmentant le risque de carence.</li>
        <li><strong>Fer</strong>: Pour prévenir l'anémie, fréquente chez les seniors.</li>
        <li><strong>Antioxydants</strong>: Vitamines C, E et bêta-carotène pour renforcer les défenses immunitaires.</li>
      </ul>
      
      <h2>Hydratation</h2>
      <p>La sensation de soif diminue avec l'âge, pourtant les besoins en eau restent importants. Recommandations:</p>
      <ul>
        <li>Boire au minimum 1,5L d'eau par jour, même sans sensation de soif</li>
        <li>Varier les sources d'hydratation: eau, tisanes, bouillons, fruits et légumes riches en eau</li>
        <li>Limiter la consommation d'alcool et de boissons caféinées</li>
      </ul>
      
      <h2>Exemple de menus équilibrés</h2>
      <p><strong>Petit-déjeuner:</strong></p>
      <ul>
        <li>Yaourt nature enrichi en protéines</li>
        <li>Flocons d'avoine avec fruits frais</li>
        <li>Une tranche de pain complet avec un peu de beurre</li>
        <li>Thé ou café sans sucre</li>
      </ul>
      
      <p><strong>Déjeuner:</strong></p>
      <ul>
        <li>Poisson grillé ou viande maigre (100g)</li>
        <li>Légumes cuits à la vapeur</li>
        <li>Riz complet ou quinoa</li>
        <li>Fruit frais de saison</li>
      </ul>
      
      <p><strong>Collation:</strong></p>
      <ul>
        <li>Compote sans sucre ajouté</li>
        <li>Quelques amandes ou noix</li>
      </ul>
      
      <p><strong>Dîner:</strong></p>
      <ul>
        <li>Soupe de légumes maison</li>
        <li>Omelette aux herbes</li>
        <li>Salade verte avec vinaigrette à l'huile d'olive</li>
        <li>Yaourt nature avec un peu de miel</li>
      </ul>
      
      <h2>Comment Mylli Services peut vous aider</h2>
      <p>Nos services incluent:</p>
      <ul>
        <li>Aide à la préparation de repas équilibrés</li>
        <li>Courses et sélection de produits adaptés</li>
        <li>Conseils nutritionnels personnalisés</li>
        <li>Suivi de l'hydratation quotidienne</li>
      </ul>
      
      <p>Une bonne nutrition est un pilier essentiel du bien-vieillir. Nos équipes sont formées pour vous accompagner dans cette démarche préventive et thérapeutique.</p>
    `,
    imageSrc: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    imageAlt: "Repas équilibré pour seniors",
    category: "Nutrition et bien-être",
    publishedDate: "2024-01-10",
    readTime: 7,
    author: "Dr. Thomas Blanc"
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit = 3): Article[] => {
  return articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit);
};
