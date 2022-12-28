'use strict';

// Solution using map
const twoSum = (arr, target) => {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    // When no solution exists
    return null;
};

const twoSum1 = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (target === arr[i] + arr[j]) {
              return [i, j];
          }
      }
  }
  // When no solution exists
  return null;
};


const arr = [2, 7, 5, 4, 3];
const target = 8;
console.log(twoSum(arr, target));




