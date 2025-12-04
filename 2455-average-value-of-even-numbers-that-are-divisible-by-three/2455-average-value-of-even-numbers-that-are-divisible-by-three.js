/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;
    let avg = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2===0 && (nums[i])%3===0){
        
            sum+=nums[i];
            count++;
    }
    }
    avg = Math.floor((sum)/count);
    if(avg>0){
    return avg;
    }else{
        return 0;
    }
};