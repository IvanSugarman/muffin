/*
 * 实现一个new操作符
 * 1. 创建一个对象
 * 2. 连接原型链
 * 3. 绑定this上下文
 * 4. 无返回对象则返回this
 */
function New(fun) {
    var res,
        obj;

    res = Object.create(fun.prototype);
    obj = fun.apply(res, Array.prototype.slice.call(arguments, 1));

    return obj instanceof Object ? obj : res;
}
