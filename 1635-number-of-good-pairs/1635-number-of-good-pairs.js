/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairs = 0;
  const freq = {}; 

  for (const num of nums) {
    if (freq[num]) {
      pairs += freq[num]; 
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
  }

  return pairs;
};