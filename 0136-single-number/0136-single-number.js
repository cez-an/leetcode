/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    if (nums.length === 1) return nums[0];
    let map = new Map();

    for (let val of nums) {
        (!map.has(val)) ? map.set(val, 1) : map.set(val, map.get(val) + 1)
    }
    for(let val of map.keys()){
        if(map.get(val)===1) return val;
    }
};