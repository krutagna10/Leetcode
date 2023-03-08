'use strict';

const addToArrayForm = (arr, k) => {
    let sol = [];
    let i = arr.length - 1;
    while (i >= 0 || k > 0) {
        if (i >= 0) {
            let sum = arr[i] + k;
            sol.push(sum % 10);
            k = Math.floor(sum / 10);
        } else {
            sol.push(k % 10);
            k = Math.floor(k / 10);
        }
        i--;
    }
    return sol.reverse();
};

const arr = [2, 1, 5];
const k = 806;
console.log(addToArrayForm(arr, k));