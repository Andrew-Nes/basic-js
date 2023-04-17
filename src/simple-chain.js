const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
chain = '';
const chainMaker = {

  getLength() {
    return this.chain.match('~~').length + 1;
  },
  addLink(value) {
    let val;
    if(arguments.length == 0){
      val = '';
    } 
    else if(value === null) {
      val = 'null'
    }
    else val = `${value}`;

    if(this.chain.length > 1){
    this.chain = this.chain + `~~( ${value} )`;
    }
    else this.chain += `( ${value} )`
    return this
  },
  removeLink(position) {
     let arr = this.chain.split('~~');
     let err = new Error ('You can\'t remove incorrect link!');
     if(!position || !Number.isInteger(position) || position <= 0 || position > arr.length) throw err;
      else{
        arr.splice(position - 1, 1);
        this.chain = arr.join('~~');
        return this}
  },
  reverseChain() {
    let arr = this.chain.split('~~');
    this.chain = arr.reverse().join('~~');
    return this
  },
  finishChain() {
    return this.chain;
  }
  ,
  chain: ''
};

module.exports = {
  chainMaker
};
