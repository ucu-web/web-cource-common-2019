import {Asteroid} from "./Asteroid.js";
import {SpaceShip} from "./SpaceShip.js";


let canvas = document.getElementById("main-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let timeRunning = 0;

function getRandomImage() {
    let images = document.getElementsByClassName('asteroid');
    return Math.floor(Math.random() * (images.length));
}

function clamp(min, max, num) {
    return num <= min ? min : num >= max ? max : num;
}

function keyDown(ev) {
    ev.key === "ArrowUp" ? spaceShip.thrusting = true :
        ev.key === "ArrowLeft" ? spaceShip.rotCoef = 1 :
            ev.key === "ArrowRight" ? spaceShip.rotCoef = -1 :
                ev.key === " " ? spaceShip.fire(timeRunning) : null;
}

function keyUp(ev) {
    ev.key === "ArrowUp" ? spaceShip.thrusting = false :
        ev.key === "ArrowLeft" || ev.key === "ArrowRight" ? spaceShip.rotCoef = 0 : null;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function createAsteroid(shipX, shipY) {
    let radius = Math.round(Math.random() * 30) + 1;
    let x = clamp(radius, innerWidth - radius * 2, Math.random() * innerWidth);
    let y = clamp(radius, innerHeight - radius * 2, Math.random() * innerHeight);
    while (distance(shipX, shipY, x, y) < 200) {
        x = clamp(radius, innerWidth - radius * 2, Math.random() * innerWidth);
        y = clamp(radius, innerHeight - radius * 2, Math.random() * innerHeight);
    }
    let accelerationX = (Math.random() - .5) * 5;
    let accelerationY = (Math.random() - .5) * 5;
    return new Asteroid(x, y, accelerationX, accelerationY, 1, radius, getRandomImage());
}


const asteroidCount = 30;
let asteroids = [];
let lastRound = 0;

let spaceShip = new SpaceShip();

let isGameLost = false;
let gameOverImg = new Image();
gameOverImg.src = 'img/gameover.jpg';

for (let i = 0; i < asteroidCount; i++) {
    asteroids.push(createAsteroid(spaceShip.x, spaceShip.y));
}
let score = 0;
let scoreX = canvas.width * .05;
let scoreY = canvas.height / 10;

let bulletSize = 20;


function onGameOver() {
    spaceShip.die();
    ctx.drawImage(gameOverImg, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 40px Arial";
    ctx.fillText("Refresh to restart", (canvas.width / 2.55), (canvas.height / 1.2));
}


function main(time = 0) {
    timeRunning = time;
    if (isGameLost) {
        return 0;
    }
    score += time / 131072;
    requestAnimationFrame(main);
    document.addEventListener('keydown', keyDown);
    document.addEventListener("keyup", keyUp);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    spaceShip.bullets.map(el => el.update());

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].update();
        if (distance(asteroids[i].x, asteroids[i].y, spaceShip.x, spaceShip.y) <= spaceShip.radius + asteroids[i].radius) {
            isGameLost = true;
        }
        for (let j = 0; j < spaceShip.bullets.length; j++) {
            if (distance(asteroids[i].x, asteroids[i].y, spaceShip.bullets[j].x, spaceShip.bullets[j].y) < asteroids[i].radius + bulletSize) {
                asteroids.splice(i, 1);
                spaceShip.destroyBullet(j);
            }
        }
    }
    if (!isGameLost) {
        spaceShip.update(time);
        ctx.fill();
        ctx.fillStyle = "red";
        ctx.font = "bold 40px Arial";
        let displayScore = Math.round(score);
        if (displayScore % 10 === 0 && displayScore !== lastRound) {
            lastRound = displayScore;
            asteroids.push(createAsteroid(spaceShip.x, spaceShip.y));
            asteroids.map(el => el.increaseSpeed());
        }
        ctx.fillText(displayScore.toString(), scoreX, scoreY);
    } else {
        onGameOver();
    }
}

main();

export {ctx, canvas};