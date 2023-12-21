/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = []
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && stack[stack.length - 1]?.temp < temperatures[i]) {
            let poppedItem = stack.pop();
            res[poppedItem.index] = i - poppedItem.index;
        }
        stack.push({ temp: temperatures[i], index: i })
    }
    return res;
}
