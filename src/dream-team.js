const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false
  }
  console.log(members)
 let firstLetters = []
 for (let member of members) {
  if (typeof (member) == 'string') {
    let firstLetter = member.trim()[0]
    firstLetters.push(firstLetter.toUpperCase())
 }
 
}
console.log(firstLetters.sort())
return firstLetters.sort().join('')
}

module.exports = {
  createDreamTeam
};
