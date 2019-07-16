/*
 * 实现一个new操作符
 * 1. 创建一个对象
 * 2. 连接原型链
 * 3. 绑定this上下文
 * 4. 无返回对象则返回this
 */
function New(fun) {
    function isFunction(fn) {
        return typeof fn === 'function';
    }

    function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    var ret,
        res = {};

    if (fun.prototype !== null) {
        res.__proto__ = fun.prototype;
    }

    ret = fun.apply(res, Array.prototype.slice.call(arguments, 1));

    if (isFunction(ret) || isObject(ret)) {
        return ret;
    }

    return res;
}
