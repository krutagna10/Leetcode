const numberOfCuts = (n: number): number => {
  if (n === 1) {
    return 0;
  }
  return n % 2 === 0 ? n / 2 : n;
};

const n: number = 10;
console.log(numberOfCuts(n));
