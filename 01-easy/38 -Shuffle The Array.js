'use strict';

const shuffle = (arr, n) => {
    let ans = [];
    let evenIndex = 0;
    let oddIndex = 1;
    for (let i = 0; i < n; i++) {
        ans[evenIndex] = arr[i];
        evenIndex = evenIndex + 2;
    }
    for (let i = n; i < arr.length; i++) {
        ans[oddIndex] = arr[i];
        oddIndex = oddIndex + 2;
    }
    return ans;
};

const shuffle1 = (arr, n) => {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(arr[i], arr[n + i]);
    }
    return ans;
};

const arr = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(shuffle(arr, n));