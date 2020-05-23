// 栈应用实例

/**
 * 十进制转二进制
 * @param decNumber 十进制数
 */
function decimalToBinary(decNumber) {
    let arr = [];
    // console.log(Math.floor(decNumber / 2))
    while(decNumber !== 0) {
        arr.push(decNumber % 2)
        console.log(decNumber)
        decNumber = Math.floor(decNumber / 2)
    }
    return Number(arr.reverse().join(''))
}
console.log(decimalToBinary(50))