// 实现链表类
/*
 push(element)：向链表尾部添加一个新元素。
 insert(element, position)：向链表的特定位置插入一个新元素。
 getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
 remove(element)：从链表中移除一个元素。
 indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
 removeAt(position)：从链表的特定位置移除一个元素。
 isEmpty()：如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
 size()：返回链表包含的元素个数，与数组的 length 属性类似。
 getHead()：获取头部元素。
 toString()：返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
*/
// 辅助类Node
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined
    }
}
class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null
    }
    push(element){
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    insert(element, index){
        if (index >= 0 && index < this.count) {
            const node = new Node(element);
            if (index === 0) {
                node.next = this.head;
                this.head = node
            } else {
                const preElement = this.getElementAt(index - 1);
                node.next = preElement.next;
                preElement.next = node
            }
            this.count++;
            return true
        }
        return false
    }
    getElementAt(index){
        if( index >= 0 && index <= this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next
            }
            return current
        }
        return undefined
    }
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    indexOf(element){
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            if (element === current.element) {
                return i
            }
            current = current.next
        }
        return -1
    }
    // 关键：将前一元素指针指向current(要删除元素)指针指向的节点
    removeAt(index){
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next
            } else {
                let preElement;
                for (let i = 0; i < index; i++) {
                    preElement = current;
                    current = preElement.next
                }
                preElement.next = current.next
            }
            this.count--;
            return current.element
        }
        return undefined
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.count
    }
    getHead() {
        return this.head
    }
    toString(){
        if (this.head == null) {
            return ''
        }
        let str = this.head.element;
        let current = this.head.next;
        for (let i = 1; i < this.count; i++) {
            str = `${str}, ${current.element}`;
            current = current.next
        }
        return str
    }
}

const linkedList = new LinkedList();
linkedList.push(10);
linkedList.push(15);
linkedList.push(20);
// console.log(linkedList.head);
// console.log(linkedList.getElementAt(3));
// console.log(linkedList.removeAt(1));
console.log(linkedList.insert(16, 2));
console.log('----');
console.log(linkedList.head);
console.log(linkedList.indexOf(16));
console.log(linkedList.remove(16));
console.log(linkedList.head);
console.log(linkedList.toString());

// 双向链表，指向前一个节点和后一个节点
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev
    }

}
class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = undefined  // 保留对最后一个元素的引用
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = this.head
                } else {
                    current.prev = node;
                    node.next = current;
                    this.head = node

                }
            } else if (index === this.count) {  // 最后一项
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const preElement = this.getElementAt(index - 1);  // 获取要插入位置的前一个元素
                const current = preElement.next;
                node.prev = preElement;
                node.next = current;
                preElement.next = node;
                current.prev = node
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 &&  index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const preElement = current.prev
                preElement.next = current.next;
                current.next.prev = preElement
            }
            this.count--;
            return current.element
        }
        return undefined
    }
}

console.log('------双向链表')
const doublyList = new DoublyLinkedList();
doublyList.insert(5, 0);
doublyList.insert(3, 0);
doublyList.insert(9, 2);
doublyList.insert(7, 2);
console.log(doublyList.head);
console.log(doublyList.removeAt(2));
console.log(doublyList.head);

// 循环链表
class CircularList extends LinkedList {
    constructor() {
        super();
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head
                } else {
                    const lastElement = this.getElementAt(this.size());  // 获取最后一个元素
                    node.next = current;
                    this.head = node;
                    lastElement.next = this.head
                }
            } else {
                const preElement = this.getElementAt(index - 1);
                node.next = preElement.next;
                preElement.next = node
            }
            this.count++;
            return true
        }
        return false
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head  = undefined
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const preElement = this.getElementAt(index - 1)
                current = preElement.next
                preElement.next = current.next
            }
            this.count--;
            return current.element
        }
        return undefined
    }
}
console.log('----循环链表')
const circularList = new CircularList();
circularList.insert(5, 0);
circularList.insert(10, 1);
circularList.insert(15, 2);
// circularList.insert(3, 0);
// circularList.insert(15, 3);
console.log(circularList.head);
console.log(circularList.toString());
console.log(circularList.removeAt(3))