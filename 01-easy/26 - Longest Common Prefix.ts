const longestCommonPrefix = (strings: string[]): string => {
  let result = strings[0];
  for (let i = 1; i < strings.length; i++) {
    let currentResult = "";
    for (let j = 0; j < strings[i].length; j++) {
      if (result[j] !== strings[i][j]) {
        break;
      }
      currentResult += strings[i][j];
    }
    if (currentResult === "") {
      return "";
    }
    result = currentResult;
  }
  return result;
};

const strings: string[] = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings));
