class Menu {
    linkContainer(container) {
        this.background = new El("background").parent(container);
        this.element = new El("menu").dimensions(this.width, this.height).parent(this.background);

        const row = new El("menu__row").parent(this.element);
        this.title = new El("menu__title").innerText("Welcome").parent(row);
        this.score = new El("menu__score").innerText("Good luck!").parent(row);

        this.button = new El("menu__button", "button").innerText("Play").parent(this.element);
        this.setListener(this.gameStart);

        this.background.addClass("menu_start");
    }

    setListener(callBack) {
        this.button.removeListener("click", this.lastListener).listener("click", callBack);
        this.lastListener = callBack;
    }

    gameStart() {
        this.hidden = true;
        this.game.start();
    }

    gameRestart() {
        this.hidden = true;
        this.game.restart();
    }

    gameScore() {
        return this.game.score;
    }

    constructor(game, container, width, height) {
        this.game = game;
        this.width = width;
        this.height = height;

        this.gameStart = this.gameStart.bind(this);
        this.gameRestart = this.gameRestart.bind(this);

        this.linkContainer(container);
    }

    set hidden(value) {
        if (value) {
            this.background.addClass("menu_hidden");
            this.background.removeClass("menu_start");
        }
        else this.background.removeClass("menu_hidden");
    }
    get hidden() {
        return this.background.containsClass("menu_hidden");
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
