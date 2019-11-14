var CACHENAME = 'no-dependent';
var vipUrlsToCache = [
    '/index.html',
    '/css/b.css',
];
var urlsToCache = [
    '/favicon.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHENAME).then(function(cache) {
            cache.addAll(urlsToCache);
            return cache.addAll(vipUrlsToCache);
        })
    );
});
