let canvas = document.getElementById("field");
let ctx = canvas.getContext("2d");

const roundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
};

const drawGhost = (ctx, x, y, width, height) => {
    y = y + height;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - height / 2);
    ctx.bezierCurveTo(x, y - height * 1.7 / 2, x + width / 4, y - height, x + width / 2, y - height);
    ctx.bezierCurveTo(x + width, y - height, x + width, y - height / 2, x + width, y - height / 2);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x, y);
    ctx.fill();
};

const drawPacman = (ctx, x, y, width, height) => {
    y = y + height;
    ctx.beginPath();
    ctx.arc(x + width / 2, y - height / 2, width / 2, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(x + width / 2, y - width / 2);
    ctx.fill();
};

const drawApple = (ctx, x, y, width, height) => {
    // y = y + height;
    ctx.fillRect(x + width / 3, y + height / 3, width / 3, height / 3);
};

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randPos = () => Math.round(random(0, canvas.width) / (canvas.width / 25)) * canvas.width / 25;
const randChoice = (arr) => arr[random(0, arr.length)];
const randDir = () => {
    let tmp = randChoice([-1, 0, 1]);
    return tmp !== 0 ? [tmp, 0] : [tmp, randChoice([-1, 0, 1])];
};


class Entity {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }

    move(step) {
        [this.x, this.y] = [this.x, this.y].map((v, i) => {
            let new_pos = v + this.dir[i] * step;
            if (new_pos > 0 && new_pos < canvas.width - step) {
                return new_pos;
            }
            return v;
        });
    }
}

class Pacman extends Entity {
    draw(ctx, width) {
        drawPacman(ctx, this.x, this.y, width, width);
    }
}

class Shadow extends Entity {
    draw(ctx, width) {
        drawGhost(ctx, this.x, this.y, width, width);
    }

    move(step) {
        this.dir = randDir();
        super.move(step);
    }
}

class Apple extends Entity {
    draw(ctx, width) {
        drawWidth(ctx, this.x, this.y, width, width);
    }
}


let pac = new Pacman(28, 28, [1, 0]);
let shadows = new Array(3).fill(0).map(() => new Shadow(randPos(), randPos(), randDir()));

const drawField = (ctx, canvas) => {
    roundedRect(ctx, 0, 0, canvas.width, canvas.height, 15);
    roundedRect(ctx, 7, 7, canvas.width - 14, canvas.height - 14, 9);
    setInterval(draw, 180);
};

const drawApples = () => {
    for (let i = canvas.width / 25; i < canvas.width - canvas.width / 25; i += canvas.width / 25) {
        for (let j = canvas.width / 25; j < canvas.width - canvas.width / 25; j += canvas.width / 25) {
            drawApple(ctx, i, j, canvas.width / 25, canvas.width / 25);
        }
    }
};

const draw = () => {
    ctx.clearRect(7, 7, canvas.width - 14, canvas.height - 14);
    let cell_width = canvas.width / 25;
    [pac, ...shadows].forEach((v) => {
        v.move(cell_width);
        v.draw(ctx, cell_width);
    });
    // drawApple(ctx, 28, 28, 28, 28);
    drawApples();
};

drawField(ctx, canvas);

document.onkeypress = (e) => {
    switch (e.key) {
        case "ArrowLeft":
            pac.dir = [-1, 0];
            break;
        case "ArrowRight":
            pac.dir = [1, 0];
            break;
        case "ArrowUp":
            pac.dir = [0, -1];
            break;
        case "ArrowDown":
            pac.dir = [0, 1];
            break;
    }
};
