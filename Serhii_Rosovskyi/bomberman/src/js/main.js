class Map {
    constructor(nbX, nbY, tileSize) {
        this.nbX = nbX;
        this.nbY = nbY;
        this.mapArray = new Array(this.nbX);
        this.tileSize = tileSize;
        this.map = document.getElementById('map');
    }

    init() {
        console.log('Map size: ' + this.nbX * this.nbY);
        let bool = null;

        this.map.style.width = (this.tileSize * this.nbX) + 'px';
        this.map.style.height = this.tileSize * this.nbY + 'px';

        for (let i = 0; i < this.nbX; i++) {

            this.mapArray[i] = new Array(this.nbY);

            for (let j = 0; j < this.nbY; j++) {

                bool = Math.random() >= 0.8;

                if (bool) {
                    this.mapArray[i][j] = 0;
                    this.appendTile(i, j);
                } else if (!bool) {
                    this.mapArray[i][j] = 1;
                }
            }
        }
    }

    appendTile(i, j) {
        let tile = document.createElement('div');
        this.map.appendChild(tile);
        tile.style.width = this.tileSize + 'px';
        tile.style.height = this.tileSize + 'px';

        tile.classList.add('tile');
        tile.style.left = (i * this.tileSize) + 'px';
        tile.style.top = (j * this.tileSize) + 'px';
    }

    getMapArray() {
        return this.mapArray;
    }

    getMapSize() {
        return {sizeX: this.nbX, sizeY: this.nbY}
    }
}

class Target {
    constructor(map, tileSize) {
        this.mapArray = map.getMapArray();
        this.playerSpace = map.getMapSize();
        this.targetsArray = [];
        this.possiblePositionToStartX = [];
        this.possiblePositionToStartY = [];
        this.tileSize = tileSize;
        this.map = document.getElementById('map');
        this.totalTargets = 0;
    }

    getTotalTargets() {
        return this.totalTargets;
    }

    showTotalTargets() {
        let totalDiv = document.querySelector('#score strong');
        totalDiv.innerHTML = ' / ' + this.totalTargets;
    }

    showTargets(i, j) {
        let tile = document.createElement('div');
        this.map.appendChild(tile);

        tile.classList.add('target');
        tile.style.width = this.tileSize + 'px';
        tile.style.height = this.tileSize + 'px';

        // set attribute to identify the target when we need to remove it
        tile.setAttribute('data-pos', i + ':' + j);

        tile.style.left = (i * this.tileSize) + 'px';
        tile.style.top = (j * this.tileSize) + 'px';
        tile.style.backgroundColor = 'red';
        tile.style.opacity = 0.5;
    }

    createTargets() {

        for (let i = 1; i < this.playerSpace.sizeX - 1; i++) {

            this.targetsArray[i] = [];
            if (i === 1) this.targetsArray[i - 1] = [];
            if (i === 8) this.targetsArray[i + 1] = [];

            for (let j = 1; j < this.playerSpace.sizeY - 1; j++) {

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

                // Target generation algorithm
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
        this.showTotalTargets();

    }

    getPossiblePosToStart() {
        let xPos = this.possiblePositionToStartX[Math.floor(Math.random() * (this.possiblePositionToStartX.length))];
        let yPos = this.possiblePositionToStartY[Math.floor(Math.random() * (this.possiblePositionToStartY.length))];

        return {x: xPos, y: yPos}
    }

    getTargetsArray() {
        return this.targetsArray;
    }
}

class Player {
    constructor(mapArray, map, targets, tileSize) {
        this.positionArray = mapArray;
        this.position = {x: 0, y: 0}
        this.playerDiv = document.getElementById('player');
        this.playerDiv.style.left = 0;
        this.playerDiv.style.top = 0;
        this.playerDiv.style.right = 0;
        this.playerDiv.style.bottom = 0;
        this.playerDiv.style.width = tileSize + 'px';
        this.playerDiv.style.height = tileSize + 'px';
        this.playerSpace = map.getMapSize();
        this.playerMap = map.getMapArray();
        this.score = 0;
        this.targetsArray = targets.getTargetsArray();
        this.totalTargets = targets.getTotalTargets();
        this.tileSize = tileSize;
    }

    recordPosition(mapArray) {
        this.positionArray = mapArray;
    }

    static resetScore() {
        let scoreSpan = document.querySelector('#score span');
        scoreSpan.innerHTML = '0';
    }

    setPosition(position) {
        this.playerDiv.style.left = (position.x * this.tileSize) + 'px';
        this.playerDiv.style.top = (position.y * this.tileSize) + 'px';
        this.position.x = position.x;
        this.position.y = position.y;
    }

    getPosition() {
        return this.position;
    }

    moveRight() {
        if (this.position.x > this.playerSpace.sizeX - 2) return false;
        if (this.positionArray[this.position.x + 1][this.position.y] !== 0) {
            this.position.x++;
            let nb = this.playerDiv.style.left.split('px');
            this.playerDiv.style.left = (parseInt(nb[0]) + this.tileSize) + 'px';
            console.log('Droite | X : ' + this.playerDiv.style.left);
            console.log(this.position.x + ' : ' + this.position.y);
        } else {
            console.log('Not OK');
        }
    }

    moveDown() {
        if (this.position.y > this.playerSpace.sizeY - 2) return false;
        if (this.positionArray[this.position.x][this.position.y + 1] !== 0) {
            this.position.y++;
            let nb = this.playerDiv.style.top.split('px');
            this.playerDiv.style.top = (parseInt(nb[0]) + this.tileSize) + 'px';
            console.log('Bas | Y : ' + this.playerDiv.style.top);
            console.log(this.position.x + ' : ' + this.position.y);
        } else {
            console.log('Not OK');
        }
    }

    moveLeft() {
        if (this.position.x === 0) return false;
        if (this.positionArray[this.position.x - 1][this.position.y] !== 0) {
            this.position.x--;
            let nb = this.playerDiv.style.left.split('px');
            this.playerDiv.style.left = (parseInt(nb[0]) - this.tileSize) + 'px';
            console.log('Gauche | X : ' + this.playerDiv.style.left);
            console.log(this.position.x + ' : ' + this.position.y);
        } else {
            console.log('Not OK');
        }
    }

    moveUp() {
        if (this.position.y <= 0) return false;
        if (this.positionArray[this.position.x][this.position.y - 1] !== 0) {
            this.position.y--;
            let nb = this.playerDiv.style.top.split('px');
            this.playerDiv.style.top = (parseInt(nb[0]) - this.tileSize) + 'px';
            console.log('Haut | Y : ' + this.playerDiv.style.top);
            console.log(this.position.x + ' : ' + this.position.y);
        } else {
            console.log('Not OK');
        }
    }

    updateScore() {
        let scoreDiv = document.querySelector('#score span');
        scoreDiv.innerHTML = this.score;

        if (this.score === this.totalTargets) {
            document.querySelector('#win').classList.add('show');
        }

        console.log('Score : ' + this.score);
    }

    updateTargetsArray(posx, posy) {
        this.targetsArray[posx][posy] = 1;
        console.log('Array state : ');
        console.log(this.targetsArray);
    }

    removeTarget(posx, posy) {

        let targetToRemove = document.querySelectorAll('.target');
        let coords = posx + ':' + posy;
        let attr = '';

        for (let i = 0; i < targetToRemove.length; i++) {
            attr = targetToRemove[i].getAttribute('data-pos');
            if (attr === coords) {
                targetToRemove[i].remove();
                this.score++;
                this.updateScore();
            }
        }

        if (this.targetsArray[posx][posy] === 0) {
            this.targetsArray[posx][posy] === 1;
        }

    }

    plantBomb() {
        let map = document.getElementById('map');
        let bomb = document.createElement('div');
        map.appendChild(bomb);
        bomb.style.width = this.tileSize + 'px';
        bomb.style.height = this.tileSize + 'px';

        bomb.classList.add('bomb');
        bomb.style.left = (this.position.x * this.tileSize) + 'px';
        bomb.style.top = (this.position.y * this.tileSize) + 'px';

        let posx = this.position.x;
        let posy = this.position.y;
        let that = this;

        let timer = setInterval(bombTimer, 500, posx, posy, that);
        let iter = 0;

        function bombTimer() {
            switch (iter) {
                case 1:
                    bomb.classList.add('waiting');
                    break;
                case 2:
                    bomb.classList.add('before');
                    bomb.classList.remove('waiting');
                    break;
                case 3:
                    bomb.classList.add('explode');
                    bomb.classList.remove('before');
                    break;
                case 4:
                    clearInterval(timer);
                    bomb.remove();
                    that.updateTargetsArray(posx, posy);
                    that.removeTarget(posx, posy);
                default:
                    break;
            }
            iter++;
        }

    }

}


class Game {
    constructor(tileSize, mapX, mapY) {

        let map = new Map(mapX, mapY, tileSize);
        map.init();

        // Create targets
        let targets = new Target(map, tileSize);
        targets.createTargets();

        // Create Player
        let player = new Player(map.getMapArray(), map, targets, tileSize);

        // Place the player within targets
        player.setPosition(targets.getPossiblePosToStart());


        // Keyboard events
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

        Player.resetScore();

        if (tiles) {
            targets.forEach((el) => el.remove());
            tiles.forEach((el) => el.remove());
        }

    }
}

class Session {
    constructor() {
        this.totalTargets = 0;
        this.restartBtn = document.querySelector("#restart");
        this.restartBtn.addEventListener('click', function () {
            Session.restart();
        })
    }

    static restart() {
        Game.destroy();
        const game = new Game(50, 5, 5);
    }
}


let session = new Session();