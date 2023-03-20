const merge = (arr1: number[], m: number, arr2: number[], n: number) => {
  for (let i = 0; i < n; i++) {
    arr1[m] = arr2[i];
    m++;
  }
  arr1.sort((a, b) => a - b);
};

const arr1: number[] = [1, 2, 3, 0, 0, 0];
const arr2: number[] = [2, 4, 6];
const m: number = 3;
const n: number = 3;
merge(arr1, m, arr2, n);
console.log(arr1);
