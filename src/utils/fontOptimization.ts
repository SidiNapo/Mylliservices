
// Font loading optimization utilities

export const preloadCriticalFonts = () => {
  // Preload only the most critical font weights
  const criticalFonts = [
    {
      href: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
      weight: '400'
    },
    {
      href: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
      weight: '700'
    }
  ];

  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font.href;
    document.head.appendChild(link);
  });
};

export const optimizeFontDisplay = () => {
  // Add font-display: swap to existing font links
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=swap')) {
      const separator = href.includes('?') ? '&' : '?';
      link.setAttribute('href', `${href}${separator}display=swap`);
    }
  });
};

export const loadFontsAsync = () => {
  // Load non-critical fonts asynchronously
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Montserrat:wght@400;600;700&display=swap';
  fontLink.media = 'print';
  fontLink.onload = () => {
    fontLink.media = 'all';
  };
  document.head.appendChild(fontLink);
};
