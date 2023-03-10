const average = (salary: number[]): number => {
  salary.sort((a, b) => a - b);
  let sum: number = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    sum = sum + salary[i];
  }
  return sum / (salary.length - 2);
};

const average1 = (salary: number[]): number => {
  const arr: number[] = salary
    .sort((a, b) => a - b)
    .slice(1, salary.length - 1);

  const sum = arr.reduce((acc, element) => acc + element, 0);
  return sum / arr.length;
};

const salary: number[] = [4000, 3000, 1000, 2000];
console.log(average(salary));
