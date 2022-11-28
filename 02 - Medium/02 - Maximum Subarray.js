const maxSubarray = (arr) => {
    let sum = 0;
    let globalMax = arr[0];

    for (const element of arr) {
        sum = sum + element;
        if (globalMax < sum) {
            globalMax = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return globalMax;
};

const arr = [2, 3, 4, 7, -5, 1];
console.log(maxSubarray(arr));