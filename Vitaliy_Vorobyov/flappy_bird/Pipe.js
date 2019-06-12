class Pipe {
    constructor(x, y, width, height, gap, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gap = gap;
        this.speed = speed;

        this.pipeNorth = document.createElement("div");
        this.pipeSouth = document.createElement("div");
    }

    update() {
        this.x = this.x - this.speed;
    }

    render() {
        this.pipeNorth.className = "pipe pipe__north";
        this.pipeNorth.style.left = this.x + "px";
        this.pipeNorth.style.top = 0 - this.height + this.y + "px";

        this.pipeSouth.className = "pipe pipe__south";
        this.pipeSouth.style.left = this.x + "px";
        this.pipeSouth.style.top = this.y + this.gap + "px";

        document.getElementById("pipes").appendChild(this.pipeNorth);
        document.getElementById("pipes").appendChild(this.pipeSouth);
    }
}

export default Pipe