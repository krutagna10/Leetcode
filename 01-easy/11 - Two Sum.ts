const twoSum = (arr: number[], target: number): number[] => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    let complement: number = target - arr[i];
    if (map.has(complement) && map.get(complement) !== i) {
      // ! means that we tell typescript the value will never be undefined or null
      return [i, map.get(complement)];
    }
  }

  //  When no solution exits
  return [-1, -1];
};

const twoSum1 = (arr: number[], target: number): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target === arr[i] + arr[j]) {
        return [i, j];
      }
    }
  }
  // When no solution exists
  return [-1, -1];
};

const arr = [2, 7, 5, 4, 3];
const target = 8;
console.log(twoSum(arr, target));
