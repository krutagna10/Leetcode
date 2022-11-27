'use strict';

const plusOne = (digits) => {
    const arr = [];
    let num = 0;
    for (const digit of digits) {
        num = num * 10 + digit;
    }
    num = num + 1;

    while (num > 0) {
        let remainder = num % 10;
        arr.push(remainder);
        num = Math.floor(num / 10);
    }
    return arr.reverse();
}



const plusOne1 = (digits) => {
    let num = BigInt(digits.join('')) + BigInt(1);
    return num.toString().split('');
};

const digits = [1, 2, 4];
console.log(plusOne(digits));

