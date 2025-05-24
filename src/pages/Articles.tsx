
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles, getCategories } from '@/data/articles';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, Search, Tag } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArticleCategory } from '@/types/article';

const ARTICLES_PER_PAGE = 6;

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = getCategories();

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchQuery === '' || article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });
  
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'dd MMMM yyyy', {
      locale: fr
    });
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };
  
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1); // Reset to first page when changing category
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
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            {/* Search Bar */}
            <div className="relative p-1.5 rounded-lg bg-gradient-to-r from-mylli-primary/20 via-mylli-secondary/20 to-mylli-accent/20 inline-block w-full md:w-auto">
              <div className="flex items-center bg-white rounded-md px-3">
                <Search size={18} className="text-mylli-gray mr-2" />
                <input 
                  type="text" 
                  placeholder="Rechercher un article..." 
                  className="py-3 bg-transparent focus:outline-none w-full md:w-72" 
                  value={searchQuery} 
                  onChange={handleSearch} 
                />
              </div>
            </div>
            
            {/* Categories Dropdown */}
            <div className="w-full md:w-auto">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full md:w-56 border-mylli-primary/20 focus:ring-mylli-primary/20">
                  <div className="flex items-center">
                    <Tag size={16} className="mr-2 text-mylli-primary" />
                    <SelectValue placeholder="Toutes les catégories" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Categories Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button 
              onClick={() => handleCategoryChange('all')} 
              className={`px-3 py-1 text-xs md:text-sm rounded-full transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-mylli-primary text-white' 
                  : 'bg-gray-100 text-mylli-gray hover:bg-gray-200'
              }`}
            >
              Tout
            </button>
            {categories.map(category => (
              <button 
                key={category.value} 
                onClick={() => handleCategoryChange(category.value)} 
                className={`px-3 py-1 text-xs md:text-sm rounded-full transition-colors flex items-center ${
                  selectedCategory === category.value 
                    ? 'bg-mylli-primary text-white' 
                    : 'bg-gray-100 text-mylli-gray hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-1 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Articles Grid */}
      <div className="container-custom py-12">
        {paginatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map(article => (
              <Link to={`/articles/${article.slug}`} key={article.id} className="group">
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
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-medium mb-2">Aucun article trouvé</h3>
            <p className="text-mylli-gray mb-8">
              Essayez avec d'autres mots-clés ou catégories
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }} 
              className="btn-secondary"
            >
              Voir tous les articles
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && filteredArticles.length > 0 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} 
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
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
    </div>
  );
};

export default ArticlesPage;
