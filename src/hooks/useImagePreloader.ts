
import { useEffect, useState } from 'react';

interface UseImagePreloaderOptions {
  images: string[];
  priority?: boolean;
}

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderOptions) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!images.length) {
      setIsLoading(false);
      return;
    }

    const preloadImage = (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          resolve(src);
        };
        
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          reject(src);
        };
        
        // Optimize image URL if possible
        if (src.includes('unsplash.com')) {
          img.src = `${src}?auto=format&fit=crop&q=85&w=800`;
        } else {
          img.src = src;
        }
      });
    };

    const preloadImages = async () => {
      try {
        if (priority) {
          // Load priority images immediately
          await Promise.all(images.map(preloadImage));
        } else {
          // Load non-priority images with delay to avoid blocking
          for (const image of images) {
            await new Promise(resolve => setTimeout(resolve, 100));
            preloadImage(image).catch(() => {});
          }
        }
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [images, priority]);

  return {
    loadedImages,
    isLoading,
    isImageLoaded: (src: string) => loadedImages.has(src)
  };
};
