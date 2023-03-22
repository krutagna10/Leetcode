const getCount = (arr: number[], num: number): number => {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      count++;
    }
  }
  return count;
};

const specialArray = (arr: number[]): number => {
  arr.sort((a, b) => a - b);

  let start: number = 0;
  let end: number = Math.max(...arr);

  while (start <= end) {
    let mid: number = start + Math.floor((end - start) / 2);
    let count: number = getCount(arr, mid);

    if (count === mid) {
      return count;
    } else if (count > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

const arr = [3, 5];
console.log(specialArray(arr));
