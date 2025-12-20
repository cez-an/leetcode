/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {

    // let avg = [];
    // let i=0;
    // let len=nums.length;

    //     while(i<(len)/2){
    //     let max = Math.max(...nums);
    //     let min = Math.min(...nums);

    //     avg.push((max+min)/2);

    //     let larIndex = nums.indexOf(max);
    //     nums.splice(larIndex,1);
    //     let smlIndex = nums.indexOf(min);
    //     nums.splice(smlIndex,1);
    //     i++;
    //     }

    //     return Math.min(...avg)

    let avg = [];
    while(nums.length>0){
    nums.sort((a,b)=>a-b);    
    let a = nums.shift();
    let b = nums.pop();
    avg.push((a+b)/2);
    }
    return Math.min(...avg)
};