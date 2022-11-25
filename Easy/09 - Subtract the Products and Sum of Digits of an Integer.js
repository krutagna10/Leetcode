const subtractProductAndSum = (num) => {
    let sum = 0;
    let product = 1;

    while (num > 0) {
        let remainder = num % 10;
        sum = sum + remainder;
        product = product * remainder;
        num = Math.floor(num / 10);
    }

    return product - sum;
};

const subtractProductAndSum1 = (num) => {
    const arr = num.toString().split('').map(element => Number(element));
    const product = arr.reduce((acc, element) => acc * element, 1);
    const sum = arr.reduce((acc, element) => acc + element, 0);
    return product - sum;
};

let num = 234;
console.log(subtractProductAndSum(num));
console.log(subtractProductAndSum1(num));

