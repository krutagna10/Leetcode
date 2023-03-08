'use strict';

const splitArray = (arr, k) => {
    let start = Math.max(...arr);
    let end = arr.reduce((acc, sum) => acc + sum, 0);

    // Applying Binary Search
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);

        // Calculate how many pieces you can divide with this max sum
        let sum = 0;
        let pieces = 1;
        for (const element of arr) {
            if (sum + element > mid) {
                sum = element;
                pieces++;
            } else {
                sum = sum + element;
            }
        }

        if (pieces > k) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    // Here start and end will be equal
    return end;


};

const arr = [7, 2, 5, 10, 8];
const k = 2;
console.log(splitArray(arr, k));