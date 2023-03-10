const containsDuplicate = (arr: number[]): boolean => {
  let set = new Set<number>();
  for (const element of arr) {
    if (set.has(element)) {
      return true;
    } else {
      set.add(element);
    }
  }
  return false;
};

const containsDuplicate1 = (arr: number[]): boolean => {
  const set = new Set<number>(arr);
  return arr.length !== set.size;
};

const arr: number[] = [1, 2, 3, 1];
console.log(containsDuplicate(arr));
