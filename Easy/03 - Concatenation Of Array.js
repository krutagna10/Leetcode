'use strict';

const getConcatenation = (arr) => {
   const ans = [];
   for (let i = 0; i < arr.length; i++) {
       ans[i] = arr[i];
       ans[arr.length + i] = arr[i];
   }
   return ans;
}

// Second Method
const getConcatenation1 = (arr) => {
    return [...arr, ...arr];
}

const arr = [1, 2, 3];
console.log(getConcatenation(arr));

