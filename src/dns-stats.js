const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  counter = {}
  if (!domains[0]) {
   return {}
  }
  
  for (domain of domains) {
    domain.split('.')
    for (part of domain) {
      if (counter[part[part.length-1]]) {
        counter[part[part.length-1]] ++
      } else {
        counter[part[part.length-1]] = 1
      }
    }
  }
}

module.exports = {
  getDNSStats
};
