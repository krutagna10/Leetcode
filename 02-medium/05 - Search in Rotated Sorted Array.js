const search = (arr, target) => {
  const pivot = findPivot(arr);
  if (pivot === -1) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }
  if (target === arr[pivot]) {
    return pivot;
  }
  if (target >= arr[0]) {
    return binarySearch(arr, target, 0, pivot - 1);
  } else {
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
  }
};

const findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }
    if (arr[start] > arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
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

// Using index of method
const search1 = (arr, target) => {
  return arr.indexOf(target);
};

const arr = [3, 4, 1, 2];
const target = 3;
console.log(search(arr, target));
