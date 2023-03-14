const twoSum = (arr: number[], target: number): number[] => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
  return [-1, -1];
};

const arr: number[] = [2, 7, 11, 15];
const target: number = 9;
console.log(twoSum(arr, target));
