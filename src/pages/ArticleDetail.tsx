
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '@/data/articles';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, ArrowRight, Facebook, Twitter, Instagram, Share, Linkedin } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ShareData } from '@/types/article';
import { toast } from 'sonner';
import SafeHtmlRenderer from '@/components/common/SafeHtmlRenderer';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 3) : [];

  useEffect(() => {
    if (!article) {
      navigate('/articles');
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [article, navigate]);

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'dd MMMM yyyy', {
      locale: fr
    });
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'native') => {
    if (!article) return;
    
    const shareData: ShareData = {
      url: window.location.href,
      title: article.title,
      text: article.excerpt,
      image: article.imageSrc
    };

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`, '_blank', 'width=600,height=400');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`, '_blank', 'width=600,height=400');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`, '_blank', 'width=600,height=400');
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareData.title} - ${shareData.url}`)}`, '_blank');
        break;
      case 'native':
        if (navigator.share) {
          navigator.share({
            title: shareData.title,
            text: shareData.text,
            url: shareData.url
          })
          .then(() => toast.success('Contenu partagé avec succès'))
          .catch(() => toast.error('Le partage a été annulé ou n\'a pas pu être effectué'));
        } else {
          // Fallback for browsers that don't support native sharing
          toast.info('Utilisez les boutons de partage pour les réseaux sociaux');
        }
        break;
    }
  };

  if (!article) return null;

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-mylli-primary/5 to-mylli-accent/5 py-16">
        <div className="container-custom max-w-4xl">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-mylli-primary mb-6 hover:text-mylli-primary-dark transition-colors"
          >
            <ArrowRight size={16} className="mr-2 rotate-180" />
            Retour aux articles
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-mylli-gray mb-4">
            <span className="px-3 py-1 rounded-full bg-mylli-primary/10 text-mylli-primary">
              {article.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(article.publishedDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{article.readTime} min de lecture</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mylli-dark mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-mylli-primary/20 rounded-full flex items-center justify-center text-mylli-primary font-bold">
              {article.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <p className="font-medium">{article.author}</p>
              <p className="text-sm text-mylli-gray">Expert Santé</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8 shadow-md">
              <img 
                src={article.imageSrc} 
                alt={article.imageAlt} 
                className="w-full h-auto object-cover aspect-video" 
              />
            </div>
            
            {/* Article Content - Now using SafeHtmlRenderer */}
            <SafeHtmlRenderer 
              htmlContent={article.content}
              className="prose prose-lg max-w-none prose-headings:text-mylli-dark prose-p:text-mylli-gray prose-a:text-mylli-primary prose-a:no-underline hover:prose-a:text-mylli-primary-dark prose-a:transition-colors"
            />
            
            {/* Share Article */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold text-mylli-dark mb-4">Partager cet article</h3>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => handleShare('facebook')} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b5998] text-white hover:bg-[#3b5998]/90 transition-colors"
                  aria-label="Partager sur Facebook"
                >
                  <Facebook size={18} />
                  <span className="hidden sm:inline">Facebook</span>
                </button>
                <button 
                  onClick={() => handleShare('twitter')} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
                  aria-label="Partager sur Twitter"
                >
                  <Twitter size={18} />
                  <span className="hidden sm:inline">Twitter</span>
                </button>
                <button 
                  onClick={() => handleShare('linkedin')} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077B5] text-white hover:bg-[#0077B5]/90 transition-colors"
                  aria-label="Partager sur LinkedIn"
                >
                  <Linkedin size={18} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </button>
                <button 
                  onClick={() => handleShare('whatsapp')} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-colors"
                  aria-label="Partager sur WhatsApp"
                >
                  <Instagram size={18} />
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
                <button 
                  onClick={() => handleShare('native')} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-mylli-primary text-white hover:bg-mylli-primary-dark transition-colors"
                  aria-label="Plus d'options de partage"
                >
                  <Share size={18} />
                  <span className="hidden sm:inline">Partager</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Author Card */}
            <Card className="mb-8 bg-white border border-mylli-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">À propos de l'auteur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-mylli-primary/20 rounded-full flex items-center justify-center text-mylli-primary text-xl font-bold mb-4">
                    {article.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{article.author}</h3>
                  
                  <p className="text-sm">
                    Spécialiste dans l'accompagnement des personnes fragilisées, avec plus de 10 ans d'expérience dans le domaine de la santé.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Related Articles */}
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-mylli-dark mb-4">Articles connexes</h3>
              <div className="space-y-6">
                {relatedArticles.map(relatedArticle => (
                  <Link to={`/articles/${relatedArticle.slug}`} key={relatedArticle.id} className="group">
                    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border border-transparent hover:border-mylli-primary/20 bg-white">
                      <div className="flex">
                        <div className="w-24 h-24 overflow-hidden">
                          <img 
                            src={relatedArticle.imageSrc} 
                            alt={relatedArticle.imageAlt} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                        </div>
                        <div className="flex-1 p-3">
                          <h4 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-mylli-primary transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <div className="text-xs text-mylli-gray flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{formatDate(relatedArticle.publishedDate)}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/articles" 
                className="mt-6 inline-flex items-center text-mylli-primary font-medium hover:text-mylli-primary-dark transition-colors"
              >
                <span>Voir tous les articles</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-mylli-primary to-mylli-accent py-16 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin de services de soins à domicile ?
            </h2>
            <p className="mb-8 opacity-90">
              Nos experts sont disponibles pour répondre à toutes vos questions et vous proposer un service personnalisé.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-mylli-primary hover:bg-mylli-light py-3 px-6 rounded-full font-medium transition-colors"
              >
                Nous contacter
              </Link>
              <Link 
                to="/services" 
                className="bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-full font-medium transition-colors"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
