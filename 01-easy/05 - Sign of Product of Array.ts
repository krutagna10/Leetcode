const arraySign = (arr: number[]): number => {
  let count: number = 0;
  for (const element of arr) {
    if (element === 0) {
      return 0;
    }
    if (element < 0) {
      count++;
    }
  }
  return count % 2 === 0 ? 1 : -1;
};

const arraySign1 = (arr: number[]): number => {
  if (arr.includes(0)) {
    return 0;
  }

  const count: number = arr.filter((element) => element < 0).length;
  return count % 2 === 0 ? 1 : -1;
};

const arr: number[] = [1, 2, 3, 4, -1, -2, -3, -1];
console.log(arraySign(arr));
