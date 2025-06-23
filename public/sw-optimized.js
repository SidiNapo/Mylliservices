
// Optimized Service Worker for maximum performance

const CACHE_NAME = 'mylli-performance-v2';
const STATIC_CACHE = 'mylli-static-v2';
const DYNAMIC_CACHE = 'mylli-dynamic-v2';

// Critical resources to cache immediately
const CRITICAL_URLS = [
  '/',
  '/services',
  '/contact',
  '/lovable-uploads/554676d0-4988-4b83-864c-15c32ee349a2.png'
];

// Resources to cache with different strategies
const CACHE_STRATEGIES = {
  images: { strategy: 'cache-first', maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  api: { strategy: 'network-first', maxAge: 5 * 60 * 1000 }, // 5 minutes
  static: { strategy: 'stale-while-revalidate', maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  fonts: { strategy: 'cache-first', maxAge: 365 * 24 * 60 * 60 * 1000 } // 1 year
};

// Install event - cache critical resources immediately
self.addEventListener('install', (event) => {
  console.log('🔧 Installing optimized service worker...');
  
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(CRITICAL_URLS)),
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('✅ Activating optimized service worker...');
  
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => !cacheName.includes('v2'))
            .map(cacheName => caches.delete(cacheName))
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event - implement advanced caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests and non-same-origin requests
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Determine cache strategy based on resource type
  let strategy = CACHE_STRATEGIES.static;
  
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
    strategy = CACHE_STRATEGIES.images;
  } else if (url.pathname.includes('/api/')) {
    strategy = CACHE_STRATEGIES.api;
  } else if (url.pathname.match(/\.(woff|woff2|ttf|eot)$/)) {
    strategy = CACHE_STRATEGIES.fonts;
  }

  event.respondWith(handleRequest(request, strategy));
});

async function handleRequest(request, strategy) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  switch (strategy.strategy) {
    case 'cache-first':
      if (cachedResponse && !isExpired(cachedResponse, strategy.maxAge)) {
        return cachedResponse;
      }
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        return cachedResponse || new Response('Offline', { status: 503 });
      }

    case 'network-first':
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        return cachedResponse || new Response('Offline', { status: 503 });
      }

    case 'stale-while-revalidate':
      if (cachedResponse) {
        // Return cached response immediately
        fetch(request).then(networkResponse => {
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
        }).catch(() => {});
        return cachedResponse;
      }
      
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        return new Response('Offline', { status: 503 });
      }

    default:
      return fetch(request);
  }
}

function isExpired(response, maxAge) {
  const dateHeader = response.headers.get('date');
  if (!dateHeader) return true;
  
  const date = new Date(dateHeader);
  return Date.now() - date.getTime() > maxAge;
}

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle background synchronization
  console.log('🔄 Performing background sync...');
}
