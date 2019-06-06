import Element from "../Element";

import "./styles/Bullet.scss";
import "./styles/Doodle.scss";
import "./styles/Enemy.scss";
import "./styles/Field.scss";
import "./styles/Game.scss";
import "./styles/Menu.scss";
import "./styles/Platform.scss";

const setNewPosition = (object, newPosition) => {
  Object.keys(newPosition).forEach(key => (object[key] = newPosition[key]));
};

const getNewPositionBasedOnDuration = (object, duration) => ({
  x: (object.x || 0) + (object.vX || 0) * duration,
  y: (object.y || 0) + (object.vY || 0) * duration,
  vY: (object.vY || 0) + (object.gravity || 0) * duration
});

const updatePositionBasedOnDuration = (object, duration) => {
  setNewPosition(object, getNewPositionBasedOnDuration(object, duration));
};

const doCollideOneDim = (firstX1, firstX2, secondX1, secondX2) =>
  (secondX1 <= firstX1 && firstX1 <= secondX2) ||
  (secondX1 <= firstX2 && firstX2 <= secondX2) ||
  (firstX1 <= secondX1 && secondX1 <= firstX2);

const doCollideBottom = (first, second) => {
  const precision = Math.abs(first.vY - second.vY);

  return (
    doCollideOneDim(
      first.x,
      first.x + first.width,
      second.x,
      second.x + second.width
    ) &&
    doCollideOneDim(
      first.y - precision,
      first.y + precision,
      second.y + second.height,
      second.y + second.height
    )
  );
};

const doCollide = (first, other) => {
  return (
    doCollideOneDim(
      first.x,
      first.x + first.width,
      other.x,
      other.x + other.width
    ) &&
    doCollideOneDim(
      first.y,
      first.y + first.height,
      other.y,
      other.y + other.height
    )
  );
};

export class Doodle {
  constructor() {
    this.width = 40;
    this.height = 60;
    this.gravity = -600;

    this.exists = true;
    this.lastNoseRotate = 1;

    this.createElement();
  }

  createElement() {
    const legs = new Element("doodle__legs").addChild(
      new Array(4)
        .fill(0)
        .map((v, i) =>
          new Element("doodle__leg")
            .absolutePosition(i * 8, 0)
            .addChild(new Element("doodle__foot"))
        )
    );

    this.nose = new Element("doodle__nose").addChild(
      new Element("doodle__nose-begin"),
      new Element("doodle__nose-end")
    );

    this.element = new Element("doodle")
      .dimensions(this.width, this.height)
      .addChild(
        legs,
        this.nose,
        new Element("doodle__body").addChild(new Element("doodle__bottom")),
        new Element("doodle__eye-left"),
        new Element("doodle__eye-right")
      );
  }

  update(duration) {
    this.lastNoseRotate += duration;

    if (this.vY >= 200) this.element.addClass("doodle_jumping");
    else this.element.removeClass("doodle_jumping");

    if (this.vX < 0) this.element.addClass("doodle_left");
    if (this.vX > 0) this.element.removeClass("doodle_left");

    if (this.lastNoseRotate > 0.5) {
      this.nose.transform("");
    }
  }

  rotateNose(angle) {
    angle = -Math.PI / 2 + angle;
    this.nose.transition("0s").transform("rotate(" + angle + "rad)");
    this.lastNoseRotate = 0;
  }
}

export class StaticPlatform {
  constructor() {
    this.width = 60;
    this.height = 10;
    this.exists = true;

    this.createElement();
  }

  createElement() {
    this.element = new Element("platform__static");
  }
}

export class BreakingPlatform {
  constructor() {
    this.width = 60;
    this.height = 10;
    this.exists = true;

    this.createElement();
  }

  createElement() {
    this.element = new Element("platform__breaking");
    this.left = new Element("platform__breaking-left").insertInto(this.element);
    this.right = new Element("platform__breaking-right").insertInto(
      this.element
    );
  }

  jumpOnto() {
    this.acceleration.y = -600;
    this.left.addClass("platform__broken-left");
    this.right.addClass("platform__broken-right");
    return false;
  }
}

export class PlatformDisappearing {
  constructor() {
    this.width = 60;
    this.height = 10;
    this.exists = true;

    this.createElement();
  }

  createElement() {
    this.element = new Element("platform__disappearing").insertInto(
      this.element
    );
    this.visible = true;
  }

  jumpOnto() {
    this.element.addClass("platform__disappeared");
    this.exists = false;
  }
}

export class PlatformHorizontal {
  constructor() {
    this.width = 60;
    this.height = 10;
    this.exists = true;

    this.createElement();
  }

  createElement() {
    this.element = new Element("platform__horizontal");
    this.vX = Math.round(
      (20 + Math.random() * 60) * (Math.random > 0.5 ? 1 : -1)
    );
  }

  update() {
    if (this.x <= 0) {
      this.vX = Math.abs(this.vX);
    } else if (this.x >= 600) {
      // TODO >= what
      this.vX = -Math.abs(this.vX);
    }
  }
}

export class PlatformVertical {
  createElement() {
    this.element = new Element("platform__vertical");
  }

  constructor(range) {
    this.exists = true;
    this.initialY = null;

    this.range = range || 100 + Math.random() * 200;
    this.vY = Math.round(
      (20 + Math.random() * 20) * (Math.random > 0.5 ? 1 : -1)
    );

    this.createElement();
  }

  update() {
    if (!this.initialY) this.initialY = this.y;

    if (this.y <= this.initialY - this.range / 2) {
      this.vY = Math.abs(this.vY);
    } else if (this.y >= this.initialY + this.range / 2) {
      this.vY = -Math.abs(this.vY);
    }
  }
}

export class PlatformDestructing {
  createElement() {
    this.element = new Element("platform__destructing");
  }

  constructor(field, x = 0, y = 0, timeout) {
    this.exists = true;
    this.time = 0;
    this.alertBefore = 1;
    this.timeout = timeout || 2 + Math.random() * 4;

    this.state = "init";
    this.createElement();
  }

  update(duration) {
    if (this.state !== "init") {
      this.time += duration;
    } else if (true) {
      // TODO what this.field.bottom + this.field.height / 2 > this.y - 100
      this.state = "start";
    }

    if (
      this.state === "start" &&
      this.time >= this.timeout - this.alertBefore
    ) {
      this.state = "alert";
      this.inner.addClass("platform__destructing-alert");
    }
    if (this.state === "alert" && this.time >= this.timeout) {
      this.exists = false;
      this.state = "destroyed";
      this.inner.addClass("platform__destroyed");
    }
  }
}

export class Bullet {
  createElement(field) {
    this.element = new Element("bullet");
  }

  constructor(field, x, y) {
    this.width = 20;
    this.height = 20;
    this.createElement();
  }
}

export default class Game {
  width = 600;
  height = 800;

  paused = false;
  platforms = [];
  bullets = [];
  enemies = [];

  fieldBottom = 0;

  constructor(container) {
    container.innerHTML = `
      <div class="game">
        <div class="field__background">
            <div class="field" style="width: ${width}px, height:${height}px"></div>
        </div>
      </div>     
    `;

    this.doodle = new Doodle();
    this.doodle.x = (this.width - this.doodle.width) / 2;
    this.doodle.y = (this.height - this.doodle.height) / 2;
    this.doodle.element.insertInto(this.field);
  }

  updateObject(object, duration) {
    updatePositionBasedOnDuration(object, duration);
    const { x, y } = this.translatePosition(object);
    object.element.absolutePosition(x, y);
    object.update(duration);
  }

  doesObjectExist(object) {
    return object.exists && object.y + object.height > this.fieldBottom;
  }

  render(duration) {
    this.updateObject(this.doodle, duration);
    this.platforms.forEach(o => this.updateObject(o, duration));
    this.bullets.forEach(o => this.updateObject(o, duration));
    this.enemies.forEach(o => this.updateObject(o, duration));

    if (
      this.doodle.y >
      this.fieldBottom + this.height / 2 - this.doodle.height / 2
    ) {
      this.fieldBottom =
        this.doodle.y + this.height / 2 - this.doodle.height / 2;
    }

    this.platforms = this.platforms.filter(this.doesObjectExist);
    this.bullets = this.bullets.filter(this.doesObjectExist);
    this.enemies = this.enemies.filter(this.doesObjectExist);
  }

  translatePosition(object) {
    return { x: object.x, y: object.y - this.fieldBottom };
  }

  renderAnimationFrame() {
    const render = currentTime => {
      if (this.paused) return;
      this.render(currentTime);
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
}
