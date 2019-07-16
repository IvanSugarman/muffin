/*
 * 实现一个JSON.stringify
 * Boolean | Number | String 会自动转换成对应的原始值
 * Undefined, 任意函数和 symbol 会被忽略(非数组中)或者被转换成 null(数组中)
 * 不可枚举的属性被忽略
 * 循环引用被忽略
 */
function stringify(obj) {
    var type = typeof obj,
        isArray,
        json;

    if (type !== 'object' || obj === null) {
        if (/undefined|function/.test(type)) {
            obj = null;
        } else if (/string/.test(type)) {
            obj = '"' + obj + '"'
        }

        return String(obj);
    } else {
        json = [];
        isArray = Object.prototype.toString.call(obj) === '[object Array]';

        if (isArray) {
            return '[' + String(obj.map(val => stringify(val))) + ']';
        } else {
            for (let k in obj) {
                let v = obj[k];
                typeof v !== 'function' && v !== undefined && json.push('"' + k + '":' + stringify(v));
            }
            return '{' + String(json) + '}';
        }
    }
}
