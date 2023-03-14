class Heap {
  constructor() {
    this.values = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(index);

    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.values[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.values[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.values[this.getRightChildIndex(currentIndex)] >
          this.values[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.values[currentIndex] < this.values[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  add(element) {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  }

  peek() {
    return this.values[0];
  }

  poll() {
    const maxValue = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.length = this.values.length - 1;
    this.heapifyDown();
    return maxValue;
  }
}

const furthestBuilding = (heights, bricks, ladders) => {
  let heap = new Heap();

  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] >= heights[i + 1]) {
      continue;
    }
    let jump = heights[i + 1] - heights[i];
    bricks = bricks - jump;
    heap.add(jump);
    if (bricks < 0) {
      bricks = bricks + heap.poll();
      if (ladders > 0) {
        ladders--;
      } else {
        return i;
      }
    }
  }
  return heights.length - 1;
};

const heights = [4, 2, 7, 6, 9, 14, 12];
const bricks = 5;
const ladders = 1;

console.log(furthestBuilding(heights, bricks, ladders));
