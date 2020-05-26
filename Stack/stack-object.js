/*
* 基于对象实现栈
 push(element(s))：添加一个（或几个）新元素到栈顶。
 pop()：移除栈顶的元素，同时返回被移除的元素。
 peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
 isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
 clear()：移除栈里的所有元素。
 size()：返回栈里的元素个数。该方法和数组的 length 属性很类似。
* */

const _item = Symbol('stackObject');

class Stack {
    constructor() {
        this.count = 0;
        this.item = {};
        this[_item] = []
    }
    push(element) {
        this.item[this.count] = element;
        this.count ++
    }
    pop() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.item[this.count];
        delete this.item[this.count];
        this.count--;
        return result
    }
    peek() {
        return this.item[this.count]
    }
    isEmpty() {
        return this.count === 0
    }
    clear() {
        this.item = {}
    }
    size() {
        return this.count
    }
    toString() {
        if(this.isEmpty()) {
            return ''
        }
        let str = `${this.item[0]}`;
        for (let i = 1; i < this.count; i++) {
            console.log(str);
            str = `${str},${this.item[i]}`
        }
        return str
    }
}
Stack.prototype.print = function () {
    console.log(this.item)
};
const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.print();
stack.pop();
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());
// stack.clear()
// stack.print()
console.log(stack.size());
console.log(stack.toString());

console.log(Object.keys(stack));
console.log(Object.getOwnPropertyNames(stack));
/**
 * 封装私有变量方法
 * 1. Symbol假私有，可以通过Object.getOwnPropertySymbols()获取
 * 2. 使用weakMap, 可读性不强， 私有属性无法继承
 */