/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//     let set = new Set([...nums]);
//     return set.size !== nums.length;
// };

var containsDuplicate = function (nums) {
    let set = new Set();
    for(let i of nums){
        if(set.has(i)) return true;
        else set.add(i);
    }
    return false
};