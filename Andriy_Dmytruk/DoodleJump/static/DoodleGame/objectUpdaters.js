import {getNewPositionBasedOnDuration} from './helpers';
import {updateDoodleElement} from './Doodle';

export const getNewDoodleBasedOnDuration = (doodle, duration, fieldWidth) => {
    const position = getNewPositionBasedOnDuration(doodle, duration);

    const newDoodle = {
        ...doodle,
        ...position,
        x:
            position.x - doodle.width / 2 < 0
                ? fieldWidth - doodle.width / 2
                : position.x + doodle.width / 2 > fieldWidth
                ? doodle.width / 2
                : position.x,
        velocityY: position.velocityY < -700 ? -700 : position.velocityY,
        lastNoseRotate: doodle.lastNoseRotate + duration,
    };

    updateDoodleElement(newDoodle);

    return newDoodle;
};

export const getNewBulletBasedOnDuration = (bullet, duration) => {
    const position = getNewPositionBasedOnDuration(bullet, duration);
    return {...bullet, ...position};
};

export const getNewPlatformBasedOnDuration = (
    platform,
    duration,
    fieldWidth,
) => {
    let position = getNewPositionBasedOnDuration(platform, duration);

    let newPlatform = {
        ...platform,
        ...position,
        velocityX:
            position.x < 0
                ? Math.abs(position.velocityX)
                : position.x > fieldWidth - platform.width
                ? -Math.abs(position.velocityX)
                : position.velocityX,
        velocityY:
            platform.range &&
            position.y > platform.initialY + platform.range / 2
                ? -Math.abs(position.velocityY)
                : platform.range &&
                  position.y < platform.initialY - platform.range / 2
                ? Math.abs(position.velocityY)
                : position.velocityY,
        timeBeforeDestroyed:
            platform.timeBeforeDestroyed !== undefined
                ? platform.timeBeforeDestroyed - duration
                : undefined,
        canBeJumpedOntoTimes:
            platform.timeBeforeDestroyed < 0
                ? 0
                : platform.canBeJumpedOntoTimes,
    };

    if (newPlatform.updateElement) newPlatform.updateElement(newPlatform);

    return newPlatform;
};
