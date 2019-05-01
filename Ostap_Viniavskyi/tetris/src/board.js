import {drawSquare, EMPTY} from "./utils.js";

export default class Board{
    constructor(rows, columns, square_size){
        this.rows = rows;
        this.columns = columns;
        this.square_size = square_size;
        this.board = [];
        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j] = EMPTY;
            }
        }
    }
    draw(context){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                drawSquare(j, i, this.square_size, this.board[i][j], context);
            }
        }
    }
}