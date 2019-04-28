let birdHTML = document.getElementById("bird");

document.addEventListener( "keypress", (event) => {
    event.key === " " ? birdHTML.style.top = parseInt(window.getComputedStyle(birdHTML).top.slice(0, -2)) - 40 + "px" : null;
});

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

let pipesHTML = document.getElementById("pipes");
let pipes = [];
pipes.push(new Pipe(288, 100, 52, 242, 100, 5));

setInterval(
    () => {
        birdHTML.style.top = parseInt(window.getComputedStyle(birdHTML).top.slice(0, -2)) + 4 + "px";

        for (let i = 0; i < pipes.length; i++) {
            pipes[i].update();
            pipes[i].render();

            console.log(pipes.length);

            if (pipes[i].x - 0 < pipes[i].speed && pipes[i].x > 0) {
                pipes.push(new Pipe(288, Math.floor(Math.random() * 250), 52, 242, 100, 5));
            }

            if (pipes[i].x < - pipes[i].width) {
                pipes.shift();
                pipesHTML.removeChild(pipesHTML.childNodes[0]);
                pipesHTML.removeChild(pipesHTML.childNodes[0]);
            }
        }

        if (parseInt(window.getComputedStyle(birdHTML).top.slice(0, -2))  > 512 - 118 - 26) {
            location.reload();
        }
    }, 50
);