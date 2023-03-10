"use strict";

const singleNumber = (arr: number[]): number => {
  return arr.reduce((acc, element) => acc ^ element, 0);
};

const arr = [1, 1, 2, 3, 3];
console.log(singleNumber(arr));
