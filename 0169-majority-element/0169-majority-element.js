/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let size = (nums.length/2);
    let res = {};
    for(item  of nums){
        res[item] = (res[item]+1 || 1);
    }

    for(key in res){
        if(res[key]>size){
            return +key;
        }
    }
};