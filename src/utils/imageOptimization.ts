
// Image optimization utilities

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'auto';
  fit?: 'cover' | 'contain' | 'fill' | 'crop';
  cacheBuster?: boolean;
}

export const optimizeImageUrl = (
  src: string, 
  options: ImageOptimizationOptions = {}
): string => {
  const {
    width = 800,
    height,
    quality = 85,
    format = 'auto',
    fit = 'crop',
    cacheBuster = false
  } = options;

  // Handle Unsplash images
  if (src.includes('unsplash.com')) {
    const params = new URLSearchParams();
    params.set('auto', 'format');
    params.set('fit', fit);
    params.set('q', quality.toString());
    params.set('w', width.toString());
    
    if (height) {
      params.set('h', height.toString());
    }
    
    if (format !== 'auto') {
      params.set('fm', format);
    }
    
    return `${src}?${params.toString()}`;
  }

  // Handle Lovable uploads
  if (src.includes('lovable-uploads')) {
    const params = new URLSearchParams();
    params.set('w', width.toString());
    params.set('q', quality.toString());
    
    if (height) {
      params.set('h', height.toString());
    }
    
    if (cacheBuster) {
      params.set('v', Date.now().toString());
    }
    
    return `${src}?${params.toString()}`;
  }

  return src;
};

export const generateSrcSet = (
  src: string, 
  widths: number[] = [400, 800, 1200, 1600]
): string => {
  return widths
    .map(width => {
      const optimizedSrc = optimizeImageUrl(src, { width });
      return `${optimizedSrc} ${width}w`;
    })
    .join(', ');
};

export const getResponsiveSizes = (
  breakpoints: Record<string, string> = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    default: '33vw'
  }
): string => {
  const entries = Object.entries(breakpoints);
  const mediaQueries = entries
    .filter(([key]) => key !== 'default')
    .map(([query, size]) => `${query} ${size}`);
  
  const defaultSize = breakpoints.default || '100vw';
  return [...mediaQueries, defaultSize].join(', ');
};

// Critical images that should be preloaded with cache busting
export const getCriticalImages = (): string[] => {
  const timestamp = Date.now();
  return [
    `/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${timestamp}&critical=true`, // New favicon/logo
    `/lovable-uploads/822dc05d-7510-491a-b864-fb87997f7aa0.png?v=${timestamp}&critical=true`, // Original logo
    `/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png?v=${timestamp}&critical=true`, // Hero image
  ];
};

// Preload critical images with cache busting
export const preloadCriticalImages = (): void => {
  const criticalImages = getCriticalImages();
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Force iOS favicon refresh
export const forceIOSFaviconRefresh = (): void => {
  const timestamp = Date.now();
  const faviconUrl = `/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${timestamp}&ios=force`;
  
  // Remove all existing favicon links
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(link => link.remove());
  
  // Create new favicon links with timestamp
  const createFaviconLink = (rel: string, sizes: string | null, href: string) => {
    const link = document.createElement('link');
    link.rel = rel;
    if (sizes) link.setAttribute('sizes', sizes);
    link.href = href;
    link.type = 'image/png';
    document.head.appendChild(link);
  };
  
  // Standard favicons
  createFaviconLink('icon', '32x32', faviconUrl);
  createFaviconLink('icon', '16x16', faviconUrl);
  createFaviconLink('shortcut icon', null, faviconUrl);
  
  // iOS specific apple-touch-icons
  const iosSizes = ['180x180', '152x152', '144x144', '120x120', '114x114', '76x76', '72x72', '60x60', '57x57'];
  iosSizes.forEach(size => {
    createFaviconLink('apple-touch-icon', size, `${faviconUrl}&size=${size}`);
  });
  
  // Default apple-touch-icon
  createFaviconLink('apple-touch-icon', null, `${faviconUrl}&default=true`);
};
