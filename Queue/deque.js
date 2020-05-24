// 实现双端队列, 同时遵循先进先出，后进先出
/*
addFront(element)：该方法在双端队列前端添加新的元素。
addBack(element)：该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的enqueue 方法相同）。
removeFront()：该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的dequeue 方法相同）。
removeBack()：该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的pop 方法一样）。
peekFront()：该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek方法一样）。
peekBack()：该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek方法一样）。
 */
export class Deque {
    constructor() {
        this.item = {};
        this.count = 0;
        this.lowerCount = 0
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowerCount > 0) {
            this.lowerCount--;
            this.item[this.lowerCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.item[i] = this.item[i - 1]
            }
            this.item[0] = element
            this.count++;
        }
    }
    addBack(element) {
        this.item[this.count] = element;
        this.count++;
    }
    removeFront() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.item[this.lowerCount]
        delete this.item[this.lowerCount]
        this.lowerCount++
        return result
    }
    removeBack() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.item[this.count - 1];
        delete this.item[this.count - 1];
        this.count--;
        return result
    }
    peekFront() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.item[this.lowerCount]
    }
    peekBack() {
        return this.item[this.count - 1]
    }
    isEmpty() {
        return Object.keys(this.item).length === 0
    }
    size() {
        return Object.keys(this.item).length
    }
    clear() {
        this.item = {}
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let str = `${this.item[this.lowerCount]}`
        for (let i = this.lowerCount + 1; i < this.count; i++) {
            str = `${str},${this.item[i]}`
        }
        return str
    }
}
Deque.prototype.print = function () {
    console.log(this.item)
}

const deque = new Deque()
deque.addFront('a')
deque.addFront('b')
deque.addFront('c')
deque.addFront('d')
deque.print()
console.log(deque.toString())
console.log(deque.size())
console.log(deque.isEmpty())
console.log(deque.peekFront())
console.log(deque.peekBack())
console.log(deque.removeBack())
console.log(deque.removeFront())
deque.print()
