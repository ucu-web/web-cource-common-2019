const OCCUPIED = 0;


export const rotateMatrix = matrix =>
    matrix[0].map((_, i) => matrix.map(e => e[i]).reverse());


const checkPlaceAvailable = (block, originalMatrix, [x, y]) =>
    block.reduce(
        (flag, row, deltaY) =>
            row.reduce(
                (flag, element, deltaX) =>
                    element !== OCCUPIED &&
                    originalMatrix[deltaY + y][deltaX + x] !== OCCUPIED
                        ? true
                        : flag,
                flag
            ),
        false
    );

const isOutOfFrame = (block, originalMatrix, [x, y]) =>
    x + block[0].length > originalMatrix[0].length ||
    y + block.length > originalMatrix.length;

export const incrustBlock = ([x, y], originalMatrix, block) => {
    if (isOutOfFrame(block, originalMatrix, [x, y])) return false;
    if (checkPlaceAvailable(block, originalMatrix, [x, y])) return false;

    // Incrust block
    block.forEach((row, indexY) => {
        row.forEach((element, indexX) => {
            if (element !== 0) originalMatrix[indexY + y][indexX + x] = element;
        });
    });

    return true;
};

export const deleteBlock = (coordinates, originalMatrix, block) => {
    if (isOutOfFrame(block, originalMatrix, coordinates)) return false;

    block.forEach((row, indexY) => {
        row.forEach((element, indexX) => {
            if (element === 1) {
                originalMatrix[indexY + coordinates[1]][indexX + coordinates[0]] = 0;
            }
        });
    });
};