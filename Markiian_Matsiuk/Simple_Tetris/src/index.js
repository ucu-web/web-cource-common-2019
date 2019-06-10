import Tetris from "./Tetris";

const blockSize = 24;

const height = Math.floor(window.innerHeight / blockSize);
const width = Math.floor(window.innerWidth / blockSize);

let board = Array(height)
  .fill(0)
  .map(() => Array(width).fill(0));

new Tetris(document.querySelector("#tetris"), {
  board: board,
  width: board[0].length * blockSize,
  height: board.length * blockSize
});
