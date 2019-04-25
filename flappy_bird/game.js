class Bird {
    constructor(x, y, w, h, weight, context, canvas) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.weight = weight;
        this.ctx = context;
        this.cv = canvas;
        window.addEventListener("keyup", (event) => this.update(event.key), false);
    }

    draw(x = this.x, y = this.y) {
        this.ctx.fillStyle = "#2ecc71";
        this.ctx.fillRect(x, y, this.width, this.height);
    }

    gravity() {
        console.log("TT: ", this.cv.height, this.y + this.weight);
        if (this.y + this.weight + this.height < this.cv.height) {
            this.y = this.y + this.weight;
        }
    }

    fly() {
        this.y = this.y - 20;
    }

    update(key) {
        this.gravity(this.ctx, this.cv.width, this.cv.height);
        this.draw(this.x, this.y);

        if (key === " ") {
            this.y = this.y - 100;
        }
    }
}

class Pipe {
    constructor() {
        this.x =
    }

    draw(ctx, gap, x, y, w, h) {
        this.pipeNorth.onload = () => ctx.drawImage(this.pipeNorth, x, y, w, h);
        this.pipeSouth.onload = () => ctx.drawImage(this.pipeSouth, x, y + gap + this.pipeNorth.height, w, h);
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById("game");
        this.context = this.canvas.getContext("2d");
        this.canvas.background = "#2980b9";
        this.bird = new Bird(50, 50, 50, 50, 1, this.context, this.canvas);
    }

    start() {
        this.bird.draw();

        setInterval(
            () => {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.bird.update();
            },
            4
        )
    }
}


let game = new Game();
game.start();
