class MovementVector {
    constructor(direction, speed) {
        this.setDirection(direction, speed);
    }

    setDirection(direction, speed) {
        this.direction = direction;
        this.speed = speed;
        this.x = 0;
        this.y = 0;
        switch (direction) {
            case 'up':
                this.y = -speed;
                break;
            case 'down':
                this.y = speed;
                break;
            case 'right':
                this.x = speed;
                break;
            case 'left':
                this.x = -speed;
                break;
            default:
                break;
        }
    }
}

export default MovementVector;