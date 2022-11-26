const findKthLargest = (arr, k) => {
    // The array is sorted in descending order
    arr.sort((a, b) => b - a);
    return arr[k - 1];
};

const arr = [5, 9, 8, 1, 2];
const k = 2;
console.log(findKthLargest(arr, k));