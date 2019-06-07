import {getNewPositionBasedOnDuration} from "./helperFunctions";
import {updateDoodleElement} from "./Doodle";

export const slowDownVelocityX = (position, duration) => {
    return position;

    // if (position.accelerationX || Math.abs(position.velocityX) >= 0) return position;
    //
    // let velocityChange = 100 * duration;
    // const velocityX = Math.abs(velocityX) > velocityChange
    // const velocityX  = Math.sign(this.velocityX) * Math.floor(Math.abs(this.velocityX) / 6 - 1) * 6;
    // return {
    //     ...position,
    //     velocityX
};

export const getNewDoodleBasedOnDuration = (doodle, duration, fieldWidth) => {
    const position = slowDownVelocityX(getNewPositionBasedOnDuration(doodle, duration), duration);

    const newDoodle = {
        ...doodle,
        ...position,
        x: (position.x - doodle.width / 2) < 0 ? fieldWidth - doodle.width / 2 :
            (position.x + doodle.width / 2) > fieldWidth ? doodle.width / 2 : position.x,
        velocityY: position.velocityY < -700 ? -700: position.velocityY,
        lastNoseRotate: doodle.lastNoseRotate + duration
    };

    updateDoodleElement(newDoodle);

    return newDoodle;
};

export const getNewBulletBasedOnDuration = (bullet, duration) => {
    const position = getNewPositionBasedOnDuration(bullet, duration);
    return {...bullet, ...position};
};

export const getNewPlatformBasedOnDuration = (platform, duration, fieldWidth) => {
    let position = getNewPositionBasedOnDuration(platform, duration);

    let newPlatform = {
        ...platform,
        ...position,
        velocityX: position.x < 0 ? Math.abs(position.velocityX) :
            position.x > fieldWidth - platform.width ? -Math.abs(position.velocityX) : position.velocityX,
        velocityY: (platform.range && position.y > platform.initialY + platform.range / 2) ? -Math.abs(position.velocityY) :
            (platform.range && position.y < platform.initialY - platform.range / 2) ? Math.abs(position.velocityY) :
                position.velocityY,
        timeBeforeDestroyed: platform.timeBeforeDestroyed !== undefined ? platform.timeBeforeDestroyed - duration :
            undefined,
        canBeJumpedOntoTimes: (platform.timeBeforeDestroyed < 0) ? 0 : platform.canBeJumpedOntoTimes
    };


    if (newPlatform.updateElement)
        newPlatform.updateElement(newPlatform);

    return newPlatform;
};

