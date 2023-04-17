const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let values = [];
  let indexes =  [];
  let entries = arr.entries();
 for (i = 0; i < arr.length; i++){
   values.push(entries.next().value);
 }
 values.forEach((el) => {
  if(el[1] == -1){
      indexes.push(el[0]);
  }
 })
let array = arr.sort((a, b) => {return a-b});
array.splice(0, indexes.length);
indexes.forEach(el => {
  array.splice(el, 0 , -1); 
})
return array;
}

module.exports = {
  sortByHeight
};
