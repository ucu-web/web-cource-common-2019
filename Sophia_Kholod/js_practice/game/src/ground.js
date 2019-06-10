class Ground {
    constructor(){
        this.img = new Image();
        this.img.src = "img/game.png";
        this.x = 0;
        this.height = 15;
        this.width = game_area.width;
        this.y = game_area.height - this.height;
    }
    update(){
        this.new_pos();
        let ctx = game_area.context;
        ctx.drawImage(this.img, 0, this.img.height - 15,
                      this.img.width, 15, this.x + this.img.width,
                      this.y, this.width, this.height);

        //ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height);
        //ctx.drawImage(this.img, 0, this.height - 30, this.img.width, 30, this.x + this.width, this.y, this.width, this.height);
    }
    new_pos(){
        if (this.x === -(this.width)) {
            this.x = 0;
        }
        this.x -= speed;
    }
}