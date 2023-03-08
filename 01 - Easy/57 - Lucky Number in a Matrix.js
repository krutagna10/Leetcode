"use strict";

const luckyNumbers = (matrix) => {
  const minArray = findMinArray(matrix);
  const maxArray = findMaxArray(matrix);
  console.table(matrix);
  console.log(minArray);
  console.log(maxArray);
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

const findMaxArray = (matrix) => {
  const maxArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let maxElement = Number.MIN_VALUE;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > maxElement) {
        maxElement = matrix[j][i];
      }
    }
    maxArray.push(maxElement);
  }
  return maxArray;
};

const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];

console.log(luckyNumbers(matrix));
