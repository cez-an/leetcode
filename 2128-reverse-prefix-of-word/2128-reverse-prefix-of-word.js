/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 
var reversePrefix = function(word, ch) {

    if(!word.includes(ch)) return word;
    let reversed = word.slice(0,(word.indexOf(ch)+1)).split('').reverse().join('') + word.slice((word.indexOf(ch)+1));
    return(reversed)

};

