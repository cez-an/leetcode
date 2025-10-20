/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let preflen = pref.length;
    for(let i =1; i<strs.length; i++){
    let res = strs[i];

    while(pref!==res.substring(0,preflen))
    {
        preflen--;
        if(preflen===0){
            return "";
        }
        pref = pref.substring(0,preflen);
    }
}
return pref;
};