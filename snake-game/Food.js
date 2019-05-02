class Food {
    constructor(ctx, x, y, size) {
        this.context = ctx;
        this.x = x;
        this.y = y;
        this.width = size;
        this.height = size;
        this.isEaten = false;
    }

    render() {
        this.context.fillStyle = "rgb(255, 210, 0)";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default Food