self.addEventListener('notificationclick', e => {
  const notification = e.notification;
  const action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    // eslint-disable-next-line no-undef
    clients.openWindow(notification.data.url);
    notification.close();
  }
});

self.addEventListener('push', e => {
  e.waitUntil(evaluateNotification(e));
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('flystr-cache').then(cache => {
      return cache.addAll([`/deals`, `/manifest.json`]);
    })
  );
});

self.addEventListener('fetch', event => {
  const cachedSites = [`/deals`, `/manifest.json`];
  const shouldHandleRequest = cachedSites.some(path =>
    event.request.url.includes(path)
  );
  if (shouldHandleRequest) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});

async function evaluateNotification(e) {
  let body;
  if (e.data) {
    body = e.data.text();
  }
  if (body) {
    fetch(body)
      .then(res => res.json())
      .then(async options => {
        if (!options) return;
        await self.registration.showNotification(options.title, options);
      });
  }
}
