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
        let ctx = game_area.context;
        ctx.drawImage(this.img, 0, this.img.height - 30, this.img.width, 30, this.x, this.y, this.width, this.height);
    }
    new_pos(y){
        this.x -= y*speed;
    }
}