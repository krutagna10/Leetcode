'use strict';

// Time Complexity => O(n ^ 2)
const maximumPopulation = (logs) => {
    let arr = new Array(101).fill(0);
    for (let i = 0; i < logs.length; i++) {
        for (let j = logs[i][0]; j < logs[i][1]; j++) {
            arr[j - 1950]++;
        }
    }

    let maxValue = 0;
    let maxYear = 1950;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxYear = i + 1950;
        }
    }
    return maxYear;
};

// Time Complexity => O(n)
const maximumPopulation1 = (logs) => {
    let arr = new Array(101).fill(0);
    for (let i = 0; i < logs.length; i++) {
        arr[logs[i][0] - 1950]++;
        arr[logs[i][1] - 1950]--;
    }

    // Running Sum
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        arr[i] = sum;
    }

    let maxValue = 0;
    let maxYear = 1950;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxYear = i + 1950;
        }
    }
    return maxYear;
}


const logs = [
    [1993,1999],
    [2000,2010]
];
console.log(maximumPopulation1(logs));