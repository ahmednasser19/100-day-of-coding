/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {


    let MaxProfit = 0;
    let L = 0;
    let R = 1;
    while (R < prices.length) {
        if (prices[L] < prices[R]) {
            profit = prices[R] - prices[L]
            MaxProfit = Math.max(MaxProfit, profit)
        } else {
            L = R
        }
        R++
    }
    return MaxProfit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))

//Brut force solution

// var maxProfit = function (prices) {
//     let profit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] - prices[i] > profit) {
//                 profit = prices[j] - prices[i];
//             } else {
//                 continue;
//             }
//         }
//     };

//     return profit
// }