/*
 * 柯里化，将接受多个参数的函数变换成接受一个单一参数的函数
 * 并且返回接受余下的参数且返回结果的新函数
 * 主要作用与特点: 参数复用 / 提前返回 / 延迟执行
 */
function curry(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }

    return function(...args2) {
        return curry(fn, ...args, ...args2);
    }
}

/* es6 */
function curring = fn => {
    return function judge(...args) {
        return args.length >= fn.length ?
               fn(...args) :
               (...arg) => judge(...args, ...arg);
    }
}
