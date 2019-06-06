import Element from "../Element/Element";

import "./styles/Menu.scss";

export default class Menu {
    linkTopbarContainer(container) {
        const background = new Element("menu__background").parent(container);
        const overlay = new Element("menu__overlay").parent(background).dimensions(this.width, this.height);
        const topBar = new Element("menu__topbar").parent(overlay)
            .listener("click", (e) => { e.cancelBubble = true; } , false);
        const topBarButton = new Element("menu__topbar-button", "button").innerText("pause")
            .parent(topBar).listener("click", this.gamePause);
        this.topBarScore = new Element("menu__topbar-score").parent(topBar).innerText("0");
    }

    linkContainer(container) {
        this.linkTopbarContainer(container);

        this.background = new Element("menu__background").parent(container);
        this.background.listener("click", (e) => { e.cancelBubble = true; } , false);
        this.element = new Element("menu").dimensions(this.width, this.height).parent(this.background);

        const row = new Element("menu__row").parent(this.element);
        this.title = new Element("menu__title").innerText("Welcome").parent(row);
        this.score = new Element("menu__score").innerText("Good luck!").parent(row);

        this.button = new Element("menu__button", "button").innerText("Play").parent(this.element);
        this.setListener(this.gameStart);

        this.background.addClass("menu__background_start");
    }

    setListener(callBack) {
        this.button.removeListener("click", this.lastListener).listener("click", callBack);
        this.lastListener = callBack;
    }

    gameScore() {
        return this.game.score;
    }

    constructor(game, container, width, height) {
        this.game = game;
        this.width = width;
        this.height = height;

        this.gameStart = () => this.game.start();
        this.gamePause = () => this.game.pause();
        this.gameRestart = () => this.game.restart();

        this.linkContainer(container);
    }

    set hidden(value) {
        if (value) {
            this.background.addClass("menu__background_hidden");
            this.background.removeClass("menu__background_start");
        }
        else this.background.removeClass("menu__background_hidden");
    }
    get hidden() {
        return this.background.containsClass("menu__background_hidden");
    }

    draw(dur) {
        this.topBarScore.innerText(this.gameScore());
    }

    pause() {
        this.hidden = false;
        this.title.innerText("Pause");
        this.score.innerText("Score: " + this.gameScore());
        this.button.innerText("Resume");
        this.setListener(this.gameStart);
    }

    end() {
        this.hidden = false;
        this.title.innerText("Game Over!");
        this.score.innerText("Score: " + this.gameScore());
        this.button.innerText("Restart");
        this.setListener(this.gameRestart);
    }
}
