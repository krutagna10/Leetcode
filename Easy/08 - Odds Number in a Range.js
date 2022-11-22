const countOdds = (low, high) => {
    const range = Math.floor((high - low) / 2);
    return low % 2 === 0 && high % 2 === 0 ? range : range + 1;
}

console.log(countOdds(10, 20));