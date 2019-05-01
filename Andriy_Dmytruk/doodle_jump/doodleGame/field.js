class Field {
    linkContainer(container) {
        const background = new El("background").parent(container);
        this.element = new El("field").dimensions(this.width, this.height).parent(background);
        this.score = new El("score").parent(this.element).innerText(0);
    }

    constructor(container, width, height) {
        this.width = width;
        this.height = height;
        this.bottom = 0;

        this.linkContainer(container);

        this.doodle = new Doodle(this);
        this.objects = [];
    }

    translatePosition(object) {
        if (object instanceof HitMap) {
            let x = object.pos.x;
            let y = (object.pos.y - this.bottom);
            return [x, y];
        }
    }

    changeFocus(dur) {
        const doodleCenter = this.doodle.pos.y + this.doodle.height / 2;
        if (this.bottom + this.height / 2 < doodleCenter) {
            this.bottom = doodleCenter - this.height / 2;
        }
    }

    changeScore(dur) {
        this.score.innerText(Math.floor(this.bottom));
    }

    change(dur) {
        this.doodle.change(dur);
        this.objects.forEach(p => p.change(dur));

        this.objects.forEach(p => this.doodle.affect(p, dur));

        this.changeFocus();
        this.changeScore();
    }

    draw() {
        this.doodle.draw();
        this.objects.forEach(p => p.draw());
    }
}
