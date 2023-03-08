'use strict';

const findGoodPairs = function(arr) {
    let goodPairs = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                goodPairs++;
            }
        }
    }
    return goodPairs;
};

const arr = [1, 2, 3, 1, 1, 3];
console.log(findGoodPairs(arr));