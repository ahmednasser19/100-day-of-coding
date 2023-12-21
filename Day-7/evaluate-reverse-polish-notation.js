/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
    let result = [];
    let newVal = 0;
    for (let i = 0; i < tokens.length; i++) {

        if (tokens[i] === "+" || tokens[i] === "*" || tokens[i] === "-" || tokens[i] === "/") {
            let num1 = Number(result.pop())
            let num2 = Number(result.pop())

            tokens[i] === "+" ? newVal = num1 + num2 :
                tokens[i] === "*" ? newVal = num1 * num2 :
                    tokens[i] === "-" ? newVal = num2 - num1 :
                        newVal = Math.trunc(num2 / num1)

            result.push(newVal)
        }
        else {
            result.push(tokens[i])
        }
    }
    return result
};

