import {getNewPositionBasedOnDuration} from "./helpers";

export default class Bullet {
    width = 10;
    height = 10;

    constructor(container, {centerX, centerY, velocityX, velocityY}) {
        this.x = centerX - this.width / 2;
        this.y = centerY - this.height / 2;
        this.velocityX = velocityX;
        this.velocityY = velocityY;

        this.element = document.createElement("div");
        this.element.className = "bullet";

        container.appendChild(this.element);
    }

    destroy() {
        this.element.parentNode &&
        this.element.parentNode.removeChild(this.element);
    }

    updateState(duration, translatePositionFn) {
        const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(this, duration);
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;

        const {x: translatedX, y: translatedY} = translatePositionFn(x, y);
        this.element.style.bottom = translatedY + "px";
        this.element.style.left = translatedX + "px";
    }
}

