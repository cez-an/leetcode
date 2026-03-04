/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let bit = n.toString(2).padStart(32,"0");
    let reverse = bit.split("").reverse().join("");
    let output = parseInt(reverse,2);
    return output
};