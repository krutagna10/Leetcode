'use strict';

const average = (salary) => {
    salary.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 1; i < salary.length - 1; i++) {
        sum = sum + salary[i];
    }
    return sum / (salary.length - 2);
}

const average1 = (salary) => {
    const arr =  salary.sort((a, b) => a - b).slice(1, salary.length - 1);
    return (arr.reduce((acc, element) => acc + element, 0)) / arr.length;
};


const salary = [4000, 3000, 1000, 2000];
console.log(average(salary))


