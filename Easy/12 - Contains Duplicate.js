'use strict';

const containsDuplicate = (arr) => {
    let set = new Set();
    for (const element of arr) {
        if (set.has(element)) {
            return true;
        } else {
            set.add(element);
        }
    }
    return false;
};

const containsDuplicate1 = (arr) => {
    const set = new Set(arr);
    return arr.length !== set.size;
};

const arr = [1, 2, 3, 1];
console.log(containsDuplicate(arr));

