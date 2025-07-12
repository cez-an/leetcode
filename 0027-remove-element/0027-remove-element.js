/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let length=nums.length;
    let k=0;
    for(let i=0; i<length; i++){
        if(nums[i]===val){
            nums.splice(i,1);
            i--;
        }
    }
    let res=nums.length;
    return res;
};