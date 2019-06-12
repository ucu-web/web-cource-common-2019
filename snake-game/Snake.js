class Snake {
    constructor(ctx, x, y, snakeSize, canvasWidth, canvasHeight) {
        this.context = ctx;
        this.x = x;
        this.y = y;
        this.prevX = 0;
        this.prevY = 0;
        this.snake = [];
        this.score = 1;
        this.width = snakeSize;
        this.height = snakeSize;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.verDirection = 0;
        this.horDirection = 1;
    }

    isDead(otherSnake) {
        const isDead = this.snake.find(([x, y]) => this.x === x && this.y === y) || otherSnake.snake.find(([x, y]) => this.x === x && this.y === y);
        if (isDead) {
            this.snake = [];
            this.score = 1;
            return true
        }
        return false
    }

    eat(food) {
        if (food.x === this.x && food.y === this.y) {
            food.isEaten = true;
            this.score++;
            this.snake.push([this.x, this.y]);
            return true;
        } else {
            return false;
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

        if (this.snake.length > 0) {
            for (let i = this.snake.length - 1; i > 0; i--) {
                this.snake[i] = this.snake[i - 1];
            }
            this.snake[0] = [this.prevX, this.prevY];
        }
        //
        // if (this.x < 0) {
        //     this.x = this.canvasWidth;
        // }
        //
        // if (this.y < 0) {
        //     this.y = this.canvasHeight;
        // }
    }

    update2() {
        this.prevX = this.x;
        this.prevY = this.y;

        if (this.snake.length > 0) {
            for (let i = this.snake.length - 1; i > 0; i--) {
                this.snake[i] = this.snake[i - 1];
            }
            this.snake[0] = [this.prevX, this.prevY];
        }

        if (this.x < 0) {
            this.x = this.canvasWidth;
        }

        if (this.y < 0) {
            this.y = this.canvasHeight;
        }

        this.x = (this.x + (this.width * this.horDirection)) % this.canvasWidth;
        this.y = (this.y + (this.height * this.verDirection)) % this.canvasHeight;
    }

    render() {
        this.context.strokeStyle = "rgb(255, 255, 255)";
        this.context.fillStyle = "rgb(244, 95, 66)";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.strokeRect(this.x, this.y, this.width, this.height);

        this.snake.map(
            ([x, y]) => {
                this.context.fillRect(x, y, this.width, this.height)
                this.context.strokeRect(x, y, this.width, this.height)
            }
        )
    }
}

export default Snake