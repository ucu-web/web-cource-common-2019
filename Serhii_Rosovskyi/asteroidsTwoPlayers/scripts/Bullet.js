import {ctx} from "./canvas.js";

class Bullet {
    constructor(x, y, a) {
        this.x = x;
        this.y = y;
        this.lambda = Math.cos(a) * 10;
        this.beta = -Math.sin(a) * 10;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.strokeStyle = "red";
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    update() {
        this.x += this.lambda;
        this.y += this.beta;
        this.draw();
    }
}

export {Bullet};