var count = 0;

self.addEventListener('message', function(e) {
    var data = e.data;

    if (!data.hasOwnProperty('cmd')) {
        console.log(data);
        return;
    }

    switch (data.cmd) {
        case 'start': {
            self.postMessage('Worker started: ' + data.msg);
            break;
        }
        case 'heartbeat': {
            count++;
            self.postMessage(data.msg + ':' + count);
            break;
        }
        case 'terminate': {
            self.postMessage('Worker terminate! ');
            self.close();
            break;
        }
        case 'error': {
            // throw undefined error;
            postMessage(d * 2);
            break;
        }
        default: {
            self.postMessage('Unknown command: ' + data.msg);
        }
    }
});
