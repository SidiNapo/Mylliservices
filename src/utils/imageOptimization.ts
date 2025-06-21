// Image optimization utilities - ULTIMATE rebuild for new favicon system

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

  // Handle Lovable uploads with ULTIMATE cache busting system
  if (src.includes('lovable-uploads')) {
    const params = new URLSearchParams();
    params.set('w', width.toString());
    params.set('q', quality.toString());
    
    if (height) {
      params.set('h', height.toString());
    }
    
    if (cacheBuster) {
      params.set('v', '2024_final_rebuild');
      params.set('t', Date.now().toString());
      params.set('ultimate', 'true');
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

// Critical images with iOS-optimized favicon system
export const getCriticalImages = (): string[] => {
  const timestamp = Date.now();
  const version = '2024_final_rebuild';
  const random = Math.random().toString(36).substring(7);
  const iosParam = /iPad|iPhone|iPod/.test(navigator.userAgent) ? '&ios=true' : '';
  
  return [
    `/lovable-uploads/2fd660e3-872f-4057-81ba-00574e031c9a.png?v=${version}&t=${timestamp}&r=${random}&critical=true${iosParam}`, // iOS-optimized favicon/logo
    `/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png?v=${version}&t=${timestamp}&r=${random}&critical=true${iosParam}`, // Hero image
  ];
};

// Preload critical images with iOS favicon optimization
export const preloadCriticalImages = (): void => {
  const criticalImages = getCriticalImages();
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('data-mylli-preload', 'true');
    
    // Add iOS-specific attributes for favicon preloading
    if (src.includes('2fd660e3-872f-4057-81ba-00574e031c9a.png') && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      link.setAttribute('data-ios-favicon', 'true');
    }
    
    document.head.appendChild(link);
  });
  
  console.log('✅ Critical images preloaded with iOS favicon optimization');
};
