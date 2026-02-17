/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let patternMap = new Map();
    let stringMap = new Map();
    let p = 0;
    let p1 = 0;
    let k = 0;

    if (s.split(" ").length !== pattern.length) return false

    for (let i of s.split(" ")) {
        if (stringMap.has(i)) {
            stringMap.set(i, stringMap.get(i))
        } else {
            stringMap.set(i, p++)
        }
    }
    for (let i of pattern) {
        if (patternMap.has(i)) {
            patternMap.set(i, patternMap.get(i));
        } else {
            patternMap.set(i, k++)
        }
    }

    let srt = ""    
    let srt2 = ""

    for (let i of pattern) {
        srt += patternMap.get(i)
    }
    
    for (let i of s.split(" ")) {
        srt2 += stringMap.get(i)
    }

    if (srt === srt2) {
        return true;
    }
    
    return false;    
};