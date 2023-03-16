const arrangeCoins = (n: number): number => {
  let result = 0;
  let i = 1;
  while (n > 0) {
    n = n - i;
    if (n > 0) {
      result++;
      i++;
    }
  }
  return result;
};

const n: number = 5;
console.log(arrangeCoins(n));
