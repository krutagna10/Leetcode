'use strict';

const intersect = (arr1, arr2) => {
    // Sorting the arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    const ans = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            ans.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++
        }
    }
    return ans.length === 0 ? [-1, -1] : ans;
};

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(intersect(arr1, arr2));

