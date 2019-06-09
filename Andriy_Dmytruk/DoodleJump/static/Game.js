import "./styles/Field.scss";
import "./styles/Game.scss";

import Doodle from "./Doodle";
import { createDefaultPlatforms, doCollideBottom } from "./helpers";

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

    let mousePosition;
    const handleMouseMove = ({clientX, clientY}) => {
      mousePosition = {x: clientX, y: clientY};
    };

    const handleKeyDown = ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          return this.doodle.move(-1);
        case "ArrowRight":
          return this.doodle.move(1);
        case " ":
          const newBullet = this.doodle.shootBullet(this.field, mousePosition);
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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }

  updateState(duration) {
    const translatePositionFn = (x, y) => {
      return { x, y: y - this.topThreshold + this.height / 2 };
    };

    const isInsideViewBox = object =>
      object.y > this.topThreshold - this.height / 2 &&
      object.y < this.topThreshold + this.height * 3;

    this.doodle.updateState(duration, translatePositionFn);

    this.platforms.filter(o => !isInsideViewBox(o)).forEach(o => o.destroy());
    this.platforms = this.platforms.filter(isInsideViewBox);
    this.platforms.forEach(p => p.updateState(duration, translatePositionFn));

    this.bullets.filter(o => !isInsideViewBox(o)).forEach(o => o.destroy());
    this.bullets = this.bullets.filter(isInsideViewBox);
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
      centerY: this.height / 2
    });
    this.platforms = createDefaultPlatforms(this.field, this.width);
    this.bullets = [];
  }
}
