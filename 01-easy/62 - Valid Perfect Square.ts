const isPerfectSquare = (num: number): boolean => {
  let start: number = 1;
  let end: number = num;

  if (num === 1) {
    return true;
  }

  while (start < end) {
    let mid: number = start + Math.floor((end - start) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return false;
};

const num: number = 16;
console.log(isPerfectSquare(num));
