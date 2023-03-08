'use strict';

const findMedianSortedArrays = (arr1, arr2) => {
    const arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    const n = arr.length;
    if (n % 2 !== 0) {
        return arr[Math.floor(n / 2)];
    } else {
        return (arr[n / 2] + arr[n / 2 - 1]) / 2;
    }
};

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(findMedianSortedArrays(arr1, arr2));

