const searchInsert = (arr: number[], target: number): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

const arr: number[] = [1, 3, 5, 6];
const target: number = 2;
console.log(searchInsert(arr, target));
