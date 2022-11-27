'use strict';

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 5;
console.log(binarySearch(arr, target));