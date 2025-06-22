
// Image optimization utilities - New Healthcare Logo Version

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

  // Handle Lovable uploads with clean cache busting
  if (src.includes('lovable-uploads')) {
    const params = new URLSearchParams();
    params.set('w', width.toString());
    params.set('q', quality.toString());
    
    if (height) {
      params.set('h', height.toString());
    }
    
    if (cacheBuster) {
      const sessionId = sessionStorage.getItem('mylli-new-favicon-session') || 'new_healthcare_stable';
      params.set('v', '2024_new_healthcare_final');
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

// Critical images with new healthcare logo
export const getCriticalImages = (): string[] => {
  const sessionId = sessionStorage.getItem('mylli-new-favicon-session') || 'new_healthcare_stable';
  const version = '2024_new_healthcare_final';
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iosParam = isIOS ? '&ios=new_healthcare' : '';
  
  return [
    `/lovable-uploads/b9acdab9-45f1-4b63-ad2b-8b0f6390ae5c.png?v=${version}&session=${sessionId}&critical=true${iosParam}`,
    `/lovable-uploads/00945798-dc13-478e-94d1-d1aaa70af5a6.png?v=${version}&session=${sessionId}&critical=true${iosParam}`,
  ];
};

// Preload critical images with new healthcare logo
export const preloadCriticalImages = (): void => {
  const criticalImages = getCriticalImages();
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('data-mylli-new-preload', 'true');
    
    // Add iOS-specific attributes for new healthcare favicon preloading
    if (src.includes('b9acdab9-45f1-4b63-ad2b-8b0f6390ae5c.png') && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      link.setAttribute('data-new-ios-favicon', 'true');
    }
    
    document.head.appendChild(link);
  });
  
  console.log('✅ Critical images preloaded with new healthcare logo');
};
