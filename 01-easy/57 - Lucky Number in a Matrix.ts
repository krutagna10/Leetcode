const luckyNumbers = (matrix: number[][]): number[] => {
  const minArray: number[] = findMinArray(matrix);
  const ans: number[] = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let maxElement: number = Number.MIN_VALUE;
    let index: number = -1;
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

const findMinArray = (matrix: number[][]): number[] => {
  const minArray: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    let minElement: number = Number.MAX_VALUE;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minElement) {
        minElement = matrix[i][j];
      }
    }
    minArray.push(minElement);
  }
  return minArray;
};

const matrix: number[][] = [
  [7, 8],
  [1, 2],
];

console.log(luckyNumbers(matrix));
