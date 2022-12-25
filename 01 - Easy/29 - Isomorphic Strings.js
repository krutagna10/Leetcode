'use strict';

const isIsomorphic = (str1, str2) => {
    const arr1 = [];
    const arr2 = [];
    let k = 0;
    let ans = true;

    // Initial condition
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let ch1 = str1.charAt(i);
        let ch2 = str2.charAt(i);

        if (arr1[ch1] === arr2[ch2]) {
            arr1[ch1] = k;
            arr2[ch2] = k;
            k++;
        } else {
            ans = false;
            break;
        }
    }
    return ans;
};

const str1 = 'aaa';
const str2 = 'bbb';
console.log(isIsomorphic(str1, str2));
