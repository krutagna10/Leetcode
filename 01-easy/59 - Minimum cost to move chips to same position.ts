const minCostToMoveChips = (position: number[]): number => {
  let even: number = 0;
  let odd: number = 0;

  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return Math.min(even, odd);
};

const position: number[] = [1, 1, 2, 2, 2, 3, 3];
console.log(minCostToMoveChips(position));
