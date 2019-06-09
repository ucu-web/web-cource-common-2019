import Asteroid from "./Asteroid.js";
import SpaceShip from "./SpaceShip.js";
import {distance, randomCoordinates, getRandomColor} from "./index.js";


export default class Canvas {
    constructor(canvas) {
        this.canvas = document.getElementById(canvas);
        this.canvas.width = window.innerWidth / 2 - 100;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");

        this.isGameLost = false;
        this.timeRunning = 0;
        this.lastTimeSpawned = 0;

        this.score = 0;
        this.scoreX = this.canvas.width * .05;
        this.scoreY = this.canvas.height / 10;

        this.spaceShip = new SpaceShip(this.ctx, this.canvas, this.canvas.width / 2, this.canvas.height / 2, 'red');
        this.asteroids = Array.from({length: 5}, () => this.createAsteroid());

        this.render();
    }

    keyDown(ev) {
        let canvases = document.getElementsByTagName("canvas");
        if (this.canvas === canvases[0]) {
            ev.key === "w" ? this.spaceShip.moveing = true :
                ev.key === "a" ? this.spaceShip.rotCoef = 1 :
                    ev.key === "d" ? this.spaceShip.rotCoef = -1 :
                        ev.key === "s" ? this.spaceShip.fire(this.timeRunning) :
                            null;
        } else {
            ev.key === "ArrowUp" ? this.spaceShip.moveing = true :
                ev.key === "ArrowLeft" ? this.spaceShip.rotCoef = 1 :
                    ev.key === "ArrowRight" ? this.spaceShip.rotCoef = -1 :
                        ev.key === "ArrowDown" ? this.spaceShip.fire(this.timeRunning) :
                            null;
        }
    }

    keyUp(ev) {
        let canvases = document.getElementsByTagName("canvas");
        if (this.canvas === canvases[0]) {
            ev.key === "w" ? this.spaceShip.moveing = false :
                ev.key === "a" || ev.key === "d" ? this.spaceShip.rotCoef = 0 :
                    null;
        } else {
            ev.key === "ArrowUp" ? this.spaceShip.moveing = false :
                ev.key === "ArrowLeft" || ev.key === "ArrowRight" ? this.spaceShip.rotCoef = 0 :
                    null;
        }
    }

    createAsteroid() {
        let radius = Math.round(Math.random() * 30) + 1;
        let coordinates = {'x': this.spaceShip.x, 'y': this.spaceShip.y};
        do {
            coordinates = randomCoordinates(this.canvas, radius);
        } while (distance(this.spaceShip.x, this.spaceShip.y, coordinates['x'], coordinates['y']) < 200);
        let xVelocity = (Math.random() - .5) * 5;
        let yVelocity = (Math.random() - .5) * 5;
        return new Asteroid(this.ctx, this.canvas,
                            coordinates['x'], coordinates['y'],
                            xVelocity, yVelocity,
                            radius, getRandomColor());
    }

    deleteAsteroid() {
        this.asteroids.map((ast, idx1) => {
            ast.update();
            distance(ast.x, ast.y, this.spaceShip.x, this.spaceShip.y) <= this.spaceShip.radius + ast.radius
                ? this.isGameLost = true
                : null;
            this.spaceShip.bullets.map((bull, idx2) => {
                if (distance(ast.x, ast.y, bull.x, bull.y) < ast.radius + bull.size) {
                    this.asteroids.splice(idx1, 1);
                    this.spaceShip.destroyBullet(idx2);
                }
            })
        });
    }

    onGameOver() {
        this.ctx.fill();
        this.ctx.fillStyle = "red";
        this.ctx.font = "bold 40px Arial";
        let displayScore = Math.round(this.score);
        this.ctx.fillText(displayScore.toString(), this.scoreX, this.scoreY);
        this.spaceShip.draw();
    }

    render(time = 0) {
        this.timeRunning = time;
        if (this.isGameLost) {
            return 0;
        }
        this.score += time / 250135;
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
            if (displayScore % 10 === 0 && displayScore !== this.lastTimeSpawned) {
                this.lastTimeSpawned = displayScore;
                this.asteroids.push(this.createAsteroid());
                this.asteroids.map(el => el.increaseSpeed());
            }
            this.ctx.fillText(displayScore.toString(), this.scoreX, this.scoreY);
        } else {
            this.onGameOver();
        }
    }
}