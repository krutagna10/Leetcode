const countNegatives = (grid: number[][]): number => {
  let count: number = 0;

  for (let i = 0; i < grid.length; i++) {
    let start: number = 0;
    let end: number = grid[i].length - 1;

    while (start <= end) {
      const mid: number = start + Math.floor((end - start) / 2);
      if (grid[i][mid] >= 0) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    const currentCount: number = grid[i].length - 1 - end;
    count = count + currentCount;
  }

  return count;
};

const grid: number[][] = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

console.log(countNegatives(grid));
