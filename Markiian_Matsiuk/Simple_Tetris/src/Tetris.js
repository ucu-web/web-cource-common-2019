import {
  clearRows,
  canBePlaced,
  getRandomFigureShapeFromList
} from "./tetrisHelpers";

import { clear, rotateMatrix, insertSubArray } from "./lib";

export default class Tetris {
  constructor(canvasObject, options) {
    this.options = options;
    const { board, actors = [] } = options;

    this.board = options.board;

    actors.map((actor, index) => {
      actor.subscribe(action => {
        if (action === "left") this.moveLeft(index);
        if (action === "right") this.moveRight(index);
        if (action === "up") this.rotate(index);
        if (action === "down") this.moveDown(index);
      });
    });

    this.blockSize = Math.floor(options.height / board.length);
    canvasObject.width = options.width;
    canvasObject.height = options.height;
    this.canvasContext = canvasObject.getContext("2d");

    this.figures = [
      {
        shape: getRandomFigureShapeFromList(),
        coordinates: this.getSpawnCoordinatesForPlayer(0)
      },
      {
        shape: getRandomFigureShapeFromList(),
        coordinates: this.getSpawnCoordinatesForPlayer(1)
      }
    ];

    this.intervalId = setInterval(() => {
      this.moveDown(0);
      this.moveDown(1);
    }, 500);
  }

  moveDown(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;

    if (!canBePlaced(currentFigure.shape, this.board, [x, y + 1])) {
      this.board = insertSubArray(
        this.board,
        currentFigure.coordinates,
        currentFigure.shape
      );
      this.board = clearRows(this.board);
      if (currentFigure.coordinates[1] < 2) {
        this.endGame();
      }

      this.setFigureForPlayer(playerNum, {
        coordinates: this.getSpawnCoordinatesForPlayer(playerNum),
        shape: getRandomFigureShapeFromList()
      });

      return;
    }
    if (this.isCollisionFigure(currentFigure.shape, [x, y + 1])) return;

    currentFigure.coordinates = [x, y + 1];

    this.renderBoard();
    this.renderFigures();
  }

  moveLeft(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;
    if (this.isCollisionFigure(currentFigure.shape, [x - 1, y])) return;
    if (canBePlaced(currentFigure.shape, this.board, [x - 1, y]))
      currentFigure.coordinates = [x - 1, y];
    this.renderBoard();
    this.renderFigures();
  }
  moveRight(playerNum) {
    let currentFigure = this.getPlayerFigure(playerNum);
    let [x, y] = currentFigure.coordinates;
    if (this.isCollisionFigure(currentFigure.shape, [x + 1, y])) return;
    if (canBePlaced(currentFigure.shape, this.board, [x + 1, y]))
      currentFigure.coordinates = [x + 1, y];
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
      currentFigure.shape = rotateMatrix(currentFigure.shape);
    this.renderBoard();
    this.renderFigures();
  }

  endGame() {
    clearInterval(this.intervalId);
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
          let tmpBoard = insertSubArray(
            this.board,
            figure.coordinates,
            figure.shape
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
}
