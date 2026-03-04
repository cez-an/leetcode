/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = n.toString(2);
    let count = 0;
    res.split("").filter((x) => {
        if (x != 0) {
            count++;
        }
    });
    return count;
};