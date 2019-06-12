import Scene from "../Scene";

export default class Menu extends Scene {
    constructor(game) {
        super(game);
    }

    init() {
        super.init();
    }

    update(time) {
        if (this.game.controlState.state === 'fire') {
            this.finish(Scene.START_GAME);
        }
    }

    render(time) {
        this.update(time);
        this.game.gameWindow.drawImage(0, 0, 'title');
        this.game.gameWindow.printText(400, 600, "Press SpaceBar");
        super.render(time);
    }
}