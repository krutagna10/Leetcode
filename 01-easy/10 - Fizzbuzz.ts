const fizzBuzz = (n: number): string[] => {
  let arr: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

const num: number = 10;
console.log(fizzBuzz(num));
