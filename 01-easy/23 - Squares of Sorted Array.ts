const sortedSquares = (arr: number[]): number[] => {
  let start: number = 0;
  let end: number = arr.length - 1;
  let index: number = end;
  const sortedArr: number[] = [];
  while (index > -1) {
    if (Math.abs(arr[start]) > Math.abs(arr[end])) {
      sortedArr[index--] = arr[start] * arr[start];
      start++;
    } else {
      sortedArr[index--] = arr[end] * arr[end];
      end--;
    }
  }

  return sortedArr;
};

const sortedSquares1 = (arr: number[]): number[] => {
  const sortedArr = arr.map((element) => element * 2).sort((a, b) => a - b);
  return sortedArr;
};

const arr = [-1, -2, 3, 5, 9];
console.log(sortedSquares(arr));
