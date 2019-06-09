export default class Bullet {
    constructor(ctx, x, y, vectorVelocity, size) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.xVelocity = Math.cos(vectorVelocity) * 10;
        this.yVelocity = -Math.sin(vectorVelocity) * 10;
        this.size = size;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.strokeStyle = "red";
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    }

    update() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        this.draw();
    }
}
