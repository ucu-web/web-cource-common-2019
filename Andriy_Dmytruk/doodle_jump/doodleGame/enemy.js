class Enemy extends HitMap {
    linkField(field, component) {
        this.element = new El("enemy")
            .dimensions(this.width, this.height)
            .addChild(component)
            .parent(field.element);
    }

    constructor(field, component, x, y, width, height) {
        super(x, y, width, height);

        this.linkField(field, component);
        this.field = field;

        this.health = 1;
        this.lastHit = NaN;
    }

    destructor() {
        this.element.rmParent();
    }

    hit() {
        this.lastHit = 0;
        return this.health-- > 0;
    }

    doesKill() {
        return this.health > 0;
    }

    doodleDoesJump() {
        const alive = this.health > 0;
        this.health = 0;
        return alive;
    }

    change(dur) {
        this.lastHit += dur;
    }

    draw() {
        this.element.absolutePosition(...this.field.translatePosition(this));

        if (this.health <= 0) {
            this.element.addClass("enemy_dead");
        } else if (this.lastHit < 200) {
            this.element.addClass("enemy_hit");
        } else {
            this.element.removeClass("enemy_hit");
        }
    }
}

class EnemyCircle extends Enemy {
    constructor(field, x=0, y=0) {
        const element = new El("enemy-circle").addChild(
            new El("enemy-circle__face").addChild(
                new El("enemy__eye-left"),
                new El("enemy__eye-right"),
                new El("enemy__mouth")
            )
        );

        super(field, element, x, y, 60, 60);
    }
}

