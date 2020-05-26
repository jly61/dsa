/*
* 基于数组实现栈
 push(element(s))：添加一个（或几个）新元素到栈顶。
 pop()：移除栈顶的元素，同时返回被移除的元素。
 peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
 isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
 clear()：移除栈里的所有元素。
 size()：返回栈里的元素个数。该方法和数组的 length 属性很类似。
* */
class Stack {
    constructor() {
        this.item = []
    }
    push(element) {
        this.item.push(element)
    }
    pop() {
        return this.item.pop()
    }
    peek() {
        return this.item[this.item.length - 1]
    }
    isEmpty() {
        return this.item.length === 0
    }
    clear() {
        this.item = []
    }
    size() {
        return this.item.length
    }
}
Stack.prototype.print = function () {
    console.log(this.item)
};
const stack = new Stack();
stack.push(1);
stack.push(3);
stack.print();
stack.pop();
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());
stack.clear();
stack.print();
console.log(stack.size());