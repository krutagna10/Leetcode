const peakIndexInMountainArray = (arr: number[]): number => {
  let start: number = 0;
  let end: number = arr.length - 1;
  while (start < end) {
    let mid: number = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const peakIndexInMountainArray1 = (arr: number[]): number => {
  return arr.indexOf(Math.max(...arr));
};

const arr: number[] = [0, 2, 3, 5, 1, 0];
console.log(peakIndexInMountainArray(arr));
