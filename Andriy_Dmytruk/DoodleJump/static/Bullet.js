import { getNewPositionBasedOnDuration } from "./library";

export default class Bullet {
  width = 10;
  height = 10;
  exists = true;

  constructor(container, { centerX, centerY, velocityX, velocityY }) {
    this.x = centerX - this.width / 2;
    this.y = centerY - this.height / 2;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.element = document.createElement("div");
    this.element.className = "bullet";

    container.appendChild(this.element);
  }

  destroy() {
    this.element.parentNode && this.element.parentNode.removeChild(this.element);
  }

  updateState(duration, translatePositionFn) {
    const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(this, duration);
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    if (!this.exists) this.element.classList.add("bullet_hit");

    const { x: translatedX, y: translatedY } = translatePositionFn(x, y);
    this.element.style.bottom = translatedY + "px";
    this.element.style.left = translatedX + "px";
  }

  canHit() {
    return this.exists;
  }

  hit() {
    this.exists = false;
  }
}
