const CACHE_NAME = 'prodctrl-v1773254134';
const ASSETS = [
  './manifest.json', './icon-192.png', './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting(); // Active immédiatement
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if(e.request.url.includes('firebase')) return;

  // index.html : toujours depuis le réseau (jamais en cache)
  if(e.request.url.endsWith('/') || e.request.url.includes('index.html')){
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Autres assets : cache en premier
  e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)));
});

self.addEventListener('message', e => {
  if(e.data === 'skipWaiting') self.skipWaiting();
});
