const isHappy = (n) => {
  let set = new Set();
  while (!set.has(n)) {
    let sum = 0;
    set.add(n);

    while (n > 0) {
      let remainder = n % 10;
      sum = sum + remainder * remainder;
      n = Math.floor(n / 10);
    }

    if (sum === 1) {
      return true;
    } else {
      n = sum;
    }
  }
  return false;
};

const n = 19;
console.log(isHappy(n));
