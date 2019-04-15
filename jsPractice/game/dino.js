class Dino{
    constructor(width, height, x) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.duck = false;
        this.gravity = 10;
        this.posY = 0;
        this.velY = 0;
        this.gravity = 1.2;
        this.runCount = -5;
        this.size = 50;
        this.img = new Image();
    }
    update(){
        let ctx = game_area.context;
        if (this.duck && this.posY === 0) {
            if (this.runCount < 0) {
                this.img.src = "img/dinoduck0000.png";
            } else {
                this.img.src = "img/dinoduck0001.png";
            }
            this.height = 33;
            this.width = 65;

        } else {
            if (this.posY === 0) {
                if (this.runCount < 0) {
                    this.img.src = "img/dinorun0000.png";
                } else {
                    this.img.src = "img/dinorun0001.png";
                }
            } else {
                this.img.src = "img/dinoJump0000.png";
            }
            this.width = this.size;
            this.height = this.size;
        }
        ctx.drawImage(this.img, this.x , game_area.height -  (this.posY + this.height), this.width, this.height);

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
        let myright = this.x + (this.width) - this.width/8;
        let mybottom = game_area.height - this.posY - this.width/8;
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
