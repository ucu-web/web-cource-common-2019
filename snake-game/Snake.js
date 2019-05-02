class Snake {
    constructor(ctx, x, y, snakeSize, canvasSize) {
        this.context = ctx;
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
        const isDead = this.snake.find( ([x, y]) => this.x === x && this.y === y ? true : false)
        if (isDead) {
            this.snake = [];
            this.score = 1;
            return  true
        }

        return false
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
        this.context.strokeStyle = "rgb(255, 255, 255)";
        this.context.fillStyle = "rgb(244, 95, 66)";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.strokeRect(this.x, this.y, this.width, this.height);
        for (let i = 0; i < this.snake.length; i++) {
            this.context.fillRect(this.snake[i][0], this.snake[i][1], this.width, this.height);
            this.context.strokeRect(this.snake[i][0], this.snake[i][1], this.width, this.height);
        }
    }
}

export default Snake