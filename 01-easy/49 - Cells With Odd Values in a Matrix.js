'use strict';

const oddCells = (m, n, indices) => {
    // Creating a two dimensional matrix with 0
    const arr = new Array(m).fill(0).map(element => new Array(n).fill(0));

    for (let i = 0; i < indices.length; i++) {
        incrementRows(arr, indices[i][0], n);
        incrementColumns(arr, indices[i][1], m);
    }

    return arr.flat().reduce((acc, element) => element % 2 !== 0 ? acc + 1 : acc, 0);
};

const incrementRows = (arr, rowNumber, columns) => {
    for (let i = 0; i < columns; i++) {
        arr[rowNumber][i]++;
    }
}

const incrementColumns = (arr, columnNumber, rows) => {
    for (let i = 0; i < rows; i++) {
        arr[i][columnNumber]++;
    }
}

const m = 2;
const n = 3;
const indices = [
    [0, 1],
    [1, 1]
];
console.log(oddCells(m, n, indices));

