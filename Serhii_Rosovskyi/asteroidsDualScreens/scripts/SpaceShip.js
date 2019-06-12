import Bullet from "./Bullet.js";

export default class SpaceShip {
  constructor(ctx, canvas, x, y, color) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.size = 20;
    this.angle = (90 / 180) * Math.PI;
    this.radius = this.size / 2;
    this.lastFrame = 0;
    this.dt = 0;
    this.turnSpeed = 2 * Math.PI;
    this.rotCoef = 0;

    this.moveSpeed = 5;
    this.movePower = { x: 0, y: 0 };
    this.moveing = false;

    this.timeLastFired = 0;
    this.fireRate = 2;
    this.bullets = [];
    this.bulletSize = 4;

    this.color = color;

    this.fireSound = new Audio("audio/shoot.wav");
    this.moveSound = new Audio("audio/jetpack.wav");
    this.deathSound = new Audio("audio/lose.wav");
  }

  rotate() {
    this.angle += this.rotCoef * this.turnSpeed * this.dt;
  }

  draw() {
    this.ctx.strokeStyle = "black";
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = this.size / 20;
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.x + (4 / 3) * this.radius * Math.cos(this.angle),
      this.y - (4 / 3) * this.radius * Math.sin(this.angle)
    );
    this.ctx.lineTo(
      this.x -
        this.radius * ((2 / 3) * Math.cos(this.angle) + Math.sin(this.angle)),
      this.y +
        this.radius * ((2 / 3) * Math.sin(this.angle) - Math.cos(this.angle))
    );
    this.ctx.lineTo(
      this.x -
        this.radius * ((2 / 3) * Math.cos(this.angle) - Math.sin(this.angle)),
      this.y +
        this.radius * ((2 / 3) * Math.sin(this.angle) + Math.cos(this.angle))
    );

    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  move() {
    this.movePower.x += this.moveSpeed * Math.cos(this.angle) * this.dt;
    this.movePower.y -= this.moveSpeed * Math.sin(this.angle) * this.dt;
    this.x += this.movePower.x;
    this.y += this.movePower.y;
    this.moveSound.play();
  }

  decelerate() {
    let friction = 0.5;
    this.movePower.x -= friction * this.movePower.x * this.dt;
    this.movePower.y -= friction * this.movePower.y * this.dt;
    this.x += this.movePower.x;
    this.y += this.movePower.y;
  }

  fire(time) {
    if (time - this.timeLastFired > this.fireRate) {
      this.bullets.push(
        new Bullet(this.ctx, this.x, this.y, this.angle, this.bulletSize)
      );
      this.fireSound.play();
      this.timeLastFired = time;
    }
  }

  die() {
    this.deathSound.play();
  }

  update(time) {
    this.dt = (time - this.lastFrame) / 1024;
    this.draw();

    this.rotCoef !== 0 ? this.rotate() : null;
    this.moveing ? this.move() : this.decelerate();

    this.x < -this.radius
      ? (this.x = this.canvas.width - this.radius)
      : this.x > this.canvas.width - this.radius
      ? (this.x = +this.radius)
      : null;
    this.y < 0 - this.radius
      ? (this.y = this.canvas.height - this.radius)
      : this.y > this.canvas.height - this.radius
      ? (this.y = this.radius)
      : null;

    this.bullets.map((el, idx) =>
      el.x < 0 || el.y < 0 ? this.destroyBullet(idx) : null
    );
    this.lastFrame = time;
  }

  destroyBullet(i) {
    this.bullets.splice(i, 1);
  }
}
