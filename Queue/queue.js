/* 实现队列
enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
dequeue()：移除队列的第一项（即排在队列最前面的项）并返回被移除的元素。
peek()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。该方法在其他语言中也可以叫作 front 方法。
isEmpty()：如果队列中不包含任何元素，返回 true，否则返回 false。
size()：返回队列包含的元素个数，与数组的 length 属性类似。
clear()：清空队列
toString：将队列元素转换成字符串
*/
export class Queue {
    constructor() {
        this.item = {};
        this.count = 0;
        this.lowerCount = 0
    }
    enqueue(element) {
        this.item[this.count] = element;
        this.count++;
    }
    dequeue() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.item[this.lowerCount]
        delete this.item[this.lowerCount]
        this.lowerCount++
        return result
    }
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.item[this.lowerCount]
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
Queue.prototype.print = function () {
    console.log(this.item)
}

const queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())
