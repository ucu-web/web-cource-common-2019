class Bullet {
    constructor(ctx, x, y, a) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.lambda = Math.cos(a) * 10;
        this.beta = -Math.sin(a) * 10;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        this.ctx.strokeStyle = "red";
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    }

    update() {
        this.x += this.lambda;
        this.y += this.beta;
        this.draw();
    }
}

export {Bullet};