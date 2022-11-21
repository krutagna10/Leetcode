'use strict';

const finalValueAfterOperations = (operations) => {
    let x = 0;
    for (const operator of operations) {
        operator[1] === '+' ? x = x + 1 : x = x - 1;
    }
    return x;
}

const operations = ['--X', '++X', 'X++'];
console.log(finalValueAfterOperations(operations));