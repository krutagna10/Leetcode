'use strict';

const isIsomorphic = (str1, str2) => {
    const arr1 = [];
    const arr2 = [];

    // Initial condition
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let ch1 = str1.charAt(i);
        let ch2 = str2.charAt(i);

        if (arr1[ch1] !== arr2[ch2]) {
            return false;
        } else {
            arr1[ch1] = i + 1;
            arr2[ch2] = i + 1;
        }
    }
    return true;
};

const str1 = 'aaa';
const str2 = 'bbb';
console.log(isIsomorphic(str1, str2));
