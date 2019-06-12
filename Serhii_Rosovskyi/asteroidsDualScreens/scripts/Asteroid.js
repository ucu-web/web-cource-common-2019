export default class Asteroid {
  constructor(ctx, canvas, x, y, xVelocity, yVelocity, radius, color) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.color = color;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = "#fff";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.stroke();
  }

  update() {
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.xVelocity = -this.xVelocity;
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.yVelocity = -this.yVelocity;
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.draw();
  }

  increaseSpeed() {
    this.accelarteX += this.xVelocity * 0.1;
    this.accelarteY += this.yVelocity * 0.1;
  }
}
