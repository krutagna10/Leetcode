const romanToInt = (str: string): number => {
  interface Symbols {
    [key: string]: number;
  }

  const symbols: Symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const current = symbols[str[i]];
    const next = symbols[str[i + 1]];
    if (current < next) {
      result = result + (next - current);
      i++;
    } else {
      result = result + current;
    }
  }

  return result;
};

const str: string = "IV";

console.log(romanToInt(str));
