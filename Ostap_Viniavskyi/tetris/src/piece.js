import {Z, S, T, O, L, I, J} from "./tetrominoes.js";
import {drawSquare, EMPTY, rotateMatrix} from "./utils.js";

export default class Piece {

    static get PIECES(){
        return [
            [Z, "red"],
            [S, "green"],
            [T, "purple"],
            [O, "yellow"],
            [L, "orange"],
            [I, "cyan"],
            [J, "blue"]
        ]
    }

    constructor(tetromino, color, square_size) {
        this.tetromino = tetromino;
        this.color = color;
        this.square_size = square_size;
        this.x = 3;
        this.y = -2
    }

    static getRandomPiece(square_size) {
        let r = Math.floor(Math.random() * Piece.PIECES.length);
        return new Piece(...Piece.PIECES[r], square_size);
    }

    fill(color, context) {
        for (let r = 0; r < this.tetromino.length; r++) {
            for (let c = 0; c < this.tetromino.length; c++) {
                // we draw only occupied squares
                if (this.tetromino[r][c]) {
                    drawSquare(this.x + c, this.y + r, this.square_size, color, context);
                }
            }
        }
    }

    draw(context) {
        this.fill(this.color, context);
    }

    unDraw(context) {
        this.fill(EMPTY, context);
    }

    moveDown(context) {
        this.unDraw(context);
        this.y++;
        this.draw(context);
    }

    moveLeft(context) {
        this.unDraw(context);
        this.x--;
        this.draw(context);
    }

    moveRight(context) {
        this.unDraw(context);
        this.x++;
        this.draw(context);
    }

    rotate(kick, context){
        this.unDraw(context);
        this.x += kick;
        this.tetromino = rotateMatrix(this.tetromino);
        this.draw(context);
    }
}