'use strict';

const peakIndexInMountainArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
};

const peakIndexInMountainArray1 = (arr) => {
    return arr.indexOf(Math.max(...arr))
}

const arr = [0, 2, 1, 0];
console.log(peakIndexInMountainArray(arr));
console.log(peakIndexInMountainArray1(arr));