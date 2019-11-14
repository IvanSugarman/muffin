;(function() {
    // 要求 https 协议
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', registerServiceWorker);
    }

    function registerServiceWorker() {
        navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('success');
        }, function(err) {
            console.log('fail: ', err);
        });
    }
})();
