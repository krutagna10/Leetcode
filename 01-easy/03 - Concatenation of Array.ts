const getConcatenation = (arr: number[]): number[] => {
  const ans: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    ans[i] = arr[i];
    ans[i + arr.length] = arr[i];
  }
  return ans;
};

const getConcatenation1 = (arr: number[]): number[] => {
  return [...arr, ...arr];
};

const arr: number[] = [1, 2, 3];
console.log(getConcatenation(arr));
