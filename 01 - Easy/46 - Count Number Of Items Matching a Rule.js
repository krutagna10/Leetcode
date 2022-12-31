'use strict';

const countMatches = (items, ruleKey, ruleValue) => {
    const ruleObject = {
        type: 0,
        color: 1,
        name: 2,
    };

    let index = ruleObject[ruleKey];
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][index] === ruleValue) {
            count++;
        }
    }
    return count;
};

const countMatches1 = (items, ruleKey, ruleValue) => {
    const ruleObject = {
        type: 0,
        color: 1,
        name: 2,
    };

    let index = ruleObject[ruleKey];
    return items.reduce((acc, element) => element[index] === ruleValue ? acc + 1 : acc ,0);
}

const items = [['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'iphone']];
const ruleKey = 'color';
const ruleValue = 'silver';
console.log(countMatches1(items, ruleKey, ruleValue));

