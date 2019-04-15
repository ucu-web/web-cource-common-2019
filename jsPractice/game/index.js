let dino;
let obstacles = [];
let score;
let game_area;
let speed = 1;
let grounds = [];

function startGame() {
    dino = new Dino(50, 50, 30);
    grounds.push(new Ground());
    game_area.start();
    updateGameArea();
}

function updateGameArea() {
    game_area.clear();
    let length = obstacles.length;
    for (let i = 0; i < length; i += 1) {
        if (dino.crashWith(obstacles[i])) {
            game_area.stop();
            return;
        }
    }
    if (game_area.key !== false && game_area.key !== undefined){
        if (game_area.key === "ArrowUp") {dino.jump();}
        else if (game_area.key === "ArrowDown") {dino.ducking(true);}
        else{dino.jump();}
    }
    game_area.frameNo += 1;
    if (game_area.frameNo === 1 || (game_area.frameNo / 100) % 1 === 0) {
        if (speed < 3){
            obstacles.push(new Obstacle(game_area.width, game_area.height, 0));
        } else if (speed < 8){
            obstacles.push(new Obstacle(game_area.width, game_area.height, Math.floor(Math.random() * 2)));
        }
        else{
            obstacles.push(new Obstacle(game_area.width, game_area.height, Math.floor(Math.random() * 3)));
        }
        speed += 0.025;
    }
    for (let i = 0; i < obstacles.length; i += 1) {
        obstacles[i].new_pos(speed);
        obstacles[i].update();
    }
    for (let i = 0; i < grounds.length; i += 1) {
        grounds[i].new_pos(speed);
        grounds[i].update();
    }
    dino.new_pos();
    dino.update();
}

game_area = {
    canvas : document.createElement("canvas"),
    start : function() {
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
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
};




