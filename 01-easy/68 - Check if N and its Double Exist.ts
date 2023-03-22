const checkIfExist = (arr: number[]): boolean => {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
      return true;
    }
    set.add(arr[i]);
  }

  return false;
};

const arr = [10, 2, 5, 3];
console.log(checkIfExist(arr));
