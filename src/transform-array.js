const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * * `--discard-next` excludes the next element of the array from the transformed array.
* `--discard-prev` excludes the previous element of the array from the transformed array.
* `--double-next` duplicates the next element of the array in the transformed array.
* `--double-prev` duplicates the previous element of the array in the transformed array.
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
    return []
  }
  console.log(arr)
let newArr = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (arr[i] === '--discard-next') {
        i++
      } else if (arr[i] === '--discard-prev') {
        if (arr[i - 2] !== '--discard-next') { 
        newArr.pop()
      }
      } else if (arr[i] === '--double-next') {
        if (arr[i + 1]) { newArr.push(arr[i + 1]) }
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 1]) {
          if (arr[i-2] !== '--discard-next') { newArr.push(arr[i - 1]) }
        }
      } else {
        newArr.push(arr[i])
      }
    }
  }
  console.log(newArr)
  return newArr
}

module.exports = {
  transform
};
