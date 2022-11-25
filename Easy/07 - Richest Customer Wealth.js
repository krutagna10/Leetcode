'use strict';

const maximumWealth = (arr) => {
    let maxWealth = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum = sum + arr[i][j];
        }
        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};

// Solution using reduce and map
const maximumWealth1 = (arr) => {
    return Math.max(...arr.map(element => element.reduce((acc, num) => acc + num, 0)));
}

let arr = [[1, 2], [3, 4], [5, 6]];
console.log(maximumWealth(arr));

console.log(Math.max(...[1, 2, 3]));
console.log(Math.max(1, 2, 3));


