/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let largest = nums.length

    let map = new Map();

    for (let j of nums) {
        map.set(j, true);
    }

    for (let i = 0; i <= largest; i++) {
        if (map.has(i)) continue;
        return i;
    }
};