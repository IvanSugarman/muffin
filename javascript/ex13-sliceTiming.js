function block() {
    ts(function* () {
        const start = performance.now();

        while (performance.now() - start < 1000) {
            console.log('doing');
            yield;
        }

        console.log('done');
    });
}

function ts(gen) {
    if (typeof gen === 'function') {
        gen = gen();
    }

    if (!gen || typeof gen.text !== 'function') {
        return;
    }

    (function next() {
        const res = gen.next();

        if (!res.done) {
            return setTimeout(next);
        }
    })();
}

setTimeout(block, 5000);

