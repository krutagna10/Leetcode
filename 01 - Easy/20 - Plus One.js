'use strict';

const plusOne = (digits) => {
    let num = BigInt(digits.join('')) + BigInt(1);
    return num.toString().split('');
};

const plusOne1 = (digits) => {
    let ans = [];
    let index = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
}

const digits = [1, 2, 4];
console.log(plusOne1(digits));

