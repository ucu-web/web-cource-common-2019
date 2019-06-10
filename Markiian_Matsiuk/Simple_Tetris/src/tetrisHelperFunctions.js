import { isOutOfFrame, isPlaceNotAvailable } from "./arrayComplexFunctions";


import { allFigures } from "./figures";
import Figure from "./Figure";

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const getRandomFigureShape = figureList =>
  figureList[getRandomInt(figureList.length)];

const getRandomFigureShapeFromAll = () => getRandomFigureShape(allFigures);

export const generateNewFigure = coordinates =>
  new Figure(
    coordinates,
    getRandomFigureShapeFromAll()
  );

export const canBePlaced = (block, board, coordinates) =>
  !isOutOfFrame(block, board, coordinates) &&
  !isPlaceNotAvailable(block, board, coordinates);

export const clearRows = board => {
  let newBoard = board.filter(row => !row.every(element => element !== 0));
  return Array(board.length - newBoard.length)
    .fill(Array(board[0].length).fill(0))
    .concat(newBoard);
};

export const clear = ctx =>
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
