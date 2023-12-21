/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
    let result = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            let newVal = Number(result.pop()) + Number(result.pop())
            result.push(newVal)
        }
        else if (tokens[i] === "*") {
            let newVal = Number(result.pop()) * Number(result.pop())
            result.push(newVal)
        }
        else if (tokens[i] === "-") {
            let num1 = Number(result.pop())
            let num2 = Number(result.pop())
            let newVal = Math.floor(num2 - num1)
            result.push(newVal)
        }
        else if (tokens[i] === "/") {
            let num1 = Number(result.pop())
            let num2 = Number(result.pop())
            let newVal = Math.trunc(num2 / num1)
            result.push(newVal)
        }

        else {
            result.push(tokens[i])
        }
    }
    return result
};


