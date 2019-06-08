import {getNewPositionBasedOnDuration} from "./helpers";

export default class Bullet {
    width = 20;
    height = 20;

    constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;

        this.element = document.createElement("div");
        this.element.className = "bullet";
    }

    setPosition(x, y) {
        this.element.style.bottom = y + "px";
        this.element.style.left = x + "px";
    };

    destroy() {
        this.element.parentNode &&
        this.element.parentNode.removeChild(this.element);
    }

    updateState(duration) {
        const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(this, duration);
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }
}

