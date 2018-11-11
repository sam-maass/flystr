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
