const isSubsequence = (str1: string, str2: string): boolean => {
  let i: number = 0;
  let j: number = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }

  return i === str1.length;
};

const str1: string = "abc";
const str2: string = "adbfc";
console.log(isSubsequence(str1, str2));
