import GameWindow from "./GameWindow"
import Loading from "./scenes/Loading"
import Menu from "./scenes/Menu"
import Scene from "./Scene";
import ControlState from "./ControlState";
import GameLevel from "./scenes/GameLevel";

class Game {
    constructor({ width = 900, height = 900 } = {}) {
        this.gameWindow = new GameWindow(width, height);
        this.gameWindow.loadImages({
            tank: "../img/tank_animations.png",
            tiles: "../img/tiles.png",
            title: "../img/title.png"
        });
        this.controlState = new ControlState();
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            gameLevel: new GameLevel(this),
        };
        this.currentScene = this.scenes.loading;
        this.currentScene.init();
    }

    changeScene(status) {
        switch (status) {
            case Scene.LOADED:
                return this.scenes.menu;
            case Scene.START_GAME:
                return this.scenes.gameLevel;
            default:
                return this.scenes.menu;
        }
    }

    frame(time) {
        if (this.currentScene.status !== Scene.WORKING) {
            this.currentScene = this.changeScene(this.currentScene.status);
            this.currentScene.init();
        }
        this.currentScene.render(time);
        this.currentScene.update(time);
        requestAnimationFrame(this.frame.bind(this));
    }

    run() {
        requestAnimationFrame(this.frame.bind(this));
    }
}

export default Game