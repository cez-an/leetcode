/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const string = s.split("").filter((x) => /[a-zA-Z0-9]/.test(x)).join("").toLowerCase();
    console.log(string)
    if (string.length === 0 ) return true;
    if (string.length === 1 ) return true;
    if(string === string.split('').reverse().join('') && string.length !== 1 ) return true;
    return false;
};