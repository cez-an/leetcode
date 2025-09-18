/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1===s2) return true;
    let length = s1.length;
    let s1cp = s1.split("");
    let s2cp = s2.split("");
    let map = new Map();

    for(let val of s1cp){
        map.set(val,(map.get(val) ?? 0)+1)
    }

    for(let val of s2cp){
        map.set(val,(map.get(val) ?? 0)-1)
        if(map.get(val)<0) return false;
    }

    for(let i=0; i<length-1; i++){        
        for(let j=i+1; j<length; j++){

            [s2cp[i],s2cp[j]]=[s2cp[j],s2cp[i]]
            if(s1===s2cp.join('')) return true;
            s2cp = s2.split("");  

        }
    }
    return false;
};