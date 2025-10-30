self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('karamad-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/offline',
        '/fonts/vazirmatn.woff2',
        '/images/CreatingPage.json',
        '/images/NotFound.json',
      ]);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then((fetchResponse) => {
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }

          const responseToCache = fetchResponse.clone();

          caches.open('karamad-v1').then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return fetchResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/offline');
          }
        });
    }),
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['karamad-v1'];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return undefined;
        }),
      );
    }),
  );
});
