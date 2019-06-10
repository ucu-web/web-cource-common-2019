import Platform from "./Platform";
import Enemy from "./Enemy";

export const createDefaultFieldPlatforms = (container, fieldWidth) => [
  new Platform(container, { x: 270, y: 100 }, "static"),
  new Platform(container, { x: 200, y: 300 }, "breaking"),
  new Platform(container, { x: 400, y: 300, minY: 200, maxY: 400 }, "vertical"),
  new Platform(container, { x: 300, y: 500 }, "disappearing"),
  new Platform(container, { x: 200, y: 600, minX: 0, maxX: fieldWidth }, "horizontal"),
  new Platform(container, { x: 30, y: 50 }, "destructing")
];

export const createDefaultFieldEnemies = (container) => [
  new Enemy(container, { x: 30, y: 80 }),
  new Enemy(container, { x: 30, y: 700 })
];
