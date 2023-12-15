const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]);
function getMatrixElementsSum(matrix) {
  let sum = 0;
  loop2: for (let i = 0; i < matrix[0].length; i += 1) {
    for (let row = 0; row < matrix.length; row += 1) {
      if (matrix[row][i] === 0) {
        continue loop2;
      } else {
        sum += matrix[row][i];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
