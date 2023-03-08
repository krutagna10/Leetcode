'use strict';

const flipAndInvertImage = (image) => {
    // Flipping the image
    for (let i = 0; i < image.length; i++) {
        let start = 0;
        let end = image[i].length - 1;
        while (start <= end) {
            if (image[i][start] === image[i][end]) {
                image[i][start] = image[i][start] ^ 1;
                image[i][end] = image[i][start];
            }
            start++;
            end--;
        }
    }
    return image;
};

const flipAndInvertImage1 = (image) => {
    return image.map(element => element.reverse().map(item => item === 1 ? 0 : 1));
};

const image = [[1,1,0],
    [1,0,1],
    [0,0,0]];
console.log(flipAndInvertImage(image));



