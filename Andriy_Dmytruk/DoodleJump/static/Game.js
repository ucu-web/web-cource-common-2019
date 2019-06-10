import "./styles/Field.scss";
import "./styles/Game.scss";

import Doodle from "./Doodle";
import { doCollide, doCollideBottom, isInsideViewBox, sieveArray } from "./library";
import { createDefaultFieldObjects } from "./helpers";
import Enemy from "./Enemy";

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

    const [objectsToRemove, objectsToUpdate] = sieveArray(objectFilterFn, this.objects);
    objectsToRemove.forEach(o => o.destroy());
    objectsToUpdate.forEach(o => o.updateState(duration, translatePositionFn));
    this.objects = objectsToUpdate;

    const [bulletsToRemove, bulletsToUpdate] = sieveArray(objectFilterFn, this.bullets);
    bulletsToRemove.forEach(o => o.destroy());
    this.bullets.forEach(o => o.updateState(duration, translatePositionFn));
    this.bullets = bulletsToUpdate;

    this.objects.forEach(object => {
      if (!this.doodle.dead && doCollideBottom(this.doodle, object, duration)) {
        if (object.canBeJumpedOnto()) this.doodle.jump();
        object.jumpOnto();
      }

      if (object.canKill && object.canKill()) {
        if (doCollide(this.doodle, object)) this.doodle.dead = true;

        this.bullets.forEach(bullet => {
          if (doCollide(object, bullet) && bullet.canHit()) {
            object.hit();
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
      this.objects.forEach(p => p.destroy());
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
    this.objects = createDefaultFieldObjects(this.field, this.width);
    this.bullets = [];
  }
}
