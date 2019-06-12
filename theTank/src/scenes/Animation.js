import Tile from "../Tile"

function Animation(imageName, frames, speed, repeat=false, autorun=true, width=70, height=70) {
    // console.log('HERE:', imageName);
    Tile.apply(this, [imageName,
                        frames[0].sx,
                        frames[0].sy,
                        70,
                        70]);
    this.frames = frames;
    this.speed = speed;
    this.repeat = repeat;
    this.running = autorun;
    this.lastTime = 0;
    this.currentTime = 0;
    this.totalFrames = this.frames.length;

    this.setFrame = index => {
        this.currentFrame = index;
        this.sourceX = this.frames[0].sx;
        this.sourceY = this.frames[0].sy;
    };

    this.run = () => {
        if (this.running) return;
        this.setFrame(0);
        this.running = true;
    };

    this.stop = () => {
        this.running = false;
    };

    this.nextFrame = () => {
        if ((this.currentFrame + 1) === this.totalFrames) {
            if (this.repeat) {
                this.setFrame(0);
                return;
            }
            this.stop();
            return;
        }
        this.setFrame(this.currentFrame + 1);
    };

    this.update = (time, x, y) => {
        this.setXY(x, y);
        if (!this.running)
            return;
        if (this.lastTime === 0) {
            this.lastTime = time;
            return;
        }
        if ((time - this.lastTime) > this.speed / 2) {
            this.nextFrame();
            this.lastTime = time;
        }
    }
}

export default Animation;
