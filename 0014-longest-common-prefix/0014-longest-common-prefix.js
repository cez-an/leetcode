/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let res = strs[0];
    let resLength = res.length;
    for(let i=1; i<strs.length; i++){

        let com = strs[i];

        while(res!==com.substring(0,resLength)){
            resLength--;
            if(resLength === 0){
                return "";
            }
            res = res.substring(0,resLength);
            console.log(res)
        }


    }
    return res;
};