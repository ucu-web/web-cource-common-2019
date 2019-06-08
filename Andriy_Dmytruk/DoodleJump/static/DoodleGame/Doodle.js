import "./styles/Doodle.scss";
import "./styles/Bullet.scss";

const createDoodleElement = () => {
    const element = document.createElement("div");
    element.classList.add("doodle");

    element.innerHTML = `
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

    return element;
};

export const createDoodle = (centerX, centerY) => ({
    x: centerX - 20,
    y: centerY - 30,
    width: 40,
    height: 60,
    accelerationY: -600,
    lastNoseRotate: 1,
    element: createDoodleElement()
});

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

    return {...doodle, lastNoseRotate: 0};
};

export const shootBullet = (doodle, angle) => {
    if (Math.abs(angle) > Math.PI / 4) angle = Math.sign(angle) * Math.PI / 4;
    const velocity = 400;

    const bulletElement = document.createElement("div");
    bulletElement.classList.add("bullet");
    const bullet = {
        width: 20,
        height: 20,
        x: doodle.x + doodle.width / 2 - 5 + 32 * Math.sin(angle),
        y: doodle.y + doodle.height - doodle.width / 2 + 32 * Math.cos(angle),
        velocityX: velocity * Math.sin(angle),
        velocityY: velocity * Math.cos(angle),
        element: bulletElement
    };

    return {doodle: rotateNose(doodle, angle), bullet}
};
