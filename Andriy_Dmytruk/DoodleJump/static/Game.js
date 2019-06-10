import "./styles/Field.scss";
import "./styles/Game.scss";

import Doodle from "./Doodle";
import { doCollide, doCollideBottom, isInsideViewBox, sieveArray } from "./library";
import { createDefaultFieldEnemies, createDefaultFieldPlatforms } from "./helpers";

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
    const objectFilterFn = o => isInsideViewBox(o, viewBox);

    this.doodle.updateState(duration, translatePositionFn);

    const manageObjects = objectCollection => {
      const [objectsToRemove, objectsToUpdate] = sieveArray(objectFilterFn, objectCollection);
      objectsToRemove.forEach(o => o.destroy());
      objectsToUpdate.forEach(o => o.updateState(duration, translatePositionFn));
      return objectsToUpdate;
    };

    this.platforms = manageObjects(this.platforms);
    this.enemies = manageObjects(this.enemies);
    this.bullets = manageObjects(this.bullets);

    this.platforms.forEach(platform => {
      if (!this.doodle.dead && doCollideBottom(this.doodle, platform, duration)) {
        if (platform.canBeJumpedOnto()) this.doodle.jump();
        platform.jumpOnto();
      }
    });

    this.enemies.forEach(enemy => {
      if (enemy.canBeInteractedWith()) {
        if (!this.doodle.dead && doCollideBottom(this.doodle, enemy, duration)) {
          if (enemy.canBeInteractedWith()) this.doodle.jump();
          enemy.hit();
        } else if (doCollide(this.doodle, enemy)) this.doodle.dead = true;

        this.bullets.forEach(bullet => {
          if (doCollide(enemy, bullet) && bullet.canHit()) {
            enemy.hit();
            bullet.hit();
          }
        });
      }
    });

    if (this.topThreshold < this.doodle.y) {
      this.topThreshold = this.doodle.y;
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
      this.enemies.forEach(p => p.destroy());
      this.bullets.forEach(b => b.destroy());
    }

    this.topThreshold = this.height / 2;
    this.doodle = new Doodle(this.field, {
      centerX: this.width / 2,
      centerY: this.height / 2,
      minX: 0,
      maxX: this.width,
      controls: { left: "ArrowLeft", right: "ArrowRight" }
    });
    this.platforms = createDefaultFieldPlatforms(this.field, this.width);
    this.enemies = createDefaultFieldEnemies(this.field, this.width);
    this.bullets = [];
  }
}
