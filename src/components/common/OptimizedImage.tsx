
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  lazy = true,
  priority = false,
  quality = 85
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.01,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazy]);

  const getOptimizedSrc = (originalSrc: string, format?: string) => {
    if (originalSrc.includes('unsplash.com')) {
      const params = new URLSearchParams({
        auto: 'format,compress',
        fit: 'crop',
        q: quality.toString(),
        w: width.toString(),
        h: height.toString(),
        ...(format && { fm: format })
      });
      return `${originalSrc}?${params.toString()}`;
    }
    
    if (originalSrc.includes('lovable-uploads')) {
      const params = new URLSearchParams({
        w: width.toString(),
        h: height.toString(),
        q: quality.toString(),
        ...(format && { fm: format })
      });
      return `${originalSrc}?${params.toString()}`;
    }
    
    return originalSrc;
  };

  const baseUrl = getOptimizedSrc(src);
  const webpUrl = getOptimizedSrc(src, 'webp');

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      {isInView && (
        <picture>
          <source srcSet={webpUrl} type="image/webp" />
          <img
            ref={imgRef}
            src={baseUrl}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ aspectRatio: `${width}/${height}` }}
          />
        </picture>
      )}
      {!isInView && (
        <div 
          className="w-full h-full bg-gray-100 animate-pulse"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
