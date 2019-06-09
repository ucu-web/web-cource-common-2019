import {Asteroid} from "./Asteroid.js";
import {SpaceShip} from "./SpaceShip.js";


let canvas = document.getElementById("main-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let timeRunning = 0;

function configurations() {
    let body = document.getElementsByTagName("body")[0];
    body.style.background = "url('https://i.ytimg.com/vi/VuWJ14R5k90/maxresdefault.jpg') no-repeat center fixed";
    body.style.backgroundSize = 'cover';
    body.style.margin = '0';
    body.style.overflow = 'hidden';
}

function mean(min, max, num) {
    return num <= min ? min : num >= max ? max : num;
}

function keyDown(ev) {
    ev.key === "ArrowUp" ? shipNumberOne.moveing = true :
        ev.key === "ArrowLeft" ? shipNumberOne.rotCoef = 1 :
            ev.key === "ArrowRight" ? shipNumberOne.rotCoef = -1 :
                ev.key === "ArrowDown" ? shipNumberOne.fire(timeRunning) : null;
    if (shipNumberTwo) {
        ev.key === "w" ? shipNumberTwo.moveing = true :
            ev.key === "a" ? shipNumberTwo.rotCoef = 1 :
                ev.key === "d" ? shipNumberTwo.rotCoef = -1 :
                    ev.key === "s" ? shipNumberTwo.fire(timeRunning) : null;
    }
}

function keyUp(ev) {
    ev.key === "ArrowUp" ? shipNumberOne.moveing = false :
        ev.key === "ArrowLeft" || ev.key === "ArrowRight" ? shipNumberOne.rotCoef = 0 : null;
    if (shipNumberTwo) {
        ev.key === "w" ? shipNumberTwo.moveing = false :
            ev.key === "a" || ev.key === "d" ? shipNumberTwo.rotCoef = 0 : null;
    }
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function createAsteroid(elysium, hispania) {
    let radius = Math.round(Math.random() * 30) + 1;
    let x = elysium.x, y = elysium.y;
    do {
        x = mean(radius, innerWidth - radius * 2, Math.random() * innerWidth);
        y = mean(radius, innerHeight - radius * 2, Math.random() * innerHeight);
    } while (distance(elysium.x, elysium.y, x, y) < 500 && distance(hispania.x, hispania.y, x, y) < 500);
    let accelerationX = (Math.random() - .5) * 5;
    let accelerationY = (Math.random() - .5) * 5;
    return new Asteroid(x, y, accelerationX, accelerationY, 1, radius);
}


const asteroidCount = 15;
let asteroids = new Array(asteroidCount);
let lastTimeSpawned = 0;

let shipNumberOne = new SpaceShip(canvas.width / 2 + 50, canvas.height / 2, 'red');
let shipNumberTwo = new SpaceShip(canvas.width / 2 - 50, canvas.height / 2, 'blue');

let isGameLost = false;
let gameOverImg = new Image();
gameOverImg.src = 'img/gameover.jpg';

for (let i = 0; i < asteroidCount; i++) {
    asteroids[i] = createAsteroid(shipNumberOne, shipNumberTwo);
}

let score = 0;
let scoreX = canvas.width * .05;
let scoreY = canvas.height / 10;

let bulletSize = 5;

function onGameOver() {
    shipNumberOne.draw();
    shipNumberTwo.draw();
}

function deleteAsteroid(ship) {
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].update();

        if (distance(asteroids[i].x, asteroids[i].y, ship.x, ship.y) <= ship.radius + asteroids[i].radius) {
            isGameLost = true;
        }

        for (let j = 0; j < ship.bullets.length; j++) {
            if (distance(asteroids[i].x, asteroids[i].y, ship.bullets[j].x, ship.bullets[j].y) < asteroids[i].radius + bulletSize) {
                asteroids.splice(i, 1);
                ship.destroyBullet(j);
            }
        }
    }
}


function main(time = 0) {
    configurations();
    timeRunning = time;
    if (isGameLost) {
        return 0;
    }
    score += time / 131072;
    requestAnimationFrame(main);
    document.addEventListener('keydown', keyDown);
    document.addEventListener("keyup", keyUp);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    shipNumberOne.bullets.map(el => el.update());
    shipNumberTwo.bullets.map(el => el.update());

    deleteAsteroid(shipNumberOne);
    deleteAsteroid(shipNumberTwo);

    if (!isGameLost) {
        shipNumberOne.update(time);
        shipNumberTwo.update(time);
        ctx.fill();
        ctx.fillStyle = "red";
        ctx.font = "bold 40px Arial";
        let displayScore = Math.round(score);
        if (displayScore % 10 === 0 && displayScore !== lastTimeSpawned) {
            lastTimeSpawned = displayScore;
            asteroids.push(createAsteroid(shipNumberOne, shipNumberTwo));
            // asteroids.map(el => el.increaseSpeed());
        }
        ctx.fillText(displayScore.toString(), scoreX, scoreY);
    } else {
        onGameOver();
    }
}

main();

export {ctx, canvas};