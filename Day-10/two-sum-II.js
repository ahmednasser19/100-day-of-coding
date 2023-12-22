/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let L = 0;
    let R = numbers.length - 1;

    while (L < R) {

        if (numbers[L] + numbers[R] > target) {

            R--;
        } else if (numbers[L] + numbers[R] < target) {
            L++;
        } else {
            return [L + 1, R + 1];
        }
    }

    return false;

};

console.log(twoSum([-1, 0], -1))