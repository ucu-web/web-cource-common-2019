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
const randPos = (fieldSize, PosNum) => Math.round(random(0, fieldSize) / PosNum) * PosNum;
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

    move(step, field_size) {
        [this.x, this.y] = [this.x, this.y].map((v, i) => {
            let new_pos = v + this.dir[i] * step;
            if (new_pos > 0 && new_pos < field_size - step) {
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

    move(step, field_size) {
        this.dir = randDir();
        super.move(step, field_size);
    }
}

class Apple extends Entity {
    draw(ctx, width) {
        drawApple(ctx, this.x, this.y, width, width);
    }
}

const initCharacters = (field_size, cell_size) => {
    let cellNum = field_size / cell_size;
    let pac = new Pacman(cell_size, cell_size, [1, 0]);
    let shadows = new Array(3).fill(0).map(() => new Shadow(randPos(field_size, cell_size), randPos(field_size, cell_size), randDir()));
    let apples = new Array((cellNum - 2) * (cellNum - 2)).fill(0).map((v, i) => new Apple((1 + i % (cellNum - 2)) * cell_size, (1 + Math.floor(i / (cellNum - 2))) * cell_size, [0, 0]));
    return [pac, shadows, apples];
};

const drawField = (ctx, field_size, cell_size) => {
    roundedRect(ctx, 0, 0, field_size, field_size, 15);
    roundedRect(ctx, cell_size / 4, cell_size / 4, field_size - cell_size / 2, field_size - cell_size / 2, 9);
};

const drawApples = (ctx, cell_size, apples) => apples.forEach((v) => v.draw(ctx, cell_size));

const draw = (ctx, field_size, cell_size, characters) => {
    let [pac, shadows, apples] = characters;
    ctx.clearRect(cell_size / 4, cell_size / 4, field_size - cell_size / 2, field_size - cell_size / 2);

    [pac, ...shadows].forEach((v) => v.move(cell_size, field_size));

    apples = apples.filter((v) => v.x !== pac.x || v.y !== pac.y);
    characters[2] = apples;
    if (shadows.filter((v) => v.x === pac.x && v.y === pac.y).length > 0) {
        alert("End of game\n" + "Score: " + +(529 - apples.length));
    }
    [pac, ...shadows].forEach((v) => v.draw(ctx, cell_size));
    drawApples(ctx, cell_size, apples);
};

const keyController = (pacman, e) => {
    switch (e.key) {
        case "ArrowLeft":
            pacman.dir = [-1, 0];
            break;
        case "ArrowRight":
            pacman.dir = [1, 0];
            break;
        case "ArrowUp":
            pacman.dir = [0, -1];
            break;
        case "ArrowDown":
            pacman.dir = [0, 1];
            break;
    }
};

const startGame = (canvas) => {
    let ctx = canvas.getContext("2d");

    let [field_size, cell_size] = [canvas.width, canvas.width / 25];
    let characters = initCharacters(field_size, cell_size);
    drawField(ctx, field_size, cell_size);
    setInterval(draw.bind(null, ctx, field_size, cell_size, characters), 180);

    document.onkeypress = keyController.bind(null, characters[0]);
};

startGame(document.getElementById("field"));
