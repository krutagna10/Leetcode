const reverse = (num: number): number => {
  const isNegative: boolean = num < 0;
  num = Math.abs(num);
  let reverseNum: number = 0;

  while (num !== 0) {
    const remainder: number = num % 10;
    reverseNum = reverseNum * 10 + remainder;
    num = Math.floor(num / 10);
  }

  if (reverseNum > Math.pow(2, 31)) {
    return 0;
  } else {
    return isNegative ? reverseNum * -1 : reverseNum;
  }
};

const reverse1 = (num: number): number => {
  const isNegative: boolean = num < 0;
  num = Math.abs(num);
  const reverseNum: number = Number(
    num.toString().split("").reverse().join("")
  );

  if (reverseNum > Math.pow(2, 31)) {
    return 0;
  } else {
    return isNegative ? reverseNum * -1 : reverseNum;
  }
};

const num: number = -123;
console.log(reverse(num));
