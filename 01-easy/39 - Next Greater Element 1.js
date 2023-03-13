class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

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
  let ans = [];
  let stack = new Stack();
  stack.push(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[stack.peek()]) {
      stack.push(i);
    } else {
      while (arr[i] > arr[stack.peek()]) {
        ans[stack.peek()] = arr[i];
        stack.pop();
      }
      stack.push(i);
    }
  }

  //    Putting -1 in remaining elements
  while (!stack.isEmpty()) {
    ans[stack.peek()] = -1;
    stack.pop();
  }
  return ans;
};

const arr = [4, 1, 2];
const arr2 = [1, 3, 4, 2];
console.log(nextGreaterElement(arr, arr2));
