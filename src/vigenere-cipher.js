const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(phrase, key) {
    let phraseChars = [...phrase]
    let multipleKey = key
    let result = []

    while (phrase.length > multipleKey.length) {
      multipleKey = multipleKey+key
    }
    let keyChars = [...multipleKey]
    for (let i = 0; i < phraseChars.length; i++) {
      if (phraseChars[i]) {
        let letter = (phraseChars[i].toUpperCase().charCodeAt(0) - 64 + keyChars[i].toUpperCase().charCodeAt(0) - 64) % 26
        result.push(String.fromCharCode(letter + 63))
      } 
    }
    console.log(result)
    return result
    }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
