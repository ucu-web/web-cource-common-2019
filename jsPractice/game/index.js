let dino;
let obstacles = [];
let score;
let game_area;
let speed = 2.2;

function startGame() {
    dino = new Dino(50, 50, 50);
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
    // magic, don't touch
    if (game_area.key !== false && game_area.key !== undefined){
        if (game_area.key === "ArrowUp") {dino.jump();}
        else if (game_area.key === "ArrowDown") {dino.ducking(true);}
        else{dino.jump();}
    }
    game_area.frameNo += 1;
    console.log(game_area.frameNo);
    console.log(game_area.key);
    if (game_area.frameNo === 1 || (game_area.frameNo / (30 * Math.floor(speed))) % 1 === 0) {
        if (speed < 3){
            obstacles.push(new Obstacle(800, 400, 0));
        } else if (speed < 8){
            obstacles.push(new Obstacle(800, 400, Math.floor(Math.random() * 2)));
        }
        else{
            obstacles.push(new Obstacle(800, 400, Math.floor(Math.random() * 3)));
        }
        speed += 0.02;
    }
    for (let i = 0; i < obstacles.length; i += 1) {
        obstacles[i].new_pos(speed);
        obstacles[i].update();
    }
    dino.new_pos();
    dino.update();
}

game_area = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
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


class Dino{
    constructor(width, height, x) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.duck= false;
        this.gravity = 10;
        this.posY = 0;
        this.velY = 0;
        this.gravity =1.2;
        this.runCount = -5;
        this.size = 20;
        this.img = new Image();
    }
    update(){
        let ctx = game_area.context;
        if (this.duck && this.posY === 0) {
            if (this.runCount < 0) {
                this.img.src = "img/dinoduck0000.png";
                ctx.drawImage(this.img, this.x , game_area.height -  (this.posY + this.img.height));
            } else {
                this.img.src = "img/dinoduck0001.png";
                ctx.drawImage(this.img, this.x , game_area.height - (this.posY + this.img.height));
            }
        } else
        if (this.posY === 0) {
            if (this.runCount < 0) {
                this.img.src = "img/dinorun0000.png";
                ctx.drawImage(this.img, this.x , game_area.height -  (this.posY + this.img.height));
            } else {
                this.img.src = "img/dinorun0001.png";
                ctx.drawImage(this.img, this.x , game_area.height -  (this.posY + this.img.height));
            }
        } else {
            this.img.src = "img/dinoJump0000.png";
            ctx.drawImage(this.img, this.x, game_area.height -  (this.posY + this.img.height));
        }
        this.runCount++;
        if (this.runCount > 5) {
            this.runCount = -5;
        }
    }

    ducking(isDucking) {
        if (this.posY !== 0 && isDucking) {
            this.gravity = 3;
        }
        this.duck = isDucking;
        }


    new_pos(){
        this.posY += this.velY;
        if (this.posY > 0) {
            this.velY -= this.gravity;
        } else {
            this.velY = 0;
            this.posY = 0;
        }
    }

    jump(){
        if (this.posY === 0){
            this.gravity = 1.2;
            this.velY = 16;
            this.duck = false;
        }
    }
    crashWith(otherobj) {
        let myright = this.x + (this.img.width) - this.img.width/8;
        let mybottom = game_area.height - this.posY - this.img.width/8;
        let otherright = otherobj.x + (otherobj.width);
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < otherobj.y) ||
            (this.posY > otherbottom) ||
            (myright < otherobj.x) ||
            (this.x > otherright)) {
            crash = false;
        }
        return crash;
    }

}

class Obstacle{
    constructor(x, y, type) {
        this.type = type;
        this.img = new Image();
        switch (this.type) {
            case 0:  // small cactus
                this.width = 25;
                this.height = 60;
                this.img.src = "img/cactusSmall0000.png";
                break;
            case 1:  // big cactus
                this.width = 45;
                this.height = 90;
                this.img.src = "img/cactusBig0000.png";
                break;
            case 2:  // many small
                this.width = 105;
                this.height = 70;
                this.img.src = "img/cactusSmallMany0000.png";
                break;
        }
        this.x = x - this.width;
        this.y = y - this.height;
    }
    update(){
        let ctx = game_area.context;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    new_pos(y){
        this.x -= y*speed;
    }


}

