/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    //check if any row contains duplicates
    for (let i = 0; i < board.length; i++) {
        let squareMap = new Map()

        let rowMap = new Map()
        let columnMap = new Map()
        for (let j = 0; j < board.length; j++) {
            //row checks 
            if (rowMap.has(board[i][j]) && board[i][j] !== ".") {
                return false;
            } else {
                rowMap.set(board[i][j], 1)
            }

            //second check the columns
            if (columnMap.has(board[j][i]) && board[j][i] !== ".") {
                return false;
            } else {
                columnMap.set(board[j][i], 1)
            }
        }
    };

    let squareMap = new Map()
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === ".") continue;
            if (squareMap.has(`[${Math.floor(i / 3)},${Math.floor(j / 3)},${board[i][j]}]`)) {
                return false;
            } else {
                squareMap.set(`[${Math.floor(i / 3)},${Math.floor(j / 3)},${board[i][j]}]`, board[i][j])
            }
        }
    };

    return true;
}
