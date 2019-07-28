/*
 * 考虑环状数据的处理
 * 使得不爆栈且深度复制
 */
function BFSDeepClone(obj) {
    var _obj,
        val,
        idx,
        item,
        items,
        origin = [obj],
        copyObj = {},
        copy = [copyObj],
        visitedQueue = [],
        visitedCopyQueue = [];

    while (origin.length > 0) {
        items = origin.shift();
        _obj = copy.shift();

        visitedQueue.push(items);

        if (isTypeOf('Object')(items) || isTypeOf('Array')(items)) {
            for (item in items) {
                val = items[item];

                if (isTypeOf('Object')(item)) {
                    idx = visitedQueue.indexOf(val);

                    if (!~idx) {
                        _obj[item] = {};
                        // 下次while循环给空数据提供数据
                        origin.push(val);
                        // 推入引用对象
                        copy.push(_obj[item]);
                    } else {
                        // 去除环状数据
                        _obj[item] = visitedCopyQueue[idx];
                        visitedQueue.push(_obj);
                    }
                } else if (isTypeOf('Array')(item)) {
                    _obj[item] = [];
                    origin.push(val);
                    copy.push(_obj[item]);
                } else if (isTypeOf('Function')(item)) {
                    _obj[item] = eval('(' + val.toString() + ')');
                } else {
                    _obj[item] = val;
                }
            }
            // 处理过的对象数据推入数组，给环装数据使用
            visitedCopyQueue.push(_obj);
        } else if (isTypeOf('Function')(items)) {
            copyObj = eval('(' + val.toString() + ')');
        } else {
            copyObj = obj;
        }
    }

    return copyObj;
}

function isTypeOf(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
}
