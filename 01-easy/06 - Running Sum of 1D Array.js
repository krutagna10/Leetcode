'use strict';

const runningSum = (arr) => {
    let sum = 0;
    return arr.map(element => {
        sum = sum + element;
        return sum;
    });
};

const arr = [1, 2, 3, 4];
console.log(runningSum(arr));