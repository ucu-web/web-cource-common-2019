import "./styles/Platform.scss";
import { getNewPositionBasedOnDuration } from "./library";

class Platform {
  width = 60;
  height = 10;
  canBeJumpedOntoTimes = Infinity;
  jumpedOntoTimes = 0;

  constructor(container, { x, y, minX, maxX, minY, maxY }, type) {
    this.element = document.createElement("div");
    this.element.className = `platform__${type}`;

    this.x = x;
    this.y = y;
    this.restrictions = { minX, maxX, minY, maxY };

    switch (type) {
      case "static":
        break;

      case "breaking": {
        this.element.innerHTML = `<div class="platform__breaking-left"></div><div class="platform__breaking-right"></div>`;

        this.canBeJumpedOntoTimes = 0;
        this.updateElement = () => {
          if (this.jumpedOntoTimes > 0) {
            this.element
              .querySelector(".platform__breaking-left")
              .classList.add("platform__broken-left");
            this.element
              .querySelector(".platform__breaking-right")
              .classList.add("platform__broken-right");
          }
        };
        break;
      }

      case "disappearing": {
        this.canBeJumpedOntoTimes = 1;
        this.updateElement = () => {
          if (this.jumpedOntoTimes > 0) {
            this.element.classList.add("platform__disappeared");
          }
        };
        break;
      }

      case "horizontal": {
        this.velocityX = (0.02 + Math.random() * 0.06) * (Math.random > 0.5 ? 1 : -1);
        break;
      }

      case "vertical": {
        this.velocityY = (0.02 + Math.random() * 0.02) * (Math.random > 0.5 ? 1 : -1);
        break;
      }

      case "destructing": {
        this.timeBeforeDestroyed = 2000 + Math.random() * 4000;
        this.updateElement = () => {
          if (this.timeBeforeDestroyed < 1000) {
            this.element.classList.add("platform__destructing_alert");
          }
          if (this.timeBeforeDestroyed <= 0) {
            this.element.classList.add("platform__destroyed");
          }
        };
        break;
      }
    }

    container.appendChild(this.element);
  }

  destroy() {
    this.element.parentNode && this.element.parentNode.removeChild(this.element);
  }

  updateState(duration, translatePositionFn) {
    const { x, y, velocityX, velocityY } = getNewPositionBasedOnDuration(this, duration);
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;

    if (this.x >= this.restrictions.maxX - this.width) {
      this.velocityX = -Math.abs(this.velocityX);
    } else if (this.x <= this.restrictions.minX) {
      this.velocityX = Math.abs(this.velocityX);
    }

    if (this.y >= this.restrictions.maxY - this.height) {
      this.velocityY = -Math.abs(this.velocityY);
    } else if (this.y <= this.restrictions.minY) {
      this.velocityY = Math.abs(this.velocityY);
    }

    if (this.timeBeforeDestroyed < 0) {
      this.canBeJumpedOntoTimes = 0;
    } else if (this.timeBeforeDestroyed !== undefined) {
      this.timeBeforeDestroyed -= duration;
    }

    if (this.updateElement) this.updateElement();

    const { x: translatedX, y: translatedY } = translatePositionFn(x, y);
    this.element.style.bottom = translatedY + "px";
    this.element.style.left = translatedX + "px";
  }

  jumpOnto() {
    this.jumpedOntoTimes += 1;
  }

  canBeJumpedOnto() {
    return this.jumpedOntoTimes < this.canBeJumpedOntoTimes;
  }
}

export default Platform;
