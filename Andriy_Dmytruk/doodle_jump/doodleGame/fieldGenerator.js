class FieldGenerator {
    constructor(field) {
        if (!field instanceof Field) throw new Error("field should be of class Field");

        this.field = field;
        this.blockSize = 1440;
        this.generateNext = this.blockSize * 2;
        this.lastBlockTop = 0;

        this.isValidPlatform = this.isValidPlatform.bind(this);
    }

    reset() {
        this.field.bottom = 0;
        this.field.doodle.alive = true;
        this.field.doodle.x = (this.field.width - this.field.doodle.width) / 2;
        this.field.doodle.y = (this.field.height - this.field.doodle.height) / 2;
        this.field.objects.forEach(o => o.destructor ? o.destructor() : null);
        this.field.objects = [new StaticPlatform(this.field,this.field.width / 2 - 30, 100)];
        this.field.enemies.forEach(e => e.destructor ? e.destructor() : null);
        this.field.enemies = [];
        this.lastBlockTop = 0;
    }

    filterObjects() {
        const valid = o => o.y + o.height >= this.field.bottom;
        this.field.objects.forEach(o => !valid(o) && (o.destructor ? o.destructor() : null));
        this.field.objects = this.field.objects.filter(valid);
        this.field.enemies.forEach(o => !valid(o) && (o.destructor ? o.destructor() : null));
        this.field.enemies = this.field.enemies.filter(valid);
    }

    // Should be able to jump through the block
    maxVerticalDistance = 180.5;
    minPlayableTimeout = 3.5;
    isValidPlatform (p) {
        return !(p instanceof BreakingPlatform || p instanceof PlatformDestructing) ||
        (p instanceof PlatformDestructing && p.timeout >= this.minPlayableTimeout);
    }

    calculateLastBlockTop() {
        this.lastBlockTop = this.field.objects.reduce(
            (prevY, o) => (
                o instanceof Platform &&
                this.isValidPlatform(o) &&
                o.y + o.height > prevY) ? o.y + o.height : prevY,
            this.lastBlockTop
        );
    }

    generateBlock() {
        const blockTypes = this.TYPES[Math.floor(Math.random() * this.TYPES.length)];
        let platforms = this.generateBlockOfType(blockTypes);
        platforms = platforms.concat(this.generateBreakablePlatforms());
        platforms = this.makeSolvable(platforms);
        platforms = this.normalizePlatforms(platforms);
        this.field.objects = [...this.field.objects, ...platforms];

        this.generateEnemies();
    }

    change(dur) {
        this.filterObjects();

        if (this.lastBlockTop < this.field.bottom + this.generateNext) {
            this.generateBlock();
            this.calculateLastBlockTop();
        }
    }

    getLevel() {
        let level = this.field.bottom >= 4000 ? 0.5 : 2000 / this.field.bottom;
        level = level > 1 ? 1 : level < 0 ? 0 : level;
        return level;
    }

    setRandomX(p) {
        p.x = Math.round(Math.random() * (this.field.width - p.width));
    }
    setRandomY(p, i, all) {
        if (i || i === 0) {
            p.y = Math.round((this.blockSize - p.height) * (i / all.length) + (Math.random() - 0.5) * 40 + this.lastBlockTop);
        } else {
            p.y = Math.round(Math.random() * (this.blockSize - p.height) + this.lastBlockTop)
        }
    }

    normalizePlatforms(platforms) {
        // They should not intersect

        platforms = platforms.sort((a, b) => a.y - b.y);

        platforms.forEach((p, i) => {
            const candidates = [];
            for (let j = i - 1; j >= 0; --j) {
                if (platforms[j].y <= p.y + p.height) candidates.push(platforms[j]);
                else break;
            }

            candidates.forEach(o => {
                if (p.overlap(o)) {
                    if (o.x < (this.field.width - o.width) / 2)
                        p.x = o.x + o.width + 10;
                    else if (o.x > (this.field.width - o.width) / 2)
                        p.x = o.x - p.width - 10;
                }
            });
        });

        return platforms;
    }

    makeSolvable(platforms) {
        platforms = platforms.sort((a, b) => a.y - b.y);

        let newPlatforms = [];

        const addPlatformAt = (y) => {
            const p = new StaticPlatform(this.field);
            this.setRandomX(p);
            p.y = y;
            newPlatforms.push(p);
        };
        const addPlatforms = (y1, y2) => {
            if (Math.abs(y2 - y1) < this.maxVerticalDistance) return;
            let number = Math.floor(Math.abs(y2 - y1) / this.maxVerticalDistance);
            for (let i = 1; i < number + 1; ++i) {
                addPlatformAt(Math.round(y1 + (y2 - y1) / (number + 1) * i));
            }
        };

        const validPlatforms = platforms.filter(this.isValidPlatform);
        for (let i = 0; i < validPlatforms.length - 1; ++i) {
            addPlatforms(validPlatforms[i].y, validPlatforms[i + 1].y);
        }

        if (validPlatforms.length < 1) {
            addPlatforms(this.lastBlockTop, this.lastBlockTop + this.blockSize);
        } else {
            addPlatforms(this.lastBlockTop, validPlatforms[0].y);
            addPlatforms(validPlatforms[validPlatforms.length - 1].y, this.lastBlockTop + this.blockSize);
        }

        return [...platforms, ...newPlatforms];
    }

    TYPES = [
        [[StaticPlatform, 1]],
        [[PlatformHorizontal, 1]],
        [[PlatformVertical, 1]],
        [[PlatformDisappearing, 1]],
        [[PlatformDestructing, 1]],
        [[PlatformDestructing, 2]],
        [[PlatformDisappearing, 0.5], [PlatformDestructing, 0.5]],
        [[StaticPlatform, 0.7], [PlatformHorizontal, 0.3]],
        [[PlatformDisappearing, 2], [BreakingPlatform, 3]],
        [[StaticPlatform, 2]],
        [[StaticPlatform, 0.5], [PlatformDestructing, 0.5]],
        [[StaticPlatform, 0.7], [PlatformVertical, 0.2]],
        [[PlatformHorizontal, 2]],
        [[PlatformHorizontal, 1], [PlatformVertical, 1]],
        [[PlatformHorizontal, 0.4], [PlatformVertical, 0.4], [PlatformDestructing, 0.2]],
        [[PlatformDisappearing, 4]]
    ];

    generateBlockOfType(types) {
        const level = this.getLevel();
        const number = Math.ceil((this.blockSize / 100) * level);

        let platforms = [];

        for (let [Type, percentage] of types) {
            let typeNumber = Math.ceil(number * percentage);

            for (let i = 0; i < typeNumber; ++i) {
                const platform = new Type(this.field);
                platforms.push(platform);
            }
        }

        platforms.forEach(this.setRandomX.bind(this));
        platforms.forEach(this.setRandomY.bind(this));

        return platforms;
    }

    generateBreakablePlatforms() {
        const level = this.getLevel();
        const number = Math.ceil((this.blockSize / 100) * (1.5 - level));

        let platforms = new Array(number).fill(0)
            .map((v, i) => new BreakingPlatform(this.field));
        platforms.forEach(this.setRandomX.bind(this));
        platforms.forEach(this.setRandomY.bind(this));

        return platforms;
    }

    ENEMY_TYPES = [
        [EnemyCircle, 1]
    ];

    generateEnemies() {
        const probability = 0.8;
        const createEnemy = (Type) => {
            const enemy = new Type(this.field);
            this.setRandomX(enemy);
            this.setRandomY(enemy);
            this.field.enemies.push(enemy);
        };

        let create = Math.random() < probability;
        if (create) {
            let type = Math.random() / this.ENEMY_TYPES.reduce((a, b) => a + b[1], 0);
            let Type = this.ENEMY_TYPES.reduce((a, b) => a instanceof Enemy ? a : a + b[1] >= type ? b[0] : a + b[0], 0);

            if (Type) {
                createEnemy(Type);
            }
        }

    }
}


