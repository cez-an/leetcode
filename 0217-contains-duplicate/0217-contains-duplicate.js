/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set([...nums]);
    let unique = [...set];
    if (unique.length !== nums.length) return true;
    return false;
};