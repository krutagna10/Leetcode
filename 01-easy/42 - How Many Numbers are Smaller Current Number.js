'use strict';

const smallerNumbersThanCurrent = (arr) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] > arr[j]) {
                count = count + 1;
            }
        }
        ans.push(count);
    }
    return ans;
};

const smallerNumbersThanCurrent1 = (arr) => {
    let ans = [];
    let map = new Map();
    const sortedArr = [...arr].sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        if (!map.has(sortedArr[i])) {
            map.set(sortedArr[i], i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        ans.push(map.get(arr[i]));
    }
    return ans;
}


const arr = [5, 0, 10, 0, 10, 6];
console.log(smallerNumbersThanCurrent1(arr));
