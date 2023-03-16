const maxSubarray = (arr: number[]): number => {
  let sum: number = 0;
  let globalMax: number = arr[0];

  for (const element of arr) {
    sum = sum + element;
    if (globalMax < sum) {
      globalMax = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return globalMax;
};

const arr: number[] = [2, 3, 4, 7, -5, 1];
console.log(maxSubarray(arr));
