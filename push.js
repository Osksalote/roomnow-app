// NamStay: turn phone alerts on/off (used by the Flutter app through window.nsPush).
(function () {
  function b64ToBytes(s) {
    const pad = '='.repeat((4 - (s.length % 4)) % 4);
    const raw = atob((s + pad).replace(/-/g, '+').replace(/_/g, '/'));
    const out = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }
  async function reg() {
    const r = await navigator.serviceWorker.register('push/sw.js', { scope: 'push/' });
    for (let i = 0; i < 40 && !r.active; i++) await new Promise((ok) => setTimeout(ok, 250));
    return r;
  }
  function supported() {
    return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  }
  window.nsPush = {
    supported: supported,
    // 'granted' | 'denied' | 'default' | 'unsupported' | 'ios-install' (iPhone: add to Home Screen first)
    permission: function () {
      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
      const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
      if (ios && !standalone) return 'ios-install';
      return supported() ? Notification.permission : 'unsupported';
    },
    // Asks permission, subscribes, returns JSON {endpoint,p256dh,auth} or '' if refused.
    subscribe: async function (vapidKey) {
      if (!supported()) return '';
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') return '';
      const r = await reg();
      let sub = await r.pushManager.getSubscription();
      if (!sub) sub = await r.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(vapidKey) });
      const j = sub.toJSON();
      return JSON.stringify({ endpoint: j.endpoint, p256dh: j.keys.p256dh, auth: j.keys.auth });
    },
    // Endpoint of this device if alerts are on, else ''.
    current: async function () {
      if (!supported()) return '';
      const r = await navigator.serviceWorker.getRegistration('push/');
      if (!r) return '';
      const sub = await r.pushManager.getSubscription();
      return sub ? sub.endpoint : '';
    },
    unsubscribe: async function () {
      const r = supported() ? await navigator.serviceWorker.getRegistration('push/') : null;
      const sub = r ? await r.pushManager.getSubscription() : null;
      if (!sub) return '';
      const ep = sub.endpoint;
      await sub.unsubscribe();
      return ep;
    },
    test: async function (title, body) {
      const r = await reg();
      await r.showNotification(title, { body: body, icon: 'icons/Icon-192.png' });
      return 'ok';
    },
  };
})();

// NamStay: "guest at the gate" alarm in the open app. Beeps and vibrates like a phone call until stopped (max 90 s).
(function () {
  let timer = null, ctx = null, until = 0, flash = null;
  const title0 = document.title;
  // Browsers allow sound only after a tap. Unlock it on the first tap anywhere, so a later alarm can ring.
  function unlock() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      const b = ctx.createBuffer(1, 1, 22050), src = ctx.createBufferSource();
      src.buffer = b; src.connect(ctx.destination); src.start(0);
    } catch (_) {}
  }
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, unlock, { capture: true, passive: true });
  });
  function beep() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      [0, 0.35].forEach(function (d) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'square';
        o.frequency.setValueAtTime(880, t + d);
        o.frequency.setValueAtTime(660, t + d + 0.15);
        g.gain.setValueAtTime(0.25, t + d);
        g.gain.exponentialRampToValueAtTime(0.001, t + d + 0.3);
        o.connect(g); g.connect(ctx.destination);
        o.start(t + d); o.stop(t + d + 0.31);
      });
    } catch (_) {}
    try { if (navigator.vibrate) navigator.vibrate([900, 300, 900]); } catch (_) {}
  }
  window.nsRing = {
    start: function (title, body) {
      until = Date.now() + 90000;
      if (timer) return;
      beep();
      timer = setInterval(function () { if (Date.now() > until) window.nsRing.stop(); else beep(); }, 2200);
      // Flashing browser tab title, in case the sound is blocked or the tab is in the background.
      let on = false;
      flash = setInterval(function () { on = !on; document.title = on ? '🔔 ' + title : title0; }, 900);
      // App in the background (other tab or screen off): show a phone notification too.
      try {
        if (document.hidden && 'serviceWorker' in navigator && Notification.permission === 'granted') {
          navigator.serviceWorker.getRegistration('push/').then(function (r) {
            if (r) r.showNotification(title, { body: body, icon: 'icons/Icon-192.png', tag: 'gate', renotify: true,
              requireInteraction: true, vibrate: [1200, 500, 1200, 500, 1200, 500, 1200, 500, 1200] });
          });
        }
      } catch (_) {}
    },
    stop: function () {
      if (timer) clearInterval(timer);
      if (flash) clearInterval(flash);
      timer = null; flash = null;
      document.title = title0;
      try { if (navigator.vibrate) navigator.vibrate(0); } catch (_) {}
    },
  };
})();
