import Snake from "./Snake.js"
import Food from "./Food.js"

export const SNAKE_SIZE = 10;
export const SNAKE_SPEED = 100;

const  defaultGameProps = {
    snakeSize: SNAKE_SIZE ,
    gameSpeed: SNAKE_SPEED,
}

class Game {
    constructor(canvas, props = defaultGameProps) {
        const { snakeSize, gameSpeed} = props;
        this.context = canvas.getContext("2d");

        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.snakeSize = snakeSize;
        this.speed = gameSpeed;
        this.snake = new Snake(
            this.context,
            Math.floor(this.canvasWidth / 2),
            Math.floor(this.canvasHeight / 2),
            this.snakeSize,
            this.canvasWidth
        );
        this.food = new Food(this.context, this.getRandomNumber(), this.getRandomNumber(), this.snakeSize);

        this.initializeControl();
        this.render()
    }

    getRandomNumber() {
        return Math.floor(Math.random() * this.canvasWidth / this.snakeSize) * this.snakeSize;
    }

    initTouchHandlers () {
        const handleGesture = () => {
            if (deltaX > 0 && Math.abs(deltaY) < Math.abs(deltaX)) {
                this.snake.changeDirection(0, 1);
            } else if (deltaX < 0 && Math.abs(deltaY) < Math.abs(deltaX)) {
                this.snake.changeDirection(0, -1);
            } else if (deltaY > 0 && Math.abs(deltaX) < Math.abs(deltaY)) {
                this.snake.changeDirection(1, 0);
            } else if (deltaY < 0 && Math.abs(deltaX) < Math.abs(deltaY)) {
                this.snake.changeDirection(-1, 0);
            }
        }

        let touchstartX;
        let touchstartY;

        let deltaX
        let deltaY

        document.addEventListener("touchstart", (event) => {
            touchstartX = event.touches[0].clientX;
            touchstartY = event.touches[0].clientY;
        });

        document.addEventListener("touchend", (event) => {
            deltaX = event.changedTouches[0].clientX - touchstartX;
            deltaY = event.changedTouches[0].clientY - touchstartY;
            handleGesture();
        });

    }

    initKeyHandlers() {
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
    initializeControl() {
        this.initTouchHandlers();
        // CONTROL FOR KEYBOARD

        this.initKeyHandlers ();
    }

    render () {
        this.context.fillStyle = "rgb(90, 90, 90)";
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.food.render();
        this.snake.update();
        this.snake.render();
        this.snake.isDead();

        this.context.fillStyle = "rgb(255, 210, 0)";
        this.context.font = "1em PT Mono";
        this.context.fillText(`Score: ${this.snake.score}`, 10, 25);

        this.snake.eat(this.food);
        if (this.food.isEaten) {
            this.food = new Food(this.context, this.getRandomNumber(), this.getRandomNumber(), this.snakeSize);
        }

    }
    play() {
        setInterval(this.render.bind(this), this.speed);
    }
}

export default Game