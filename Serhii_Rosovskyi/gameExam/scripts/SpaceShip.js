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

        this.thrustSpeed = 5;
        this.thrustPower = {x: 0, y: 0};
        this.thrusting = false;
        this.thrustSound = new Audio("audio/thrust.wav");

        this.fireSound = new Audio("audio/fire.wav");
        this.timeLastFired = 1;
        this.fireRate = 20;
        this.bullets = [];

        this.deathSound = new Audio("audio/bang.wav");

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

    thrust() {
        this.thrustPower.x += this.thrustSpeed * Math.cos(this.a) * this.dt;
        this.thrustPower.y -= this.thrustSpeed * Math.sin(this.a) * this.dt;
        this.x += this.thrustPower.x;
        this.y += this.thrustPower.y;
        this.thrustSound.play();
    }

    decelerate() {
        let friction = .5;
        this.thrustPower.x -= friction * this.thrustPower.x * this.dt;
        this.thrustPower.y -= friction * this.thrustPower.y * this.dt;
        this.x += this.thrustPower.x;
        this.y += this.thrustPower.y;
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
        this.thrusting ? this.thrust() : this.decelerate();

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