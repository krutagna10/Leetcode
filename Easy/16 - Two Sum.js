'use strict';

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (target === arr[i] + arr[j]) {
              return [i, j];
          }
      }
  }
  return [-1, -1];
};

const arr = [2, 7, 10, 12];
const target = 9;
console.log(twoSum(arr, target));




