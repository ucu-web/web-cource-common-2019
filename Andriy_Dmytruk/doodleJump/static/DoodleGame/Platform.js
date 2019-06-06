import PhysicalObject from "./PhysicalObject";
import Element from "../Element/Element";

import "./styles/Platform.scss";

export class Platform extends PhysicalObject {
    linkField(field) {
        return this.element =
            new Element("platform").dimensions(this.width, this.height).insertInto(field.element);
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

export class StaticPlatform extends Platform {
    linkField(field) {
        return super.linkField(field).addChild(new Element("platform__static"));
    }
}

export class BreakingPlatform extends Platform {
    linkField(field) {
        const platform = super.linkField(field);
        this.left = new Element("platform__breaking-left").insertInto(platform);
        this.right= new Element("platform__breaking-right").insertInto(platform);
    }

    doodleDoesJump() {
        this.acceleration.y = -600;
        this.left.addClass("platform__broken-left");
        this.right.addClass("platform__broken-right");
        return false;
    }
}

export class PlatformDisappearing extends Platform {
    linkField(field) {
        const platform = super.linkField(field);
        this.inner = new Element("platform__disappearing").insertInto(platform);
        this.visible = true;
    }

    doodleDoesJump() {
        if (this.visible) {
            this.visible = false;
            this.inner.addClass("platform__disappeared");
            return true;
        }
        return false;
    }
}

export class PlatformHorizontal extends Platform {
    linkField(field) {
        super.linkField(field).addChild(new Element("platform__horizontal"));
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

export class PlatformVertical extends Platform {
    linkField(field) {
        super.linkField(field).addChild(new Element("platform__vertical"));
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

export class PlatformDestructing extends Platform {
    linkField(field) {
        const platform = super.linkField(field);
        this.inner = new Element("platform__destructing").insertInto(platform);
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
            this.inner.addClass("platform__destructing-alert");
        }
        if (this.state === "alert" && this.time >= this.timeout) {
            this.state = "destroyed";
            this.inner.addClass("platform__destroyed");
        }
    }

    doodleDoesJump() {
        return this.state !== "destroyed";
    }
}

