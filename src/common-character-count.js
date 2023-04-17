const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstString = {}
  let secondString = {}
  let string1 = [...s1]
  let string2 = [...s2]
  let counter = 0;
  console.log(s1, s2)
  for (let char of string1) {
    if (firstString[char]) {
      firstString[char]++;
    } else {
      firstString[char] = 1;
    }
  }

  for (let char of [...s2]) {
    if (secondString[char]) {
      secondString[char]++;
    } else {
      secondString[char] = 1;
    }
  }

  for (let char in firstString) {
    if (secondString[char]) {
      if (secondString[char] < firstString[char]) {
        counter += secondString[char];
      } else {
        counter += firstString[char];
      }
    }
  }
  console.log(firstString, secondString)
  console.log(counter);
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
