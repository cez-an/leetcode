/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let orginal = x;
    let reverse = 0;
    while (x > 0) {
        reverse = reverse * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    console.log(reverse);
    if (orginal === reverse) {
        return true;
    } else {
        return false;
    }
};