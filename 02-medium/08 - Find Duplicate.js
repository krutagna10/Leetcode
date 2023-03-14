const findDuplicate = (arr) => {
  let set = new Set();
  for (const element of arr) {
    if (set.has(element)) {
      return element;
    } else {
      set.add(element);
    }
  }
  return -1;
};

const findDuplicate1 = (arr) => {
  return arr.sort((a, b) => a - b);
};

const arr = [1, 3, 4, 2, 2];
console.log(findDuplicate(arr));
