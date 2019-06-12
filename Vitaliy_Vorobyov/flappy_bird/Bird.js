class Bird {
    constructor(x, y, width, height, gravity) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gravity = gravity;

        this.bird = document.getElementById("bird");
    }

    fly() {
        this.y = this.y - 50;
    }

    update() {
        this.y = this.y + this.gravity;
    }

    render() {
        this.bird.style.top = this.y + "px";
        this.bird.style.left = this.x + "px";
    }
}

export default Bird