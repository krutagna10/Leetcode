'use strict';

const isPalindrome = (x) => {
    let reverse = 0;
    let originalNum = x;
    while (x > 0) {
        let remainder = x % 10;
        reverse = reverse * 10 + remainder;
        x = Math.floor(x / 10);
    }
    console.log(reverse);
    return reverse === originalNum;
};

const isPalindrome1 = (x) => {
    let reverse = Number(x.toString().split('').reverse().join(''));
    return x === reverse;
}

const x = 121;
console.log(isPalindrome1(x));