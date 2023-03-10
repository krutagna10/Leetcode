"use strict";

const swap = (s: string[], start: number, end: number) => {
  let temp: string = s[start];
  s[start] = s[end];
  s[end] = temp;
};

const reverseString = (s: string[]): void => {
  let start: number = 0;
  let end: number = s.length - 1;
  while (start < end) {
    swap(s, start, end);
    start++;
    end--;
  }
};

// Javascript one line solution
const reverseString1 = (s: string[]): void => {
  s.reverse();
};

const s: string[] = ["H", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
