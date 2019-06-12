class Snake {
    constructor(snakeParam, context) {
        this.context = context;
        this.canvasWidth = this.context.canvas.clientWidth;
        this.canvasHeight = this.context.canvas.clientHeight;

        this.x = 50;
        this.y = 50;

        this.snakeWidth = this.canvasWidth * snakeParam.width;
        this.snakeHeight = this.canvasHeight * snakeParam.height;

        this.timeInterval = snakeParam.timeInterval;
        this.direction = [1, 0];
        this.time = new Date().getTime();
    }

    changeDirection(ver, hor) {
        this.direction = [ver, hor];
    }

    update() {
        if (new Date().getTime() - this.time > this.timeInterval) {
            this.x = this.x < 0 ? this.context.canvas.clientWidth : (this.x + this.snakeWidth * this.direction[0]) % this.context.canvas.clientWidth;
            this.y = this.y < 0 ? this.context.canvas.clientHeight : (this.y + this.snakeHeight * this.direction[1]) % this.context.canvas.clientHeight;
            this.time = new Date().getTime();
        }
    };

    render() {
        this.context.fillStyle = "rgb(255, 210, 0)";
        this.context.fillRect(this.x, this.y, this.snakeWidth, this.snakeHeight);
    }
}

/*
fieldParam = {
    width: 500,
    height: 500
}

snakeParam = {
    width: 0.02 (percentage of window),
    height: 0.02(percentage of window),
    timeInterval: 250 (Time in milliseconds how often snake will update)
    control: {up: "w", left: "a", down: "s", right: "d"}
}

foodParam = {
    width: 0.02 (percentage of window),
    height: 0.02 (percentage of window),
    spawnProbability: 0.5
}
*/

class Game {
    constructor(fieldParam, foodParam, snakeParam) {
        // Canvas setup
        this.canvas = document.getElementById("game");
        this.canvas.width = fieldParam.width;
        this.canvas.height = fieldParam.height;
        this.context = this.canvas.getContext("2d");

        // Field Settings
        this.width = fieldParam.width;
        this.height = fieldParam.height;

        this.snake = new Snake(snakeParam, this.context);
        this.initKeyHandlers();
    }

    initKeyHandlers() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "a") {
                this.snake.changeDirection(-1, 0);
            } else if (event.key === "d") {
                this.snake.changeDirection(1, 0);
            } else if (event.key === "w") {
                this.snake.changeDirection(0, -1);
            } else if (event.key === "s") {
                this.snake.changeDirection(0, 1);
            }
        });
    }

    render() {
        this.context.fillStyle = "rgb(90, 90, 90)";
        this.context.fillRect(0, 0, this.width, this.height);

        this.snake.update();
        this.snake.render();

        requestAnimationFrame(this.render.bind(this));
    }
}

// class Food {
//
// }

const fieldParam = {
    width: 500,
    height: 500
};

const snakeParam = {
    width: 0.02,
    height: 0.02,
    timeInterval: 250,
    control: {up: "w", left: "a", down: "s", right: "d"}
};

const foodParam = {
    width: 0.02,
    height: 0.02,
    spawnProbability: 0.5
};

let game = new Game(fieldParam, foodParam, snakeParam);
game.render();