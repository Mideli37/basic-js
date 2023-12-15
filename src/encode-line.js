const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const chars = [...str];
  if (chars.length === 0) {
    return '';
  }
  let counter;
  let prevChar;
  let result = '';

  function addEncodedSrt() {
    result += counter > 1 ? counter + prevChar : prevChar;
  }

  function resetCounter(newChar) {
    counter = 1;
    prevChar = newChar;
  }
  chars.forEach((char, i) => {
    if (i !== 0) {
      if (char === prevChar) {
        counter += 1;
      } else {
        addEncodedSrt();
        resetCounter(char);
      }
    } else {
      resetCounter(char);
    }
  });

  addEncodedSrt();
  return result;
}

module.exports = {
  encodeLine,
};
