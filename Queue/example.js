import {Queue} from './queue'
import {Deque} from './deque'

/**
 * 击鼓传花: 每次将队列头部元素添加到队列尾部
 * @param elements
 * @param num 第几位淘汰
 */
function hotPotato(elements, num) {
    const queue = new Queue();
    const eliminatedList = [];  // 被淘汰列表
    for (let i = 0; i < elements.length; i++) {
        queue.enqueue(elements[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue())
    }
    return {
        eliminatedList,
        winner: queue.dequeue
    }
}

const names = ['小一', '小二', '小三', '小四', '小五'];
// console.log(hotPotato(names, 7))

/**
 * 回文检查器, 大小写敏感, 判断第一位与最后一位是否相等
 * @param str
 */
console.log('-------回文检查器');
function palindromeChecker(str) {
    if (!str) {
        return false
    }
    const deque = new Deque();
    let firstElement, lastElement;
    let flag = true;
    for (let i = 0; i < str.length; i++) {
        deque.addBack(str.charAt(i));
    }
    deque.print();
    while(deque.size() > 1 && flag) {
        firstElement = deque.removeFront();
        lastElement = deque.removeBack();
        if(firstElement !== lastElement) {
            flag = false
        }
    }
    return flag
}

const str = 'abccba';
console.log(palindromeChecker(str));