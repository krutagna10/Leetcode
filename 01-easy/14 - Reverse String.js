'use strict';

const swap = (s, start, end) => {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
};

const reverseString = (s) => {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        swap(s, start, end);
        start++;
        end--;
    }
};

// Javascript one line solution
const reverseString1 = (s) => {
    s.reverse();
};

const s = ['H', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);