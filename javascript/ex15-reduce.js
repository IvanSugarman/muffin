/*
 * 实现 Array.prototype.reduce
 */

Array.prototype.reduce = function(callback, initialValue) {
    if (this === null) {
        throw new TypeError('Cannot read property map of null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }

    let O = Object(this);
    // 位运算，去除小数并且取正数
    let len = O.length >>> 0;
    let k = 0;
    let accmulator;

    if (initialValue) {
        accmulator = initialValue;
    } else {
        if (len === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        let kPresent = false;

        while(!kPresent && (k < len)) {
            kPresent = k in O;

            if (kPresent) {
                accmulator = O[k];
            }
        }
    }
}
