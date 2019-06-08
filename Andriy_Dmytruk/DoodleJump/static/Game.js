import "./styles/Field.scss";
import "./styles/Game.scss";

import { Doodle } from "./Doodle";
import { createDefaultPlatforms, doCollideBottom } from "./helpers";

export default class Game {
  width = 600;
  height = 800;

  paused = false;
  platforms = [...createDefaultPlatforms()];
  bullets = [];

  fieldBottom = 0;

  constructor(container) {
    const { width, height } = this;
    container.innerHTML = `
       <div class="game">
          <div class="field" style="width: ${width}px; height:${height}px;"></div>
       </div>     
    `;

    this.field = container.querySelector(".field");
    this.platforms.forEach(p => this.field.appendChild(p.element));

    this.doodle = new Doodle(width / 2, height / 2);

    this.field.appendChild(this.doodle.element);

    const handleKeyDown = ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          return this.doodle.move(-1);
        case "ArrowRight":
          return this.doodle.move(1);
        case " ":
          const newBullet = this.doodle.shootBullet(0);
          this.field.appendChild(newBullet.element);
          this.bullets = [...this.bullets, newBullet];
      }
    };

    const handleKeyUp = ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          return this.doodle.stopMovementInDirection(-1);
        case "ArrowRight":
          return this.doodle.stopMovementInDirection(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }

  translatePosition = (x, y) => {
      return {x, y: y - this.fieldBottom};
  };

  doesObjectExist(object) {
    const exists =
      object.y > this.fieldBottom &&
      object.y < this.fieldBottom + this.height * 3;
    if (!exists) object.destroy();
    return exists;
  }

  updateState(duration) {
    this.doodle.updateState(duration, this.width, this.translatePosition);
    this.platforms = this.platforms.filter(p => this.doesObjectExist(p));
    this.platforms.forEach(p => p.updateState(duration, this.width, this.translatePosition));

    this.bullets = this.bullets.filter(b => this.doesObjectExist(b));
    this.bullets.forEach(b => b.updateState(duration, this.translatePosition));

    this.platforms.forEach(platform => {
      if (doCollideBottom(this.doodle, platform, duration)) {
        if (platform.canBeJumpedOnto()) this.doodle.jump();
        platform.jumpOnto();
      }
    });

    // display
    if (
      this.fieldBottom <
      this.doodle.y - this.height / 2 + this.doodle.height / 2
    ) {
      this.fieldBottom =
        this.doodle.y - this.height / 2 + this.doodle.height / 2;
    }
  }

  renderAnimationFrame() {
    let lastUpdateTime;
    const render = time => {
      if (this.paused) return;

      const duration = time - lastUpdateTime;
      lastUpdateTime = time;

      this.updateState(duration || 0);

      requestAnimationFrame(render);
    };

    render();
  }

  pause() {
    this.paused = true;
  }

  play() {
    this.paused = false;
    this.renderAnimationFrame();
  }
}
