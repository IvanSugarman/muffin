/*
扁平化去重 得到一个升序且不重复的数组
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
*/

(function() {
    var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
    Array.from(new Set(arr.flat(Infinity))).sort((a, b) => { return a - b; });
})();


/*
    替代方案
    Array.flat: reduce / concat
    1层: arr.reduce((acc, val) => { return acc.concat(val); }, []);
    n层递归实现:
        function FlatDeep(arr) {
            arr.reduce((acc, val) => { return Array.isArray(val) ? FlatDeep(val) : acc.concat(val); }, []);
        }
    不使用递归
        function Flat(arr) {
            var stack = [...arr];
            var res = [];
            while(stack.length) {
                var next = stack.pop();
                if (Array.isArray(next)) {
                    stack.push(...next);
                } else {
                    res.push(next);
                }
            }

            return res.reverse();
        }
*/
