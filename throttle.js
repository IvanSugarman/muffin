/*
 * 函数节流指在一定时间间隔内只执行一次
 * 在这个时间内无视后来产生的函数调用请求
 */
const throttle = (fn, wait) => {
    if (Object.prototype.toString.call(fn) !== '[Object Function]') {
        return () => {};
    }

    let lastTime = 0;
    let timer;

    return function(...args) {
        let now = +new Date();
        const context = this;

        if (lastTime && now < lastTime + wait) {
            clearTimeout(timer);

            timer = setTimeout(() => {
                lastTime = now;
                fn.apply(context, args)
            }, wait);
        } else {
            lastTime = now;
            fn.apply(context, args)
        }
    }
}

