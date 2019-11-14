var worker;

;(function() {
    // 浏览器兼容检测
    if (window.Worker) {
        // init worker
        worker = new Worker('worker.js');
        console.log(worker);

        worker.postMessage('web worker start');

        // message
        worker.addEventListener('message', function(e) {
            document.getElementById('output').innerHTML = e.data;
        }, false);

        // error
        worker.addEventListener('error', function(e) {
            const str = `
                Line: ${e.lineno} <br/>
                In: ${e.filename} <br/>
                Message: ${e.message} <br/>
            `;

            document.getElementById('output').innerHTML = str;
        }, false);
    }
})();

function start() {
    worker.postMessage({
        cmd: 'start',
        msg: 'Hello, World',
    });
}

function heartbeat() {
    worker.postMessage({
        cmd: 'heartbeat',
        msg: 'Heart count',
    });
}

function terminate() {
    worker.postMessage({
        cmd: 'terminate',
    });
}

function error() {
    worker.postMessage({
        cmd: 'error',
    });
}

