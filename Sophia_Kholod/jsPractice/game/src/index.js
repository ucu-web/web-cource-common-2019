let dino, ground, score, game_area;
let speed = 2, high_score = 0, obstacles = [];

const startGame = () => {
    dino = new Dino(50, 50, 30);
    score = new Score("black", "Arcade font", "25px", 650, 50, 25);
    ground = new Ground();
    game_area.start();
    updateGameArea();
};

const updateGameArea = () => {
    game_area.clear();
    obstacles.map(x => {
        if (dino.crashWith(x)) game_area.stop();
    });

    if (game_area.key !== false && game_area.key !== undefined) {
        if (game_area.key === "ArrowUp" || game_area.key === " ") {
            dino.jump();
        } else if (game_area.key === "ArrowDown") dino.ducking(true);
    }

    game_area.frameNo += 1;
    if (game_area.frameNo === 1 || (game_area.frameNo / 100) % 1 === 0) {
        if (speed < 3) {
            obstacles.push(new Obstacle(game_area.width, game_area.height, 0));
        } else if (speed < 6) {
            obstacles.push(new Obstacle(game_area.width, game_area.height, Math.floor(Math.random() * 2)));
        } else {
            obstacles.push(new Obstacle(game_area.width, game_area.height, Math.floor(Math.random() * 3)));
        }
        speed += 0.1;
    }
    score.points = Math.floor(game_area.frameNo / 20);
    score.update();
    obstacles.map(x => x.update(speed));
    ground.update();
    dino.update();
};


game_area = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 800;
        this.canvas.height = 250;
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.frameNo = 0;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            game_area.key = e.key;
        });
        window.addEventListener('keyup', function (e) {
            game_area.key = false;
        });
    },
    new_game: function () {
        clearInterval(this.retry_int);
        dino.x = 30;
        obstacles = [];
        speed = 2;
        this.start();
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        this.context.font = "35px Arcade font";
        this.context.fillStyle = "black";
        if (score.points > high_score) high_score = score.points;
        new Sound("https://raw.githubusercontent.com/vicboma1/T-Rex-Game/master/Unity/Sounds/die.mp3").play();
        this.context.fillText("G  A  M  E   O  V  E  R", (800 - 35 * 7) / 2, 100);

        this.context.font = "20px Arcade font";
        this.context.fillStyle = "black";
        this.context.fillText("your high score is: " + high_score, (800 - 36 * 6) / 2, 130);

        this.context.font = "15px Arcade font";
        this.context.fillStyle = "black";
        this.context.fillText("press Space to retry", (800 - 35 * 5) / 2, 155);

        clearInterval(this.interval);
        this.retry_int = setInterval(() => {
            if (game_area.key === " ") game_area.new_game();
        }, 100);
    }
};



