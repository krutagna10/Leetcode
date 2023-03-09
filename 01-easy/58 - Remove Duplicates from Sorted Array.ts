const removeDuplicates = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }

  let index: number = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[index] = arr[i];
      index++;
    }
  }

  return index;
};

const removeDuplicates1 = (arr: number[]) => {
  let set = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
    }
  }

  let index = 0;
  for (const element of set) {
    arr[index] = element;
    index++;
  }

  return set.size;
};

const arr: number[] = [1, 1, 2];
console.log(removeDuplicates(arr));
