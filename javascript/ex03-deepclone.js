/*
* 深拷贝，考虑环状数据和Symbol
*/
function deepClone(obj, cache = new WeakMap()) {
    let cobj;

    // 处理环状数据
    if (cache.has(obj)) {
        return obj;
    }

    if (obj === null) {
        return obj;
    }

    switch(typeof obj) {
        case 'undefined':
        case 'string':
        case 'boolean':
        case 'number': {
            return obj;
        }
    }

    if (Array.isArray(obj)) {
        cobj = [];
        obj.forEach((idx) => {
            cobj.push(deepClone(obj[idx], cache));
        });
    } else {
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            cobj = obj.constructor !== Object ? Object.create(obj.constructor.prototype) : {};
            cache.set(obj, obj);

            Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach((val) => {
                cobj[val] = deepClone(obj[val], cache);
            });
        }
    }

    return cobj;
}
