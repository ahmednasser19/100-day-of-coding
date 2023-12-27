/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    let length = 1;
    let L = 0;
    let stringSet = new Set();
    for (let R = 0; R < s.length; R++) {
        // console.log("Set", stringSet)
        while (stringSet.has(s[R])) {
            stringSet.delete(s[L])
            L++;
        }
        stringSet.add(s[R])
        length = Math.max([...stringSet].join('').length, length)
    }
    return length;
};