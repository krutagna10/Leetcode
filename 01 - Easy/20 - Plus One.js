'use strict';

const plusOne = (digits) => {
    let num = BigInt(digits.join('')) + BigInt(1);
    return num.toString().split('');
};

const digits = [1, 2, 4];
console.log(plusOne(digits));

