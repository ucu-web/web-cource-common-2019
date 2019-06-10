class Score {
    constructor(color, font, font_size, x, y, step){
        this.points = 0;
        this.text = "score: ";
        this.color = color;
        this.size = font_size;
        this.font = font;
        this.x = x;
        this.y = y;
        this.step = step;
        this.prev_points = 0;
        this.checkpoint_sound = new Sound("https://raw.githubusercontent.com/vicboma1/T-Rex-Game/master/Unity/Sounds/checkPoint.mp3");
    }
    update(){
        if ((this.prev_points !== this.points) && (this.points % this.step === 0)){
            this.checkpoint_sound.play();
        }
        let ctx = game_area.context;
        ctx.font = this.size + " " + this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text + this.points, this.x, this.y);
        this.prev_points = this.points;
    }
}