const rotateArray = (arr, k) => {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
};

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

// Solution using unshift and slice
const rotateArray1 = (arr, k) => {
  k = k % arr.length;
  arr.unshift(...arr.splice(arr.length - k));
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(arr, k);
console.log(arr);
