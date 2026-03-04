/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let ans = [];
    for (let i = 0; i <= n; i++) {
        let res = i.toString(2).split("").reduce((a, b) => {

            if (Number(b) === 1) {
                a++;
            }
            return a;
        }, 0);

        ans.push(res)
    }
    return ans;
};