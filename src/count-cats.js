const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  if (backyard.length === 0){
    return 0
  }
  else {
 const results = backyard.map(cat => cat.filter(element => element === '^^'));
 let arrLength = results.map(element => element.length);
 let reducer = (a,b) => a + b;
 let answer = arrLength.reduce(reducer);
 return (answer);
}
}

module.exports = {
  countCats
};
