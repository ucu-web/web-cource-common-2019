import Snake from "./Snake.js"
import Food from "./Food.js"

export const SNAKE_SIZE = 10;
export const GAME_SPEED = 10;

export let SNAKE1_SPEED = 100;
export let SNAKE2_SPEED = 100;

const  defaultGameProps = {
    snakeSize: SNAKE_SIZE,
    gameSpeed: GAME_SPEED,
};

class Game {
    constructor(canvas, controls1, controls2, props = defaultGameProps) {
        const { snakeSize, gameSpeed} = props;
        this.context = canvas.getContext("2d");
        this.controls1 = controls1;
        this.controls2 = controls2;
        this.prev1 = new Date().getTime();
        this.prev2 = new Date().getTime();
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.snakeSize = snakeSize;
        this.speed = gameSpeed;
        this.snake1 = new Snake(
            this.context,
            Math.floor(this.canvasWidth / 10),
            Math.floor(this.canvasHeight / 10),
            this.snakeSize,
            this.canvasWidth,
            this.canvasHeight
        );
        this.snake2 = new Snake(
            this.context,
            Math.floor(this.canvasWidth / 2),
            Math.floor(this.canvasHeight / 2),
            this.snakeSize,
            this.canvasWidth,
            this.canvasHeight
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
        };

        let touchstartX;
        let touchstartY;

        let deltaX;
        let deltaY;

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
        document.addEventListener("keydown", (event) => {
            if (event.key === this.controls1[0]) {
                this.snake1.changeDirection(-1, 0);
            } else if (event.key === this.controls1[2]) {
                this.snake1.changeDirection(1, 0);
            } else if (event.key === this.controls1[1]) {
                this.snake1.changeDirection(0, -1);
            } else if (event.key === this.controls1[3]) {
                this.snake1.changeDirection(0, 1);
            }

            if (event.key === this.controls2[0]) {
                this.snake2.changeDirection(-1, 0);
            } else if (event.key === this.controls2[2]) {
                this.snake2.changeDirection(1, 0);
            } else if (event.key === this.controls2[1]) {
                this.snake2.changeDirection(0, -1);
            } else if (event.key === this.controls2[3]) {
                this.snake2.changeDirection(0, 1);
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
        if (new Date().getTime() - this.prev1 > SNAKE1_SPEED) {
            this.snake1.update2();
            this.prev1 = new Date().getTime();
        }

        if (new Date().getTime() - this.prev2 > SNAKE2_SPEED) {
            this.snake2.update2();
            this.prev2 = new Date().getTime();
        }
        this.snake1.update();
        this.snake2.update();
        this.snake1.render();
        this.snake2.render();
        this.snake1.isDead(this.snake2);
        this.snake2.isDead(this.snake1);

        this.context.fillStyle = "rgb(255, 210, 0)";
        this.context.font = "1em PT Mono";
        this.context.fillText(`Score: ${this.snake1.score}`, 10, 25);

        this.context.fillStyle = "rgb(255, 210, 0)";
        this.context.font = "1em PT Mono";
        this.context.fillText(`Score: ${this.snake2.score}`, 10, 25);

        if (this.snake1.eat(this.food)) { SNAKE1_SPEED - 10 < 0 ? SNAKE1_SPEED = 0 : SNAKE1_SPEED = SNAKE1_SPEED - 10 }
        if (this.snake2.eat(this.food)) { SNAKE2_SPEED - 10 < 0 ? SNAKE2_SPEED = 0 : SNAKE2_SPEED = SNAKE2_SPEED - 10 }
        // this.snake1.eat(this.food);
        // this.snake2.eat(this.food);
        if (this.food.isEaten) {
            this.food = new Food(this.context, this.getRandomNumber(), this.getRandomNumber(), this.snakeSize);
        }

    }

    play() {
        setInterval(this.render.bind(this), this.speed);
    }
}

export default Game