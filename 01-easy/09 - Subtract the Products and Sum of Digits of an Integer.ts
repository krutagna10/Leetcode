const subtractProductAndSum = (num: number): number => {
  let sum: number = 0;
  let product: number = 1;

  while (num > 0) {
    const remainder: number = num % 10;
    sum = sum + remainder;
    product = product * remainder;
    num = Math.floor(num / 10);
  }

  return product - sum;
};

const subtractProductAndSum1 = (num: number): number => {
  const arr = num
    .toString()
    .split("")
    .map((element) => Number(element));

  const product = arr.reduce((acc, element): number => {
    return acc * element;
  }, 1);

  const sum = arr.reduce((acc, element): number => {
    return acc + element;
  }, 0);

  return product - sum;
};

const num: number = 234;
console.log(subtractProductAndSum1(num));
