const isBadVersion = (n: number): boolean => {
  return n >= 5;
};

const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start: number = 1;
    let end: number = n;

    while (start <= end) {
      const mid: number = start + Math.floor((end - start) / 2);

      if (isBadVersion(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return start;
  };
};

const versionChecker: any = solution(isBadVersion);
const n: number = 10;
console.log(versionChecker(n));
