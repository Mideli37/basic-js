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
function getDNSStats(domains) {
  counter = {};
  if (!domains[0]) {
    return {};
  }

  domains.forEach((domain) => {
    let domainParts = domain.split('.').reverse();
    let compoundParts = '';
    domainParts.forEach((part) => {
      compoundParts += `.${part}`;
      if (counter[compoundParts]) {
        counter[compoundParts] += 1;
      } else {
        counter[compoundParts] = 1;
      }
    });
  });
  return counter;
}

module.exports = {
  getDNSStats,
};
