export const OCCUPIED = 0;

export const rotateMatrix = matrix =>
  matrix[0].map((_, i) => matrix.map(e => e[i]).reverse());

export const isPlaceNotAvailable = (block, originalMatrix, [x, y]) =>
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

export const isOutOfFrame = (block, originalMatrix, [x, y]) =>
  x + block[0].length > originalMatrix[0].length ||
  x < 0 ||
  y + block.length > originalMatrix.length;

export const incrustBlock = (block, originalMatrix, [x, y]) => {
  let newMatrix = originalMatrix.map(arr => arr.slice());
  block.forEach((row, indexY) => {
    row.forEach((element, indexX) => {
      if (element !== 0) newMatrix[indexY + y][indexX + x] = element;
    });
  });
  return newMatrix;
};

export const cloneArray = array => array.slice();

export const arraysEqual = (firstArray, secondArray) => {
  if (firstArray === secondArray) return true;
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; ++i) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};