// 栈应用实例

/**
 * 十进制转二进制
 * @param decNumber 十进制数
 * @param hex 进制
 */
function decimalToBinary(decNumber, hex) {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = [];
    while(decNumber !== 0) {
        arr.push(digits.charAt(decNumber % hex));
        decNumber = Math.floor(decNumber / hex)
    }
    return arr.reverse().join('')
}
console.log(decimalToBinary(1000, 62));