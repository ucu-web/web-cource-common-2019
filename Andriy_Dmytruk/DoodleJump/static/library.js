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
  const err = Math.abs((A.velocityY || 0) - (B.velocityY || 0)) * duration;

  return (
    A.velocityY < 0 &&
    doCollideOneDimension(A.x, A.x + A.width, B.x, B.x + B.width) &&
    doCollideOneDimension(A.y - err, A.y + err, B.y + B.height, B.y + B.height)
  );
};

export const doCollide = (A, B) =>
  doCollideOneDimension(A.x, A.x + A.width, B.x, B.x + B.width) &&
  doCollideOneDimension(A.y, A.y + A.height, B.y, B.y + B.height);

export const isInsideViewBox = (object, viewBox) =>
  object.y - object.height < viewBox.y + viewBox.height &&
  object.y + object.height > viewBox.y &&
  object.x - object.width < viewBox.x + viewBox.width &&
  object.x + object.width > viewBox.x;

export const getAngleBetweenPoints = (fromX, fromY, toX, toY) => {
  const xDifference = fromX - toX;
  const yDifference = fromY - toY;

  let angle = -Math.atan(xDifference / yDifference);
  if (yDifference < 0) angle = angle > 0 ? angle - Math.PI : angle + Math.PI;

  return angle;
};

export const sieveArray = (filterFn, array) => [
  array.filter(v => !filterFn(v)),
  array.filter(filterFn)
];

export const clamp = (min, max, value) => (value < min ? min : value > max ? max : value);

export const clampCircular = (min, max, value) => {
  const distance = max - min;
  return ((max + ((value - min) % distance)) % distance) + min;
};
