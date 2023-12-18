/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function (s) {

    let stack = []
    const hash = new Map()
    hash.set(")", "(")
    hash.set("}", "{")
    hash.set("]", "[")

    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            if (stack.length !== 0 && (stack[stack.length - 1] === hash.get(s[i]))) {
                if (stack.length !== 0 && (stack[stack.length - 1] === hash.get(s[i]))) {
                    stack.pop()
                } else {
                    return false;
                }
            } else {
                stack.push(s[i])
            }
        }
        if (stack.length === 0) {
            return true
        } else {
            return false
        }
    };
}
console.log(isValid("(){}[]"))