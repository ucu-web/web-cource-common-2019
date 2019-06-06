import Doodle from "./Doodle";
import BulletManager from "./BulletManager";
import Element from "../Element/Element";
import PhysicalObject from "./PhysicalObject";

import "./styles/Field.scss";

export default class Field {
    linkContainer(container) {
        const background = new Element("field__background").insertInto(container);
        this.element = new Element("field").dimensions(this.width, this.height).insertInto(background);
    }

    constructor(container, width, height) {
        this.width = width;
        this.height = height;
        this.bottom = 0;

        this.linkContainer(container);

        this.doodle = new Doodle(this);
        this.bullets = [];
        this.objects = [];
        this.enemies = [];
    }

    translatePosition(object) {
        if (object instanceof PhysicalObject) {
            let x = object.pos.x;
            let y = (object.pos.y - this.bottom);
            return [x, y];
        }
    }

    changeFocus(dur) {
        const doodleCenter = this.doodle.pos.y + this.doodle.height / 2;
        if (this.bottom + this.height / 2 < doodleCenter) {
            this.bottom = doodleCenter - this.height / 2;
        }
    }

    change(dur) {
        this.doodle.change(dur);
        this.objects.forEach(p => p.change(dur));
        this.enemies.forEach(e => e.change(dur));
        this.bulletManager.change(dur);

        this.objects.forEach(p => this.doodle.affect(p, dur));
        this.enemies.forEach(o => { this.doodle.affect(o, dur); this.bulletManager.affect(o, dur)} );

        this.changeFocus();
    }

    draw() {
        this.doodle.draw();
        this.objects.forEach(p => p.draw());
        this.enemies.forEach(e => e.draw());
        this.bulletManager.draw();
    }
}
