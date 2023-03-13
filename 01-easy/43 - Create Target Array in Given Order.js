const createTargetArray = (arr, index) => {
  let target = [];
  let n = arr.length;

  let count = 0;
  while (count < n) {
    if (index[count] >= count) {
      target[index[count]] = arr[count];
    } else {
      for (let j = n - 1; j > index[count]; j--) {
        target[j] = target[j - 1];
      }
      target[index[count]] = arr[count];
    }
    count++;
  }
  return target;
};

const createTargetArray1 = (arr, index) => {
  let target = [];
  for (let i = 0; i < arr.length; i++) {
    target.splice(index[i], 0, arr[i]);
    console.log(target);
  }
  return target;
};

const index = [0, 1, 2, 2, 1];
const arr = [0, 1, 2, 3, 4];
console.log(createTargetArray(arr, index));
