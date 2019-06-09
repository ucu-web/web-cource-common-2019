import "./styles/Doodle.scss";
import "./styles/Bullet.scss";
import {
  clamp,
  clampCircular,
  getAngleBetweenPoints,
  getNewPositionBasedOnDuration
} from "./library";
import Bullet from "./Bullet";

export class Doodle {
  width = 40;
  height = 60;
  accelerationY = -0.0006;

  constructor(container, { centerX, centerY, minX, maxX, controls }) {
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

    const handleMouseMove = ({ clientX, clientY }) => {
      this.targetObjectPosition = { x: clientX, y: clientY };
    };

    const directionMap = { [controls.left]: -1, [controls.right]: 1 };
    const handleKeyDown = ({ key }) => {
      const direction = directionMap[key] || 0;

      if (Math.sign(this.accelerationX) !== Math.sign(direction)) {
        this.velocityX = direction * 0.2;
        this.accelerationX = direction * 0.0003;
      }
    };

    const handleKeyUp = ({ key }) => {
      const direction = directionMap[key] || 0;

      if (Math.sign(this.velocityX) === Math.sign(direction)) {
        this.accelerationX = 0;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }

  destroy() {
    this.element.parentNode && this.element.parentNode.removeChild(this.element);
  }

  rotateNose() {
    if (!this.targetObjectPosition) return;
    const { x: mouseX, y: mouseY } = this.targetObjectPosition;
    const { x: doodleX, y: doodleY } = this.element.getBoundingClientRect();
    let angle = getAngleBetweenPoints(
      doodleX + this.width / 2,
      doodleY + this.height / 2,
      mouseX,
      mouseY
    );

    //Do not allow to shoot down
    this.noseAngle = clamp(-Math.PI / 2, Math.PI / 2, angle);

    const nose = this.element.querySelector(".doodle__nose");
    //When we change nose position by mousemove we should turn off animation.
    nose.style.transition = "0s";
    nose.style.transform = "rotate(" + (this.noseAngle - Math.PI / 2) + "rad)";
  }

  shootBullet(container) {
    const angle = this.noseAngle;
    const velocity = 0.4;
    const noseLength = 32;

    return new Bullet(container, {
      centerX: this.x + this.width / 2 + noseLength * Math.sin(angle),
      centerY: this.y + this.height - this.width / 2 + noseLength * Math.cos(angle),
      velocityX: velocity * Math.sin(angle),
      velocityY: velocity * Math.cos(angle)
    });
  }

  updateElement() {
    if (this.velocityY >= 0.2) this.element.classList.add("doodle_jumping");
    else this.element.classList.remove("doodle_jumping");

    if (this.velocityX < 0) this.element.classList.add("doodle_left");
    if (this.velocityX > 0) this.element.classList.remove("doodle_left");

    this.rotateNose();
  }

  updateState(duration, translatePositionFn) {
    const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(this, duration);
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.x = clampCircular(this.restrictions.minX, this.restrictions.maxX, this.x);
    this.velocityY = clamp(-700, 700, this.velocityY);

    // doodle inertia
    const airFrictionAcceleration = 0.001;
    if (Math.abs(this.velocityX) < airFrictionAcceleration * duration) {
      this.velocityX = 0;
    } else if (!this.accelerationX) {
      this.velocityX -= Math.sign(this.velocityX) * airFrictionAcceleration * duration;
    }

    this.updateElement();

    const { x: translatedX, y: translatedY } = translatePositionFn(x, y);
    this.element.style.bottom = translatedY + "px";
    this.element.style.left = translatedX + "px";
  }

  jump() {
    this.velocityY = 0.5;
  }
}

export default Doodle;
