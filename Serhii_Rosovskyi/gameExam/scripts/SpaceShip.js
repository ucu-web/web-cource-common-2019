import {Bullet} from "./Bullet.js";
import {ctx, canvas} from "./canvas.js";

class SpaceShip {

    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.size = 20;
        this.a = 90 / 180 * Math.PI;
        this.radius = this.size / 2;
        this.lastFrame = 0;
        this.dt = 1;
        this.turnSpeed = 2 * Math.PI;
        this.rotCoef = 0;

        this.moveSpeed = 5;
        this.movePower = {x: 0, y: 0};
        this.moveing = false;

        this.timeLastFired = 0;
        this.fireRate = 10;
        this.bullets = [];

        this.fireSound = new Audio("audio/shoot.wav");
        this.moveSound = new Audio("audio/jetpack.wav");
        this.deathSound = new Audio("audio/lose.wav");

    }

    rotate() {
        this.a += this.rotCoef * this.turnSpeed * this.dt;
    }

    draw() {
        ctx.strokeStyle = "black";
        ctx.fillStyle = "red";
        ctx.lineWidth = this.size / 20;
        ctx.beginPath();
        ctx.moveTo(
            this.x + 4 / 3 * this.radius * Math.cos(this.a),
            this.y - 4 / 3 * this.radius * Math.sin(this.a)
        );
        ctx.lineTo(
            this.x - this.radius * (2 / 3 * Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.radius * (2 / 3 * Math.sin(this.a) - Math.cos(this.a))
        );
        ctx.lineTo(
            this.x - this.radius * (2 / 3 * Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.radius * (2 / 3 * Math.sin(this.a) + Math.cos(this.a))
        );

        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };

    move() {
        this.movePower.x += this.moveSpeed * Math.cos(this.a) * this.dt;
        this.movePower.y -= this.moveSpeed * Math.sin(this.a) * this.dt;
        this.x += this.movePower.x;
        this.y += this.movePower.y;
        this.moveSound.play();
    }

    decelerate() {
        let friction = .5;
        this.movePower.x -= friction * this.movePower.x * this.dt;
        this.movePower.y -= friction * this.movePower.y * this.dt;
        this.x += this.movePower.x;
        this.y += this.movePower.y;
    }

    fire(time) {
        if (time - this.timeLastFired > this.fireRate) {
            this.bullets.push(new Bullet(this.x, this.y, this.a));
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

        this.x < - this.radius ? this.x = canvas.width - this.radius : (this.x > canvas.width - this.radius ? this.x = +this.radius : null);
        this.y < 0 - this.radius ? this.y = canvas.height - this.radius : (this.y > canvas.height - this.radius ? this.y = this.radius : null);

        this.bullets.map((el, idx) => (el.x < 0 || el.y < 0) ? this.destroyBullet(idx) : null);
        this.lastFrame = time;
    }

    destroyBullet(i) {
        this.bullets.splice(i, 1);
    }
}

export {SpaceShip};