import {
    createPlatformStatic,
    createPlatformBreaking,
    createPlatformVertical,
    createPlatformDisappearing,
    createPlatformHorizontal,
    createPlatformDestructing
} from "./Platform";


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
        doCollideOneDimension(first.x, first.x + first.width,
            second.x, second.x + second.width) &&
        doCollideOneDimension(first.y - precision, first.y + precision,
            second.y + second.height, second.y + second.height)
    );
};

export const doCollide = (first, second) => {
    return (
        doCollideOneDimension(first.x, first.x + first.width,
            second.x, second.x + second.width) &&
        doCollideOneDimension(first.y, first.y + first.height,
            second.y, second.y + second.height)
    );
};


export const createDefaultPlatforms = () => {
    return [
        createPlatformStatic(270, 100),
        createPlatformBreaking(200, 300),
        createPlatformVertical(400, 300),
        createPlatformDisappearing(300, 500),
        createPlatformHorizontal(200, 600),
        createPlatformDestructing(30, 50)
    ];
};