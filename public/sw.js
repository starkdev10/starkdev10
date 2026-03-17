self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  const data = event.data?.json?.() || { title: 'Revision OS', body: 'Today\'s revision plan is ready.' };
  event.waitUntil(self.registration.showNotification(data.title, { body: data.body, data: data.url || '/today' }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data || '/today'));
});
