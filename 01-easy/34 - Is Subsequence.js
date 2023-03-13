const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1.charAt(i) === str2.charAt(j)) {
      i++;
    }
    // Incrementing j
    j++;
  }
  return str1.length === i;
};

const str1 = "aaaaaa";
const str2 = "bbaaaa";
console.log(isSubsequence(str1, str2));
