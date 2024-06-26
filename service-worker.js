const cacheName = 'calculator-cache-v1';
const appShellFiles = [
  '/bank-calculator/',
  '/bank-calculator/index.html',
  '/bank-calculator/style.css',
  '/bank-calculator/script.js',
  '/bank-calculator/icon/icon-192.png',
  '/bank-calculator/icon/icon-512.png',
  '/bank-calculator/icon/icon.svg',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
  });
  
  self.addEventListener('fetch', (e) => {
      if (!(
         e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
      )) {
          return; 
      }
  
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });