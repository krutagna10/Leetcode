const binarySearch = (arr: number[], target: number): number => {
  let start: number = 0;
  let end: number = arr.length - 1;

  while (start <= end) {
    const mid: number = start + Math.floor((end - start) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const target: number = 5;
console.log(binarySearch(arr, target));
