'use strict';

const transpose = (matrix) => {
    let transposeMatrix = new Array(matrix[0].length).fill(0).map(element => new Array(matrix.length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposeMatrix[j][i] = matrix[i][j];
        }
    }
    return transposeMatrix;
};

const matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
];
console.log(transpose(matrix));
