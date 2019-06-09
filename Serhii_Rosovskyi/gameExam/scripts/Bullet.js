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
        let image = document.getElementById("fire");
        ctx.drawImage(image, this.x, this.y, 30, 30);
    }

    update() {
        this.x += this.lambda;
        this.y += this.beta;
        this.draw();
    }
}

export {Bullet};