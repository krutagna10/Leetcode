'use strict';

const buildArray = (arr) => {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
       ans[i] = arr[arr[i]];
    }
    return ans;
};

const buildArray1 = (arr) => {
    return arr.map(element => arr[element]);
}

const buildArray2 = (arr) => {
    return arr.map((element, index) => arr[arr[index]]);
}

const arr = [0, 2, 1, 5, 3, 4];
console.log(buildArray(arr));
