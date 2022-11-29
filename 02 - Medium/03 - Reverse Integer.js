'use strict';

const reverse = (num) => {
    const isNegative = num < 0;
    num = Math.abs(num);
    let reverseNum = 0;

    while (num !== 0) {
        let remainder = num % 10;
        reverseNum = reverseNum * 10 + remainder;
        num = Math.floor(num / 10);
    }

    if (reverseNum > Math.pow(2, 31)) {
        return 0;
    } else {
        return isNegative ? reverseNum * -1 : reverseNum;
    }
};

const reverse1 = (num) => {
    const isNegative = num < 0;
    num = Math.abs(num);
    const reverseNum = Number(num.toString().split('').reverse().join(''));

    if (reverseNum > Math.pow(2, 31)) {
        return 0;
    } else {
        return isNegative ? reverseNum * -1 : reverseNum;
    }
};

const num = -123;
console.log(reverse1(num));
