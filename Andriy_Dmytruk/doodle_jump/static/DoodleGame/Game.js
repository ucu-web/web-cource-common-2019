import FieldGenerator from "./FieldGenerator";
import Menu from "./Menu";
import Field from "./Field";
import Element from "../Element/Element";

import "./styles/Game.scss";

export default class DoodleGame {
    linkContainer(container) {
        this.element = new Element("game").parent(container);

        this.scale();
        window.addEventListener("resize", this.scale.bind(this));
    }

    scale() {
        let scaleWidth = window.innerWidth / this.width;
        let scaleHeight = window.innerHeight / this.height;

        this.element.style.transform = `scale(${scaleWidth > scaleHeight ? scaleHeight : scaleWidth})`;
    }

    addListeners() {
        const toggleHidden = (e) => document.hidden ? this.pause() : null;
        document.addEventListener('visibilitychange', toggleHidden.bind(this));
    }

    constructor(container) {
        this.width = 600;
        this.height = 800;

        this.linkContainer(container);

        this.field = new Field(this.element, this.width, this.height);
        this.fieldGenerator = new FieldGenerator(this.field);
        this.fieldGenerator.reset();
        this.menu = new Menu(this, this.element, this.width, this.height);

        this.addListeners();

        this.lastFrame = 0;
        this.paused = false;
    }

    get score() { return Math.floor(this.field.bottom); }

    play() {
        // Private function
        if (this.paused) return;

        const currentFrame = new Date().getTime();
        let duration = (currentFrame - this.lastFrame) / 1000; // seconds
        if (!this.lastFrame || duration > 1) {
            this.lastFrame = currentFrame;
            this.frameRequest = requestAnimationFrame(this.play.bind(this));
            return;
        }

        this.lastFrame = currentFrame;

        this.field.change(duration);
        this.fieldGenerator.change(duration);
        this.field.draw();
        this.menu.draw();

        if (this.isLost()) {
            this.menu.end();
        }

        this.frameRequest = requestAnimationFrame(this.play.bind(this));
    }

    isLost() {
        return this.field.doodle.y + this.field.doodle.height < this.field.bottom;
    }

    start() {
        this.paused = false;
        this.play();
        this.menu.hidden = true;
    }

    pause() {
        this.paused = true;
        this.lastFrame = 0;
        this.menu.pause();
    }

    restart() {
        this.paused = true;
        this.fieldGenerator.reset();
        this.paused = false;
        this.menu.hidden = true;

    }
}
