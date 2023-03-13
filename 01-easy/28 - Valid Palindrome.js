const isPalindrome = (str) => {
  str = str.toLowerCase().replaceAll(/[^a-z0-9]/gi, "");
  let originalStr = str;
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str.charAt(i);
  }
  return originalStr === reverseStr;
};

const isPalindrome1 = (str) => {
  str = str.toLowerCase().replaceAll(/[^a-z0-9]/gi, "");
  return str === str.split("").reverse().join("");
};

const str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));
