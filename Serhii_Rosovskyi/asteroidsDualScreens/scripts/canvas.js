import {Asteroid} from "./Asteroid.js";
import {SpaceShip} from "./SpaceShip.js";


function configurations() {
    let canv = document.getElementsByTagName("canvas");
    for (let i = 0; i < canv.length; i++) {
        canv[i].style.background = "url('https://i.ytimg.com/vi/VuWJ14R5k90/maxresdefault.jpg') no-repeat center fixed";
        canv[i].style.backgroundSize = 'cover';
        canv[i].style.border = "5px solid pink";
        canv[i].style.marginRight = '50px';
        canv[i].style.cssFloat = "left";
    }
}

function mean(min, max, num) {
    return num <= min ? min : num >= max ? max : num;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function randomCoordinates(canv, radius) {
    let x = mean(radius, canv.width - radius * 2, Math.random() * canv.width);
    let y = mean(radius, canv.height - radius * 2, Math.random() * canv.height);
    return {'x': x, 'y': y};
}


class Canvas {
    constructor(canvas) {
        this.canvas = document.getElementById(canvas);
        this.canvas.width = window.innerWidth / 2 - 100;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");

        this.isGameLost = false;
        this.timeRunning = 0;

        this.score = 0;
        this.scoreX = this.canvas.width * .05;
        this.scoreY = this.canvas.height / 10;

        this.bulletSize = 5;

        this.spaceShip = new SpaceShip(this.ctx, this.canvas, this.canvas.width / 2, this.canvas.height / 2, 'red');

        this.asteroids = new Array(5);
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i] = this.createAsteroid();
        }

        this.lastTimeSpawned = 0;
        configurations();

        this.render();
    }

    keyDown(ev) {
        let canvases = document.getElementsByTagName("canvas");
        if (this.canvas === canvases[0]){
            ev.key === "w" ? this.spaceShip.moveing = true :
                ev.key === "a" ? this.spaceShip.rotCoef = 1 :
                    ev.key === "d" ? this.spaceShip.rotCoef = -1 :
                        ev.key === "s" ? this.spaceShip.fire(this.timeRunning) : null;
        } else {
            ev.key === "ArrowUp" ? this.spaceShip.moveing = true :
                ev.key === "ArrowLeft" ? this.spaceShip.rotCoef = 1 :
                    ev.key === "ArrowRight" ? this.spaceShip.rotCoef = -1 :
                        ev.key === "ArrowDown" ? this.spaceShip.fire(this.timeRunning) : null;
        }
    }

    keyUp(ev) {
        let canvases = document.getElementsByTagName("canvas");
        if (this.canvas === canvases[0]) {
            ev.key === "w" ? this.spaceShip.moveing = false :
                ev.key === "a" || ev.key === "d" ? this.spaceShip.rotCoef = 0 : null;
        } else {
            ev.key === "ArrowUp" ? this.spaceShip.moveing = false :
                ev.key === "ArrowLeft" || ev.key === "ArrowRight" ? this.spaceShip.rotCoef = 0 : null;
        }
    }

    createAsteroid() {
        let radius = Math.round(Math.random() * 30) + 1;
        let coord = {'x': this.spaceShip.x, 'y': this.spaceShip.y};
        do {
            coord = randomCoordinates(this.canvas, radius);
        } while (distance(this.spaceShip.x, this.spaceShip.y, coord['x'], coord['y']) < 200);
        let accelerationX = (Math.random() - .5) * 5;
        let accelerationY = (Math.random() - .5) * 5;
        return new Asteroid(this.ctx, coord['x'], coord['y'], accelerationX, accelerationY, 1, radius);
    }

    deleteAsteroid() {
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].update();

            if (distance(this.asteroids[i].x, this.asteroids[i].y, this.spaceShip.x, this.spaceShip.y) <=
                this.spaceShip.radius + this.asteroids[i].radius) {
                this.isGameLost = true;
            }

            for (let j = 0; j < this.spaceShip.bullets.length; j++) {
                if (distance(this.asteroids[i].x, this.asteroids[i].y, this.spaceShip.bullets[j].x, this.spaceShip.bullets[j].y) < this.asteroids[i].radius + this.bulletSize) {
                    this.asteroids.splice(i, 1);
                    this.spaceShip.destroyBullet(j);
                }
            }
        }
    }

    onGameOver() {
        this.ctx.fill();
        this.ctx.fillStyle = "red";
        this.ctx.font = "bold 40px Arial";
        let displayScore = Math.round(this.score);
        this.ctx.fillText(displayScore.toString(), this.scoreX, this.scoreY);
        // this.spaceShip.draw();
        this.spaceShip.draw();
    }

    render(time = 0) {
        this.timeRunning = time;
        if (this.isGameLost) {
            return 0;
        }
        this.score += time / 131072;
        requestAnimationFrame(this.render.bind(this));
        document.addEventListener('keydown', this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.spaceShip.bullets.map(el => el.update());
        this.deleteAsteroid();

        if (!this.isGameLost) {
            this.spaceShip.update(time);
            this.ctx.fill();
            this.ctx.fillStyle = "red";
            this.ctx.font = "bold 40px Arial";
            let displayScore = Math.round(this.score);
            if (displayScore % 2 === 0 && displayScore !== this.lastTimeSpawned) {
                this.lastTimeSpawned = displayScore;
                this.asteroids.push(this.createAsteroid());
                // asteroids.map(el => el.increaseSpeed());
            }
            this.ctx.fillText(displayScore.toString(), this.scoreX, this.scoreY);
        } else {
            this.onGameOver();
        }
    }
}

const gameOne = new Canvas("main-canvas");
const gameSecond = new Canvas("second-canvas");
// gameOne.render();
// gameSecond.render();