const pivotIndex = (arr) => {
  if (arr.length === 0) {
    return -1;
  }

  let leftSum = 0;
  let rightSum = arr.reduce((acc, element) => acc + element);

  for (let i = 0; i < arr.length; i++) {
    rightSum = rightSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum = leftSum + arr[i];
    }
  }
  return -1;
};

const arr = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr));
