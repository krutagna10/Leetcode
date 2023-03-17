const nextGreatestLetter = (letters: string[], target: string): string => {
  let start: number = 0;
  let end: number = letters.length - 1;
  while (start <= end) {
    let mid: number = start + Math.floor((end - start) / 2);
    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
};

const letters: string[] = ["a", "d", "e"];
const target: string = "c";
console.log(nextGreatestLetter(letters, target));
