import {drawPacman, drawGhost, drawApple} from "./drawing";
import {randDir} from "./gameHelpers";

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

export class Pacman extends Entity {
    draw(ctx, width) {
        drawPacman(ctx, this.x, this.y, width, width);
    }
}

export class Shadow extends Entity {
    draw(ctx, width) {
        drawGhost(ctx, this.x, this.y, width, width);
    }

    move(step, field_size) {
        this.dir = randDir();
        super.move(step, field_size);
    }
}

export class Apple extends Entity {
    draw(ctx, width) {
        drawApple(ctx, this.x, this.y, width, width);
    }
}

// export default {Pacman, Shadow, Apple};
