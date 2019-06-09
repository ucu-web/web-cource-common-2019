import {ctx} from "./canvas.js";

export class Asteroid {
    constructor(x, y, dx, dy, a, radius, imageNumber) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.imageNumber = imageNumber;
    }

    draw() {
        ctx.beginPath();
        let image = document.getElementsByClassName("asteroid")[this.imageNumber];
        ctx.drawImage(image, this.x, this.y, this.radius * 2, this.radius * 2);
        ctx.strokeStyle = 'red';
    }

    update() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

    increaseSpeed() {
        this.dx += this.dx * 0.1;
        this.dy += this.dy * 0.1;
    }
}