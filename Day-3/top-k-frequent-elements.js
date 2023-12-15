/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {

    const frequentMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let itemCount = frequentMap.get(nums[i]) ? frequentMap.get(nums[i]) : 0
        frequentMap.set(nums[i], 1 + itemCount)
    }

    [...frequentMap].sort()

    const sortedArray = Array.from(frequentMap).sort((a, b) => a[1] - b[1]).reverse();
    const sortedMap = new Map(sortedArray);
    let res = [];
    let iterator = 0;
    for ([key, value] of sortedMap) {
        if (iterator < k) {
            res.push(key)
            iterator++
        } else break;
    }

    return res;

};

topKFrequent([3, 0, 1, 0], 1)

