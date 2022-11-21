'use strict';

const finalValueAfterOperations = (operations) => {
    let x = 0;
    for (const operator of operations) {
        if (operator === 'X++' || operator === '++X') {
            x = x + 1;
        } else {
            x = x - 1;
        }
    }
    return x;
}

const operations = ['--X', '++X', 'X++'];
console.log(finalValueAfterOperations(operations));