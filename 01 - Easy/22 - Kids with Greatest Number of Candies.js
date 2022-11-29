'use strict';

const kidsWithCandies = function(candies, extraCandies) {
    const maxElement = Math.max(...candies);
    return candies.map(element => element + extraCandies >= maxElement);
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));