const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  const maxElement = Math.max(...candies);
  const maxArr = candies.map((element) => element + extraCandies >= maxElement);
  return maxArr;
};

const candies: number[] = [2, 3, 5, 1, 3];
const extraCandies: number = 3;
console.log(kidsWithCandies(candies, extraCandies));
