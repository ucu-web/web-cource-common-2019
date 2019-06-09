import { canvas } from "../../asteroidsTwoPlayers/scripts/canvas";

export default class Asteroid {
  constructor(ctx, x, y, accelarteX, accelarteY, a, radius) {
    this.ctx = ctx;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.accelarteX = accelarteX;
    this.accelarteY = accelarteY;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = "#fff";
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.stroke();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.accelarteX = -this.accelarteX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.accelarteY = -this.accelarteY;
    }

    this.x += this.accelarteX;
    this.y += this.accelarteY;
    this.draw();
  }

  increaseSpeed() {
    this.accelarteX += this.accelarteX * 0.1;
    this.accelarteY += this.accelarteY * 0.1;
  }
}
