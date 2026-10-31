// NamStay app copy kept on the phone / computer, so the app opens fast even on slow internet.
// Each version (5bd14532 is replaced at build time) has its own copy; old copies are removed.
const V = 'namstay-app-5bd14532';
const EXT = 'namstay-ext-1';      // Flutter engine and fonts from Google (never change for the same address)
const PHOTOS = 'namstay-photos-1'; // guesthouse photos: shown from the saved copy, refreshed in the background
// Nothing is downloaded twice: files are saved the first time the app itself loads them.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('namstay-app-') && k !== V).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function trimPhotos() {
  const c = await caches.open(PHOTOS);
  const ks = await c.keys();
  for (let i = 0; i < ks.length - 300; i++) await c.delete(ks[i]);
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const here = url.origin === self.location.origin;

  // Flutter engine (CanvasKit) and fonts: saved once, used for ever.
  if (url.hostname === 'www.gstatic.com' || url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com') {
    e.respondWith(caches.open(EXT).then((c) => c.match(req).then((hit) => hit || fetch(req).then((r) => {
      if (r.ok || r.type === 'opaque') c.put(req, r.clone());
      return r;
    }))));
    return;
  }

  // Guesthouse photos (public storage): show the saved copy at once, refresh it in the background.
  if (url.pathname.includes('/storage/v1/object/public/')) {
    e.respondWith(caches.open(PHOTOS).then((c) => c.match(req).then((hit) => {
      const net = fetch(req).then((r) => { if (r.ok) { c.put(req, r.clone()); trimPhotos(); } return r; }).catch(() => hit);
      return hit || net;
    })));
    return;
  }

  if (!here) return; // database calls always go to the internet
  if (url.pathname.includes('/download/') || url.pathname.endsWith('.apk') || url.pathname.includes('/push/')) return;

  // The app itself: from the saved copy of this version; anything missing comes from the internet and is saved.
  const nav = req.mode === 'navigate';
  e.respondWith(caches.open(V).then((c) => c.match(nav ? 'index.html' : req, { ignoreSearch: nav }).then((hit) => hit || fetch(req).then((r) => {
    if (r.ok) c.put(nav ? 'index.html' : req, r.clone());
    return r;
  }).catch(() => Response.error()))));
});
