import Board from './board.js';
import Piece from './piece.js';
import {EMPTY, rotateMatrix} from "./utils.js";

export default class Game {
    constructor(rows, columns, square_size, tickDuration) {
        this.board = new Board(rows, columns, square_size);
        this.piece = Piece.getRandomPiece(square_size);
        this.tickDuration = tickDuration;
        this.square_size = square_size;
        this.isOver = false;
        this.context = document.getElementById("tetris").getContext("2d");
        document.addEventListener("keydown", this.CONTROL.bind(this));
        this.board.draw(this.context);
        this.scoreElement = document.getElementById("score");
        this.score = 0;
        this.lastTick = Date.now();
        this.play();
    }

    CONTROL(event) {
        if (event.code === "ArrowLeft") {
            this.movePieceLeft();
            this.lastTick = Date.now();
        } else if (event.code === "ArrowUp") {
            this.rotatePiece();
            this.lastTick = Date.now();
        } else if (event.code === "ArrowRight") {
            this.movePieceRight();
            this.lastTick = Date.now();
        } else if (event.code === "ArrowDown")
            this.movePieceDown();
    }

    play() {
        let now = Date.now();
        if (now - this.lastTick > this.tickDuration) {
            this.movePieceDown();
            this.lastTick = Date.now();
        }
        if (!this.isOver)
            requestAnimationFrame(this.play.bind(this));
    }

    movePieceDown() {
        if (!this.collision(this.piece.x, this.piece.y + 1, this.piece.tetromino)) {
            this.piece.moveDown(this.context);
        } else {
            this.lockPiece();
        }
    }

    movePieceLeft() {
        if (!this.collision(this.piece.x - 1, this.piece.y, this.piece.tetromino)) {
            this.piece.moveLeft(this.context);
        }
    }

    movePieceRight() {
        if (!this.collision(this.piece.x + 1, this.piece.y, this.piece.tetromino)) {
            this.piece.moveRight(this.context);
        }
    }

    rotatePiece(){
        let nextTetromino = rotateMatrix(this.piece.tetromino);
        let kick = 0;

        if(this.collision(this.piece.x, this.piece.y, nextTetromino)){
            if(this.piece.x > this.board.columns / 2)
                kick--;
            else
                kick++;
        }
        if (!this.collision(this.piece.x + kick, this.piece.y, nextTetromino)){
            this.piece.rotate(kick, this.context);
        }
    }

    collision(newX, newY, tetromino){
        for (let i = 0; i < tetromino.length; i++) {
            for (let j = 0; j < tetromino.length; j++) {
                if(tetromino[i][j]){
                    if(newX + j < 0 || newX + j >= this.board.columns || newY + i >= this.board.rows)
                        return true;
                    if (newY + i < 0)
                        continue;
                    if (this.board.board[newY + i][newX + j] !== EMPTY)
                        return true;
                }
            }
        }
        return false;
    }

    lockPiece(){
        for (let i = 0; i < this.piece.tetromino.length; i++) {
            for (let j = 0; j < this.piece.tetromino.length; j++) {
                if(this.piece.tetromino[i][j]){
                    if(this.piece.y + i < 0){
                        alert("GAME OVER");
                        this.isOver = true;
                        break;
                    }
                    this.board.board[this.piece.y + i][this.piece.x + j] = this.piece.color;
                }
            }
        }
        for (let i = 0; i < this.board.rows; i++) {
            let isRowFull = true;
            for (let j = 0; j < this.board.columns; j++) {
                isRowFull = isRowFull && (this.board.board[i][j] !== EMPTY);
            }
            if (isRowFull){
                for (let y = i; y > 0; y--) {
                    for (let j = 0; j < this.board.columns; j++) {
                        this.board.board[y][j] = this.board.board[y - 1][j];
                    }
                }

                for (let j = 0; j < this.board.columns; j++) {
                    this.board.board[0][j] = EMPTY;
                }
                this.score += 10;
            }
        }
        this.board.draw(this.context);
        this.scoreElement.innerHTML = this.score;
        this.piece = Piece.getRandomPiece(this.square_size);
    }
}