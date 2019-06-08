import Platform from "./Platform";

export const getNewPositionBasedOnDuration = (object, duration) => ({
  x: (object.x || 0) + (object.velocityX || 0) * duration,
  y: (object.y || 0) + (object.velocityY || 0) * duration,
  velocityY: (object.velocityY || 0) + (object.accelerationY || 0) * duration,
  velocityX: (object.velocityX || 0) + (object.accelerationX || 0) * duration
});

export const doCollideOneDimension = (firstX1, firstX2, secondX1, secondX2) =>
  (secondX1 <= firstX1 && firstX1 <= secondX2) ||
  (secondX1 <= firstX2 && firstX2 <= secondX2) ||
  (firstX1 <= secondX1 && secondX1 <= firstX2);

export const doCollideBottom = (first, second, duration) => {
  if (first.velocityY >= 0) return false;

  const precision = Math.abs(first.velocityY - second.velocityY) * duration;

  return (
    doCollideOneDimension(
      first.x,
      first.x + first.width,
      second.x,
      second.x + second.width
    ) &&
    doCollideOneDimension(
      first.y - precision,
      first.y + precision,
      second.y + second.height,
      second.y + second.height
    )
  );
};

export const doCollide = (A, B) =>
  doCollideOneDimension(A.x, A.x + A.width, B.x, B.x + B.width) &&
  doCollideOneDimension(A.y, A.y + A.height, B.y, B.y + B.height);

export const createDefaultPlatforms = () => [
  new Platform(270, 100, "static"),
  new Platform(200, 300, "breaking"),
  new Platform(400, 300, "vertical"),
  new Platform(300, 500, "disappearing"),
  new Platform(200, 600, "horizontal"),
  new Platform(30, 50, "destructing")
];
