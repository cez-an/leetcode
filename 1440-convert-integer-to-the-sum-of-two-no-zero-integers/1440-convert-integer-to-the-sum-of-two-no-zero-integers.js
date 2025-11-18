/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {

            if (("" + i).split('').includes("0") || ("" + j).split('').includes("0")) {
                continue;
            }

            if ((i + j) === n) {
                return [i, j];
            }

        }
    }
};