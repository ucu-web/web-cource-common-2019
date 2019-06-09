import { rotateMatrix } from "./arrayComplexFunctions";
import {
  renderBoard,
  tryToPerformAction,
  initGameVariables,
  constructCanvas,
  clearRows,
  generateNewFigure
} from "./tetrisHelperFunctions";

export class TetrisGame {
  constructor(placeholder) {
    this.canvasContext = constructCanvas(placeholder);
    initGameVariables(this);
    this.addHandlers();
  }

  moveDown(figureNum) {
    let successfulPlaced;
    [
      this.currentFigureCoord[figureNum],
      this.currentFigure[figureNum],
      successfulPlaced
    ] = tryToPerformAction(
        this.currentFigure[figureNum],
        this.board,
        this.currentFigureCoord[figureNum],
        ([x, y]) => [x, y + 1],
        elem => elem
    );
    if (!successfulPlaced) {
      this.deleteRows();
      [
        this.currentFigure[figureNum],
        this.currentFigureCoord[figureNum]
      ] = generateNewFigure(figureNum, this.board);

      if (this.currentFigure[figureNum] === false) this.endGame();
    }

    this.renderBoard();
  }
  moveLeft(figureNum) {
    [
      this.currentFigureCoord[figureNum],
      this.currentFigure[figureNum]
    ] = tryToPerformAction(
      this.currentFigure[figureNum],
      this.board,
      this.currentFigureCoord[figureNum],
      ([x, y]) => [x - 1, y],
      elem => elem
    );
    this.renderBoard();
  }
  moveRight(figureNum) {
    [
      this.currentFigureCoord[figureNum],
      this.currentFigure[figureNum]
    ] = tryToPerformAction(
      this.currentFigure[figureNum],
      this.board,
      this.currentFigureCoord[figureNum],
      ([x, y]) => [x + 1, y],
      elem => elem
    );
    this.renderBoard();
  }
  rotate(figureNum) {
    [
      this.currentFigureCoord[figureNum],
      this.currentFigure[figureNum]
    ] = tryToPerformAction(
      this.currentFigure[figureNum],
      this.board,
      this.currentFigureCoord[figureNum],
      coordinate => coordinate,
      elem => rotateMatrix(elem)
    );
    this.renderBoard();
  }
  deleteRows() {
    this.board = clearRows(this.board);
  }

  endGame() {
    this.intervalId.forEach(el => clearInterval(el));
    if (confirm("You loose\nReplay?")) this.restart();
  }
  restart() {
    initGameVariables(this);
  }
  renderBoard() {
    renderBoard(this.canvasContext, this.board);
  }
  addHandlers() {
    document.addEventListener("keydown", ev => {
      ev.preventDefault();
      this.keyMap[ev.code] = true;
      this.startMainLoop();
    });

    document.addEventListener("keyup", ev => {
      ev.preventDefault();
      this.keyMap[ev.code] = false;
    });
  }
  startMainLoop() {
    if (this.keyMap["KeyA"]) this.moveLeft(0);
    if (this.keyMap["KeyD"]) this.moveRight(0);
    if (this.keyMap["KeyW"]) this.rotate(0);
    if (this.keyMap["KeyS"]) this.moveDown(0);
    if (this.keyMap["ArrowLeft"]) this.moveLeft(1);
    if (this.keyMap["ArrowRight"]) this.moveRight(1);
    if (this.keyMap["ArrowUp"]) this.rotate(1);
    if (this.keyMap["ArrowDown"]) this.moveDown(1);
  }
}