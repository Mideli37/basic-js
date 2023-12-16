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
  constructor(directInput = true) {
    this.reverse = !directInput;
  }

  encrypt(phrase, key) {
    if (!(phrase && key)) {
      throw new Error('Incorrect arguments!');
    }
    let msg = [...phrase.toUpperCase()];
    if (this.reverse) {
      msg = msg.reverse();
    }
    const upperCaseKey = [...key.toUpperCase()];
    let counter = 0;
    msg = msg.map((char) => {
      let charCode = char.charCodeAt();
      if (charCode < 65 || charCode > 90) {
        return char;
      }
      let keyCharCharCode = upperCaseKey[counter % upperCaseKey.length].charCodeAt();
      let encryptedChar = ((keyCharCharCode - 65 + charCode - 65) % 26) + 65;
      counter += 1;
      return String.fromCharCode(encryptedChar);
    });
    return msg.join('');
  }
  decrypt(phrase, key) {
    if (!(phrase && key)) {
      throw new Error('Incorrect arguments!');
    }
    let msg = [...phrase.toUpperCase()];
    if (this.reverse) {
      msg = msg.reverse();
    }
    const upperCaseKey = [...key.toUpperCase()];
    let counter = 0;
    msg = msg.map((char) => {
      let charCode = char.charCodeAt();
      if (charCode < 65 || charCode > 90) {
        return char;
      }
      let keyCharCharCode = upperCaseKey[counter % upperCaseKey.length].charCodeAt();
      let encryptedChar = ((charCode - 65 + 26 - (keyCharCharCode - 65)) % 26) + 65;
      counter += 1;
      return String.fromCharCode(encryptedChar);
    });
    return msg.join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};

/*     let phraseChars = [...phrase]
    console.log(phrase)
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
    } */
