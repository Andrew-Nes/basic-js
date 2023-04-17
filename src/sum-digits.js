const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  function x (arg){
  let array = String(arg).split('').map((el)=>{
    return Number(el);
  })
  sum = array.reduce((a, b) => {
    return a + b; 
  })
  if (sum > 9) {
    x(sum);
  }
  else return
}
x(n);
return sum;
}

module.exports = {
  getSumOfDigits
};
