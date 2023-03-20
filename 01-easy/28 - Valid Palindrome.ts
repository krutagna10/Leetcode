const isPalindrome = (str: string): boolean => {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  console.log(str);

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

const isPalindrome1 = (str: string) => {
  const originalStr = (str = str.toLowerCase().replace(/[^a-z0-9]/gi, ""));
  const reverseStr = str.split("").reverse().join("");
  console.log({ originalStr, reverseStr });
  return originalStr === reverseStr;
};

const str = "A man, a plan, a canal: Panama";
console.log(isPalindrome1(str));
