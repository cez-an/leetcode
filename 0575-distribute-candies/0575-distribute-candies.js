/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let half = candyType.length/2;
    let set = new Set([...candyType]);
    if(set.size>half) return half;
    return set.size;
};