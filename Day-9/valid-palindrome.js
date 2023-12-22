/**
 * @param {string} s
 * @return {boolean}
 */



var isPalindrome = function (s) {
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()

    let L = 0;
    let R = string.length - 1;


    for (let i = 0; i < string.length; i++) {
        if (string[L] !== string[R]) {
            return false;
        }

        L++;
        R--;
    }

    return true;

};

console.log(isPalindrome("race a car"))