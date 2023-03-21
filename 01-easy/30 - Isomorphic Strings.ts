const isIsomorphic = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Map = new Map();
  let str2Map = new Map();

  for (let i = 0; i < str1.length; i++) {
    const str1Char: string = str1[i];
    const str2Char: string = str2[i];

    if (str1Map.has(str1Char) && str1Map.get(str1Char) !== str2Char) {
      return false;
    }

    if (str2Map.has(str2Char) && str2Map.get(str2Char) !== str1Char) {
      return false;
    }

    str1Map.set(str1Char, str2Char);
    str2Map.set(str2Char, str1Char);
  }

  return true;
};

const str1: string = "xy";
const str2: string = "bb";
console.log(isIsomorphic(str1, str2));
