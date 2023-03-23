const majorityElement = (arr: number[]): number => {
  if (arr.length === 1) {
    return arr[0];
  }

  const num = Math.floor(arr.length / 2);

  arr.sort((a, b) => a - b);

  let currentCount = 1;
  let currentNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (currentNum === arr[i]) {
      currentCount++;
    } else {
      currentNum = arr[i];
      currentCount = 1;
    }

    if (currentCount > num) {
      return currentNum;
    }
  }

  return -1;
};

const arr: number[] = [3, 2, 3];
console.log(majorityElement(arr));
