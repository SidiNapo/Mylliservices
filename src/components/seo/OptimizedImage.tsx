
import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'skeleton' | 'none';
  fallback?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  lazy = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'skeleton',
  fallback
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !lazy) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01, // Start loading earlier
        rootMargin: '200px' // Load 200px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate optimized image URLs with WebP/AVIF support
  const getOptimizedSrc = (originalSrc: string, format?: string) => {
    if (originalSrc.includes('unsplash.com')) {
      const params = new URLSearchParams({
        auto: 'format',
        fit: 'crop',
        q: quality.toString(),
        w: (width || 800).toString(),
        ...(height && { h: height.toString() }),
        ...(format && { fm: format })
      });
      return `${originalSrc}?${params.toString()}`;
    }
    
    if (originalSrc.includes('lovable-uploads')) {
      const params = new URLSearchParams({
        w: (width || 800).toString(),
        q: quality.toString(),
        ...(height && { h: height.toString() }),
        ...(format && { fm: format })
      });
      return `${originalSrc}?${params.toString()}`;
    }
    
    return originalSrc;
  };

  if (hasError) {
    if (fallback) return <>{fallback}</>;
    
    return (
      <div 
        className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm font-medium">Image non disponible</span>
      </div>
    );
  }

  const baseUrl = getOptimizedSrc(src);
  const webpUrl = getOptimizedSrc(src, 'webp');
  const avifUrl = getOptimizedSrc(src, 'avif');

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && placeholder === 'skeleton' && (
        <Skeleton 
          className="absolute inset-0 animate-pulse"
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            width: width || '100%', 
            height: height || '100%',
            filter: 'blur(10px)'
          }}
        />
      )}
      
      {isInView && (
        <picture>
          <source srcSet={avifUrl} type="image/avif" />
          <source srcSet={webpUrl} type="image/webp" />
          <img
            ref={imgRef}
            src={baseUrl}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-all duration-300 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${className}`}
            style={{
              width: width ? `${width}px` : 'auto',
              height: height ? `${height}px` : 'auto'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
