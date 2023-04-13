const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let counter = 0;
  let arr1 = s1.split('');
  let uniqueCHarracters = [...new Set(arr1)];
  for(i=0; i < uniqueCHarracters.length; i++) {
    let regExp = new RegExp(uniqueCHarracters[i], 'g');
    let a = s1.match(regExp);
    let b = s2.match(regExp);
    console.log(a, b);
    if(!a || !b) continue;
    else if(a.length <= b.length) {counter += a.length}
    else counter += b.length;
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
