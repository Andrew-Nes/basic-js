const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    function deeper (arg){
     counter++
     arg = arg.filter(el => {if(Array.isArray(el)) {return el}});
     if(arg.length == 0) return;
     arg = arg.reduce(element => {if(Array.isArray(element)){
      if (arg.indexOf(element) < arg.length - 1){
     return element.concat(arg[arg.indexOf(element) + 1]);}
     else return element
  }})
          deeper(arg)
    }
      deeper(arr);
      return counter
}
}

module.exports = {
  DepthCalculator
};
