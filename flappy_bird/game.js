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
        this.y = this.y - 60;
    }

    update() {
        this.y = this.y + this.gravity;
    }

    render() {
        this.bird.style.top = this.y + "px";
        this.bird.style.left = this.x + "px";
    }
}

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

class Game {
    constructor() {
        this.pipesHTML = document.getElementById("pipes");
        this.pipes = [];
        this.bird = new Bird(50, 250, 38, 26, 4);

        this.pipes.push(new Pipe(288, 100, 52, 242, 100, 5));

        this.initializeControl();
    }

    initializeControl() {
        document.addEventListener( "keypress", (event) => {
            event.key === " " ? this.bird.fly() : null;
        });

        document.addEventListener("touchstart", (event) => {
            this.touchstartX = event.touches[0].clientX;
            this.touchstartY = event.touches[0].clientY;
        });

        document.addEventListener("touchend", (event) => {
            this.deltaX = event.changedTouches[0].clientX - this.touchstartX;
            this.deltaY = event.changedTouches[0].clientY - this.touchstartY;

            if (this.deltaX === 0 && this.deltaY === 0) {
                this.bird.fly();
            }
        });
    }

    isDead() {
        for (let i = 0; i < this.pipes.length; i++) {
            if ((this.bird.x + this.bird.width > this.pipes[i].x) && (this.bird.x + this.bird.width > this.pipes[i].x + this.pipes[i].width) && (this.bird.y < (0 - this.pipes[i].height + this.pipes[i].y) || (this.bird.y + this.bird.height) > (this.pipes[i].y + this.pipes[i].gap))) {
                location.reload();
            }
        }
    }

    play() {
        setInterval(
            () => {
                this.bird.update();
                this.bird.render();

                this.isDead();

                for (let i = 0; i < this.pipes.length; i++) {
                    this.pipes[i].update();
                    this.pipes[i].render();

                    if (this.pipes[i].x - 0 < this.pipes[i].speed && this.pipes[i].x > 0) {
                        this.pipes.push(new Pipe(288, Math.floor(Math.random() * 250), 52, 242, 100, 5));
                    }

                    if (this.pipes[i].x < - this.pipes[i].width) {
                        this.pipes.shift();
                        this.pipesHTML.removeChild(this.pipesHTML.childNodes[0]);
                        this.pipesHTML.removeChild(this.pipesHTML.childNodes[0]);
                    }
                }

                if (this.bird.y  > 512 - 118 - 26) {
                    location.reload();
                }
            }, 40
        );
    }
}

let game = new Game();
game.play();