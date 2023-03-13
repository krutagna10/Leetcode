'use strict';

const nextGreatestLetter = (letters, target) => {
    let start = 0;
    let end = letters.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (target < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return letters[start % letters.length];
};

const letters = ['a', 'd', 'e'];
const target = 'c';
console.log(nextGreatestLetter(letters, target));