const twoSum = (arr: number[], target: number): number[] => {
  let start: number = 0;
  let end: number = arr.length - 1;

  while (start < end) {
    const sum: number = arr[start] + arr[end];

    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return [-1, -1];
};

const arr: number[] = [2, 7, 11, 15];
const target: number = 9;
console.log(twoSum(arr, target));
