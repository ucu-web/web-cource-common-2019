let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

getRandomNumber = () => Math.floor(Math.random() * 50) * 10;

class Snake {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.prevX = 0;
        this.prevY = 0;
        this.snake = [];
        this.score = 1;
        this.width = width;
        this.height = height;
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

    eat(foodX, foodY) {
        if (foodX === this.x && foodY === this.y) {
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

        this.x = (this.x + (this.width * this.horDirection)) % 500;
        this.y = (this.y + (this.height * this.verDirection)) % 500;

        if (this.x < 0) {
            this.x = 500;
        }

        if (this.y < 0) {
            this.y = 500;
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
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isEaten = false;
    }

    render() {
        context.fillStyle = "rgb(255, 210, 0)";
        context.fillRect(this.x, this.y, 10, 10);
    }
}

// INITIALIZING GAME OBJECTS

const snake = new Snake(50, 50, 10, 10);
let food = new Food(getRandomNumber(), getRandomNumber());

// CONTROL FOR TOUCHSCREEN

let touchstartX = 0;
let touchstartY = 0;
let deltaX = 0;
let deltaY = 0;

document.addEventListener("touchstart", (event) => {
    touchstartX = event.touches[0].clientX;
    touchstartY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
    deltaX = event.changedTouches[0].clientX - touchstartX;
    deltaY = event.changedTouches[0].clientY - touchstartY;
    handleGesture();
});

function handleGesture() {
    if (deltaX > 0 && Math.abs(deltaY) < Math.abs(deltaX)) {
        snake.changeDirection(0, 1);
    } else if (deltaX < 0 && Math.abs(deltaY) < Math.abs(deltaX)) {
        snake.changeDirection(0, -1);
    } else if (deltaY > 0 && Math.abs(deltaX) < Math.abs(deltaY)) {
        snake.changeDirection(1, 0);
    } else if (deltaY < 0 && Math.abs(deltaX) < Math.abs(deltaY)) {
        snake.changeDirection(-1, 0);
    }
}

// CONTROL FOR KEYBOARD

document.addEventListener("keypress", (event) => {
    if (event.key === "w") {
        snake.changeDirection(-1, 0);
    } else if (event.key === "s") {
        snake.changeDirection(1, 0);
    } else if (event.key === "a") {
        snake.changeDirection(0, -1);
    } else if (event.key === "d") {
        snake.changeDirection(0, 1);
    }
});

// MAIN LOOP

setInterval(
    () => {
        context.fillStyle = "rgb(90, 90, 90)";
        context.fillRect(0, 0, 500, 500);

        snake.update();
        snake.render();
        snake.isDead();
        food.render();

        snake.eat(food.x, food.y);
        if (food.isEaten) {
            food = new Food(getRandomNumber(), Math.floor(getRandomNumber()));
        }
    }, 200
);