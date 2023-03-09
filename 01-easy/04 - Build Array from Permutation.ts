const buildArray = (arr: number[]): number[] => {
  const ans: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    ans[i] = arr[arr[i]];
  }
  return ans;
};

const buildArray1 = (arr: number[]): number[] => {
  return arr.map((element) => arr[element]);
};

const arr1: number[] = [0, 2, 1, 5, 3, 4];
console.log(buildArray(arr1));
