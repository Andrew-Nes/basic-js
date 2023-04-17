const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  const arrFromString = string.split('');
  let current = arrFromString[0];
  let letterCount = 1;
  let answer = [];
  for (let i = 0; i <= arrFromString.length; i++ ) {
    if (arrFromString[i] == arrFromString[i+1]) {
      letterCount++
    }
  else {
      if(letterCount == 1){ answer.push(current)}
      else answer.push(letterCount + current);
    current = arrFromString[i+1];
    letterCount = 1;
  } 
  };
  return answer.join('');
}

module.exports = {
  encodeLine
};
