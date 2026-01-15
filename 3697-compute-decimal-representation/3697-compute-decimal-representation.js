/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    let number = String(n); 
    let res = []; 
    let arr = number.split('');
    let length = arr.length-1;
    for(let i=0; i<arr.length; i++){
        let len = length--
        if(arr[i]==0)continue;
        res.push(Number(arr[i]*Math.pow(10,len)))
    }
    return res

};