const sumZero = (n) => {
  let arr = new Array(n).fill(0);
  let start = 0;
  let end = n - 1;
  let num = 1;

  while (start < end) {
    arr[start++] = num;
    arr[end--] = -Math.abs(num);
    num++;
  }
  return arr;
};

const n = 5;
console.log(sumZero(n));
