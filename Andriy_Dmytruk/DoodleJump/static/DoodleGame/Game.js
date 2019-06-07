import "./styles/Bullet.scss";
import "./styles/Enemy.scss";
import "./styles/Field.scss";
import "./styles/Game.scss";
import "./styles/Menu.scss";
import {Doodle, shootBullet} from "./Doodle";
import {doCollideBottom, createDefaultPlatforms} from "./helperFunctions";
import {getNewBulletBasedOnDuration, getNewDoodleBasedOnDuration, getNewPlatformBasedOnDuration} from "./objectUpdaters";


export default class Game {
    width = 600;
    height = 800;

    paused = false;
    doodle = new Doodle();
    platforms = [...createDefaultPlatforms()];
    bullets = [];

    fieldBottom = 0;
    lastUpdateTime = 0;

    constructor(container) {
        container.innerHTML = `
          <div class="game">
            <div class="field__background">
                <div class="field" style="width: ${this.width}px; height:${this.height}px;"></div>
            </div>
          </div>     
        `;

        this.field = container.querySelector(".field");
        this.platforms.forEach(p => this.field.appendChild(p.element));

        this.doodle.x = (this.width - this.doodle.width) / 2;
        this.doodle.y = (this.height - this.doodle.height) / 2;
        this.field.appendChild(this.doodle.element);

        this.addListeners();
    }

    addListeners() {
        document.addEventListener("keydown", (event) => {
            if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
                let direction = event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
                this.doodle = {
                    ...this.doodle,
                    accelerationX: direction * 800
                };
            }
            if (event.key === " ") {
                const newBullet = shootBullet(this.doodle, 0);
                this.field.appendChild(newBullet.element);
                this.bullets = [...this.bullets, newBullet];
            }
        });

        document.addEventListener("keyup", (event) => {
            this.doodle = {...this.doodle, accelerationX: 0};
        })
    }

    displayOnField(object) {
        const {x, y} = this.translatePosition(object);
        object.element.style.bottom = y + "px";
        object.element.style.left = x + "px";
    }


    doesObjectExist(object) {
        const exists = (object.y > this.fieldBottom) && (object.y < this.fieldBottom + this.height * 3);
        if (!exists && this.field.contains(object.element))
            this.field.removeChild(object.element);
        return exists;
    }

    render(duration) {
        this.doodle = getNewDoodleBasedOnDuration(this.doodle, duration, this.width);

        this.platforms = this.platforms.map(p => getNewPlatformBasedOnDuration(p, duration, this.width));
        this.bullets = this.bullets.map(b => getNewBulletBasedOnDuration(b, duration));

        if (this.fieldBottom < this.doodle.y - this.height / 2 + this.doodle.height / 2) {
            this.fieldBottom = this.doodle.y - this.height / 2 + this.doodle.height / 2;
        }

        this.platforms = this.platforms.filter(p => this.doesObjectExist(p));
        this.bullets = this.bullets.filter(b => this.doesObjectExist(b));

        this.platforms = this.platforms.map((platform) => {
            if (doCollideBottom(this.doodle, platform, duration)) {
                if (platform.jumpedOntoTimes < platform.canBeJumpedOntoTimes) {
                    this.doodle = {...this.doodle, velocityY: 500};
                }
                return {...platform, jumpedOntoTimes: platform.jumpedOntoTimes + 1};
            }
            return platform;
        });

        // display
        this.displayOnField(this.doodle);
        this.platforms.map(p => this.displayOnField(p));
        this.bullets.map(b => this.displayOnField(b));
    }

    translatePosition(object) {
        return {x: object.x, y: object.y - this.fieldBottom};
    }

    renderAnimationFrame() {
        const render = (time) => {
            if (this.paused) return;

            time /= 1000;
            const duration = time - this.lastUpdateTime;

            if (duration < 1)
                this.render(duration);
            this.lastUpdateTime = time;
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