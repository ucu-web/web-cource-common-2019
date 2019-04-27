const CANVAS_SIZE = 500;
const SNAKE_SIZE = 10;
const SNAKE_SPEED = 100;

let canvas = document.getElementById("game");
canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;
let context = canvas.getContext("2d");

class Snake {
    constructor(x, y, snakeSize, canvasSize) {
        this.x = x;
        this.y = y;
        this.prevX = 0;
        this.prevY = 0;
        this.snake = [];
        this.score = 1;
        this.width = snakeSize;
        this.height = snakeSize;
        this.canvasSize = canvasSize;
        this.verDirection = 0;
        this.horDirection = 1;
    }

    isDead() {
        for (let i = 0; i < this.snake.length; i++) {
            if (this.x === this.snake[i][0] && this.y === this.snake[i][1]) {
                this.snake = [];
                this.score = 1;
                return true;
            }
        }

        return false;
    }

    eat(food) {
        if (food.x === this.x && food.y === this.y) {
            food.isEaten = true;
            this.score++;
            this.snake.push([this.x, this.y]);
        }
    }

    changeDirection(ver, hor) {
        if (hor !== -this.horDirection) {
            this.horDirection = hor;
            this.verDirection = ver;
        } else if (ver !== -this.verDirection) {
            this.horDirection = hor;
            this.verDirection = ver;
        }
    }

    update() {
        this.prevX = this.x;
        this.prevY = this.y;

        this.x = (this.x + (this.width * this.horDirection)) % this.canvasSize;
        this.y = (this.y + (this.height * this.verDirection)) % this.canvasSize;

        if (this.x < 0) {
            this.x = this.canvasSize;
        }

        if (this.y < 0) {
            this.y = this.canvasSize;
        }

        if (this.snake.length > 0) {
            for (let i = this.snake.length - 1; i > 0; i--) {
                this.snake[i] = this.snake[i-1];
            }
            this.snake[0] = [this.prevX, this.prevY];
        }
    }

    render() {
        context.strokeStyle = "rgb(255, 255, 255)";
        context.fillStyle = "rgb(244, 95, 66)";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeRect(this.x, this.y, this.width, this.height);
        for (let i = 0; i < this.snake.length; i++) {
            context.fillRect(this.snake[i][0], this.snake[i][1], this.width, this.height);
            context.strokeRect(this.snake[i][0], this.snake[i][1], this.width, this.height);
        }
    }
}

class Food {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.width = size;
        this.height = size;
        this.isEaten = false;
    }

    render() {
        context.fillStyle = "rgb(255, 210, 0)";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Game {
    constructor(canvasSize, snakeSize, gameSpeed) {
        this.canvasWidth = canvasSize;
        this.canvasHeight = canvasSize;
        this.snakeSize = snakeSize;
        this.speed = gameSpeed;
        this.snake = new Snake(
            Math.floor(this.canvasWidth / 2),
            Math.floor(this.canvasHeight / 2),
            this.snakeSize,
            this.canvasWidth
        );
        this.food = new Food(this.getRandomNumber(), this.getRandomNumber(), this.snakeSize);

        this.touchstartX = 0;
        this.touchstartY = 0;
        this.deltaX = 0;
        this.deltaY = 0;

        this.handleGesture = () => {
            if (this.deltaX > 0 && Math.abs(this.deltaY) < Math.abs(this.deltaX)) {
                this.snake.changeDirection(0, 1);
            } else if (this.deltaX < 0 && Math.abs(this.deltaY) < Math.abs(this.deltaX)) {
                this.snake.changeDirection(0, -1);
            } else if (this.deltaY > 0 && Math.abs(this.deltaX) < Math.abs(this.deltaY)) {
                this.snake.changeDirection(1, 0);
            } else if (this.deltaY < 0 && Math.abs(this.deltaX) < Math.abs(this.deltaY)) {
                this.snake.changeDirection(-1, 0);
            }
        }

        this.initializeControl();
    }

    getRandomNumber() {
        return Math.floor(Math.random() * this.canvasWidth / this.snakeSize) * this.snakeSize;
    }

    initializeControl() {

        // CONTROL FOR TOUCHSCREEN

        document.addEventListener("touchstart", (event) => {
            this.touchstartX = event.touches[0].clientX;
            this.touchstartY = event.touches[0].clientY;
        });

        document.addEventListener("touchend", (event) => {
            this.deltaX = event.changedTouches[0].clientX - this.touchstartX;
            this.deltaY = event.changedTouches[0].clientY - this.touchstartY;
            this.handleGesture();
        });

        // CONTROL FOR KEYBOARD

        document.addEventListener("keypress", (event) => {
            if (event.key === "w") {
                this.snake.changeDirection(-1, 0);
            } else if (event.key === "s") {
                this.snake.changeDirection(1, 0);
            } else if (event.key === "a") {
                this.snake.changeDirection(0, -1);
            } else if (event.key === "d") {
                this.snake.changeDirection(0, 1);
            }
        });
    }

    play() {
        setInterval(
            () => {
                context.fillStyle = "rgb(90, 90, 90)";
                context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

                this.food.render();
                this.snake.update();
                this.snake.render();
                this.snake.isDead();

                context.fillStyle = "rgb(255, 210, 0)";
                context.font = "1em PT Mono";
                context.fillText(`Score: ${this.snake.score}`, 10, 25);

                this.snake.eat(this.food);
                if (this.food.isEaten) {
                    this.food = new Food(this.getRandomNumber(), this.getRandomNumber(), this.snakeSize);
                }
            }, this.speed
        );
    }
}

let game = new Game(CANVAS_SIZE, SNAKE_SIZE, SNAKE_SPEED);
game.play();