class Obstacle{
    constructor(x, y, type) {
        this.type = type;
        this.img = new Image();
        switch (this.type) {
            case 0:  // small cactus
                this.width = 20;
                this.height = 40;
                this.img.src = "img/cactusSmall0000.png";
                break;
            case 1:  // big cactus
                this.width = 30;
                this.height = 60;
                this.img.src = "img/cactusBig0000.png";
                break;
            case 2:  // many small
                this.width = 60;
                this.height = 40;
                this.img.src = "img/cactusSmallMany0000.png";
                break;
        }
        this.x = x - this.width;
        this.y = y - this.height;
    }
    update(y){
        this.new_pos(y);
        let ctx = game_area.context;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    new_pos(y){
        this.x -= y*speed;
    }

}
