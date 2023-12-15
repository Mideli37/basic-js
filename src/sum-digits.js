const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
getSumOfDigits(197);
function getSumOfDigits(n) {
  let sumOfDigits = n;
  let currentNumber = n;

  while (sumOfDigits > 9) {
    sumOfDigits = 0;

    while (currentNumber > 9) {
      sumOfDigits += currentNumber % 10;
      currentNumber = Math.floor(currentNumber / 10);
    }
    sumOfDigits += currentNumber;
    currentNumber = sumOfDigits;
  }
  return sumOfDigits;
}

module.exports = {
  getSumOfDigits,
};
