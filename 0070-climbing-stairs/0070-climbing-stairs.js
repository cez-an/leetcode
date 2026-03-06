/**
 * @param {number} n
 * @return {number}
 */

let obj = {};
var climbStairs = function(n) {
    if(n<=2) return n;
    if(obj[n]) return obj[n];
    let res = climbStairs(n-1) + climbStairs(n-2); 
    obj[n] = res;   
    return res;
};