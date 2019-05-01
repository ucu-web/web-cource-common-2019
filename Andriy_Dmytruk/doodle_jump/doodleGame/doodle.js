class Doodle extends HitMap {
    linkField (field) {
        const createLegs = () => new El("doodle-legs").addChild(
            new Array(4).fill(0).map((v, i) =>
                new El("doodle-leg").absolutePosition(i * 8, 0)
                    .addChild(new El("doodle-foot"))),
        );

        this.element = new El("doodle").dimensions(this.width, this.height)
            .parent(field.element).addChild(
                createLegs(),
                new El("doodle-nose").addChild(new El("doodle-nose-begin"), new El("doodle-nose-end")),
                new El("doodle-body").addChild(new El("doodle-bottom")),
                new El("doodle-eye-left"),
                new El("doodle-eye-right"),
            )
    }

    addListeners () {
        let currentKey = null;

        const getAcceleration = (key) => (key === "ArrowLeft" ? -1 : key === "ArrowRight" ? 1 : 0) * 600;
        const getInitialSpeed = (key) => (key === "ArrowLeft" ? -1 : key === "ArrowRight" ? 1 : 0) * 30;

        const keyDown = (e) => {
            if (currentKey !== e.key && ["ArrowLeft", "ArrowRight"].includes(e.key)) {
                this.acceleration.x = getAcceleration(e.key);
                this.velocity.x = getInitialSpeed(e.key);
                this.controlled = true;
                currentKey = e.key;
            }
        };

        const keyUp = (e) => {
            if (e.key === currentKey) {
                this.acceleration.x = 0;
                this.controlled = false;
                currentKey = null;
            }
        };

        window.addEventListener("keydown", keyDown.bind(this));
        window.addEventListener("keyup", keyUp.bind(this));
    }

    constructor(field) {
        const width = 40, height = 60;
        super(field.width / 2 - width / 2, field.height / 2 - height / 2, width, height);

        this.acceleration.y = -600;

        this.linkField(field);
        this.field = field;

        this.controlled = false;
        this.addListeners();
    }

    normalizePosition() {
        if (this.pos.x < -this.width / 2) {
            this.pos.x = this.field.width - this.width / 2;
        } else if (this.pos.x > this.field.width + this.width / 2) {
            this.pos.x = this.width / 2;
        }
    }

    normalizeVelocity() {
        let maxVelocity = 700;

        if (Math.abs(this.velocity.x) >= 0 && !this.controlled) {
            this.velocity.x = Math.sign(this.velocity.x) * Math.floor(Math.abs(this.velocity.x) / 6 - 1) * 6;
        }
        if (Math.abs(this.velocity.x) >= maxVelocity) this.velocity.x = Math.sign(this.velocity.x) * maxVelocity;
        if (Math.abs(this.velocity.y) >= maxVelocity) this.velocity.y = Math.sign(this.velocity.y) * maxVelocity;
    }

    change(dur) {
        super.change(dur);

        this.normalizePosition();
        this.normalizeVelocity();
    }

    jump(object) {
        this.pos.y = object.pos.y + object.height;
        this.velocity.y = 500;
    }

    affect(object, dur) {
        if (object instanceof Platform) {
            const hit = this.velocity.y < 0 && this.overlapBottom(object, -this.velocity.y * dur * 2);
            if (hit && object.doodleDoesJump()) this.jump(object);
        }
    }

    draw() {
        this.element.absolutePosition(...this.field.translatePosition(this));
        if (this.velocity.y >= 200) this.element.addClass("doodle_jumping");
        else this.element.removeClass("doodle_jumping");

        if (this.velocity.x < 0) this.element.addClass("doodle_left");
        if (this.velocity.x > 0) this.element.removeClass("doodle_left");
        // setTimeout( () => this.element.addClass("doodle_shooting"), 1000);
    }
}
