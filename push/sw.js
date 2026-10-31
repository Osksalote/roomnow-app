// NamStay phone alerts (Web Push). Shows alerts even when the app is closed.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: 'NamStay', body: e.data ? e.data.text() : '' }; }
  const app = new URL('../', self.registration.scope).href;
  // Guest at the gate: long, strong vibration (like a call) and it stays until someone taps it.
  const gate = (d.tag || '').indexOf('guest_here') === 0;
  // Chats (questions and booking chats), orders and arrivals always come in loud.
  const kind = (d.tag || '').split('-')[0];
  if (['message', 'chat', 'request_order', 'guest_near', 'arrived', 'cancel_request', 'checkout_due'].indexOf(kind) >= 0) d.urgent = true;
  e.waitUntil(self.registration.showNotification(d.title || 'NamStay', {
    body: d.body || '',
    icon: app + 'icons/Icon-192.png',
    badge: app + 'icons/Icon-192.png',
    tag: d.tag || undefined,
    renotify: !!d.tag,
    requireInteraction: !!d.urgent || gate,
    vibrate: gate ? [1200, 500, 1200, 500, 1200, 500, 1200, 500, 1200, 500, 1200] : d.urgent ? [300, 120, 300, 120, 300] : [200],
    data: { url: new URL(d.url || '../', self.registration.scope).href },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const app = new URL('../', self.registration.scope).href;
  const url = (e.notification.data && e.notification.data.url) || app;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
    for (const w of wins) {
      if (w.url.startsWith(app) && 'focus' in w) return w.focus();
    }
    return self.clients.openWindow(url);
  }));
});
