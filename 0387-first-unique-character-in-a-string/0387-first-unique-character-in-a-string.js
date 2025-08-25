/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let val of s){
        map.set(val,map.get(val)+1 || 1);
    }
    for(let i=0; i<s.length; i++){
        if(map.get(s[i])===1) return i;
    }
    return -1
};