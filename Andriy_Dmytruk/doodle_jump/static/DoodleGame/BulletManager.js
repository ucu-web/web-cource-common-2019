import PhysicalObject from "./PhysicalObject";
import Element from "../Element/Element";
import {Enemy} from "./Enemy";

import "./styles/Bullet.scss";

class Bullet extends PhysicalObject {
    linkField(field) {
        this.element = new Element("bullet").parent(field.element);
    }

    constructor(field, x, y) {
        const width = 20, height = 20;
        super(x, y, width, height);

        this.field = field;
        this.linkField(field);
    }

    destructor() {
        this.element.rmParent();
    }

    draw() {
        this.element.absolutePosition(...this.field.translatePosition(this));
    }
}


export default class BulletManager {
    addListeners() {
        const shootUp = (e) => {
            if (e.key === " ") this.shoot(0);
        };
        const shootAngle = (e) => {
            const box = this.doodle.element.getRect();
            const x = box.left + this.doodle.width / 2, y = box.top - this.doodle.width / 2;
            let angle = - Math.atan((x - e.clientX) / (y - e.clientY));
            if (e.clientY > y) angle = e.clientX > x ? Math.PI + angle : angle - Math.PI;
            this.shoot(angle);
        };

        document.addEventListener("keydown", shootUp.bind(this), false);
        document.addEventListener("click", shootAngle.bind(this), false);
    }

    constructor(field, doodle) {
        this.field = field;
        this.doodle = doodle;

        this.bullets = [];

        this.addListeners();
    }

    shoot(angle) {
        if (Math.abs(angle) > Math.PI / 4) angle = Math.sign(angle) * Math.PI / 4;

        const velocity = 400;

        const bullet = new Bullet(
            this.field,
            this.doodle.x + this.doodle.width / 2 - 5 + 32 * Math.sin(angle),
            this.doodle.y + this.doodle.height - this.doodle.width / 2 + 32 * Math.cos(angle)
        );
        bullet.velocity.y = velocity * Math.cos(angle);
        bullet.velocity.x = velocity * Math.sin(angle);

        this.bullets.push(bullet);

        this.doodle.rotateNose(angle);
    }

    change(dur) {
        const isValid = (b) => b.y < this.field.bottom + this.field.height * 2
        this.bullets.forEach(b => !isValid(b) && b.destructor());
        this.bullets = this.bullets.filter(isValid);

        this.bullets.forEach(b => b.change(dur));
    }

    affect(o, dur) {
        this.bullets.forEach(b => {
            if (o instanceof Enemy && b.overlap(o)) {
                if (o.hit()) {
                    b.destructor();
                }
            }
        });
    }

    draw() {
        this.bullets.forEach(b => b.draw());
    }

}
