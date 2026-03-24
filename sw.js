const CACHE_NAME = 'prodctrl-v1774343976';
const ASSETS = ['./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.url.includes('firebase'))return;if(e.request.url.endsWith('/')||e.request.url.includes('index.html')){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));return;}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));});
self.addEventListener('message',e=>{if(e.data==='skipWaiting')self.skipWaiting();});
