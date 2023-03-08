'use strict';

const findNumbers = (arr) => {
    let evenNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        let digits = getNumberOfDigits(arr[i]);
        if (digits % 2 === 0) {
            evenNumbers++;
        }
    }
    return evenNumbers;
};

const getNumberOfDigits = (num) => {
    let digits = 0;
    while (num > 0) {
        digits++;
        num = Math.floor(num / 10);
    }
    return digits;
};

// Using map and reduce functions
const findNumbers1 = (arr) => {
    let evenNumbers =  arr.reduce((acc, element) => {
        if (element.toString().length % 2 === 0) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return evenNumbers;
};

// Using filter
const findNumbers2 = (arr) => {
    let evenNumbers = arr.map(String).filter(element => element.length % 2 === 0);
    return evenNumbers.length;
}

const arr = [2, 4, 6, 8, 10];
console.log(findNumbers(arr));