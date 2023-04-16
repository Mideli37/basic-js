const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 * * `getLength` returns the current chain length as a number;
 * `addLink(value)` adds a link containing a `string` representation of the `value` to the chain;
 * `removeLink(position)` removes a chain link in the specified position;
 * `reverseChain` reverses the chain;
 * `finishChain` ends the chain and `returns` i
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return chainMaker;
  },
  removeLink(position) {
    if (position > this.chain.length || !position || position <= 0 || typeof (position) === 'string') {
      this.chain.splice(0, this.chain.length)
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position -1, 1);
      return chainMaker;
    }
  },
  reverseChain() {
    let revchain = []
    for (let i = this.chain.length - 1; i >= 0; i--) {
      revchain.push(this.chain[i])
    }
    this.chain = revchain
    return chainMaker
  },
  finishChain() {
    let finishedChain = this.chain.join(' )~~( ')
    finishedChain = '( ' + finishedChain + ' )'
    this.chain.splice(0, this.chain.length)
    return finishedChain
  },
};

module.exports = {
  chainMaker,
};
