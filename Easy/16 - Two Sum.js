'use strict';

const twoSum = (arr, target) => {
    const map = new Map();
    let augend;
    // Augend is a number to which an addend is added

    for(let i = 0; i < arr.length; i++) {
        augend = target - arr[i];
        if(map.has(augend)){
            return [map.get(augend), i];
        }
        map.set(arr[i], i);
    }
};

const arr = [2, 7, 10, 12];
const target = 9;
console.log(twoSum(arr, target));

let map = new Map();
for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
}
console.log(map);
console.log(map.keys());
console.log(map.entries());
console.log(map.has(10))

const obj = {
    name: 'Krutagna',
    age: 20,
    gender: 'male',
    isStudent: true,
}

console.log(obj);

