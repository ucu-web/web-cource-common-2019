import Scene from "../Scene"

export default class Loading extends Scene {
    constructor(game) {
        super(game);
    }

    init() {
        super.init();
        this.loadedAt = 0;
    }

    update(time) {
        if (this.loadedAt === 0 && this.game.gameWindow.isImagesLoaded === true) {
            this.loadedAt = time;
        }
        if (this.loadedAt !== 0 && (time - this.loadedAt) > 500) {
            this.finish(Scene.LOADED);
        }
    }

    render(time) {
        this.update(time);
        this.game.gameWindow.fill("#515151");
        this.game.gameWindow.printText(50, 70, "Loading...");
        super.render(time);
    }
}