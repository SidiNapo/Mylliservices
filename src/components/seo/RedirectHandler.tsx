
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle 301 redirects from old URLs to new URLs
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    
    // Redirect mapping for old URLs
    const redirectMap: { [key: string]: string } = {
      '/outils.html': '/outils',
      '/fonctionnement.html': '/fonctionnement',
      '/articlesutiles.html': '/articles',
      // Add any other old URLs that need redirecting
    };

    // Check if current path needs redirection
    if (redirectMap[currentPath]) {
      // Perform 301 redirect
      window.history.replaceState(null, '', redirectMap[currentPath]);
      navigate(redirectMap[currentPath], { replace: true });
    }

    // Handle query parameter redirects (for URLs like ?page=outils)
    const pageParam = searchParams.get('page');
    if (pageParam) {
      const queryRedirectMap: { [key: string]: string } = {
        'outils': '/outils',
        'fonctionnement': '/fonctionnement',
        'articlesutiles': '/articles',
        'services': '/services',
        'contact': '/contact'
      };

      if (queryRedirectMap[pageParam]) {
        navigate(queryRedirectMap[pageParam], { replace: true });
      }
    }
  }, [location, navigate]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
