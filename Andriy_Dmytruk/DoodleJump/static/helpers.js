import Platform from "./Platform";

export const getNewPositionBasedOnDuration = (object, duration) => ({
  x: (object.x || 0) + (object.velocityX || 0) * duration,
  y: (object.y || 0) + (object.velocityY || 0) * duration,
  velocityX: (object.velocityX || 0) + (object.accelerationX || 0) * duration,
  velocityY: (object.velocityY || 0) + (object.accelerationY || 0) * duration
});

export const doCollideOneDimension = (firstX1, firstX2, secondX1, secondX2) =>
  (secondX1 <= firstX1 && firstX1 <= secondX2) ||
  (secondX1 <= firstX2 && firstX2 <= secondX2) ||
  (firstX1 <= secondX1 && secondX1 <= firstX2);

export const doCollideBottom = (A, B, duration) => {
  const err = Math.abs(A.velocityY - B.velocityY) * duration;

  return (
    A.velocityY < 0 &&
    doCollideOneDimension(A.x, A.x + A.width, B.x, B.x + B.width) &&
    doCollideOneDimension(A.y - err, A.y + err, B.y + B.height, B.y + B.height)
  );
};

export const doCollide = (A, B) =>
  doCollideOneDimension(A.x, A.x + A.width, B.x, B.x + B.width) &&
  doCollideOneDimension(A.y, A.y + A.height, B.y, B.y + B.height);

export const createDefaultPlatforms = (container, fieldWidth) => [
  new Platform(container, { x: 270, y: 100 }, "static"),
  new Platform(container, { x: 200, y: 300 }, "breaking"),
  new Platform(container, { x: 400, y: 300, minY: 200, maxY: 400 }, "vertical"),
  new Platform(container, { x: 300, y: 500 }, "disappearing"),
  new Platform(
    container,
    { x: 200, y: 600, minX: 0, maxX: fieldWidth },
    "horizontal"
  ),
  new Platform(container, { x: 30, y: 50 }, "destructing")
];

export const isInsideViewBox = (object, viewBox, error=10) =>
  object.y < viewBox.y + viewBox.height + error &&
  object.y > viewBox.y - error &&
  object.x < viewBox.x + viewBox.width + error &&
  object.x > viewBox.x - error;

export const getAngleBetweenPoints = (fromX, fromY, toX, toY) => {
  const xDifference = fromX - toX;
  const yDifference = fromY - toY;

  let angle = -Math.atan(xDifference / yDifference);
  if (yDifference < 0) angle = angle > 0 ? angle - Math.PI : angle + Math.PI;

  return angle;
};

export const sieveArray = (filterFn, array) => {
  return {
    left: array.filter(filterFn),
    removed: array.filter(v => !filterFn(v))
  };
};
