const splitArray = (arr: number[], k: number): number => {
  let start: number = Math.max(...arr);
  let end: number = arr.reduce((acc, element) => acc + element, 0);

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    let sum = 0;
    let pieces = 1;

    for (const element of arr) {
      if (element + sum > mid) {
        sum = element;
        pieces++;
      } else {
        sum = sum + element;
      }
    }

    pieces > k ? (start = mid + 1) : (end = mid);
  }
  return start;
};

const arr: number[] = [7, 2, 5, 10, 8];
const k: number = 2;
console.log(splitArray(arr, k));
