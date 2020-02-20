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
        while (k < len && !(k in O)) {
            k++;
        }

        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        value = o[k++];
    }

    while (k < len) {
        if (k in O) {
            accmulator = callback(value, O[k], k, O);
        }
        k++;
    }

    return accmulator;
}
