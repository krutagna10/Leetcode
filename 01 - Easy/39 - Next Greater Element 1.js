'use strict';

const nextGreaterElement = (arr1, arr2) => {
    const elementArr = createElementArr(arr2);
    const map = new Map();
    const ans = [];

    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], elementArr[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        ans.push(map.get(arr1[i]));
    }
    return ans;
};

const createElementArr = (arr) => {
    const elementArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                elementArr.push(arr[j]);
                flag = true;
                break;
            }
        }
        if (!flag) {
            elementArr.push(-1);
        }
    }
    elementArr.push(-1);

    return elementArr;
}

const arr = [4, 1, 2];
const arr2 = [1, 3, 4, 2];
console.log(nextGreaterElement(arr, arr2));
