const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  counter = 1;
  array = 0;

  calculateDepth(arr) {
    this.array = arr.slice();
    const containArray = (el) => Array.isArray(el);
    if (this.array.some(containArray)) {
      this.array = this.array.flat(1);
      this.counter += 1;
      return this.calculateDepth(this.array);
    }
    let totalCounter = this.counter;
    this.counter = 1;
    return totalCounter;
  }
}

module.exports = {
  DepthCalculator,
};
