import "./styles/Doodle.scss";


export class Doodle {
    width = 40;
    height = 60;
    gravity = -600;
    exists = true;
    lastNoseRotate = 1;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("doodle");

        let legs = new Array(4).fill(0).map((v, i) =>
            `<div class="doodle__leg" style="left: ${i * 8}px"> 
                <div class="doodle_foot"></div> 
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

    updateElement = (element) => {
        const nose = element.querySelector(".doodle__nose");

        if (this.velocityY >= 200) element.classList.add("doodle_jumping");
        else element.classList.remove("doodle_jumping");

        if (this.velocityX < 0) element.classList.add("doodle_left");
        if (this.velocityX > 0) element.classList.remove("doodle_left");

        if (this.lastNoseRotate > 0.5) {
            nose.transform("");
        }
    };

    rotateNose = (angle) => {
        const nose = this.element.querySelector(".doodle__nose");

        angle = -Math.PI / 2 + angle;
        nose.style.transition = "0s";
        nose.style.transform = "rotate(" + angle + "rad)";
        this.lastNoseRotate = 0;
    };

    shootBullet = (angle) => {
        this.rotateNose(angle);

        if (Math.abs(angle) > Math.PI / 4) angle = Math.sign(angle) * Math.PI / 4;
        const velocity = 400;

        const bulletElement = document.createElement("div");
        bulletElement.classList.add("bullet");
        return {
            width: 20,
            height: 20,
            x: this.x + this.width / 2 - 5 + 32 * Math.sin(angle),
            y: this.y + this.height - this.width / 2 + 32 * Math.cos(angle),
            velocityX: velocity * Math.sin(angle),
            velocityY: velocity * Math.cos(angle),
            element: bulletElement
        };
    }
}

export class Bullet {
    width = 20;
    height = 20;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("bullet");
        return element;
    }
}