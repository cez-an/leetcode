/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let res = null;

    if (x < 0) {
        res = -Number(String(x * -1).split('').reverse().join(""));
    } else {
        res = Number(String(x).split('').reverse().join(""));
    }

    if(res < Math.pow(-2,31) || res > Math.pow(2,31) ) return 0;

    return res;
    
};