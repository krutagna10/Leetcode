const guessNumber = (num: number, computerPick: number): number => {
  let start: number = 1;
  let end: number = num;

  while (start <= end) {
    const mid: number = start + Math.floor((end - start) / 2);
    const result: number = guess(mid, computerPick);
    console.table({ start, end, mid, result });
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const guess = (userPick: number, computerPick: number): number => {
  if (userPick === computerPick) {
    return 0;
  } else if (userPick < computerPick) {
    return 1;
  } else {
    return -1;
  }
};

const num: number = 10;
const computerPick: number = 1 + Math.floor(Math.random() * 10);
console.log(guessNumber(num, computerPick));
