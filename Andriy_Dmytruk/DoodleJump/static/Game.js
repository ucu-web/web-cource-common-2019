import "./styles/Field.scss";
import "./styles/Game.scss";

import { createDoodle, shootBullet } from "./Doodle";
import { createDefaultPlatforms, doCollideBottom } from "./helpers";
import {
  getNewBulletBasedOnDuration,
  getNewDoodleBasedOnDuration,
  getNewPlatformBasedOnDuration
} from "./objectUpdaters";

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

    this.doodle = createDoodle(width / 2, height / 2);
    this.field.appendChild(this.doodle.element);

    const handleKeyDown = event => {
      if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
        let direction =
          event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
        this.doodle = {
          ...this.doodle,
          velocityX: direction * 400
        };
      }
      if (event.key === " ") {
        const { bullet: newBullet, doodle } = shootBullet(this.doodle, 0);
        this.field.appendChild(newBullet.element);
        this.bullets = [...this.bullets, newBullet];
        this.doodle = doodle;
      }
    };

    const handleKyeUp = ({ key }) => {
      const directionMap = {
        ArrowLeft: -1,
        ArrowRight: 1
      };
      const direction = directionMap[key] || 0;

      this.doodle = {
        ...this.doodle,
        velocityX:
          Math.sign(this.doodle.velocityX) === Math.sign(direction)
            ? 0
            : this.doodle.velocityX
      };
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKyeUp);
  }

  displayOnField(object) {
    object.element.style.bottom = object.y - this.fieldBottom + "px";
    object.element.style.left = object.x + "px";
  }

  doesObjectExist(object) {
    const exists =
      object.y > this.fieldBottom &&
      object.y < this.fieldBottom + this.height * 3;
    if (!exists && this.field.contains(object.element))
      this.field.removeChild(object.element);
    return exists;
  }

  updateState(duration) {
    this.doodle = getNewDoodleBasedOnDuration(this.doodle, duration, this.width);
    this.platforms = this.platforms
      .map(p => getNewPlatformBasedOnDuration(p, duration, this.width))
      .filter(p => this.doesObjectExist(p));

    this.bullets = this.bullets
      .map(b => getNewBulletBasedOnDuration(b, duration))
      .filter(b => this.doesObjectExist(b));

    this.platforms = this.platforms.map(platform => {
      if (doCollideBottom(this.doodle, platform, duration)) {
        if (platform.jumpedOntoTimes < platform.canBeJumpedOntoTimes) {
          this.doodle = { ...this.doodle, velocityY: 500 };
        }
        return {
          ...platform,
          jumpedOntoTimes: platform.jumpedOntoTimes + 1
        };
      }
      return platform;
    });

    // display
    if (
      this.fieldBottom <
      this.doodle.y - this.height / 2 + this.doodle.height / 2
    ) {
      this.fieldBottom =
        this.doodle.y - this.height / 2 + this.doodle.height / 2;
    }

    this.displayOnField(this.doodle);

    this.platforms.map(p => this.displayOnField(p));
    this.bullets.map(b => this.displayOnField(b));
  }

  renderAnimationFrame() {
    let lastUpdateTime = 0;
    const render = time => {
      if (this.paused) return;

      time /= 1000; //TODO: fix it
      const duration = time - lastUpdateTime;
      lastUpdateTime = time;

      //TODO: fix it
      if (duration < 1) this.updateState(duration);

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
