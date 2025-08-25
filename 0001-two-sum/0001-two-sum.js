/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let [ind,ele] of nums.entries()){
        if(map.has(target-ele)){
            return [map.get(target-ele),ind];
        }else{
            map.set(ele,ind);
        }
    }

};