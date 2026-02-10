/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    
    if (s.length <= 1) return true;

    const srt = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (srt.length <= 1) return true;

    let left = 0;
    let right = srt.length - 1;

    while (left < right) {
        if (srt[left++] !== srt[right--]) return false
    }

    return true;
};

   // console.log(srt)