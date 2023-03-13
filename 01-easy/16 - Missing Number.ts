const missingNumber = (arr: number[]): number => {
  const n: number = arr.length;
  const expectedSum: number = (n ** 2 + n) / 2;
  const totalSum: number = arr.reduce((acc, element) => acc + element, 0);
  return expectedSum - totalSum;
};

const arr: number[] = [0, 1, 2, 4];
console.log(missingNumber(arr));
