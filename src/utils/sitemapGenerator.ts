
// Dynamic sitemap generation utility

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateDynamicSitemap = () => {
  const baseUrl = 'https://mylliservices.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages: SitemapUrl[] = [
    {
      loc: '/',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: '/services',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: '/services/aide-soignant',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/services/infirmier',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/fonctionnement',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/equipe',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/apropos',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/articles',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    }
  ];

  // Add dynamic article pages (would be populated from CMS/data)
  const articleSlugs = [
    'importance-aide-domicile-personnes-agees',
    'choisir-bon-aide-soignant',
    'soins-infirmiers-domicile-avantages'
  ];

  const articlePages: SitemapUrl[] = articleSlugs.map(slug => ({
    loc: `/articles/${slug}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.6
  }));

  const allPages = [...staticPages, ...articlePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Robots.txt generator
export const generateRobotsTxt = () => {
  const baseUrl = 'https://mylliservices.com';
  
  return `User-agent: *
Allow: /

# Disallow admin or private areas
# Disallow: /admin/
# Disallow: /private/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /`;
};

// Update sitemap with new content
export const updateSitemap = (newUrls: SitemapUrl[]) => {
  const currentSitemap = generateDynamicSitemap();
  // In a real implementation, this would update the actual sitemap file
  console.log('Sitemap updated with new URLs:', newUrls);
  return currentSitemap;
};
