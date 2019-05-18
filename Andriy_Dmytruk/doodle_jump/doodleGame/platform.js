class Platform extends PhysicalObject {
    linkField(field) {
        return this.element =
            new El("platform").dimensions(this.width, this.height).parent(field.element);
    }

    constructor(field, x=0, y=0) {
        super(x, y, 60, 10);

        this.linkField(field);
        this.field = field;
    }

    draw() {
        this.element.absolutePosition(...this.field.translatePosition(this));
    }

    doodleDoesJump() {
        return true;
    }

    destructor() {
        this.element.rmParent();
    }
}

class StaticPlatform extends Platform {
    linkField(field) {
        return super.linkField(field).addChild(new El("platform-static"));
    }
}

class BreakingPlatform extends Platform {
    linkField(field) {
        const platform = super.linkField(field);
        this.left = new El("platform-breaking-left").parent(platform);
        this.right= new El("platform-breaking-right").parent(platform);
    }

    doodleDoesJump() {
        this.acceleration.y = -600;
        this.left.addClass("platform-broken-left");
        this.right.addClass("platform-broken-right");
        return false;
    }
}

class PlatformDisappearing extends Platform {
    linkField(field) {
        const platform = super.linkField(field);
        this.inner = new El("platform-disappearing").parent(platform);
        this.visible = true;
    }

    doodleDoesJump() {
        if (this.visible) {
            this.visible = false;
            this.inner.addClass("platform-disappeared");
            return true;
        }
        return false;
    }
}

class PlatformHorizontal extends Platform {
    linkField(field) {
        super.linkField(field).addChild(new El("platform-horizontal"));
        this.velocity.x = Math.round((20 + Math.random() * 60) * (Math.random > 0.5 ? 1 : -1));
    }

    change(dur) {
        super.change(dur);

        if (this.pos.x <= 0) {
            this.velocity.x = Math.abs(this.velocity.x);
        } else if (this.pos.x >= this.field.width - this.width) {
            this.velocity.x = - Math.abs(this.velocity.x);
        }
    }
}

class PlatformVertical extends Platform {
    linkField(field) {
        super.linkField(field).addChild(new El("platform-vertical"));
    }

    constructor(field, x=0, y=0, range) {
        super(field, x, y);
        this.initialY = null;
        this.range = range || (100 + Math.random() * 200);
        this.velocity.y = Math.round((20 + Math.random() * 20) * (Math.random > 0.5 ? 1 : -1));
    }

    change(dur) {
        super.change(dur);
        if (!this.initialY) this.initialY = this.pos.y;

        if (this.pos.y <= this.initialY - this.range / 2) {
            this.velocity.y = Math.abs(this.velocity.y);
        } else if (this.pos.y >= this.initialY + this.range / 2) {
            this.velocity.y = - Math.abs(this.velocity.y);
        }
    }
}

class PlatformDestructing extends Platform {
    linkField(field) {
        const platform = super.linkField(field);
        this.inner = new El("platform-destructing").parent(platform);
    }

    constructor(field, x=0, y=0, timeout) {
        super(field, x, y);
        this.time = 0;
        this.alertBefore = 1;
        this.timeout = timeout || (2 + Math.random() * 4);

        this.state = "init";
    }

    change(dur) {
        super.change(dur);

        if (this.state !== "init") {
            this.time += dur;
        } else if (this.field.bottom + this.field.height / 2 > this.y - 100) {
            this.state = "start";
        }

        if (this.state === "start" && this.time >= this.timeout - this.alertBefore) {
            this.state = "alert";
            this.inner.addClass("platform-destructing-alert");
        }
        if (this.state === "alert" && this.time >= this.timeout) {
            this.state = "destroyed";
            this.inner.addClass("platform-destroyed");
        }
    }

    doodleDoesJump() {
        return this.state !== "destroyed";
    }
}

