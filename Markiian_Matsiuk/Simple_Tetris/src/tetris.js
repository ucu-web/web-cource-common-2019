import { allFigures } from "./figures";
import {
  rotateMatrix,
  incrustBlock,
  deleteBlock
} from "./arrayComplexFunctions";
import { blockSize, spaceBetweenBlocks, width, height } from "./config";

export class TetrisGame {
  constructor(placeholder, name) {
    this.canvas = document.createElement("canvas");
    this.canvas.width =
      width * (spaceBetweenBlocks + blockSize) + spaceBetweenBlocks;
    this.canvas.height =
      height * (spaceBetweenBlocks + blockSize) + spaceBetweenBlocks;
    placeholder.appendChild(this.canvas);

    this.name = name;
    this.keyMap = {};
    this.running = true;
    this.board = Array(height)
      .fill(0)
      .map(() => Array(width).fill(0));
    this.canvasContext = this.canvas.getContext("2d");
    this.currentFigure = [
      allFigures[Math.floor(Math.random() * allFigures.length)].slice(),
      allFigures[Math.floor(Math.random() * allFigures.length)].slice()
    ];

    this.currentFigureCoord = [
      [Math.floor(width / 3), 0],
      [Math.floor(width - width / 3), 0]
    ];
    this.intervalId = [
      setInterval(() => this.moveDown(0), 500),
      setInterval(() => this.moveDown(1), 500)
    ];
    this.addHandlers();
    // setInterval(this.startMainLoop, 1);
  }

  moveDown(figureNum) {
    deleteBlock(
      this.currentFigureCoord[figureNum],
      this.board,
      this.currentFigure[figureNum]
    );
    if (
      incrustBlock(
        [
          this.currentFigureCoord[figureNum][0],
          this.currentFigureCoord[figureNum][1] + 1
        ],
        this.board,
        this.currentFigure[figureNum]
      )
    ) {
      this.currentFigureCoord[figureNum] = [
        this.currentFigureCoord[figureNum][0],
        this.currentFigureCoord[figureNum][1] + 1
      ];
    } else {
      incrustBlock(
        this.currentFigureCoord[figureNum],
        this.board,
        this.currentFigure[figureNum]
      );
      this.deleteRows();
      this.currentFigure[figureNum] = allFigures[
        Math.floor(Math.random() * allFigures.length)
      ].slice();
      this.currentFigureCoord[figureNum] =
        figureNum === 0
          ? [Math.floor(width / 3), 0]
          : [Math.floor(width - width / 3), 0];
      if (
        !incrustBlock(
          this.currentFigureCoord[figureNum],
          this.board,
          this.currentFigure[figureNum]
        )
      ) {
        this.endGame();
      }
    }
    this.renderBoard();
  }
  moveLeft(figureNum) {
    deleteBlock(
      this.currentFigureCoord[figureNum],
      this.board,
      this.currentFigure[figureNum]
    );
    if (
      incrustBlock(
        [
          this.currentFigureCoord[figureNum][0] - 1,
          this.currentFigureCoord[figureNum][1]
        ],
        this.board,
        this.currentFigure[figureNum]
      )
    ) {
      this.currentFigureCoord[figureNum] = [
        this.currentFigureCoord[figureNum][0] - 1,
        this.currentFigureCoord[figureNum][1]
      ];
    } else {
      incrustBlock(
        this.currentFigureCoord[figureNum],
        this.board,
        this.currentFigure[figureNum]
      );
    }
    this.renderBoard();
  }
  moveRight(figureNum) {
    deleteBlock(
      this.currentFigureCoord[figureNum],
      this.board,
      this.currentFigure[figureNum]
    );
    if (
      incrustBlock(
        [
          this.currentFigureCoord[figureNum][0] + 1,
          this.currentFigureCoord[figureNum][1]
        ],
        this.board,
        this.currentFigure[figureNum]
      )
    ) {
      this.currentFigureCoord[figureNum] = [
        this.currentFigureCoord[figureNum][0] + 1,
        this.currentFigureCoord[figureNum][1]
      ];
    } else {
      incrustBlock(
        this.currentFigureCoord[figureNum],
        this.board,
        this.currentFigure[figureNum]
      );
    }
    this.renderBoard();
  }
  rotate(figureNum) {
    deleteBlock(
      this.currentFigureCoord[figureNum],
      this.board,
      this.currentFigure[figureNum]
    );
    let tmpRotatedFigure = rotateMatrix(this.currentFigure[figureNum]);
    if (
      incrustBlock(
        this.currentFigureCoord[figureNum],
        this.board,
        tmpRotatedFigure
      )
    ) {
      this.currentFigure[figureNum] = tmpRotatedFigure;
    } else {
      incrustBlock(
        this.currentFigureCoord[figureNum],
        this.board,
        this.currentFigure[figureNum]
      );
    }
    this.renderBoard();
  }
  deleteRows() {
    let deleteIndexes = [];
    this.board.forEach((row, index) => {
      if (
        row.every(element => {
          return element !== 0;
        })
      ) {
        deleteIndexes.push(index);
      }
    });
    this.board = this.board.filter((element, index) => {
      return !deleteIndexes.includes(index);
    });
    deleteIndexes.forEach(() => {
      this.board.unshift(Array(width).fill(0));
    });
  }
  endGame() {
    this.running = false;
    clearInterval(this.intervalId[0]);
    clearInterval(this.intervalId[1]);
    if (confirm(this.name + " loose\nReplay?")) {
      this.restart();
    }
  }
  restart() {
    this.board = Array(height)
      .fill(0)
      .map(() => Array(width).fill(0));
    this.currentFigure = [
      allFigures[Math.floor(Math.random() * allFigures.length)].slice(),
      allFigures[Math.floor(Math.random() * allFigures.length)].slice()
    ];
    this.currentFigureCoord = [
      [Math.floor(width / 3), 0],
      [Math.floor(width - width / 3), 0]
    ];

    this.intervalId = [
      setInterval(() => this.moveDown(0), 500),
      setInterval(() => this.moveDown(1), 500)
    ];
    this.running = true;
  }
  renderBoard() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasContext.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    this.board.forEach((row, indexY) => {
      row.forEach((element, indexX) => {
        if (element !== 0)
          this.canvasContext.fillRect(
            spaceBetweenBlocks + indexX * (spaceBetweenBlocks + blockSize),
            spaceBetweenBlocks + indexY * (spaceBetweenBlocks + blockSize),
            blockSize,
            blockSize
          );
      });
    });
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

