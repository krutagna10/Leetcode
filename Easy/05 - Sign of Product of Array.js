'use strict';

const arraySign = (arr) => {
    let count = 0;
    for (const element of arr) {
        if (element === 0) {
            return 0;
        }
        if (element < 0) {
            count++;
        }
    }
    // If the count is even then the result will be positive and if the count is negative then the result will be negative
    return count % 2 === 0 ? 1 : -1;
}

const arr = [1, 2, 3, 4, -1, -2, -3];
console.log(arraySign(arr));