'use strict';

const findRotation = (matrix, target) => {
    // Creating rotated matrix
    const rotatedMatrix = new Array(matrix.length).fill(0).map((element) => new Array(matrix[0].length).fill(0));

    // When the matrix and target are already equal
    if (checkIfEqual(matrix, rotatedMatrix)) {
        return true;
    }

    // Creating copy of original array
    const originalMatrix = new Array(matrix.length).fill(0).map((element) => new Array(matrix[0].length).fill(0));
    createCopyArray(matrix, originalMatrix);

    while (!checkIfEqual(originalMatrix, rotatedMatrix)) {
        let n = matrix.length - 1;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                rotatedMatrix[j][n] = matrix[i][j];
            }
            n--;
        }

        if (checkIfEqual(rotatedMatrix, target)) {
            return true;
        } else {
            createCopyArray(rotatedMatrix, matrix);
        }
    }
    return false;
}

const checkIfEqual = (matrix1, matrix2) => {
    if (matrix1.length !== matrix2.length) {
        return false;
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
};

const createCopyArray = (arr, copyArr) => {
    for (let i = 0; i < arr.length; i++) {
        copyArr[i] = arr[i].slice();
    }
};

const matrix = [
    [0]
];

const target = [
    [0]
];
console.log(findRotation(matrix, target));