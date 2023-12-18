/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let groupAnagram = new Map();

    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split("").sort().join("")
        if (groupAnagram.has(sortedWord)) {
            groupAnagram.get(sortedWord).push(strs[i]);
        } else {
            groupAnagram.set(sortedWord, [strs[i]])
        }
    }
    return Array.from(groupAnagram.values())
};
