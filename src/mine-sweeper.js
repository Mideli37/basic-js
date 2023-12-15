const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getMineCount(row, column) {
    let mineCount = 0;
    for (let i = row - 1; i < row + 2; i += 1) {
      if (i >= 0 && i < matrix.length) {
        for (let j = column - 1; j < column + 2; j += 1) {
          if (j >= 0 && j < matrix.length) {
            if (matrix[i][j]) {
              mineCount += 1;
            }
          }
        }
      }
    }

    mineCount -= matrix[row][column] ? 1 : 0;
    return mineCount;
  }

  let result = [];

  for (let row = 0; row < matrix.length; row += 1) {
    let newRow = [];
    for (let column = 0; column < matrix[0].length; column += 1) {
      newRow.push(getMineCount(row, column));
    }
    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper,
};
