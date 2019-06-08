import "./styles/Platform.scss";

class Platform {
  width = 60;
  height = 10;
  canBeJumpedOntoTimes = Infinity;
  jumpedOntoTimes = 0;

  constructor(x, y, type) {
    this.element = document.createElement("div");
    this.element.className = `platform__${type}`;

    this.x = x;
    this.y = y;

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
        this.velocityX =
          (0.02 + Math.random() * 0.06) * (Math.random > 0.5 ? 1 : -1);
        break;
      }

      case "vertical": {
        this.range = 100 + Math.random() * 200;
        this.velocityY =
          (0.02 + Math.random() * 0.02) * (Math.random > 0.5 ? 1 : -1);
        this.initialY = y;
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
      }
    }
  }

  destroy = () => {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  };

  setPosition = (__, x, y) => {
    //TODO: remove first argument
    this.element.style.bottom = y + "px";
    this.element.style.left = x + "px";
  };
}

export default Platform;
