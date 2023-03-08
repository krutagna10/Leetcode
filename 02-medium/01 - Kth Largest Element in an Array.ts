const findKthLargest = (arr: number[], k: number): number => {
  // The array is sorted in descending order
  arr.sort((a, b) => b - a);
  return arr[k - 1];
};

const arr: number[] = [5, 9, 8, 1, 2];
const k: number = 2;
console.log(findKthLargest(arr, k));
