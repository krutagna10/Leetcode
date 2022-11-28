'use strict';

const isUgly = (n) => {
    if (n === 0) {
        return false;
    }

    while (n % 5 === 0) {
        n = n / 5;
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    while (n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
};

const isUgly1 = (n) => {
  const arr = [2, 3, 5];
  const num = arr.reduce((acc, element) => {
      while (acc % element === 0 && acc !== 0) {
          acc = acc / element;
      }
      return acc;
  }, n);

  return num === 1;
};

const n = 6;
console.log(isUgly(n));