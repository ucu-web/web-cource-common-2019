const figureI = [
    [1,1,1,1],
];
const figureJ = [
    [1,0,0],
    [1,1,1],
];
const figureL = [
    [0,0,1],
    [1,1,1],
];
const figureO = [
    [1,1],
    [1,1]
];
const figureS = [
    [0,1,1],
    [1,1,0],
];
const figureT = [
    [0,1,0],
    [1,1,1],
];
const figureZ = [
    [1,1,0],
    [0,1,1],
];
const allFigures = [figureI, figureJ, figureL, figureO, figureS, figureT, figureZ];

height = 20;
width = 10;
blockSize = 20;
spaceBetweenBlocks = 3;

const rotateMatrix = (matrix) => {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};
const incrustBlock = (coordinates, originalMatrix, block) => {
    if (coordinates[0] + block[0].length > originalMatrix[0].length ||
        coordinates[1] + block.length > originalMatrix.length) {
        return false;
    }
    // Check place available
    let flag = 0;
    block.forEach((row, indexY) => {
        row.forEach((element, indexX) => {
            if (element !== 0 && originalMatrix[indexY+coordinates[1]][indexX+coordinates[0]]!==0) {
                flag = 1
            }
        })
    });

    if (flag) return false;

    // Incrust block
    block.forEach((row, indexY) => {
        row.forEach((element, indexX) => {
            if (element !== 0) {
                originalMatrix[indexY+coordinates[1]][indexX+coordinates[0]] = element;
            }
        })
    });
    return true
};
const deleteBlock = (coordinates, originalMatrix, block) => {
    if (coordinates[0] + block[0].length > originalMatrix[0].length ||
        coordinates[1] + block.length > originalMatrix.length) {
        return false;
    }
    block.forEach((row, indexY) => {
        row.forEach((element, indexX) => {
            if (element === 1) {
                originalMatrix[indexY+coordinates[1]][indexX+coordinates[0]] = 0;
            }
        })
    });
};

class TetrisGame {
    constructor(placeholder, name) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width * (spaceBetweenBlocks + blockSize) + spaceBetweenBlocks;
        this.canvas.height = height * (spaceBetweenBlocks + blockSize) + spaceBetweenBlocks;
        placeholder.appendChild(this.canvas);

        this.name = name;

        this.running = true;
        this.board = Array(height).fill(0).map(() => Array(width).fill(0));
        this.canvasContext = this.canvas.getContext("2d");
        this.currentFigure = allFigures[Math.floor(Math.random() * allFigures.length)].slice();
        this.currentFigureCoord = [4, 0];

        this.intervalId = setInterval(()=>this.moveDown(), 500);
        // this.addHandlers();
    }


    moveDown() {
        deleteBlock(this.currentFigureCoord, this.board, this.currentFigure);
        if (incrustBlock([this.currentFigureCoord[0], this.currentFigureCoord[1]+1], this.board, this.currentFigure)) {
            this.currentFigureCoord = [this.currentFigureCoord[0], this.currentFigureCoord[1]+1];
        } else {
            incrustBlock(this.currentFigureCoord, this.board, this.currentFigure);
            this.deleteRows();
            this.currentFigure = allFigures[Math.floor(Math.random() * allFigures.length)].slice();
            this.currentFigureCoord = [3, 0];
            if (!incrustBlock(this.currentFigureCoord, this.board, this.currentFigure)) {
                this.endGame();
            }
        }
        this.renderBoard();
    }
    moveLeft() {
        deleteBlock(this.currentFigureCoord, this.board, this.currentFigure);
        if (incrustBlock([this.currentFigureCoord[0]-1, this.currentFigureCoord[1]], this.board, this.currentFigure)) {
            this.currentFigureCoord = [this.currentFigureCoord[0]-1, this.currentFigureCoord[1]];
        } else {
            incrustBlock(this.currentFigureCoord, this.board, this.currentFigure);
        }
        this.renderBoard();
    }
    moveRight() {
        deleteBlock(this.currentFigureCoord, this.board, this.currentFigure);
        if (incrustBlock([this.currentFigureCoord[0]+1, this.currentFigureCoord[1]], this.board, this.currentFigure)) {
            this.currentFigureCoord = [this.currentFigureCoord[0]+1, this.currentFigureCoord[1]];
        } else {
            incrustBlock(this.currentFigureCoord, this.board, this.currentFigure);
        }
        this.renderBoard();
    }
    rotate() {
        deleteBlock(this.currentFigureCoord, this.board, this.currentFigure);
        let tmpRotatedFigure = rotateMatrix(this.currentFigure);
        if (incrustBlock(this.currentFigureCoord, this.board, tmpRotatedFigure)) {
            this.currentFigure = tmpRotatedFigure;
        } else {
            incrustBlock(this.currentFigureCoord, this.board, this.currentFigure)
        }
        this.renderBoard();
    }
    deleteRows() {
        let deleteIndexes = [];
        this.board.forEach((row, index) => {
            if (row.every((element) => {return element !== 0})) {
                deleteIndexes.push(index);
            }
        });
        this.board = this.board.filter((element, index) => {return !deleteIndexes.includes(index)});
        deleteIndexes.forEach(() => {this.board.unshift(Array(width).fill(0))});
    }
    endGame() {
        this.running = false;
        clearInterval(this.intervalId);
        if(confirm(this.name + " loose\nReplay?" )) {
            this.restart();
        }
    }
    restart() {
        this.board = Array(height).fill(0).map(() => Array(width).fill(0));
        this.currentFigure = allFigures[Math.floor(Math.random() * allFigures.length)].slice();
        this.currentFigureCoord = [4, 0];
        this.intervalId = setInterval(()=>this.moveDown(), 500);
        this.running = true;
    }
    renderBoard() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasContext.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        this.board.forEach((row, indexY) => {
            row.forEach((element, indexX) => {
                    if (element !==0)
                        this.canvasContext.fillRect(
                            spaceBetweenBlocks + indexX * (spaceBetweenBlocks + blockSize),
                            spaceBetweenBlocks + indexY * (spaceBetweenBlocks + blockSize),
                            blockSize, blockSize)
                }
            )
        })
    }
    addHandlers() {
        document.addEventListener("keydown", (ev)=>{
            if (ev.code==="KeyA" && this.running === true) this.moveLeft()
        });

        document.addEventListener("keydown", (ev)=>{
            if (ev.code==="KeyD"  && this.running === true) this.moveRight()
        });

        document.addEventListener("keydown", (ev)=>{
            if (ev.code==="KeyS"  && this.running === true) this.moveDown()
        });

        document.addEventListener("keydown", (ev)=>{
            if (ev.code==="Space"  && this.running === true) this.rotate()
        });
    }
}



const tetris = new TetrisGame(document.querySelector(".tetris"), "Player black");
tetris.addHandlers();
