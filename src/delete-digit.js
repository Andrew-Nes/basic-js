const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arrOfDidgits = Array.from(String(num), Number);
  let negative = false;
  let answer;
  if (num < 0) {
    arrOfDidgits.splice(0, 1);
    negative = true;
  }
  if (arrOfDidgits.length == 2 && negative){
    return answer =  arrOfDidgits.sort()[0];
  }
  else if (arrOfDidgits.length == 2 && !negative){
    return answer =  arrOfDidgits.sort()[1];
  }
  
  for (i = 0; i < arrOfDidgits.length - 1; i++) {
      if (arrOfDidgits[i] >= arrOfDidgits[i + 1] && negative){
          arrOfDidgits.splice(i, 1);
          return answer = 0 - parseInt(arrOfDidgits.join(''));
      } 
  else if (!negative && arrOfDidgits[i] < arrOfDidgits[i + 1]){
      arrOfDidgits.splice(i, 1);
      return answer = parseInt(arrOfDidgits.join(''));
      }
}
}

module.exports = {
  deleteDigit
};
