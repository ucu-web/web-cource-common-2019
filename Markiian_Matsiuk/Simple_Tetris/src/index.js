import Tetris from "./Tetris";
import Actor from "./Actor";

const blockSize = 24;

const height = Math.floor(window.innerHeight / blockSize);
const width = Math.floor(window.innerWidth / blockSize);

let board = Array(height)
  .fill(0)
  .map(() => Array(width).fill(0));


const actors = [
    new Actor("ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"),
    new Actor("KeyA", "KeyD", "KeyW", "KeyS")
];

new Tetris(document.querySelector("#tetris"), {
  board: board,
  width: board[0].length * blockSize,
  height: board.length * blockSize,

  actors
});
