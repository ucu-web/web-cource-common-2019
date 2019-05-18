class Doodle extends PhysicalObject {
    linkField (field) {
        const legs = new El("doodle-legs").addChild(
            new Array(4).fill(0).map((v, i) =>
                new El("doodle-leg").absolutePosition(i * 8, 0)
                    .addChild(new El("doodle-foot"))));

        this.nose = new El("doodle-nose")
            .addChild(new El("doodle-nose-begin"), new El("doodle-nose-end"));

        this.element = new El("doodle").dimensions(this.width, this.height)
            .parent(field.element).addChild(
                legs,
                this.nose,
                new El("doodle-body").addChild(new El("doodle-bottom")),
                new El("doodle-eye-left"),
                new El("doodle-eye-right"),
            );
    }

    addListeners () {
        let currentKey = null;

        const getDir = (key) => (
            (key === "ArrowLeft" || key === "a") ? - 1 :
            (key === "ArrowRight" || key === "d") ? 1 : 0);
        const getAcceleration = (key) => getDir(key) * 600;
        const getInitialSpeed = (key) => getDir(key) * 30;

        const keyDown = (e) => {
            if (currentKey !== e.key && ["ArrowLeft", "ArrowRight", "a", "d"].includes(e.key)) {
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

        this.alive = true;
        this.lastNoseRotate = 1;
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

        this.lastNoseRotate += dur;
    }

    jump(object) {
        this.pos.y = object.pos.y + object.height;
        this.velocity.y = 500;
    }

    die() {
        this.alive = false;
        this.velocity.y = -60;
    }

    affect(object, dur) {
        if (!this.alive) return;

        let jump = false;
        if (object instanceof Platform || object instanceof Enemy) {
            jump = this.velocity.y < 0 && this.overlapBottom(object, -this.velocity.y * dur * 2);
            if (jump && object.doodleDoesJump()) this.jump(object);
        }

        if (!jump && object instanceof Enemy) {
            if (this.overlap(object) && object.doesKill()) this.die();
        }
    }

    rotateNose(angle) {
        angle = - Math.PI / 2 + angle;
        this.nose.transition("0s").transform("rotate(" + angle + "rad)");
        this.lastNoseRotate = 0;
    }

    draw() {
        this.element.absolutePosition(...this.field.translatePosition(this));
        this.nose.transition("0.2s");

        if (this.velocity.y >= 200) this.element.addClass("doodle_jumping");
        else this.element.removeClass("doodle_jumping");

        if (this.velocity.x < 0) this.element.addClass("doodle_left");
        if (this.velocity.x > 0) this.element.removeClass("doodle_left");

        if (this.lastNoseRotate > 0.5) {
            this.nose.transform("");
        }
    }
}
