const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];
  let firstrow = [];
  let lastrow = [];
  for(let n = 0; n < matrix[0].length; n++){
    let counter = 0;
    if (matrix[0][n]) firstrow.push(1);
    else {
      console.log(matrix[0][n-1]);
      if (matrix[0][n - 1] === true){
        counter++
       }
       if (matrix[0][n + 1] === true){
        counter++
       }
       if (matrix[1][n - 1] === true){
        counter++
       }
       if (matrix[1][n] === true){
        counter++
       }
       if (matrix[1][n + 1] === true){
        counter++
       }
       firstrow.push(counter);
    }
  }
  newMatrix.push(firstrow);
  for(let i = 1; i < matrix.length - 1; i++){
  let row = [];
  let counter = 0;
  for(let j = 0; j < matrix[i].length; j++){
     if (matrix[i][j]) row.push(1); 
 else{
     if (matrix[i - 1][j - 1] === true){
      counter++
     }
     if (matrix[i - 1][j] === true){
      counter++
     }
     if (matrix[i - 1][j + 1] === true){
      counter++
     }
     if (matrix[i][j - 1] === true){
      counter++
     }
     if (matrix[i][j + 1] === true){
      counter++
     }
     if (matrix[i + 1][j - 1] === true){
      counter++
     }
     if (matrix[i + 1][j] === true){
      counter++
     }
     if (matrix[i + 1][j + 1] === true){
      counter++
     }
     row.push(counter);
     counter = 0;
    }
  }
  newMatrix.push(row);
}
for(let x = 0; x < matrix[matrix.length - 1].length; x++){
  let counter = 0;
  if (matrix[matrix.length - 1][x]) lastrow.push(1);
  else {
    if (matrix[matrix.length - 1][x - 1] === true){
      counter++
     }
     if (matrix[matrix.length - 1][x + 1] === true){
      counter++
     }
     if (matrix[matrix.length - 2][x - 1] === true){
      counter++
     }
     if (matrix[matrix.length - 2][x] === true){
      counter++
     }
     if (matrix[matrix.length - 2][x + 1] === true){
      counter++
     }
     lastrow.push(counter);
  }
}
newMatrix.push(lastrow);
return newMatrix;
}

module.exports = {
  minesweeper
};
