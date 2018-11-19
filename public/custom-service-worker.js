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
    caches.open('cache').then(cache => {
      return cache.addAll(['/deals', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => response)
      .catch(async () => {
        //Check to see if you have it in the cache
        //Return response
        //If not in the cache, then return error page
        const cache = await caches.open('cache');
        const matching = await cache.match(event.request);
        const report =
          !matching || matching.status === 404
            ? Promise.reject('no-match')
            : matching;
        return report;
      })
  );
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
