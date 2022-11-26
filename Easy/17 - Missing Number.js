'use strict';

const missingNumber = (arr) => {
    const n = arr.length;
    const expectedSum = (n ** 2 + n) / 2;
    const totalSum = arr.reduce((acc, element) => acc + element, 0);
    return expectedSum - totalSum;
}

const arr = [0, 1, 2, 4];
console.log(missingNumber(arr));