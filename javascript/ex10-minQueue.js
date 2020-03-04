/*
 * 最小队列
 * 实现一个队列，包括 deQueue, enQueue, getMin，时间复杂度尽可能小
 */

class minQueue {
    constructor() {
        this.minIndeices = [];
        this.queue = [];
    }

    deQueue() {
        if (!queue.length) { return; }

        if (this.queue.shift() === this.minIndeices[0]) {
            this.minIndeices.shift();
        }
    }

    enQueue(num) {
        if (typeof num !== 'number') { return; }

        var tmp;

        queue.push(num);

        // 小于的情况
        while (this.minIndeices.length && temp = this.minIndeices.pop() && num < temp) {
            this.minIndeices.pop();
        }

        // 大于则入队
        if (!this.minIndeices.length || num >= this.minIndeices[this.minIndeices.length - 1]) {
            this.minIndeices.push(num);
            return;
        }
    }

    getMin() {
        if (!this.minIndeices.length) { return; }

        return this.minIndeices[0];
    }
}

