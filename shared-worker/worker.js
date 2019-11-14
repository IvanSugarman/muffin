let crossWindowState = {
    counter: 0,
};

onconnect = (e) => {
    const port = e.ports[0];

    port.onmessage = ({ data }) => {
        const { action, state } = data;

        if (action === 'getState') {
            port.postMessage(crossWindowState);
        } else if (action === 'setState') {
            crossWindowState = state;
            port.postMessage(crossWindowState);
        }
    };
};
