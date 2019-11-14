var CACHENAME = `sw${Date.now()}`;
var urlsToCache = [
    '/index.html',
    '/css/b.css',
    '/favicon.png'
];

console.log('SW startup');

self.addEventListener('install', function(event) {
    console.log('SW installed');

    // 确认所有缓存成功
    event.waitUntil(
        // 打开指定缓存
        caches.open(CACHENAME).then(function(cache) {
            // 想要缓存的资源列表
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    var catchList = [CACHENAME];

    console.log('SW activated');

    event.waitUntil(caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                if (!~catchList.indexOf(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        );
    }))
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        // 对网络请求资源与cache匹配，查询请求然后返会之前创建的缓存中任意数据并返回promise
        caches.match(event.request)
        .then(function(response) {
            var fetchRequest;

            // 缓存命中
            if (response) {
                console.log(response.url);
                return response;
            }

            // 请求和响应是流类型
            fetchRequest = event.request.clone();

            // 缓存未命中，执行 fetch
            return fetch(fetchRequest).then(
                function(response) {
                    // 检查响应有效性
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // 拷贝响应
                    var respondToCache = response.clone();

                    // caches.open(CACHENAME).then(function(cache) {
                    //     cache.put(event.request, respondToCache);
                    // });

                    return response;
                }
            )
        })
    );
    // console.log('Caught a fetch' + event);
    // 篡改请求
    // event.respondWith(new Response('Hello World'));
});
