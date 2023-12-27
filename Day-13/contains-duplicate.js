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


    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             return true
    //         }
    //     }
    // }
    // return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))