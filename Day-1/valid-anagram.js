/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    //check if the two strings have the same length (amount of characters)
    if (s.length !== t.length) {
        return false;
    }

    // second make each sting into a hash map  and check how many time each character appears
    let sCount = new Map()
    let tCount = new Map()
    for (let i = 0; i < s.length; i++) {

        let countS = sCount.get(s[i]) ? sCount.get(s[i]) : 0
        sCount.set(s[i], 1 + countS)

        let countT = tCount.get(t[i]) ? tCount.get(t[i]) : 0
        tCount.set(t[i], 1 + countT)

    }

    //check that each character is t string is exist and has the same count as s
    for (let [key, value] of tCount) {
        let countS = sCount.get(key) ? sCount.get(key) : 0
        if (value !== countS) {
            return false
        }
    }

    return true;
};

