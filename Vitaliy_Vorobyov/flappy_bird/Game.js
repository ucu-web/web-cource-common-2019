import Bird from "./Bird.js"
import Pipe from "./Pipe.js"

class Game {
    constructor() {
        this.pipesHTML = document.getElementById("pipes");
        this.pipes = [];
        this.bird = new Bird(50, 250, 38, 26, 4);
        this.pipes.push(new Pipe(288, 100, 52, 242, 100, 5));
        this.score = 0;
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
            if ((this.bird.x + this.bird.width >= this.pipes[i].x && this.bird.x <= this.pipes[i].x + this.pipes[i].width) && ((this.bird.y <= this.pipes[i].y) || (this.bird.y + this.bird.height >= this.pipes[i].y + this.pipes[i].gap))) {
                location.reload();
            }
        }

        if (this.bird.y > 512 - 118 - 26) {
            location.reload();
        }
    }

    play() {
        this.bird.update();
        this.bird.render();

        this.isDead();

        for (let i = 0; i < this.pipes.length; i++) {
            this.pipes[i].update();
            this.pipes[i].render();

            if (this.pipes[i].x - 0 < this.pipes[i].speed && this.pipes[i].x > 0) {
                this.pipes.push(new Pipe(288, Math.floor(Math.random() * 250), 52, 242, 100, 5));
            }

            if (Math.abs(this.pipes[i].x + this.pipes[i].width - this.bird.x) < 3) {
                this.score++;
                document.getElementById("score").innerHTML = this.score;
            }

            if (this.pipes[i].x < - this.pipes[i].width) {
                this.pipes.shift();
                this.pipesHTML.removeChild(this.pipesHTML.childNodes[0]);
                this.pipesHTML.removeChild(this.pipesHTML.childNodes[0]);
            }
        }

        requestAnimationFrame(this.play());
    }
}

export default Game