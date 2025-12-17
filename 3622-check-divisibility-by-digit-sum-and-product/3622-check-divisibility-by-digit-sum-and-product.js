/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let number = String(n);
    //sum
    let digitSum = 0;
    //product
    let digitProduct = 1;
    let total = 0;

    for (let i = 0; i < number.length; i++) {
        digitSum += Number(number[i]);
    }
    for (let j = 0; j < number.length; j++) {
        digitProduct *= number[j];
    }
    //total = digitSum + digitProduct
    total = digitSum + digitProduct;
    if (n % total === 0) return true;

    return false;
};