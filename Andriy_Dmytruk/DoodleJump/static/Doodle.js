import "./styles/Doodle.scss";
import "./styles/Bullet.scss";

class Bullet {
  width = 20;
  height = 20;

  constructor(x, y, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.element = document.createElement("div");
    this.element.className = "bullet";
  }

  setPosition = (x, y) => {
    this.element.style.bottom = y + "px";
    this.element.style.left = x + "px";
  };

  destroy = () =>
    this.element.parentNode &&
    this.element.parentNode.removeChild(this.element);
}

export class Doodle {
  width = 40;
  height = 60;
  accelerationY = -0.0006;
  lastNoseRotate = 1;

  setPosition = (x, y) => {
    this.element.style.bottom = y + "px";
    this.element.style.left = x + "px";
  };

  destroy = () =>
    this.element.parentNode &&
    this.element.parentNode.removeChild(doodle.element);

  rotateNose = angle => {
    const nose = this.element.querySelector(".doodle__nose");

    angle = -Math.PI / 2 + angle;
    nose.style.transition = "0s";
    nose.style.transform = "rotate(" + angle + "rad)";

    return { ...this, lastNoseRotate: 0 };
  };

  shootBullet = angle => {
    if (Math.abs(angle) > Math.PI / 4) angle = (Math.sign(angle) * Math.PI) / 4;
    const velocity = 0.4;

    const bullet = new Bullet(
      this.x + this.width / 2 - 5 + 32 * Math.sin(angle),
      this.y + this.height - this.width / 2 + 32 * Math.cos(angle),
      velocity * Math.sin(angle),
      velocity * Math.cos(angle)
    );

    return { doodle: this.rotateNose(angle), bullet };
  };

  updateElement = () => {
    const nose = this.element.querySelector(".doodle__nose");

    if (this.velocityY >= 0.2) this.element.classList.add("doodle_jumping");
    else this.element.classList.remove("doodle_jumping");

    if (this.velocityX < 0) this.element.classList.add("doodle_left");
    if (this.velocityX > 0) this.element.classList.remove("doodle_left");

    if (this.lastNoseRotate > 500) {
      nose.style.transition = "";
      nose.style.transform = "";
    }
  };

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
}

export default Doodle;
