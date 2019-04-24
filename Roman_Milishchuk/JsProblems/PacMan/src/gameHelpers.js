import {Pacman, Shadow, Apple} from "./Characters";

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randPos = (fieldSize, PosNum) => Math.round(random(0, fieldSize) / PosNum) * PosNum;
const randChoice = (arr) => arr[random(0, arr.length)];
const randDir = () => {
    let tmp = randChoice([-1, 0, 1]);
    return tmp !== 0 ? [tmp, 0] : [tmp, randChoice([-1, 0, 1])];
};


export const initCharacters = (field_size, cell_size) => {
    let cellNum = field_size / cell_size;
    let pac = new Pacman(cell_size, cell_size, [1, 0]);
    let shadows = new Array(3).fill(0).map(() => new Shadow(randPos(field_size, cell_size), randPos(field_size, cell_size), randDir()));
    let apples = new Array((cellNum - 2) * (cellNum - 2)).fill(0).map((v, i) => new Apple((1 + i % (cellNum - 2)) * cell_size, (1 + Math.floor(i / (cellNum - 2))) * cell_size, [0, 0]));
    return [pac, shadows, apples];
};

export const draw = (ctx, field_size, cell_size, characters) => {
    let [pac, shadows, apples] = characters;
    ctx.clearRect(cell_size / 4, cell_size / 4, field_size - cell_size / 2, field_size - cell_size / 2);

    [pac, ...shadows].forEach((v) => v.move(cell_size, field_size, pac));

    characters[2] = apples = apples.filter((v) => v.x !== pac.x || v.y !== pac.y);
    if (shadows.filter((v) => v.x === pac.x && v.y === pac.y).length > 0) {
        alert("End of game\n" + "Score: " + +((field_size / cell_size - 2) * (field_size / cell_size - 2) - apples.length));
    }
    [pac, ...shadows, ...apples].forEach((v) => v.draw(ctx, cell_size));
};
export const keyController = (pacman, e) => {
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

