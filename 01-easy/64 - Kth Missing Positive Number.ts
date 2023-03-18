const findKthPositive = (arr: number[], k: number): number => {
  let start: number = 0;
  let end: number = arr.length - 1;

  while (start <= end) {
    const mid: number = start + Math.floor((end - start) / 2);
    if (arr[mid] - (mid + 1) >= k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start + k;
};

const arr: number[] = [1, 2, 3, 4];
const k: number = 2;
console.log(findKthPositive(arr, k));
