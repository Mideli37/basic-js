const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(str, options);
  let result = [];
  let additionPart = [];
  let fullResult = '';
  if (typeof options.addition !== 'undefined' || typeof options.addition == 'boolean') {
    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1;
    }
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionPart.push(String(options.addition));
    }
    additionPart = additionPart.join(options.additionSeparator || '|');
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  let mainPart = str + additionPart;
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(mainPart);
  }
  if (options.separator) {
    fullResult = result.join(options.separator);
  } else {
    fullResult = result.join('+');
  }
  return fullResult;
}

module.exports = {
  repeater,
};
