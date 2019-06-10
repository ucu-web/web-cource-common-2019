import {
  renderBoard,
  initGameVariables,
  constructCanvas,
  isCollisionBoard,
  renderFigure,
  isCollisionFigure,
  constructFigure,
  isCollisionBorder,
  generateNewFigure,
  getFigureRotatedClone,
  clearRows
} from "./tetrisHelperFunctions";

export default class Tetris {
  constructor(placeholder) {
    this.canvasContext = constructCanvas(placeholder);
    initGameVariables(this);
    this.addHandlers();
  }

  moveDown(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;
    let [newX, newY] = [x, y + 1];

    if (isCollisionFigure(currentFigure, this.figures, [newX, newY])) return;

    if (
      isCollisionBorder(currentFigure, this.board, [newX, newY]) ||
      isCollisionBoard(currentFigure, this.board, [newX, newY])
    ) {
      constructFigure(currentFigure, this.board);
      this.board = clearRows(this.board);
      if (currentFigure.coordinates[1] < 2) {
        this.endGame();
      }
      this.setFigureForPlayer(playerNum, generateNewFigure(playerNum));
      return;
    }

    currentFigure.setCoordinates([newX, newY]);

    this.renderBoard();
    this.renderFigures();
  }

  moveLeft(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);

    let [x, y] = currentFigure.coordinates;
    let [newX, newY] = [x - 1, y];

    if (
      !isCollisionBoard(currentFigure, this.board, [newX, newY]) &&
      !isCollisionFigure(currentFigure, this.figures, [newX, newY]) &&
      !isCollisionBorder(currentFigure, this.board, [newX, newY])
    ) {
      currentFigure.setCoordinates([newX, newY]);
    }

    this.renderBoard();
    this.renderFigures();
  }

  moveRight(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;
    let [newX, newY] = [x + 1, y];

    if (
      !isCollisionBoard(currentFigure, this.board, [newX, newY]) &&
      !isCollisionFigure(currentFigure, this.figures, [newX, newY]) &&
      !isCollisionBorder(currentFigure, this.board, [newX, newY])
    ) {
      currentFigure.setCoordinates([newX, newY]);
    }

    this.renderBoard();
    this.renderFigures();
  }

  rotate(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let currentFigureRotated = getFigureRotatedClone(currentFigure);

    if (
      !isCollisionBoard(
        currentFigureRotated,
        this.board,
        currentFigureRotated.coordinates
      ) &&
      !isCollisionFigure(
        currentFigureRotated,
        this.figures,
        currentFigureRotated.coordinates
      ) &&
      !isCollisionBorder(
        currentFigureRotated,
        this.board,
        currentFigureRotated.coordinates
      )
    ) {
      this.setFigureForPlayer(playerNum, currentFigureRotated);
    }

    this.renderBoard();
    this.renderFigures();
  }

  setFigureForPlayer(playerNum, figure) {
    this.figures[playerNum] = figure;
  }

  getPlayerFigure(playerNum) {
    return this.figures[playerNum];
  }

  endGame() {
    this.intervalId.forEach(el => clearInterval(el));
    if (confirm("You loose\nReplay?")) this.restart();
  }

  restart() {
    initGameVariables(this);
    this.renderBoard();
    this.renderFigures();
  }

  renderBoard() {
    renderBoard(this.canvasContext, this.board);
  }

  renderFigures() {
    this.figures.forEach(figure => renderFigure(this.canvasContext, figure));
  }

  addHandlers() {
    this.usedKeys = [
      "KeyA",
      "KeyD",
      "KeyW",
      "KeyS",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown"
    ];
    document.addEventListener("keydown", ev => {
      if (this.usedKeys.includes(ev.code)) {
        ev.preventDefault();
        this.keyMap[ev.code] = true;
        this.startMainLoop();
      }
    });

    document.addEventListener("keyup", ev => {
      if (this.usedKeys.includes(ev.code)) {
        ev.preventDefault();
        this.keyMap[ev.code] = false;
      }
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
