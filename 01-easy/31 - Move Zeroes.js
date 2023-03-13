const moveZeroes = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (arr[j] === 0 && arr[j + 1] !== 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      j--;
    }
  }
};

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
