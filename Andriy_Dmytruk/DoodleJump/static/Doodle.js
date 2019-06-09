import "./styles/Doodle.scss";
import "./styles/Bullet.scss";
import {getAngleBetweenPoints, getNewPositionBasedOnDuration} from "./helpers";
import Bullet from "./Bullet";

export class Doodle {
  width = 40;
  height = 60;
  accelerationY = -0.0006;
  lastNoseRotate = 1;

  constructor(container, { centerX, centerY, minX, maxX }) {
    this.x = centerX - 20;
    this.y = centerY - 30;

    this.restrictions = { minX, maxX };

    this.element = document.createElement("div");
    this.element.classList.add("doodle");

    this.element.innerHTML = `
        <div class="doodle__body">
            <div class="doodle__legs"> 
                <div class="doodle__leg" style="left: 0"> 
                    <div class="doodle__foot"></div> 
                </div>
                <div class="doodle__leg" style="left: 8px"> 
                    <div class="doodle__foot"></div> 
                </div>
                <div class="doodle__leg" style="left: 16px"> 
                    <div class="doodle__foot"></div> 
                </div>
                <div class="doodle__leg" style="left: 24px"> 
                    <div class="doodle__foot"></div> 
                </div>
            </div>
            <div class="doodle__bottom"></div>
            <div class="doodle__nose">
                <div class="doodle__nose-begin"></div>
                <div class="doodle__nose-end"></div>
            </div>
            <div class="doodle__eye-left"></div>
            <div class="doodle__eye-right"></div>
        </div>`;

    container.appendChild(this.element);
  }

  setPosition(x, y) {
    this.element.style.bottom = y + "px";
    this.element.style.left = x + "px";
  }

  destroy() {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  }

  rotateNose(angle) {
    const nose = this.element.querySelector(".doodle__nose");

    angle = -Math.PI / 2 + angle;
    nose.style.transition = "0s";
    nose.style.transform = "rotate(" + angle + "rad)";

    this.lastNoseRotate = 0;
  }

  shootBullet(container, {x, y}) {
    const {x: doodleX, y: doodleY} = this.element.getBoundingClientRect();
    let angle = getAngleBetweenPoints(doodleX + this.width / 2, doodleY + this.height / 2, x, y);

    if (Math.abs(angle) > Math.PI / 2) angle = (Math.sign(angle) * Math.PI) / 2;
    const velocity = 0.4;
    const noseLength = 32;

    this.rotateNose(angle);
    return new Bullet(container, {
      centerX: this.x + this.width / 2 + noseLength * Math.sin(angle),
      centerY:
        this.y + this.height - this.width / 2 + noseLength * Math.cos(angle),
      velocityX: velocity * Math.sin(angle),
      velocityY: velocity * Math.cos(angle)
    });
  }

  updateElement() {
    const nose = this.element.querySelector(".doodle__nose");

    if (this.velocityY >= 0.2) this.element.classList.add("doodle_jumping");
    else this.element.classList.remove("doodle_jumping");

    if (this.velocityX < 0) this.element.classList.add("doodle_left");
    if (this.velocityX > 0) this.element.classList.remove("doodle_left");

    if (this.lastNoseRotate > 500) {
      nose.style.transition = "";
      nose.style.transform = "";
    }
  }

  updateState(duration, translatePositionFn) {
    const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(
      this,
      duration
    );
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    if (this.x < this.restrictions.minX + this.width / 2)
      this.x = this.restrictions.maxX - this.width / 2;
    else if (this.x > this.restrictions.maxX - this.width / 2)
      this.x = this.restrictions.minX + this.width / 2;

    if (this.velocityY < -700) this.velocityY = -700;
    this.lastNoseRotate += duration;

    // doodle inertia
    let airFrictionAcceleration = 0.001;
    if (Math.abs(this.velocityX) < airFrictionAcceleration * duration) {
      this.velocityX = 0;
    } else if (!this.accelerationX) {
      this.velocityX -=
        Math.sign(this.velocityX) * airFrictionAcceleration * duration;
    }

    this.updateElement();

    const { x: translatedX, y: translatedY } = translatePositionFn(x, y);
    this.element.style.bottom = translatedY + "px";
    this.element.style.left = translatedX + "px";
  }

  move(direction) {
    if (Math.sign(this.accelerationX) !== Math.sign(direction)) {
      // give acceleration and some starting velocity
      this.velocityX = direction * 0.2;
      this.accelerationX = direction * 0.0003;
    }
  }

  stopMovementInDirection(direction) {
    if (Math.sign(this.velocityX) === Math.sign(direction)) {
      this.accelerationX = 0;
    }
  }

  jump() {
    this.velocityY = 0.5;
  }
}

export default Doodle;
