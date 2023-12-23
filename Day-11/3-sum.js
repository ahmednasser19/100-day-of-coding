/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sortedNums = nums.sort((a, b) => a - b)

    let res = []

    for (let i = 0; i < sortedNums.length; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        let L = i + 1;
        let R = sortedNums.length - 1;

        while (L < R) {
            if (sortedNums[i] + sortedNums[L] + sortedNums[R] > 0) {
                R--;
            }
            else if (sortedNums[i] + sortedNums[L] + sortedNums[R] < 0) {
                L++;
            } else {
                res.push([sortedNums[i], sortedNums[L], sortedNums[R]])
                L++;
                while (sortedNums[L] === sortedNums[L + 1] && L < R) {
                    L++;
                }
            }
        }
    }

    return res;
};
