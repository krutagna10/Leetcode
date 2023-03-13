const longestCommonPrefix = (str) => {
  if (str.length === 0) {
    return "";
  }
  let currentStr = str[0];
  let tempStr = "";
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (currentStr[j] === str[i][j]) {
        tempStr = tempStr + currentStr[j];
      } else {
        break;
      }
    }
    currentStr = tempStr;
    tempStr = "";
  }
  return currentStr;
};

const longestCommonPrefix1 = (str) => {
  if (str.length === 0) {
    return "";
  }

  return str.reduce((acc, element) => {
    let i = 0;
    while (acc[i] && element[i] && acc[i] === element[i]) {
      i++;
    }
    return acc.slice(0, i);
  });
};

const str = ["flower", "flow", "flight"];
console.log(longestCommonPrefix1(str));

console.log(3 && 0);
