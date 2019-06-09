import { deleteBlock, incrustBlock } from "./arrayComplexFunctions";
import { blockSize, height, spaceBetweenBlocks, width } from "./config";
import { allFigures } from "./figures";

export const generateNewFigure = (figureNum, board) => {
  let newFigure = allFigures[
    Math.floor(Math.random() * allFigures.length)
  ].slice();
  let newFigureCoord =
    figureNum === 0
      ? [Math.floor(width / 3), 0]
      : [Math.floor(width - width / 3), 0];

  if (incrustBlock(newFigureCoord, board, newFigure))
    return [newFigure, newFigureCoord];

  return [false, false];
};

export const tryToPerformAction = (
  figure,
  matrix,
  coordinates,
  mutateCoordinateFunction,
  mutateFigureFunction
) => {
  deleteBlock(coordinates, matrix, figure);
  let newCoordinates = mutateCoordinateFunction(coordinates);
  let newFigure = mutateFigureFunction(figure);
  if (incrustBlock(newCoordinates, matrix, newFigure))
    return [newCoordinates, newFigure, true];
  incrustBlock(coordinates, matrix, figure);
  return [coordinates, figure, false];
};

export const clearRows = board => {
  let deleteIndexes = [];
  board.forEach((row, index) => {
    if (
      row.every(element => {
        return element !== 0;
      })
    ) {
      deleteIndexes.push(index);
    }
  });

  let newBoard = board.filter((element, index) => {
    return !deleteIndexes.includes(index);
  });
  deleteIndexes.forEach(() => {
    newBoard.unshift(Array(width).fill(0));
  });

  return newBoard;
};

export const renderBoard = (canvasContext, board) => {
  canvasContext.clearRect(
    0,
    0,
    canvasContext.canvas.width,
    canvasContext.canvas.height
  );
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
  game.currentFigure = [
    allFigures[Math.floor(Math.random() * allFigures.length)].slice(),
    allFigures[Math.floor(Math.random() * allFigures.length)].slice()
  ];
  game.currentFigureCoord = [
    [Math.floor(width / 3), 0],
    [Math.floor(width - width / 3), 0]
  ];
  game.intervalId = [
    setInterval(() => game.moveDown(0), 500),
    setInterval(() => game.moveDown(1), 500)
  ];
};