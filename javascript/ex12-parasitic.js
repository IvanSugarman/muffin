/*
 * 寄生组合式继承，其他方式继承在一次实例中调用两次父类构造函数或者其他缺点
 * 核心: 用一个空的构造函数取代执行 Parent 的构造函数
 */

function inherit(parent, son) {
    var pro = Object.create(parent.prototype);
    pro.constructor = son;
    son.prototype = pro;
}

function father(name) {
    this.name = name;
}

function son(name, age) {
    father.call(this, name);
    this.age = age;
}

inherit(father, son);
