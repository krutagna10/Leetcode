const isPalindrome = (num: number): boolean => {
  const originalNum: number = num;
  let reverseNum: number = 0;

  if (num < 0) {
    return false;
  }

  while (num > 0) {
    const remainder: number = num % 10;
    reverseNum = reverseNum * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return reverseNum === originalNum;
};

const isPalindrome1 = (num: number): boolean => {
  if (num < 0) {
    return false;
  }

  const reverseNum: number = Number(num.toString().split("").join(""));
  return reverseNum === num;
};

const num: number = 121;
console.log(isPalindrome(num));
