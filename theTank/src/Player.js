import PlayerBody from './PlayerBody'

class Player extends PlayerBody {
    constructor(control) {
        super({imageName: 'tank', speed: 150});
        console.log('control is', control);
        this.control = control;
        document.addEventListener('keydown', () => this.update(new Date().getTime()));
        document.addEventListener('keyup', () => this.lastTime = 0);
    }

    update(time) {
        let direction = this.control.state;
        if (typeof direction !== "undefined" && direction !== 'fire') {
            this.walk(direction, time);
        }
  }
}

export default Player;