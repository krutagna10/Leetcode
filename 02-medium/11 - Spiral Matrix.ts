const spiralMatrix = (matrix: number[][]): number[] => {
  if (matrix.length === 0) {
    return [];
  }

  const result = [];
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // Traverse the top row
    for (let i = columnBegin; i <= columnEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }

    rowBegin++;

    // Traverse the right column
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][columnEnd]);
    }

    columnEnd--;

    // Traverse the bottom row (if it exits)
    if (rowBegin <= rowEnd) {
      for (let i = columnEnd; i >= columnBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    // Traverse the left column (if it exists)
    if (columnBegin <= columnEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][columnBegin]);
      }
      columnBegin++;
    }
  }

  return result;
};

const matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralMatrix(matrix));
