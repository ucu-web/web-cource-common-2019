import { getRandomInt, range } from "./lib";

export const OCCUPIED = 0;

const figureI = [[1, 1, 1, 1]];
// prettier-ignore
const figureJ = [
  [1, 0, 0],
  [1, 1, 1]
];
// prettier-ignore
const figureL = [
  [0, 0, 1],
  [1, 1, 1]
];
// prettier-ignore
const figureO = [
  [1, 1],
  [1, 1]];
// prettier-ignore
const figureS = [
  [0, 1, 1],
  [1, 1, 0]];
// prettier-ignore
const figureT = [
  [0, 1, 0],
  [1, 1, 1]];
// prettier-ignore
const figureZ = [
  [1, 1, 0],
  [0, 1, 1]];
// prettier-ignore

const allFigures = [figureI,figureJ,figureL, figureO, figureS, figureT, figureZ];

const getRandomFigureShape = figureList =>
  figureList[getRandomInt(figureList.length)];

export const getRandomFigureShapeFromList = () =>
  getRandomFigureShape(allFigures);

export const canBePlaced = (block, board, coordinates) =>
  !isOutOfFrame(block, board, coordinates) &&
  !isPlaceNotAvailable(block, board, coordinates);

const isRowFulfilled = row => !row.every(element => element !== 0);
const getEmptyRow = length => range(length).fill(0);

export const clearRows = board => {
  let newBoard = board.filter(isRowFulfilled);
  const rowsRemoved = board.length - newBoard.length;
  return [
    ...range(rowsRemoved).fill(getEmptyRow(board[0].length)),
    ...newBoard
  ];
};

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
