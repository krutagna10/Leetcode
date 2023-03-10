"use strict";

const maximumWealth = (arr: number[][]): number => {
  let maxWealth: number = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    let sum: number = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }
  return maxWealth;
};

// Solution using reduce and map
const maximumWealth1 = (arr: number[][]): number => {
  const sumArr: number[] = arr.map((element) =>
    element.reduce((acc, item) => acc + item, 0)
  );

  return Math.max(...sumArr);
};

const arr: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(maximumWealth(arr));
