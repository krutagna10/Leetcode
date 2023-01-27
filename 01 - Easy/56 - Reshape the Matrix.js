'use strict';

const matrixReshape = (matrix, row, column) => {
    let ans = new Array(row).fill(0).map((_) => new Array(column).fill(0));
    let currentRow = 0;
    let currentColumn = 0;

    // Initial Condition
    if (matrix.length * matrix[0].length !== row * column) {
        return matrix;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            ans[currentRow][currentColumn] = matrix[i][j];
            if (currentColumn < column - 1) {
                currentColumn++;
            } else {
                currentRow++;
                currentColumn = 0;
            }
        }
    }
    return ans;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];

const row = 3;
const column = 2;
console.table(matrixReshape(matrix, row, column));


