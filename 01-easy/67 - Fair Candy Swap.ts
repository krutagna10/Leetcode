const fairCandySwap = (aliceSizes: number[], bobSizes: number[]): number[] => {
  // Sum(Alice) - x + y = Sum(Bob) - y + x
  // y = x + (bobSum - aliceSum) / 2
  const aliceSum = aliceSizes.reduce((acc, element) => acc + element, 0);

  const bobSum = bobSizes.reduce((acc, element) => acc + element, 0);

  const diff: number = (bobSum - aliceSum) / 2;

  const set = new Set<number>(bobSizes);

  for (const element of aliceSizes) {
    if (set.has(element + diff)) {
      return [element, element + diff];
    }
  }

  return [];
};

const aliceSizes: number[] = [1, 1];
const bobSizes: number[] = [2, 2];
console.log(fairCandySwap(aliceSizes, bobSizes));
