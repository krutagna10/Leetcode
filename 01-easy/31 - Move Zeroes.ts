const moveZeroes = (arr: number[]): void => {
  if (arr.length === 1) {
    return;
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j] === 0) {
      j = j - 1;
    }

    let temp = arr[i];
    arr[i] = arr[j + 1];
    arr[j + 1] = temp;
  }
};

const arr: number[] = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
