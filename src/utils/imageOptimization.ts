
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
      params.set('v', '2024_v2');
      params.set('t', Date.now().toString());
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

// Critical images that should be preloaded with aggressive cache busting
export const getCriticalImages = (): string[] => {
  const timestamp = Date.now();
  const version = '2024_v2';
  return [
    `/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${version}&t=${timestamp}&critical=true&ios_force=true`, // New favicon/logo
    `/lovable-uploads/822dc05d-7510-491a-b864-fb87997f7aa0.png?v=${version}&t=${timestamp}&critical=true`, // Original logo
    `/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png?v=${version}&t=${timestamp}&critical=true`, // Hero image
  ];
};

// Preload critical images with aggressive cache busting
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

// Legacy function for backward compatibility - now redirects to new favicon manager
export const forceIOSFaviconRefresh = (): void => {
  console.log('⚠️ forceIOSFaviconRefresh is deprecated. Use FaviconManager instead.');
  
  // Import and use the new favicon manager
  import('./faviconManager').then(({ updateFavicons }) => {
    updateFavicons();
  });
};
