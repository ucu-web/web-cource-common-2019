import "./styles/Doodle.scss";
import "./styles/Bullet.scss";
import { getNewPositionBasedOnDuration } from "./helpers";
import Bullet from "./Bullet";

export class Doodle {
  width = 40;
  height = 60;
  accelerationY = -0.0006;
  lastNoseRotate = 1;

  constructor(centerX, centerY) {
    this.x = centerX - 20;
    this.y = centerY - 30;

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
  }

  setPosition(x, y) {
    this.element.style.bottom = y + "px";
    this.element.style.left = x + "px";
  }

  destroy() {
    this.element.parentNode &&
      this.element.parentNode.removeChild(doodle.element);
  }

  rotateNose(angle) {
    const nose = this.element.querySelector(".doodle__nose");

    angle = -Math.PI / 2 + angle;
    nose.style.transition = "0s";
    nose.style.transform = "rotate(" + angle + "rad)";

    this.lastNoseRotate = 0;
  }

  shootBullet(angle) {
    this.rotateNose(angle);

    if (Math.abs(angle) > Math.PI / 4) angle = (Math.sign(angle) * Math.PI) / 4;
    const velocity = 0.4;

    return new Bullet(
        this.x + this.width / 2 - 5 + 32 * Math.sin(angle),
        this.y + this.height - this.width / 2 + 32 * Math.cos(angle),
        velocity * Math.sin(angle),
        velocity * Math.cos(angle)
    );
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

  updateState(duration, fieldWidth) {
    const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(this, duration);
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    if (this.x < this.width / 2) this.x = fieldWidth - this.width / 2;
    else if (this.x > fieldWidth - this.width / 2) this.x = this.width / 2;

    if (this.velocityY < -700) this.velocityY = -700;
    this.lastNoseRotate += duration;

    this.updateElement();
  }

  move(direction) {
    this.velocityX = direction * 0.4;
  }

  stopMovementInDirection(direction) {
    if (Math.sign(this.velocityX) === Math.sign(direction))
      this.velocityX = 0;
  }

  jump() {
    this.velocityY = 0.5;
  }
}

export default Doodle;
