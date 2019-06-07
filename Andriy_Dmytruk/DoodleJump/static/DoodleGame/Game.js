import "./styles/Bullet.scss";
import "./styles/Enemy.scss";
import "./styles/Field.scss";
import "./styles/Game.scss";
import "./styles/Menu.scss";
import "./styles/Platform.scss";

const getNewPositionBasedOnDuration = (object, duration) => ({
    x: (object.x || 0) + (object.velocityX || 0) * duration,
    y: (object.y || 0) + (object.velocityY || 0) * duration,
    velocityY: (object.velocityY || 0) + (object.gravity || 0) * duration
});

const doCollideOneDimension = (firstX1, firstX2, secondX1, secondX2) =>
    (secondX1 <= firstX1 && firstX1 <= secondX2) ||
    (secondX1 <= firstX2 && firstX2 <= secondX2) ||
    (firstX1 <= secondX1 && secondX1 <= firstX2);

const doCollideBottom = (first, second) => {
    const precision = Math.abs(first.velocityY - second.velocityY);

    return (
        doCollideOneDimension(
            first.x,
            first.x + first.width,
            second.x,
            second.x + second.width
        ) &&
        doCollideOneDimension(
            first.y - precision,
            first.y + precision,
            second.y + second.height,
            second.y + second.height
        )
    );
};

const doCollide = (first, second) => {
    return (
        doCollideOneDimension(
            first.x,
            first.x + first.width,
            second.x,
            second.x + second.width
        ) &&
        doCollideOneDimension(
            first.y,
            first.y + first.height,
            second.y,
            second.y + second.height
        )
    );
};

export default class Game {
    width = 600;
    height = 800;

    paused = false;
    doodle = new Doodle();
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

        this.field = container.querySelector(".field");

        this.doodle.x = (this.width - this.doodle.width) / 2;
        this.doodle.y = (this.height - this.doodle.height) / 2;
        this.field.appendChild(this.doodle.element);
    }

    updatePlatform(platform, duration) {
        let position = getNewPositionBasedOnDuration(platform, duration);

        let newPlatform = {
            ...platform,
            ...position,
            velocityX: position.x < 0 ? Math.abs(newObject.velocityX) :
                position.x > this.width - platform.width ? -Math.abs(position.velocityX) : position.velocityX,
            velocityY: (platform.range && position.y > platform.initialY + platform.range / 2) ? -Math.abs(position.velocityY) :
                (platform.range && position.y < platform.initialY - platform.range / 2) ? Math.abs(position.velocityY) :
                    position.velocityY,
            timeBeforeDestroyed: platform.timeBeforeDestroyed !== undefined ? platform.timeBeforeDestroyed - duration :
                undefined,
            canBeJumpedOntoTimes: (platform.timeBeforeDestroyed < 0) ? 0 : platform.canBeJumpedOntoTimes
        };


        const {x, y} = this.translatePosition(newObject);
        newPlatform.element.style.bottom = y;
        newPlatform.element.style.left = x;

        newPlatform.updateElement();

        return newPlatform;
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
        return {x: object.x, y: object.y - this.fieldBottom};
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