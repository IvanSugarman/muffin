// 原型链继承
// 1. 多个实例多应用类型操作会篡改
// 2. 子类 consturctor 被重写
// 3. 给子类原型添加方法必须在替换原型之后
// 4. 创建子类型实例无法向父类构造参数传参
function Father() {
    this.value = 'father';
}

function Son() {}

Son.prototype = new Father();
Son.prototype.constructor = Son;

// 组合式继承
function Father() {
    this.name = 'father';
}

Father.prototype.sayName = function() { alert(this.value); }

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}

Son.prototype = new Father();
Son.prototype.constructor = Son;

// 寄生组合
function inheritPrototype(son, father) {
    var prototype = Object.create(father.prototype);
    prototype.constructor = son;
    son.prototype = prototype;
}

function Father(name) {
    this.name = 'father';
}

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}

inheritPrototype(Son, Father);

// ES6 继承 extends
// 核心代码类似于寄生组合
function _inherits(subType, superType) {
    // 创建对象，创建父类原型的一个副本
    // 增强对象，弥补重写原型失去的 constuctor 属性
    // 指定对象，将创建的对象赋值给子类的原型
    subType.prototype = Object.create(superType && superType.prototype, {
        constructor: {
            value: subType,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (superType) {
        Object.setPrototypeOf ? Object.setPrototypeOf(subType, superType) : subType.__proto__ = superType;
    }
}
