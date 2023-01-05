'use strict';

const plusOne = (digits) => {
    let num = BigInt(digits.join('')) + BigInt(1);
    return num.toString().split('');
};

const plusOne1 = (digits) => {
    let x = 1;
    let i = digits.length - 1;
    let ans = [];
    while (i >= 0 || x > 0) {
        if (x > 0 && i >= 0) {
            let sum = x + digits[i];
            ans.push(sum % 10);
            x = Math.floor(sum / 10);
        } else if (x > 0 && i < 0) {
            ans.push(x % 10);
            x = Math.floor(x / 10);
        } else {
            ans.push(digits[i]);
        }
        i--;
    }
    return ans.reverse();
}

const digits = [9, 9, 9];
console.log(plusOne1(digits));

