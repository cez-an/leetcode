/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // let freq = {};
    // let flag = true;

    // for(let i=0; i<s.length; i++){
    //     freq[s[i]] = (freq[s[i]]+1) || 1;
    // }

    // for(let j=0; j<t.length; j++){
    //     freq[t[j]] = freq[t[j]]-1;
    // }

    // for(key in freq){
    //     if(freq[key]!==0){
    //         flag=false;
    //         break;
    //     }
    // }

    // if(flag){
    //     return true;
    // }else{
    //     return false;
    // }
    let map = new Map();
    if(s.length!==t.length) return false
    for(let val of s){
        map.set(val,(map.get(val)||0)+1);
    }
    for(let val of t){
        if(!map.has(val)) return false;
        map.set(val,(map.get(val)||0)-1);
        if(map.get(val)<0) return false;
    }

    return true;
};