import {
  arraysEqual,
  clamp,
  cloneArray,
  deleteBlock,
  incrustBlock,
  isOutOfFrame,
  isPlaceAvailable,
  OCCUPIED,
  rotateMatrix
} from "./arrayComplexFunctions";
import { blockSize, height, spaceBetweenBlocks, width } from "./config";
import { allFigures } from "./figures";
import Figure from "./Figure";

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const getRandomFigureShape = figureList =>
  figureList[getRandomInt(figureList.length)];

const getRandomFigureShapeFromAll = () => getRandomFigureShape(allFigures);
const getSpawnCoordinatesForPlayer = playerNum =>
  playerNum === 0
    ? [Math.floor(width / 3), 0]
    : [Math.floor(width - width / 3), 0];

export const generateNewFigure = playerNum =>
  new Figure(
    getSpawnCoordinatesForPlayer(playerNum).slice(),
    cloneArray(getRandomFigureShapeFromAll())
  );

export const isCollisionBorder = (figure, board, coordinates) =>
  isOutOfFrame(figure.shape, board, coordinates);

const isIntersection = (firstFigure, [x, y], secondFigure) => {
  let flag = false;
  return firstFigure.shape.reduce(
    (flag, row, deltaY) =>
      row.reduce(
        (flag, element, deltaX) =>
          element !== OCCUPIED &&
          secondFigure.getBlockFromGlobalCoordinates([
            deltaX + x,
            deltaY + y
          ]) !== OCCUPIED
            ? true
            : flag,
        flag
      ),
    false
  );

  return flag;
};
const isFiguresEqual = (firstFigure, secondFigure) =>
  arraysEqual(firstFigure.coordinates, secondFigure.coordinates);

export const isCollisionFigure = (figure, allFigures, newCoordinates) => {
  let otherFigure = isFiguresEqual(figure, allFigures[0])
    ? allFigures[1]
    : allFigures[0];
  return isIntersection(figure, newCoordinates, otherFigure);
};

export const isCollisionBoard = (figure, board, coordinates) =>
  isPlaceAvailable(figure.shape, board, coordinates);

export const getFigureRotatedClone = figure => {
  let figureClone = new Figure(
    cloneArray(figure.coordinates),
    cloneArray(figure.shape)
  );
  figureClone.shape = rotateMatrix(figureClone.shape);
  return figureClone;
};

const generateEmptyBoardRow = () => new Array(width).fill(0);

export const clearRows = board => {
  let newBoard = board.filter(row => !row.every(element => element !== 0));
  for (let i = 0; i < height - newBoard.length; i++)
    newBoard.unshift(generateEmptyBoardRow());
  return newBoard;
};

export const constructFigure = (figure, board) =>
  incrustBlock(figure.shape, board, figure.coordinates);

export const renderBoard = (canvasContext, board) => {
  canvasContext.clearRect(
    0,
    0,
    canvasContext.canvas.width,
    canvasContext.canvas.height
  );
  canvasContext.fillStyle = "#ff0000";
  canvasContext.fillRect(
    0,
    0,
    canvasContext.canvas.width,
    2 * (spaceBetweenBlocks + blockSize)
  );
  canvasContext.fillStyle = "#000000";
  canvasContext.strokeRect(
    0,
    0,
    canvasContext.canvas.width,
    canvasContext.canvas.height
  );
  board.forEach((row, indexY) => {
    row.forEach((element, indexX) => {
      if (element !== 0)
        canvasContext.fillRect(
          spaceBetweenBlocks + indexX * (spaceBetweenBlocks + blockSize),
          spaceBetweenBlocks + indexY * (spaceBetweenBlocks + blockSize),
          blockSize,
          blockSize
        );
    });
  });
};
export const renderFigure = (canvasContext, figure) => {
  canvasContext.fillStyle = "#2e651a";

  figure.shape.forEach((row, indexY) => {
    row.forEach((element, indexX) => {
      if (element !== 0)
        canvasContext.fillRect(
          spaceBetweenBlocks +
            (indexX + figure.coordinates[0]) * (spaceBetweenBlocks + blockSize),
          spaceBetweenBlocks +
            (indexY + figure.coordinates[1]) * (spaceBetweenBlocks + blockSize),
          blockSize,
          blockSize
        );
    });
  });
};

export const constructCanvas = placeholder => {
  let canvas = document.createElement("canvas");
  canvas.width = width * (spaceBetweenBlocks + blockSize) + spaceBetweenBlocks;
  canvas.height =
    height * (spaceBetweenBlocks + blockSize) + spaceBetweenBlocks;
  placeholder.appendChild(canvas);
  return canvas.getContext("2d");
};
export const initGameVariables = game => {
  game.keyMap = {};
  game.board = Array(height)
    .fill(0)
    .map(() => Array(width).fill(0));
  game.figures = [generateNewFigure(0), generateNewFigure(1)];

  game.intervalId = [
    setInterval(() => game.moveDown(0), 500),
    setInterval(() => game.moveDown(1), 500)
  ];
};
