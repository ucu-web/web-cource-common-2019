class Map {
    constructor(blockSize, x, y) {
        this.x = x;
        this.y = y;
        this.blockSize = blockSize;
        this.mapArray = new Array(this.x);
        this.map = document.querySelector("#map");
    }

    init() {
        this.map.style.width = (this.blockSize * this.x) + 'px';
        this.map.style.height = (this.blockSize * this.y) + 'px';

        for (let i = 0; i < this.x; i++) {
            this.mapArray[i] = new Array(this.y);
            for (let j = 0; j < this.y; j++) {
                let bool = Math.random() >= 0.8;
                if (bool) {
                    this.mapArray[i][j] = 0;
                    this.appendTile(i, j);
                } else {
                    this.mapArray[i][j] = 1;
                }
            }
        }
    }

    appendTile(i, j) {
        let tile = document.createElement('div');
        this.map.appendChild(tile);
        tile.style.width = this.blockSize + 'px';
        tile.style.height = this.blockSize + 'px';

        tile.classList.add('tile');
        tile.style.left = (i * this.blockSize) + 'px';
        tile.style.top = (j * this.blockSize) + 'px';
    }

    getFreePos() {
        let freePos = [];
        for (let i = 0; i < this.mapArray.length; i++) {
            for (let j = 0; j < this.mapArray[i].length; j++) {
                if (this.mapArray[i][j] === 1) {
                    freePos.push([i, j]);
                }
            }
        }
        return freePos
    }

    getMapArray() {
        return this.mapArray;
    }

    getMapSize() {
        return {x: this.x, y: this.y};
    }
}


class Target {
    constructor(map, blockSize) {
        this.mapArray = map.getMapArray();
        this.blockSize = blockSize;
        this.totalTargets = 0;
        this.playerSpace = map.getMapSize();
        this.targetsArray = [];
        this.map = document.querySelector('#map');
        this.possiblePositionToStartX = [];
        this.possiblePositionToStartY = [];
    }

    getTotalTargets() {
        return this.totalTargets;
    }

    showTotalTargets() {
        let totalDiv = document.querySelector('#score strong');
        totalDiv.innerHTML = this.totalTargets;
    }

    showTargets(i, j) {
        let tile = document.createElement('div');
        this.map.appendChild(tile);

        tile.classList.add('target');
        tile.style.width = this.blockSize + 'px';
        tile.style.height = this.blockSize + 'px';

        tile.setAttribute('data-pos', i + ':' + j);

        tile.style.left = (i * this.blockSize) + 'px';
        tile.style.top = (j * this.blockSize) + 'px';
        tile.style.backgroundColor = 'red';
        tile.style.opacity = 0.5;
    }

    createTargets() {

        for (let i = 1; i < this.playerSpace.x - 1; i++) {

            this.targetsArray[i] = [];
            if (i === 1) this.targetsArray[i - 1] = [];
            if (i === 8) this.targetsArray[i + 1] = [];

            for (let j = 1; j < this.playerSpace.y - 1; j++) {

                this.targetsArray[i][j] = 1;
                if (j === 1) this.targetsArray[i][j - 1] = 1;
                if (j === 8) this.targetsArray[i][j + 1] = 1;
                if (i === 1) this.targetsArray[i - 1][j] = 1;
                if (i === 8) this.targetsArray[i + 1][j] = 1;
                if (i === 1 && j === 1) this.targetsArray[i - 1][j - 1] = 1;
                if (i === 1 && j === 8) this.targetsArray[i - 1][j + 1] = 1;
                if (i === 1 && j === 1) this.targetsArray[i - 1][j + 1] = 1;
                if (i === 8 && j === 8) this.targetsArray[i + 1][j + 1] = 1;
                if (i === 8 && j === 1) this.targetsArray[i + 1][j - 1] = 1;

                if (this.mapArray[i][j] === this.mapArray[i][j - 1] &&
                    this.mapArray[i][j] === this.mapArray[i][j + 1] &&
                    this.mapArray[i][j] === this.mapArray[i - 1][j - 1] &&
                    this.mapArray[i][j] === this.mapArray[i + 1][j + 1] &&
                    this.mapArray[i][j] === this.mapArray[i - 1][j] &&
                    this.mapArray[i][j] === this.mapArray[i + 1][j] &&
                    this.mapArray[i][j] === this.mapArray[i - 1][j - 1] &&
                    this.mapArray[i][j] === this.mapArray[i + 1][j + 1] &&
                    this.mapArray[i - 1][j] === 1 &&
                    this.mapArray[i + 1][j] === 1 &&
                    this.mapArray[i][j + 1] === 1 &&
                    this.mapArray[i][j - 1] === 1 &&
                    this.mapArray[i - 1][j - 1] === 1 &&
                    this.mapArray[i + 1][j + 1] === 1 &&
                    this.mapArray[i][j] === 1) {

                    this.possiblePositionToStartX.push(i);
                    this.possiblePositionToStartY.push(j);

                    this.targetsArray[i][j] = 0;

                    this.totalTargets++;

                    this.showTargets(i, j);

                }
            }
        }
        console.log(this.totalTargets);
        if (this.totalTargets === 0) {
            Start.restartTheGame();
        }
        this.showTotalTargets();
    }

    getTargetsArray() {
        return this.targetsArray;
    }
}


class Player {
    constructor(mapArray, map, blockSize, targets, x, y) {
        this.targetsArray = targets.getTargetsArray();
        this.map = map;
        this.positionArray = mapArray;
        this.x = x;
        this.y = y;
        this.blockSize = blockSize;
        this.position = {x: 0, y: 0};
        this.playerDiv = document.getElementById('player');
        this.configurePlayerDiv(this.map.getFreePos());
        console.log(this.playerDiv);
    }

    configurePlayerDiv(freePos) {
        let rand = freePos[Math.floor(Math.random() * freePos.length)];
        this.playerDiv.style.background = 'green';
        this.playerDiv.style.left = (rand[0] * this.blockSize) + 'px';
        this.playerDiv.style.top = (rand[1] * this.blockSize) + 'px';
        this.position = {x: rand[0], y: rand[1]};
        this.playerDiv.style.right = '0px';
        this.playerDiv.style.bottom = '0px';
        this.playerDiv.style.width = this.blockSize + 'px';
        this.playerDiv.style.height = this.blockSize + 'px';
    }

    moveRight() {
        if (this.position.x + 1 === this.x) {
            return false;
        }
        if (this.positionArray[this.position.x + 1][this.position.y] !== 0) {
            this.position.x++;
            let nb = this.playerDiv.style.left.split('px');
            this.playerDiv.style.left = (parseInt(nb[0]) + this.blockSize) + 'px';
        } else {
            console.log("Not OK")
        }
    }

    moveDown() {
        if (this.position.y + 1 === this.y) {
            return false;
        }
        if (this.positionArray[this.position.x][this.position.y + 1] !== 0) {
            this.position.y++;
            let nb = this.playerDiv.style.top.split('px');
            this.playerDiv.style.top = (parseInt(nb[0]) + this.blockSize) + 'px';
        }
    }

    moveUp() {
        if (this.position.y === 0) {
            return false;
        }
        if (this.positionArray[this.position.x][this.position.y - 1]) {
            this.position.y--;
            let nb = this.playerDiv.style.top.split('px');
            this.playerDiv.style.top = (parseInt(nb[0]) - this.blockSize) + 'px';
        }
    }

    moveLeft() {
        if (this.position.x === 0) {
            return false;
        }
        if (this.positionArray[this.position.x - 1][this.position.y]) {
            this.position.x--;
            let nb = this.playerDiv.style.left.split('px');
            this.playerDiv.style.left = (parseInt(nb[0]) - this.blockSize) + 'px';
        }
    }

    plantBomb() {
        let map = document.getElementById('map');
        let bomb = document.createElement('div');
        map.appendChild(bomb);
        bomb.style.width = this.blockSize + 'px';
        bomb.style.height = this.blockSize + 'px';

        bomb.classList.add('bomb');
        bomb.style.left = (this.position.x * this.blockSize) + 'px';
        bomb.style.top = (this.position.y * this.blockSize) + 'px';

        let posx = this.position.x;
        let posy = this.position.y;
        let that = this;

        let timer = setInterval(bombTimer, 500, posx, posy, that);
        let iter = 0;

        function bombTimer() {
            if (iter === 4) {
                clearInterval(timer);
                bomb.remove();
                // that.updateTargetsArray(posx, posy);
                // that.removeTarget(posx, posy);
            }
            iter++;
        }
        console.log(this.targetsArray);

    }
}


class Process {
    constructor(blockSize, x, y) {
        let map = new Map(blockSize, x, y);
        map.init();

        let targets = new Target(map, blockSize);
        targets.createTargets();

        let player = new Player(map.getMapArray(), map, blockSize, targets, x, y);

        document.onkeydown = checkKey;

        function checkKey(e) {
            e = e || window.event;
            if (e.key === 'ArrowUp') {
                // up arrow
                player.moveUp();
            } else if (e.key === 'ArrowDown') {
                // down arrow
                player.moveDown();
            } else if (e.key === 'ArrowLeft') {
                // left arrow
                player.moveLeft();
            } else if (e.key === 'ArrowRight') {
                // right arrow
                player.moveRight();
            } else if (e.key === ' ') {
                // space bar
                player.plantBomb();
            }
        }
    }

    static destroy() {
        let targets = document.querySelectorAll('.target');
        let tiles = document.querySelectorAll('.tile');

        if (tiles) {
            targets.forEach((el) => el.remove());
            tiles.forEach((el) => el.remove());
        }
    }


}


class Start {
    constructor() {
        this.restart = document.querySelector("#restart");
        this.restart.addEventListener('click', function () {
            Start.restartTheGame();
        })
    }

    static restartTheGame() {
        Process.destroy();
        const game = new Process(100, 5, 5);
    }
}


let start = new Start();