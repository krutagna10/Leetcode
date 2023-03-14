const findPeakElement = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      //It means that we are in decreasing part of the array
      end = mid;
    } else {
      //It means that we are in increasing part of the array
      start = mid + 1;
    }
  }
  return start;
};

const findPeakElement1 = (arr) => {
  return arr.indexOf(Math.max(...arr));
};

const arr = [1, 2, 3, 4, 1];
console.log(findPeakElement(arr));
