'use strict';

const searchRange = (arr, target) => {
   let ans = [-1, -1];
   for (let i = 0; i < arr.length; i++) {
       if (target === arr[i]) {
           ans[0] = i;
           break;
       }
   }

   if (ans[0] === -1) {
       return [-1, -1];
   }
   for (let i = arr.length - 1; i >= 0; i--) {
       if (target === arr[i]) {
           ans[1] = i;
           break;
       }
   }
   return ans;
};


const arr = [3, 3, 3, 5, 5, 7, 7, 8, 8, 10, 10];
const target = 3;
console.log(searchRange(arr, target))