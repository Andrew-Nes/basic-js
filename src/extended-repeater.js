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
  let answer = [];
  let _options = {
    separator: '+', 
    additionSeparator: '|'
  } 
  let entries = Object.entries(options);
  entries.forEach((el) => {
    if(typeof el !== 'number' && typeof el !== 'string')
    Object.defineProperty(_options, `${el[0]}`, {value: `${el[1]}`});
    else Object.defineProperty(_options, `${el[0]}`, {value: el[1]});
  })
  function addition() {
    let additionArr = [];
    if (_options.addition) {
      for (i = 1; i < _options.additionRepeatTimes; i++) {
        additionArr.push(`${_options.addition}` + `${_options.additionSeparator}`);
      }
      additionArr.push(`${_options.addition}`);
    }
    return additionArr.join('');
  }
  if(_options.repeatTimes){
    for (j = 1; j < _options.repeatTimes; j++){
      answer.push(`${str}` + `${addition()}` + `${_options.separator}`);
    }
  }
  answer.push(`${str}`+ `${addition()}`);
  return answer.join('');
}

module.exports = {
  repeater
};
