
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles, getCategories } from '@/data/articles';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, Search, Tag } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = getCategories();

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchQuery === '' || article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'dd MMMM yyyy', {
      locale: fr
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
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
          
          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mylli-gray" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mylli-primary/20 focus:border-mylli-primary"
                />
              </div>
              
              {/* Category Filter */}
              <div className="md:w-64">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full h-12 border-gray-200 rounded-xl">
                    <div className="flex items-center">
                      <Tag className="mr-2 text-mylli-gray" size={16} />
                      <SelectValue placeholder="Toutes les catégories" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category.name} value={category.name.toLowerCase()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Articles Grid */}
      <div className="container-custom py-12">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
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
                    {/* Enhanced overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      </div>
    </div>
  );
};

export default ArticlesPage;
