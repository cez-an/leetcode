/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let res = [];
    for(let i=0; i<nums.length; i++){
        if(nums.indexOf(nums[i])!==i) res.push(nums[i]);
    }
    return res
};