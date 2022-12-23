'use strict';

const peakIndexInMountainArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] > arr[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

const peakIndexInMountainArray1 = (arr) => {
    return arr.indexOf(Math.max(...arr))
}

const arr = [0, 2, 3, 5, 1, 0];
console.log(peakIndexInMountainArray(arr));
