"use strict";

const runningSum = (arr: number[]): number[] => {
  const ans: number[] = [];
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return ans;
};

const arr: number[] = [1, 2, 3, 4];
console.log(runningSum(arr));
