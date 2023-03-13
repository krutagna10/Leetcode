const isBadVersion = (n) => {
  return n > 3;
};

const findBadVersion = (n) => {
  let start = 1;
  let end = n;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isBadVersion(mid)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const n = 5;
console.log(findBadVersion(5));
