
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const ARTICLES_PER_PAGE = 6;

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = articles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'dd MMMM yyyy', { locale: fr });
  };
  
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mylli-primary to-mylli-accent opacity-10 -z-10"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-mylli-light rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-mylli-secondary rounded-full blur-3xl opacity-20 -z-10"></div>
        
        <div className="container-custom py-16 md:py-20">
          <SectionHeading 
            title="Nos Articles de Santé" 
            subtitle="Des informations fiables et actualisées pour mieux comprendre les enjeux de santé et du vieillissement"
            variant="gradient"
            align="center"
          />
          
          <div className="flex justify-center">
            <div className="relative p-1.5 rounded-lg bg-gradient-to-r from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 inline-block">
              <input 
                type="text" 
                placeholder="Rechercher un article..." 
                className="px-4 py-3 rounded-md bg-white focus:outline-none w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Articles Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <Link 
              to={`/articles/${article.slug}`} 
              key={article.id}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-transparent hover:border-mylli-primary/20 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.imageSrc} 
                    alt={article.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-mylli-dark">
                    {article.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-mylli-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2 text-mylli-gray">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-mylli-gray pt-0">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-mylli-secondary" />
                    <span>{formatDate(article.publishedDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} className="text-mylli-primary" />
                    <span>{article.readTime} min de lecture</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(page)}
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-mylli-primary/5 to-mylli-accent/5 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-mylli-dark mb-4">
              Restez informés de nos derniers articles
            </h2>
            <p className="text-mylli-gray mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos nouveaux articles directement dans votre boîte mail
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="px-4 py-3 rounded-md border border-gray-300 focus:border-mylli-primary focus:ring-2 focus:ring-mylli-primary/20 focus:outline-none w-full md:w-96"
              />
              <button className="btn-primary whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
