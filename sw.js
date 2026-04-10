self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // This keeps the app working even with a patchy connection
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
