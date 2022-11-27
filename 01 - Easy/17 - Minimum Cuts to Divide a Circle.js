'use strict';

const numberOfCuts = (n) => {
    if (n === 1) {
        return 0;
    }

    return n % 2 === 0 ? n / 2 : n;
};

const n = 10;
console.log(numberOfCuts(n));