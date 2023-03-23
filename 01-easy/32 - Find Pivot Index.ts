const pivotIndex = (arr: number[]): number => {
  if (arr.length === 0) {
    return -1;
  }

  let leftSum: number = 0;
  let rightSum: number = arr.reduce((acc, element) => acc + element, 0);

  for (let i = 0; i < arr.length; i++) {
    // Subtracting value at arr[i] from rightSum
    rightSum = rightSum - arr[i];

    // If right sum and left sum are  equal we return i;
    if (leftSum === rightSum) {
      return i;
    }

    // If above is not true to we add arr[i] to the leftSum
    leftSum = leftSum + arr[i];
  }

  // We return -1 if we could not find an index
  return -1;
};

const arr: number[] = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr));
