import "./styles/Doodle.scss";
import {getNewPositionBasedOnDuration} from "./helperFunctions";

export class Doodle {
    width = 40;
    height = 60;
    accelerationY = -600;
    exists = true;
    lastNoseRotate = 1;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("doodle");

        let legs = new Array(4).fill(0).map((v, i) =>
            `<div class="doodle__leg" style="left: ${i * 8}px"> 
                <div class="doodle__foot"></div> 
             </div>`).join("");

        element.innerHTML = `
        <div class="doodle__body">
            <div class="doodle__legs"> ${legs} </div>
            <div class="doodle__bottom"></div>
            <div class="doodle__nose">
                <div class="doodle__nose-begin"></div>
                <div class="doodle__nose-end"></div>
            </div>
            <div class="doodle__eye-left"></div>
            <div class="doodle__eye-right"></div>
        </div>`;

        return element;
    }
}

export const updateDoodleElement = (doodle) => {
    const nose = doodle.element.querySelector(".doodle__nose");

    if (doodle.velocityY >= 200) doodle.element.classList.add("doodle_jumping");
    else doodle.element.classList.remove("doodle_jumping");

    if (doodle.velocityX < 0) doodle.element.classList.add("doodle_left");
    if (doodle.velocityX > 0) doodle.element.classList.remove("doodle_left");

    if (doodle.lastNoseRotate > 0.5) {
        nose.style.transition = "";
        nose.style.transform = "";
    }
};

const rotateNose = (doodle, angle) => {
    const nose = doodle.element.querySelector(".doodle__nose");

    angle = -Math.PI / 2 + angle;
    nose.style.transition = "0s";
    nose.style.transform = "rotate(" + angle + "rad)";
    doodle.lastNoseRotate = 0;
};

export const shootBullet = (doodle, angle) => {
    rotateNose(doodle, angle);

    if (Math.abs(angle) > Math.PI / 4) angle = Math.sign(angle) * Math.PI / 4;
    const velocity = 400;

    const bulletElement = document.createElement("div");
    bulletElement.classList.add("bullet");
    return {
        width: 20,
        height: 20,
        x: doodle.x + doodle.width / 2 - 5 + 32 * Math.sin(angle),
        y: doodle.y + doodle.height - doodle.width / 2 + 32 * Math.cos(angle),
        velocityX: velocity * Math.sin(angle),
        velocityY: velocity * Math.cos(angle),
        element: bulletElement
    };
}
