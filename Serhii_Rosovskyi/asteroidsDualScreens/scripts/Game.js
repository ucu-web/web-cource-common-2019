import Asteroid from "./Asteroid.js";
import SpaceShip from "./SpaceShip.js";
import {
  distanceBetweenTwoCoordinates,
  getRandomCoordinate,
  getRandomColor
} from "./index.js";


export default class Game {
  constructor(canvas, players = 1, screens = 1, actors) {
    this.canvas = document.getElementById(canvas);
    this.canvas.style.display = "block";
    this.canvas.width = window.innerWidth / screens;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");

    this.isGameLost = false;
    this.timeRunning = 0;
    this.lastTimeSpawned = 0;
    this.destroyedAsteroids = 0;

    this.players = players;
    this.actors = actors;
    this.actors.map((actor, index) => {
      actor.subscribe(action => {
        if (action === "up") this.spaceShips[index].moveing = true;
        if (action === "left") this.spaceShips[index].rotCoef = 1;
        if (action === "right") this.spaceShips[index].rotCoef = -1;
        if (action === "down") this.spaceShips[index].fire(this.timeRunning);
      }, true);

      actor.subscribe(action => {
        if (action === "up") this.spaceShips[index].moveing = false;
        if (action === "left" || action === "right")
          this.spaceShips[index].rotCoef = 0;
      }, false);
    });

    this.score = 0;
    this.scoreX = this.canvas.width * 0.05;
    this.scoreY = this.canvas.height / 8;

    this.spaceShips = Array.from(
      { length: this.players },
      () =>
        new SpaceShip(
          this.ctx,
          this.canvas,
          this.canvas.width / 2,
          this.canvas.height / 2,
          getRandomColor()
        )
    );

    this.asteroids = Array.from({ length: 5 }, () => this.createAsteroid());

    this.render();
  }

  createAsteroid() {
    let radius = Math.round(Math.random() * 30) + 1;
    let coordinates = { x: this.spaceShips[0].x, y: this.spaceShips[0].y };
    do {
      coordinates = getRandomCoordinate(this.canvas, radius);
    } while (
      distanceBetweenTwoCoordinates(
        this.spaceShips[0].x,
        this.spaceShips[0].y,
        coordinates["x"],
        coordinates["y"]
      ) < 200
    );
    let xVelocity = (Math.random() - 0.5) * 5;
    let yVelocity = (Math.random() - 0.5) * 5;
    return new Asteroid(
      this.ctx,
      this.canvas,
      coordinates["x"],
      coordinates["y"],
      xVelocity,
      yVelocity,
      radius,
      getRandomColor()
    );
  }

  deleteAsteroid(spaceShip) {
    this.asteroids.map((asteroid, idx1) => {
      asteroid.update();
      if (
        distanceBetweenTwoCoordinates(
          asteroid.x,
          asteroid.y,
          spaceShip.x,
          spaceShip.y
        ) <=
        spaceShip.radius + asteroid.radius
      ) {
        this.isGameLost = true;
      }
      spaceShip.bullets.map((bull, idx2) => {
        if (
          distanceBetweenTwoCoordinates(
            asteroid.x,
            asteroid.y,
            bull.x,
            bull.y
          ) <
          asteroid.radius + bull.size
        ) {
          this.asteroids.splice(idx1, 1);
          this.destroyedAsteroids++;
          console.log(this.destroyedAsteroids);
          spaceShip.destroyBullet(idx2);
        }
      });
    });
  }

  onGameOver() {
    this.ctx.fill();
    this.ctx.fillStyle = "red";
    this.ctx.font = "bold 40px Arial";
    let displayScore = Math.round(this.score);
    this.ctx.fillText(displayScore.toString() + " - " + this.destroyedAsteroids.toString(), this.scoreX, this.scoreY);
    this.spaceShips.map(ship => ship.draw());
  }

  render(time = 0) {
    this.timeRunning = time;
    if (this.isGameLost) {
      return 0;
    }
    this.score += time / 250135;
    requestAnimationFrame(this.render.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.spaceShips.map(ship => {
      ship.bullets.map(bullet => bullet.update());
      this.deleteAsteroid(ship);
    });

    if (!this.isGameLost) {
      this.spaceShips.map(ship => ship.update(time));
      this.ctx.fill();
      this.ctx.fillStyle = "red";
      this.ctx.font = "bold 40px Arial";
      let displayScore = Math.round(this.score);
      if (displayScore % 10 === 0 && displayScore !== this.lastTimeSpawned) {
        this.lastTimeSpawned = displayScore;
        this.asteroids.push(this.createAsteroid());
        this.asteroids.map(el => el.increaseSpeed());
      }
      this.ctx.fillText(displayScore.toString() + " - " + this.destroyedAsteroids.toString(), this.scoreX, this.scoreY);
    } else {
      this.onGameOver();
    }
  }
}
