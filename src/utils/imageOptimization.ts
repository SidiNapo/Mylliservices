
// Image optimization utilities - Updated with new healthcare logo

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

  // Handle Lovable uploads with CLEAN cache busting (no URL fragments)
  if (src.includes('lovable-uploads')) {
    const params = new URLSearchParams();
    params.set('w', width.toString());
    params.set('q', quality.toString());
    
    if (height) {
      params.set('h', height.toString());
    }
    
    if (cacheBuster) {
      // Use clean session-based cache busting - NO FRAGMENTS
      const sessionId = sessionStorage.getItem('mylli-favicon-session') || 'healthcare';
      params.set('v', '2024_healthcare_logo');
      params.set('session', sessionId);
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

// Critical images with CLEAN URLs - Updated with new healthcare logo
export const getCriticalImages = (): string[] => {
  const sessionId = sessionStorage.getItem('mylli-favicon-session') || 'healthcare';
  const version = '2024_healthcare_logo';
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iosParam = isIOS ? '&ios=stable' : '';
  
  return [
    `/lovable-uploads/554676d0-4988-4b83-864c-15c32ee349a2.png?v=${version}&session=${sessionId}&critical=true${iosParam}`,
    `/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png?v=${version}&session=${sessionId}&critical=true${iosParam}`,
  ];
};

// Preload critical images with CLEAN URLs
export const preloadCriticalImages = (): void => {
  const criticalImages = getCriticalImages();
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('data-mylli-preload', 'true');
    
    // Add iOS-specific attributes for healthcare favicon preloading
    if (src.includes('554676d0-4988-4b83-864c-15c32ee349a2.png') && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      link.setAttribute('data-ios-healthcare-favicon', 'true');
    }
    
    document.head.appendChild(link);
  });
  
  console.log('✅ Critical images preloaded with new healthcare logo');
};
