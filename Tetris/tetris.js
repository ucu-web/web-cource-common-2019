const O = [
    [[0,0],[1,0],[0,-1],[1,-1]],
    [[0,0],[1,0],[0,-1],[1,-1]],
    [[0,0],[1,0],[0,-1],[1,-1]],
    [[0,0],[1,0],[0,-1],[1,-1]],
];

const I = [
    [[0,0],[0,1],[0,-1],[0,-2]],
    [[0,0],[-1,0],[1,0],[2,0]],
    [[1,0],[1,-1],[1,-2],[1,1]],
    [[0,-1],[-1,-1],[1,-1],[2,-1]],
];

const T = [
    [[0,0],[-1,0],[1,0],[0,1]],
    [[0,0],[0,1],[0,-1],[1,0]],
    [[0,0],[-1,0],[1,0],[0,-1]],
    [[0,0],[-1,0],[0,1],[0,-1]],
];

const Z = [
    [[0,0],[-1,1],[0,1],[1,0]],
    [[0,0],[0,-1],[1,0],[1,1]],
    [[0,0],[-1,0],[0,-1],[1,-1]],
    [[0,0],[-1,0],[-1,-1],[0,1]],
];

const S = [
    [[0,0],[-1,0],[1,1],[0,1]],
    [[0,0],[0,1],[1,0],[1,-1]],
    [[0,0],[1,0],[0,-1],[-1,-1]],
    [[0,0],[-1,0],[-1,1],[0,-1]],
];

const L = [
    [[0,0],[0,1],[0,-1],[1,-1]],
    [[0,0],[1,0],[-1,0],[-1,-1]],
    [[0,0],[0,-1],[0,1],[-1,1]],
    [[0,0],[-1,0],[1,0],[1,1]],
];

const J = [
    [[0,0],[0,1],[0,-1],[-1,-1]],
    [[0,0],[-1,1],[-1,0],[1,0]],
    [[0,0],[0,1],[0,-1],[1,1]],
    [[0,0],[-1,0],[1,0],[1,-1]],
];


const SQ = 20;
const WIDTH = 10;
const HEIGHT = 20;

class figure {
    constructor(center, frames, color) {
        this.frames = frames;
        this.center = center;
        this.current_frame = 0;
        this.color = color;
    }


    move_left() {
        this.center[0]-=1;
    }

    move_right() {
        this.center[0]+=1;
    }

    move_down() {
        this.center[1]-=1;
    }

    rotate() {
        this.current_frame = (this.current_frame+1)%4;
    }

    _getCoord(frame) {
        let res = [];
        this.frames[frame].forEach(
            (el) => res.push([this.center[0]+el[0], this.center[1]+el[1]])
        );

        return res;
    }

    getCoord() {
        return this._getCoord(this.current_frame);
    }

    getCoordNextRotation() {
        return this._getCoord((this.current_frame+1)%4);
    }


}

const tetronominoes2 = [
    new figure([4, 21], O, "#f9ff00"),
    new figure([4, 22], I, "#00e4ff"),
    new figure([4, 20],T, "#9e0095"),
    new figure([4, 20],Z, "#67b523"),
    new figure([4, 20],S, "#f60100"),
    new figure([4, 21],L, "#fd8c00"),
    new figure([5, 21],J, "#fd50bb")
];

const tetronominoes = [
    [[4, 21], O, "#f9ff00"],
    [[4, 22], I, "#00e4ff"],
    [[4, 20], T, "#9e0095"],
    [[4, 20], Z, "#67b523"],
    [[4, 20], S, "#f60100"],
    [[4, 21], L, "#fd8c00"],
    [[5, 21], J, "#fd50bb"]

];

class block {
    constructor(color, canvas) {
        this.color = color;
        this.canvas = canvas;
    }

    draw(x,y) {
        this.canvas.fillStyle = this.color;
        this.canvas.fillRect(x*SQ,(HEIGHT-1-y)*SQ, SQ,SQ);
    }
}

class board {
    constructor(container) {
        this.state = Array(HEIGHT).fill().map(() => Array(WIDTH).fill(0));
        this.canvas = container.getContext("2d");

        this.current_figure = this.getRandomFigure();
        this.renderFigure();
        this.renderGizmos();
        this.addHandlers();
        setInterval(()=>this.step(), 500);
    }
    step() {
        this.moveDown();

        if (this.isCollisionBottom()) {
            this.clearFigure();
            let coords = this.current_figure.getCoord();
            for (let i = 0; i < coords.length; i++) {
                this.spawnBlock(coords[i], this.current_figure.color);
            }
            this.removeRows();
            this.clearBoard();
            this.renderGizmos();
            this.current_figure = this.getRandomFigure();

        }
    }

    getRandomFigure() {
        let obj = tetronominoes[Math.floor(Math.random()*tetronominoes.length)];
        // let obj = tetronominoes[1];
        return new figure(obj[0].slice(), obj[1], obj[2]);
    }


    removeRows() {
        for (let i = 0; i < this.state.length; i++) {
            if (this.checkRow(i)) {
                this.state.splice(i,1);
                this.state.unshift(Array(WIDTH).fill(0));
            }

        }
    }
    

    checkRow(n) {
        for (let i = 0; i < this.state[n].length; i++) {
            if (this.state[n][i] === 0) return false;
        }
        return true;
    }

    isCollisionBottom() {
        let coords = this.current_figure.getCoord();

        for (let i = 0; i < coords.length; i++) {
            if (coords[i][1]===0) return true;
            if ((!this.isVacant([coords[i][0], coords[i][1]-1]))) {
                return true;
            }

        }

        return false;
    }

    isColisionLeft() {
        let coords = this.current_figure.getCoord();
        for (let i = 0; i < coords.length; i++) {
            if (!this.isVacant([coords[i][0]-1, coords[i][1]])) {
                return true;
            }
            if (coords[i][0]===0) return true;
        }
        return false;
    }

    isColisionRight() {
        let coords = this.current_figure.getCoord();
        for (let i = 0; i < coords.length; i++) {
            if (!this.isVacant([coords[i][0]+1, coords[i][1]])) {
                return true;
            }

            if (coords[i][0]===WIDTH-1) return true;
        }
        return false;
    }

    spawnBlock(coord, color) {
        this.state[HEIGHT-1-coord[1]][coord[0]] = new block(color, this.canvas);
    }

    isVacant(coord) {
        if (coord[1]>=20) return true;
        return !this.state[HEIGHT-1-coord[1]][coord[0]];
    }

    renderGizmos() {
        this.renderAllBlocks();
        this.renderGrid();
    }

    renderFigure() {
        this.current_figure.getCoord().forEach((el) => {this.renderPixel(el, this.current_figure.color)});
    };

    clearFigure() {
        this.current_figure.getCoord().forEach((el) => {this.renderPixel(el, "white")});
    };

    renderPixel(coord, color) {
        this.canvas.fillStyle = color;
        this.canvas.fillRect(coord[0]*SQ,(HEIGHT-1-coord[1])*SQ, SQ, SQ)
    };

    clearBoard() {
        this.canvas.clearRect(0, 0, WIDTH * SQ, HEIGHT * SQ);
    };

    renderAllBlocks() {
        this.state.forEach(
            (row,y) => {
                row.forEach(
                    (item,x) => {if (item) item.draw(x,HEIGHT-1-y)}
                )
            }
        );
    };

    renderGrid() {
        for (let j = 0; j < HEIGHT; j++) {
            for (let i = 0; i < WIDTH; i++) {
                this.canvas.strokeRect(i*SQ, j*SQ, SQ, SQ);
            }
        }
    }

    moveLeft() {
        if(!this.isColisionLeft()) {
            this.clearFigure();
            this.current_figure.move_left();
            this.renderFigure();
            this.renderGizmos();
        }
    }

    moveRight() {
        if(!this.isColisionRight()) {
            this.clearFigure();
            this.current_figure.move_right();
            this.renderFigure();
            this.renderGizmos();
        }
    }

    moveDown() {
        if(!this.isCollisionBottom()) {
            this.clearFigure();
            this.current_figure.move_down();
            this.renderFigure();
            this.renderGizmos();
        }
    }

    isColisionOnRotate() {
        let coords = this.current_figure.getCoordNextRotation();

        for (let i = 0; i < coords.length; i++) {
            if (!this.isVacant([coords[i][0]-1, coords[i][1]])) {
                return true;
            }
            if (coords[i][0]===-1 || coords[i][0]===WIDTH) return true;
        }
        return false;
    }

    rotate() {
        if(!(this.isColisionOnRotate())) {
            this.clearFigure();
            this.current_figure.rotate();
            this.renderFigure();
            this.renderGizmos();
        }
    }

    addHandlers () {
        document.addEventListener("keydown", (ev)=>{
            if (ev.key==="a") this.moveLeft()
        });

        document.addEventListener("keydown", (ev)=>{
            if (ev.key==="d") this.moveRight()
        });

        document.addEventListener("keydown", (ev)=>{
            if (ev.key==="s") this.moveDown()
        });

        document.addEventListener("keydown", (ev)=>{
            if (ev.key===" ") this.rotate()

        });
    }
}

new board(document.querySelectorAll(".tetris")[0]);
