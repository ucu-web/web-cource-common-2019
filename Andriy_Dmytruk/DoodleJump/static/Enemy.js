import "./styles/Enemy.scss";

export default class Enemy {
  width = 60;
  height = 60;
  health = 1;
  lastHit = NaN;

  constructor(container, { x, y }) {
    this.x = x;
    this.y = y;

    this.element = document.createElement("div");
    this.element.className = "enemy";
    this.element.innerHTML = `
    <div class="enemy__face">
      <div class="enemy__eye-left"></div>
      <div class="enemy__eye-right"></div>
      <div class="enemy__mouth"></div>
    </div>
    `;

    container.appendChild(this.element);
  }

  destroy() {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  }

  hit() {
    this.lastHit = 0;
    this.health--;
  }

  canBeJumpedOnto() {
    return this.health > 0;
  }

  jumpOnto() {
    this.health = 0;
  }

  canKill() {
    return this.health > 0;
  }

  updateState(duration, translatePositionFn) {
    this.lastHit += duration;

    this.updateElement();

    const { x: translatedX, y: translatedY } = translatePositionFn(this.x, this.y);
    this.element.style.bottom = translatedY + "px";
    this.element.style.left = translatedX + "px";
  }

  updateElement() {
    if (this.health <= 0) {
      this.element.className = "enemy enemy_dead";
    } else if (this.lastHit < 200) {
      this.element.className = "enemy enemy_hit";
    } else {
      this.element.className = "enemy";
    }
  }
}
