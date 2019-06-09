import "./styles/Field.scss";
import "./styles/Game.scss";

import Doodle from "./Doodle";
import {
  createDefaultPlatforms,
  doCollideBottom,
  isInsideViewBox
} from "./helpers";

export default class Game {
  width = 600;
  height = 800;

  paused = false;
  topThreshold = 0;

  constructor(container) {
    const { width, height } = this;
    container.innerHTML = `
       <div class="game">
          <div class="field" style="width: ${width}px; height:${height}px;"></div>
       </div>     
    `;

    this.field = container.querySelector(".field");

    this.toInitialState();

    const handleKeyDown = ({ key }) => {
      if (key === " ") {
        const newBullet = this.doodle.shootBullet(this.field);
        this.bullets = [...this.bullets, newBullet];
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  }

  updateState(duration) {
    const translatePositionFn = (x, y) => {
      return { x, y: y - this.topThreshold + this.height / 2 };
    };

    const viewBox = {
      x: 0,
      y: this.topThreshold - this.height / 2,
      width: this.width,
      height: this.height
    };

    this.doodle.updateState(duration, translatePositionFn);

    this.platforms
      .filter(o => !isInsideViewBox(o, viewBox))
      .forEach(o => o.destroy());
    this.platforms = this.platforms.filter(o => isInsideViewBox(o, viewBox));
    this.platforms.forEach(p => p.updateState(duration, translatePositionFn));

    this.bullets
      .filter(o => !isInsideViewBox(o, viewBox))
      .forEach(o => o.destroy());
    this.bullets = this.bullets.filter(o => isInsideViewBox(o, viewBox));
    this.bullets.forEach(b => b.updateState(duration, translatePositionFn));

    this.platforms.forEach(platform => {
      if (doCollideBottom(this.doodle, platform, duration)) {
        if (platform.canBeJumpedOnto()) this.doodle.jump();
        platform.jumpOnto();
      }
    });

    const doodleCenterY = this.doodle.y + this.doodle.height / 2;
    if (this.topThreshold < doodleCenterY) {
      this.topThreshold = doodleCenterY;
    }

    if (this.doodle.y < this.topThreshold - this.height / 2) {
      console.log("Game over");
      this.toInitialState();
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

  toInitialState() {
    if (this.doodle) {
      this.doodle.destroy();
      this.platforms.forEach(p => p.destroy());
      this.bullets.forEach(b => b.destroy());
    }

    this.topThreshold = this.height / 2;
    this.doodle = new Doodle(this.field, {
      centerX: this.width / 2,
      centerY: this.height / 2,
      controls: { left: "ArrowLeft", right: "ArrowRight" }
    });
    this.platforms = createDefaultPlatforms(this.field, this.width);
    this.bullets = [];
  }
}
