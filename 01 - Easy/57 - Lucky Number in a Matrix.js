'use strict';

const luckyNumbers  = (matrix) => {
    let ans = [];
    const minArray = createMinArray(matrix);
    const maxArray = createMaxArray(matrix);

    for (let i = 0; i < minArray.length; i++) {
        if (minArray[i] === maxArray[i]) {
            ans.push(minArray[i]);
        }
    }
    return ans;
};

const createMinArray = (matrix) => {
    const minArray = [];
    for (let i = 0; i < matrix.length; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
            }
        }
        minArray.push(min);
    }
    return minArray.reverse();
};

const createMaxArray = (matrix) => {
    const maxArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let max = Number.MIN_VALUE;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][j] > max) {
                max = matrix[j][i];
            }
        }
    maxArray.push(max);
    }
    return maxArray;
}

// const matrix = [
//     [3 , 7, 8],
//     [9, 11, 13],
//     [15, 16, 17]
// ];

const matrix = [
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12]
];
console.log(luckyNumbers(matrix));

