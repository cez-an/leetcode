/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let length=words.length;
    let numberOfPairs=0;
    for(let i=0; i<length; i++){
        for(let j=i+1;j<length; j++){
            
                if(words[i]===(words[j].split('').reverse().join('')))
                {
                    numberOfPairs++;
                }
        }
    }
    return numberOfPairs;
};