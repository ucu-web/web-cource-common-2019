import {
  generateNewFigure,
  clearRows,
  clear,
  canBePlaced
} from "./tetrisHelperFunctions";
import { incrustBlock, rotateMatrix } from "./arrayComplexFunctions";

export default class Tetris {
  constructor(canvasObject, options) {
    this.options = options;
    this.blockSize = Math.floor(options.height / options.board.length);
    canvasObject.width = options.width;
    canvasObject.height = options.height;
    this.canvasContext = canvasObject.getContext("2d");
    this.keyMap = {};
    this.board = options.board;
    this.figures = [
      generateNewFigure(this.getSpawnCoordinatesForPlayer(0)),
      generateNewFigure(this.getSpawnCoordinatesForPlayer(1))
    ];
    this.intervalId = [
      setInterval(() => this.moveDown(0), 500),
      setInterval(() => this.moveDown(1), 500)
    ];
    this.addHandlers();
  }

  moveDown(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;

    if (!canBePlaced(currentFigure.shape, this.board, [x, y + 1])) {
      this.board = incrustBlock(
        currentFigure.shape,
        this.board,
        currentFigure.coordinates
      );
      this.board = clearRows(this.board);
      if (currentFigure.coordinates[1] < 2) {
        this.endGame();
      }

      this.setFigureForPlayer(
        playerNum,
        generateNewFigure(this.getSpawnCoordinatesForPlayer(playerNum))
      );
      return;
    }
    if (this.isCollisionFigure(currentFigure.shape, [x, y + 1])) return;

    currentFigure.setCoordinates([x, y + 1]);

    this.renderBoard();
    this.renderFigures();
  }

  moveLeft(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;
    if (this.isCollisionFigure(currentFigure.shape, [x - 1, y])) return;
    if (canBePlaced(currentFigure.shape, this.board, [x - 1, y]))
      currentFigure.setCoordinates([x - 1, y]);
    this.renderBoard();
    this.renderFigures();
  }
  moveRight(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;
    if (this.isCollisionFigure(currentFigure.shape, [x + 1, y])) return;
    if (canBePlaced(currentFigure.shape, this.board, [x + 1, y]))
      currentFigure.setCoordinates([x + 1, y]);
    this.renderBoard();
    this.renderFigures();
  }
  rotate(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    if (
      this.isCollisionFigure(
        rotateMatrix(currentFigure.shape),
        currentFigure.coordinates
      )
    )
      return;
    if (
      canBePlaced(
        rotateMatrix(currentFigure.shape),
        this.board,
        currentFigure.coordinates
      )
    )
      currentFigure.setShape(rotateMatrix(currentFigure.shape));
    this.renderBoard();
    this.renderFigures();
  }

  endGame() {
    this.intervalId.forEach(el => clearInterval(el));
    if (confirm("You loose\nReplay?")) this.restart();
  }
  restart() {
    this.board = this.options.board;
    this.renderBoard();
    this.renderFigures();
  }

  isCollisionFigure(shape, coordinates) {
    return (
      this.figures
        .map(figure => {
          let tmpBoard = incrustBlock(
            figure.shape,
            this.board,
            figure.coordinates
          );
          return canBePlaced(shape, tmpBoard, coordinates);
        })
        .filter(elem => elem).length !== 1
    );
  }

  setFigureForPlayer(playerNum, figure) {
    this.figures[playerNum] = figure;
  }

  getPlayerFigure(playerNum) {
    return this.figures[playerNum];
  }

  renderBoard() {
    clear(this.canvasContext);
    this.canvasContext.fillStyle = "#000000";
    this.canvasContext.strokeRect(
      0,
      0,
      this.canvasContext.canvas.width,
      this.canvasContext.canvas.height
    );
    this.board.forEach((row, indexY) => {
      row.forEach((element, indexX) => {
        if (element !== 0) this.renderBlock([indexX, indexY]);
      });
    });
  }

  renderFigures() {
    this.figures.forEach(figure => this.renderFigure(figure));
  }

  renderFigure(figure) {
    let [x, y] = figure.coordinates;
    figure.shape.forEach((row, deltaY) => {
      row.forEach((element, deltaX) => {
        if (element !== 0) this.renderBlock([x + deltaX, y + deltaY]);
      });
    });
  }

  renderBlock([x, y]) {
    this.canvasContext.fillRect(
      x * this.blockSize + 2,
      y * this.blockSize + 2,
      this.blockSize - 4,
      this.blockSize - 4
    );
  }

  getSpawnCoordinatesForPlayer(playerNum) {
    return playerNum === 0
      ? [Math.floor(this.board[0].length / 3), 0]
      : [Math.floor(this.board[0].length - this.board[0].length / 3), 0];
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
