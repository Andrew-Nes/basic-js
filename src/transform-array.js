const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next duplicates the next element of the array in the transformed array.
// --double-prev duplicates the previous element of the array in the transformed array.


function transform(arr) {
  let err = new Error("'arr' parameter must be an instance of the Array!");
  if(!(arr instanceof Array)) throw err; 
  let newArray  = arr.slice(0, arr.length);
  function discardNext(array, index){
    if (!array[index + 1]) array.splice(index, 1);
    else array.splice(index, 2, null);
  }
  function discardPrev(array, index){
    if (!array[index - 1]) array.splice(index, 1);
    else array.splice(index - 1, 2, null);
  }
  function doubleNext(array, index){
    if (!array[index + 1]) array.splice(index, 1);
    else array.splice(index, 1, arr[index + 1]);
  }
  function doublePrev(array, index){
    if (!array[index - 1]) array.splice(index, 1);
    else array.splice(index, 1, arr[index - 1]);
  }
  for(i = 0; i < newArray.length; i++){
    if(newArray[i] == '--discard-next') discardNext(newArray, i);
    if(newArray[i] == '--discard-prev') discardPrev(newArray, i);
    if(newArray[i] == '--double-next')  doubleNext(newArray, i);
    if(newArray[i] == '--double-prev') doublePrev(newArray, i);
  }
  let answer = newArray.filter(el => {if (el !== null ) {return el}});
  return answer;
  }


module.exports = {
  transform
};
