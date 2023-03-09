export {};

const finalValueAfterOperations = (operations: string[]): number => {
  let x = 0;
  for (const operator of operations) {
    x = operator[1] === "+" ? x + 1 : x - 1;
  }
  return x;
};

const operations: string[] = ["---X", "++X", "X--"];
console.log(finalValueAfterOperations(operations));
