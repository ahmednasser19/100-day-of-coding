/**
 * @param {number[]} nums
 * @return {boolean}
 */


///hash set solution with o(n)

var containsDuplicate = function (nums) {

    let hashSet = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            return true;
        } else {
            hashSet.add(nums[i])
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))