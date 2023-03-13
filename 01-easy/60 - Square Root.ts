const squareRoot = (num: number): number => {
  if (num === 0) {
    return 0;
  }

  let start: number = 1;
  let end: number = num;

  while (start <= end) {
    let mid: number = start + Math.floor((end - start) / 2);
    let square: number = mid * mid;

    if (square === num) {
      return mid;
    } else if (square > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

const squareRoot1 = (num: number): number => {
  return Math.floor(Math.sqrt(num));
};

const num: number = 16;
console.log(squareRoot(num));
