'use strict';

const searchRange = (arr, target) => {
    let index = findIndex(arr, target);
    if (index === -1) {
        return [-1, -1];
    }
    if (index < arr.length - 1 && arr[index + 1] === target) {
        return [index, index + 1];
    }
    if (index > 0 && arr[index - 1] === target) {
        return [index - 1, index];
    }
};

const findIndex = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

const arr = [5, 5, 7, 7, 8, 8, 10, 10];
const target = 5;
console.log(searchRange(arr, target))