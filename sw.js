const CACHE_NAME = 'prodctrl-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
self.addEventListener('message', e => { if(e.data === 'skipWaiting') self.skipWaiting(); });
