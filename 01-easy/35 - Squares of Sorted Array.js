'use strict';

const sortedSquares = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let index = end;
    const sortedArr = [];
    while (index > -1) {
        if (Math.abs(arr[start]) > Math.abs(arr[end])) {
            sortedArr[index--] = arr[start] * arr[start];
            start++;
        } else {
            sortedArr[index--] = arr[end] * arr[end];
            end--;
        }
    }

    return sortedArr;
};

const arr = [-4, -1, 0, 3, 5];
console.log(sortedSquares(arr));