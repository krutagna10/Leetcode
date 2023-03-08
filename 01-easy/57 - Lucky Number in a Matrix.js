"use strict";

const luckyNumbers = (matrix) => {
  const minArray = findMinArray(matrix);
  const ans = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let maxElement = Number.MIN_VALUE;
    let index = -1;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > maxElement) {
        maxElement = matrix[j][i];
        index = j;
      }
    }
    if (minArray[index] === maxElement) {
      ans.push(maxElement);
    }
  }

  return ans;
};

const findMinArray = (matrix) => {
  const minArray = [];
  for (let i = 0; i < matrix.length; i++) {
    let minElement = Number.MAX_VALUE;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minElement) {
        minElement = matrix[i][j];
      }
    }
    minArray.push(minElement);
  }
  return minArray;
};

const matrix = [
  [7, 8],
  [1, 2],
];

console.log(luckyNumbers(matrix));
