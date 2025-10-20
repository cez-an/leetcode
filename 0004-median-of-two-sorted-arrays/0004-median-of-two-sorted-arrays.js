/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr1Length=nums1.length;
    let arr2Length=nums2.length;

    let totalLength=arr1Length+arr2Length;
    let requiredLength=(totalLength/2);
    let indexNumber=Math.ceil(requiredLength);
    let mergedArray=nums1.concat(nums2);
    let sortedArray=mergedArray.sort((a,b)=>a-b);
  
    if(totalLength%2===0){
        let num1=sortedArray[requiredLength-1];
        let num2=sortedArray[requiredLength];
        let result=(num1+num2)/2;
        return result;
    }else{
        let result=sortedArray[indexNumber-1];
        return result;
    }      
};      