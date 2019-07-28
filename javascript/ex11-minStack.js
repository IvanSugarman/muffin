/*
 * 实现一个栈，包括 pop, push, getMin 三个方法，且时间复杂度都是O(1)
 * 通过两个栈实现
 * - 存放入栈的元素
 * - 存放最小元素
 */

class minStack() {
    constructor() {
        this.minIndecies = [];
        this.stack = [];
    }

    getMin() {
        const lastMinIndex = this.minIndecies[this.minIndecies.length - 1];
        return this.stack[lastMinIndex];
    }

    pop() {
        const len = this.stack.length;

        if (!len) { return; }

        const lastMinIndex = this.minIndecies[this.minIndecies.length - 1];
        if (lastMinIndex === len - 1) {
            this.minIndecies.pop();
        }

        this.stack.pop();
    }

    push(number) {
        if (typeof number !== 'number') {
            return;
        }

        const len = this.stack.length;

        if (!len) {
            this.minIndecies.push(len);
        } else {
            const currMin = this.getMin();
            if (this.number < currMin) {
                this.minIndecies.push(len);
            }
        }

        this.stack.push(this.number);
    }
}
