"use strict";

const diagonalSum = (matrix) => {
  let sum = 0;
  let index = matrix.length - 1;
  for (let i = 0; i < matrix.length; i++) {
    sum = sum + matrix[i][i];
    if (i !== index) {
      sum = sum + matrix[index][i];
    }
    index--;
  }
  return sum;
};

const matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
console.log(diagonalSum(matrix));