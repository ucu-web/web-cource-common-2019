const overlapOneDim = (x1, x2, y1, y2) => (y1 <= x1 && x1 <= y2) || (y1 <= x2 && x2 <= y2) || (x1 <= y1 && y1 <= x2);

class PhysicalObject {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        this.pos = {x, y};
        this.velocity = {x: 0, y: 0};
        this.acceleration = {x: 0, y: 0};

        this.width = width;
        this.height = height;
    }

    get x() { return this.pos.x; }
    get y() { return this.pos.y; }
    set x(v) { this.pos.x = v; }
    set y(v) { this.pos.y = v; }

    overlapBottom (other, prec) {
        return overlapOneDim(this.x, this.x + this.width, other.x, other.x + other.width) &&
            overlapOneDim(this.y - prec, this.y + prec, other.y + other.height, other.y + other.height);
    }

    overlap(other) {
        return overlapOneDim(this.x, this.x + this.width, other.x, other.x + other.width) &&
            overlapOneDim(this.y, this.y + this.height, other.y, other.y + other.height);
    }

    change(dur) {
        this.velocity.x += this.acceleration.x * dur;
        this.velocity.y += this.acceleration.y * dur;

        this.pos.x += this.velocity.x * dur;
        this.pos.y += this.velocity.y * dur;
    }
}
