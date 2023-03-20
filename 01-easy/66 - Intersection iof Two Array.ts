const intersection = (arr1: number[], arr2: number[]) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const set = new Set<number>();
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      set.add(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return [...set];
};

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(intersection(arr1, arr2));
