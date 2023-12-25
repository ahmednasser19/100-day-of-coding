/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let stack = []
    let res = []

    var backtrack = function (opened, closed) {
        if ((opened === closed) && (opened === n) && (closed === n)) {
            res.push(stack.join(""))
            return;
        } if (opened < n) {
            stack.push("(");
            backtrack(opened + 1, closed)
            stack.pop()
        } if (closed < opened) {
            stack.push(")");
            backtrack(opened, closed + 1)
            stack.pop()
        }
    }

    backtrack(0, 0);
    return res;
}
